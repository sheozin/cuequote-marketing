#!/usr/bin/env node
/**
 * Converts .audit/results.json → .audit/report.md (GitHub Issue body)
 *                              → .audit/pr-body.md  (PR description)
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT     = path.resolve(__dirname, '../..');
const OUT_DIR  = path.join(ROOT, '.audit');
const SRC      = path.join(OUT_DIR, 'results.json');

if (!fs.existsSync(SRC)) {
  console.error('No results.json found — run audit.js first');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(SRC, 'utf8'));
const { meta, summary, npmAudit, secrets, sast, headers } = data;

const FIX_APPLIED = process.env.FIX_APPLIED === 'true';
const FIX_BRANCH  = process.env.FIX_BRANCH  || '';

const date = new Date(meta.timestamp).toISOString().slice(0, 10);

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

const SEVERITY_EMOJI = { CRITICAL: '🔴', HIGH: '🟠', MEDIUM: '🟡', MODERATE: '🟡', LOW: '🔵' };

function badge(s) { return SEVERITY_EMOJI[s.toUpperCase()] || '⚪'; }

function statusBadge(count, label) {
  return count === 0 ? `✅ ${label}` : `⚠️ ${label} (${count})`;
}

function section(title, content) {
  return content.trim() ? `\n---\n\n## ${title}\n\n${content.trim()}\n` : '';
}

function findingBlock({ severity, title, pkg, file, line, description, recommendation, snippet, fixAvailable, advisory }) {
  const lines = [];
  lines.push(`### ${badge(severity)} ${severity} — ${title}`);
  lines.push('');
  if (pkg)             lines.push(`- **Package:** \`${pkg}\``);
  if (file)            lines.push(`- **File:** \`${file}${line ? `:${line}` : ''}\``);
  if (description)     lines.push(`- **Issue:** ${description}`);
  if (snippet)         lines.push(`- **Code:** \`${snippet}\``);
  if (recommendation)  lines.push(`- **Fix:** ${recommendation}`);
  if (fixAvailable !== undefined) lines.push(`- **Auto-fix available:** ${fixAvailable ? 'Yes' : 'No — manual update required'}`);
  if (advisory)        lines.push(`- **Advisory:** ${advisory}`);
  lines.push('');
  return lines.join('\n');
}

// ─────────────────────────────────────────────
// REPORT.MD
// ─────────────────────────────────────────────

const overallStatus = summary.hasIssues ? '⚠️ **Action required**' : '✅ **All clear**';

let report = `# Security Audit Report — ${date}

**Repo:** ${meta.repo}
**Commit:** \`${meta.sha.slice(0, 7)}\`
**Branch:** \`${meta.ref}\`
**Run:** ${meta.timestamp}

---

## Summary

| Check | Status |
|-------|--------|
| npm dependencies | ${statusBadge(summary.criticalCount + summary.highCount + summary.moderateCount, 'Dependencies')} |
| Hardcoded secrets | ${summary.secretsFound === 0 ? '✅ None found' : `🔴 **${summary.secretsFound} secrets detected**`} |
| SAST patterns | ${statusBadge(summary.sastFindings, 'SAST')} |
| Security headers | ${statusBadge(summary.headerIssues, 'Headers')} |

| Severity | Count |
|----------|-------|
| 🔴 Critical | ${summary.criticalCount} |
| 🟠 High | ${summary.highCount} |
| 🟡 Moderate | ${summary.moderateCount} |
| 🔵 Low | ${summary.lowCount} |

**Overall:** ${overallStatus}
`;

// npm audit
if (npmAudit.findings.length > 0) {
  const blocks = npmAudit.findings
    .sort((a, b) => {
      const order = { CRITICAL: 0, HIGH: 1, MODERATE: 2, LOW: 3 };
      return (order[a.severity] ?? 4) - (order[b.severity] ?? 4);
    })
    .map(f => findingBlock({
      severity:     f.severity,
      title:        f.title,
      pkg:          `${f.package} (${f.range || 'affected range'})`,
      fixAvailable: f.fixAvailable,
    }))
    .join('\n');

  report += section('Dependency Vulnerabilities (npm audit)', blocks);
} else {
  report += section('Dependency Vulnerabilities', '✅ No vulnerable packages found.');
}

// Secrets
if (secrets.findings.length > 0) {
  const blocks = secrets.findings.map(f => findingBlock({
    severity:       f.severity,
    title:          f.pattern,
    file:           f.file,
    line:           f.line,
    snippet:        f.snippet,
    recommendation: 'Remove the secret immediately, rotate credentials, and use environment variables.',
  })).join('\n');

  report += section('🚨 Hardcoded Secrets', blocks);
} else {
  report += section('Hardcoded Secrets', '✅ No hardcoded secrets detected.');
}

// SAST
if (sast.findings.length > 0) {
  const blocks = sast.findings
    .sort((a, b) => {
      const order = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, MODERATE: 2, LOW: 3 };
      return (order[a.severity] ?? 4) - (order[b.severity] ?? 4);
    })
    .map(f => findingBlock({
      severity:       f.severity,
      title:          f.check,
      file:           f.file,
      line:           f.line,
      description:    f.description,
      snippet:        f.snippet,
      recommendation: f.recommendation,
    }))
    .join('\n');

  report += section('SAST Findings', blocks);
} else {
  report += section('SAST Findings', '✅ No SAST issues found.');
}

// Headers
if (headers.findings.length > 0) {
  const blocks = headers.findings.map(f => findingBlock({
    severity:       f.severity,
    title:          f.header,
    description:    f.issue,
    recommendation: f.recommendation,
  })).join('\n');

  report += section('Security Headers', blocks);
} else {
  report += section('Security Headers', '✅ All required headers are configured.');
}

// Auto-fix section
if (FIX_APPLIED) {
  report += section('Auto-Fix Applied', `A dependency fix PR has been opened from branch \`${FIX_BRANCH}\`.\n\nReview and merge it to resolve the auto-fixable vulnerabilities above.`);
} else {
  report += section('Auto-Fix', 'No automatic fixes were applied (all remaining fixes require manual review or major version bumps).');
}

report += `\n---\n\n*Generated by [security-audit.yml](/.github/workflows/security-audit.yml) · Node ${meta.nodeVersion}*\n`;

fs.writeFileSync(path.join(OUT_DIR, 'report.md'), report);
console.log('Wrote .audit/report.md');

// ─────────────────────────────────────────────
// PR-BODY.MD
// ─────────────────────────────────────────────

const fixableFindings = npmAudit.findings.filter(f => f.fixAvailable);

const prBody = `## Automated Dependency Security Fix

This PR was opened automatically by the weekly security audit workflow.

### Vulnerable packages resolved

${fixableFindings.length > 0
  ? fixableFindings.map(f => `- \`${f.package}\` — ${f.severity}: ${f.title}`).join('\n')
  : '_All fixes required manual intervention (see linked Issue)._'}

### What changed

Only \`package-lock.json\` (and \`package.json\` if a semver range updated) were modified. No application source code was changed.

### Review checklist

- [ ] CI passes on this branch
- [ ] Updated packages have no breaking API changes
- [ ] Full audit report linked in the GitHub Issue

---
*Auto-generated by [security-audit.yml](/.github/workflows/security-audit.yml)*
`;

fs.writeFileSync(path.join(OUT_DIR, 'pr-body.md'), prBody);
console.log('Wrote .audit/pr-body.md');
