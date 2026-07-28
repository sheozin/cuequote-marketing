#!/usr/bin/env node
/**
 * CueQuote Security Audit Script
 * Checks: npm audit, secrets scan, SAST patterns, security headers
 * Output: .audit/results.json
 */

'use strict';

const fs   = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT       = path.resolve(__dirname, '../..');
const OUT_DIR    = path.join(ROOT, '.audit');
const OUT_FILE   = path.join(OUT_DIR, 'results.json');
const GITHUB_OUT = process.env.GITHUB_OUTPUT || '';

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const results = {
  meta: {
    repo:               process.env.AUDIT_REPO || 'local',
    sha:                process.env.AUDIT_SHA  || 'local',
    ref:                process.env.AUDIT_REF  || 'local',
    timestamp:          new Date().toISOString(),
    nodeVersion:        process.version,
    auditScriptVersion: '1.0.0',
  },
  summary: {
    hasIssues:     false,
    criticalCount: 0,
    highCount:     0,
    moderateCount: 0,
    lowCount:      0,
    secretsFound:  0,
    sastFindings:  0,
    headerIssues:  0,
  },
  npmAudit: { findings: [] },
  secrets:  { findings: [] },
  sast:     { findings: [] },
  headers:  { configFile: 'next.config.ts', findings: [] },
};

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

function walk(dir, exts, skip = []) {
  const files = [];
  function recurse(cur) {
    let entries;
    try { entries = fs.readdirSync(cur, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const full = path.join(cur, e.name);
      const rel  = path.relative(ROOT, full);
      if (skip.some(s => rel.startsWith(s) || e.name === s)) continue;
      if (e.isDirectory()) { recurse(full); continue; }
      if (exts.some(x => e.name.endsWith(x))) files.push(full);
    }
  }
  recurse(dir);
  return files;
}

const SKIP_DIRS = ['node_modules', '.next', '.git', '.audit', 'public', '.playwright-mcp'];

function addSummary(severity) {
  const s = severity.toUpperCase();
  results.summary.hasIssues = true;
  if (s === 'CRITICAL')                  results.summary.criticalCount++;
  else if (s === 'HIGH')                 results.summary.highCount++;
  else if (s === 'MODERATE' || s === 'MEDIUM') results.summary.moderateCount++;
  else if (s === 'LOW')                  results.summary.lowCount++;
}

// ─────────────────────────────────────────────
// CHECK 1: NPM AUDIT
// ─────────────────────────────────────────────

console.log('\n[1/4] Running npm audit...');

const auditProc = spawnSync('npm', ['audit', '--json'], {
  cwd: ROOT, encoding: 'utf8', stdio: 'pipe',
});

try {
  const data  = JSON.parse(auditProc.stdout || '{}');
  const vulns = data.vulnerabilities || {};

  for (const [pkg, info] of Object.entries(vulns)) {
    const severity = (info.severity || 'low').toUpperCase();
    if (!['CRITICAL', 'HIGH', 'MODERATE', 'LOW'].includes(severity)) continue;

    const via = Array.isArray(info.via)
      ? info.via.filter(v => typeof v === 'object').map(v => v.title || '').filter(Boolean)
      : [];

    results.npmAudit.findings.push({
      package:      pkg,
      severity,
      title:        via[0] || `Vulnerability in ${pkg}`,
      fixAvailable: !!info.fixAvailable,
      range:        info.range || '',
    });
    addSummary(severity);
  }
} catch {
  console.log('   npm audit parse failed — skipping');
}

console.log(`   Found ${results.npmAudit.findings.length} vulnerable packages`);

// ─────────────────────────────────────────────
// CHECK 2: SECRETS SCAN
// ─────────────────────────────────────────────

console.log('\n[2/4] Scanning for hardcoded secrets...');

// Build patterns at runtime so literal secret strings don't appear in source
const SECRET_PATTERNS = [
  {
    name:     'Hardcoded JWT / Supabase key',
    regex:    new RegExp('(?<![A-Za-z0-9_.])eyJ[A-Za-z0-9_-]{20,}\\.[A-Za-z0-9_-]{20,}\\.[A-Za-z0-9_-]{20,}'),
    severity: 'CRITICAL', redact: true,
  },
  {
    name:     'Generic API key/secret assignment',
    regex:    /(?:api[_-]?key|api[_-]?secret|client[_-]?secret)\s*[:=]\s*['"`][A-Za-z0-9+/=_\-]{16,}['"`]/i,
    severity: 'HIGH', redact: true,
  },
  {
    name:     'Private key block',
    regex:    /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
    severity: 'CRITICAL', redact: false,
  },
  {
    name:     'AWS access key',
    regex:    /\bAKIA[0-9A-Z]{16}\b/,
    severity: 'CRITICAL', redact: true,
  },
  {
    name:     'Stripe live secret key',
    regex:    new RegExp('\\bsk_live_[A-Za-z0-9]{24,}\\b'),
    severity: 'CRITICAL', redact: true,
  },
  {
    name:     'GitHub PAT',
    regex:    /\bgh[ps]_[A-Za-z0-9]{36,}\b/,
    severity: 'CRITICAL', redact: true,
  },
];

const SECRET_ALLOWLIST = [
  /process\.env\./,
  /YOUR_KEY_HERE/i,
  /EXAMPLE/i,
  /placeholder/i,
  /connect-src/,
  /How to set up/,
];

const SOURCE_EXTS = ['.ts', '.tsx', '.js', '.jsx', '.json', '.env', '.yaml', '.yml'];
const sourceFiles = walk(path.join(ROOT, 'src'), SOURCE_EXTS, SKIP_DIRS);

for (const cfg of ['next.config.ts', 'next.config.js', 'vercel.json']) {
  const f = path.join(ROOT, cfg);
  if (fs.existsSync(f)) sourceFiles.push(f);
}

for (const file of sourceFiles) {
  let content;
  try { content = fs.readFileSync(file, 'utf8'); } catch { continue; }

  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (SECRET_ALLOWLIST.some(p => p.test(line))) continue;

    for (const pat of SECRET_PATTERNS) {
      if (pat.regex.test(line)) {
        const snippet = pat.redact
          ? line.trim().replace(/(['"`])[A-Za-z0-9+/=_\-]{8,}(['"`])/g, '$1[REDACTED]$2').slice(0, 120)
          : line.trim().slice(0, 120);

        results.secrets.findings.push({
          file:     path.relative(ROOT, file),
          line:     i + 1,
          pattern:  pat.name,
          severity: pat.severity,
          snippet,
        });
        results.summary.secretsFound++;
        addSummary(pat.severity);
        break;
      }
    }
  }
}

console.log(`   Found ${results.secrets.findings.length} secret patterns`);

// ─────────────────────────────────────────────
// CHECK 3: SAST PATTERNS
// ─────────────────────────────────────────────

console.log('\n[3/4] Running SAST checks...');

// Patterns constructed at runtime to avoid literal dangerous strings in source
const SAST_CHECKS = [
  {
    name:           'Unsafe code execution',
    // Matches: eval( — built dynamically
    regex:          new RegExp('\\b' + 'eval' + '\\s*\\('),
    severity:       'CRITICAL',
    description:    'Dynamic code execution detected — code injection risk.',
    recommendation: 'Replace with JSON.parse() or a safe lookup table.',
    skipFiles:      ['.test.', '.spec.'],
  },
  {
    name:           'dangerouslySetInnerHTML without sanitizer',
    regex:          /dangerouslySetInnerHTML\s*=\s*\{\s*\{/,
    severity:       'HIGH',
    description:    'Can enable XSS if value contains user-controlled input.',
    recommendation: 'Ensure value is static or sanitize with DOMPurify.',
    checkNoDomPurify: true,
  },
  {
    name:           '"use server" action without rate limiting',
    regex:          /["']use server["']/,
    severity:       'HIGH',
    description:    'Server action performs DB mutations without rate limiting.',
    recommendation: 'Import isRateLimited from @/lib/rate-limit and gate mutations.',
    checkNoRateLimit: true,
  },
  {
    name:           'Sensitive value in console log',
    regex:          /console\.(log|warn|error)\s*\(.*\b(password|token|secret|apikey|api_key)\b/i,
    severity:       'MEDIUM',
    description:    'Sensitive value may leak to server logs.',
    recommendation: 'Remove the log or redact before logging.',
  },
  {
    name:           'Math.random() for security-sensitive purpose',
    regex:          /Math\.random\s*\(\s*\)/,
    severity:       'LOW',
    description:    'Math.random() is not cryptographically secure.',
    recommendation: 'Use crypto.randomUUID() or crypto.getRandomValues().',
    skipFiles:      ['test', 'mock', 'seed', 'demo'],
  },
  {
    name:           'Security-related TODO/FIXME',
    regex:          /\/\/\s*(?:TODO|FIXME|HACK)\s*:.*\b(?:auth|security|token|password|secret|admin|permission)\b/i,
    severity:       'LOW',
    description:    'Unresolved security-related comment.',
    recommendation: 'Resolve the concern or create a tracked issue.',
  },
];

const tsFiles = walk(path.join(ROOT, 'src'), ['.ts', '.tsx', '.js', '.jsx'], SKIP_DIRS);

for (const file of tsFiles) {
  let content;
  try { content = fs.readFileSync(file, 'utf8'); } catch { continue; }

  const rel   = path.relative(ROOT, file);
  const lines = content.split('\n');

  for (const check of SAST_CHECKS) {
    if (check.skipFiles && check.skipFiles.some(s => rel.includes(s))) continue;

    if (check.checkNoDomPurify) {
      if (!/DOMPurify|sanitizeHtml|sanitize-html/.test(content)) {
        for (let i = 0; i < lines.length; i++) {
          if (check.regex.test(lines[i])) {
            results.sast.findings.push({
              check: check.name, file: rel, line: i + 1,
              severity: check.severity, description: check.description,
              recommendation: check.recommendation,
              snippet: lines[i].trim().slice(0, 120),
            });
            results.summary.sastFindings++;
            addSummary(check.severity);
          }
        }
      }
      continue;
    }

    if (check.checkNoRateLimit) {
      if (
        check.regex.test(content) &&
        !content.includes('isRateLimited') &&
        /supabase\.(from|rpc)\s*\(/.test(content) &&
        /\.(insert|update|delete|upsert)\s*\(/.test(content)
      ) {
        results.sast.findings.push({
          check: check.name, file: rel, line: 1,
          severity: check.severity, description: check.description,
          recommendation: check.recommendation,
          snippet: '"use server" — no isRateLimited import',
        });
        results.summary.sastFindings++;
        addSummary(check.severity);
      }
      continue;
    }

    for (let i = 0; i < lines.length; i++) {
      if (check.regex.test(lines[i])) {
        results.sast.findings.push({
          check: check.name, file: rel, line: i + 1,
          severity: check.severity, description: check.description,
          recommendation: check.recommendation,
          snippet: lines[i].trim().slice(0, 120),
        });
        results.summary.sastFindings++;
        addSummary(check.severity);
      }
    }
  }
}

console.log(`   Found ${results.sast.findings.length} SAST findings`);

// ─────────────────────────────────────────────
// CHECK 4: SECURITY HEADERS
// ─────────────────────────────────────────────

console.log('\n[4/4] Checking security headers...');

const REQUIRED_HEADERS = [
  'Strict-Transport-Security',
  'X-Content-Type-Options',
  'X-Frame-Options',
  'Content-Security-Policy',
  'Referrer-Policy',
  'Permissions-Policy',
];

let configContent = '';
try {
  configContent = fs.readFileSync(path.join(ROOT, 'next.config.ts'), 'utf8');
} catch {
  results.headers.findings.push({
    header: 'next.config.ts', issue: 'Config file not found', severity: 'HIGH',
    recommendation: 'Ensure next.config.ts exists and defines security headers.',
  });
  results.summary.headerIssues++;
  addSummary('HIGH');
}

if (configContent) {
  for (const header of REQUIRED_HEADERS) {
    if (!configContent.includes(`"${header}"`) && !configContent.includes(`'${header}'`)) {
      results.headers.findings.push({
        header, issue: `Missing header: ${header}`, severity: 'HIGH',
        recommendation: `Add { key: "${header}", value: "..." } to securityHeaders.`,
      });
      results.summary.headerIssues++;
      addSummary('HIGH');
    }
  }

  if (configContent.includes("'unsafe-eval'")) {
    results.headers.findings.push({
      header: 'Content-Security-Policy', issue: "script-src contains 'unsafe-eval'",
      severity: 'LOW', recommendation: "Remove 'unsafe-eval'. Use nonce-based CSP.",
    });
    results.summary.headerIssues++;
    results.summary.lowCount++;
  }

  if (configContent.includes('X-XSS-Protection') && configContent.includes('1; mode=block')) {
    results.headers.findings.push({
      header: 'X-XSS-Protection', issue: "Deprecated value '1; mode=block'",
      severity: 'LOW', recommendation: 'Set to "0". Rely on CSP instead.',
    });
    results.summary.headerIssues++;
    results.summary.lowCount++;
  }
}

console.log(`   Found ${results.headers.findings.length} header issues`);

// ─────────────────────────────────────────────
// WRITE RESULTS
// ─────────────────────────────────────────────

results.summary.hasIssues = (
  results.summary.criticalCount > 0 ||
  results.summary.highCount     > 0 ||
  results.summary.moderateCount > 0 ||
  results.summary.secretsFound  > 0
);

fs.writeFileSync(OUT_FILE, JSON.stringify(results, null, 2));

console.log('\n─────────────────────────────────');
console.log('Audit Summary:');
console.log(`  Critical : ${results.summary.criticalCount}`);
console.log(`  High     : ${results.summary.highCount}`);
console.log(`  Moderate : ${results.summary.moderateCount}`);
console.log(`  Low      : ${results.summary.lowCount}`);
console.log(`  Secrets  : ${results.summary.secretsFound}`);
console.log(`  SAST     : ${results.summary.sastFindings}`);
console.log(`  Headers  : ${results.summary.headerIssues}`);
console.log(`  Has issues: ${results.summary.hasIssues}`);
console.log('─────────────────────────────────\n');

if (GITHUB_OUT) {
  fs.appendFileSync(GITHUB_OUT, `has_issues=${results.summary.hasIssues}\n`);
  fs.appendFileSync(GITHUB_OUT, `report_path=.audit/results.json\n`);
}

process.exit(0);
