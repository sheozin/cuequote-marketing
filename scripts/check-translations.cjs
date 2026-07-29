#!/usr/bin/env node
/**
 * Translation Audit Script
 * Checks all 5 language files for missing keys, mismatched structure, and stale translations.
 * Run before every push: node scripts/check-translations.cjs
 */

'use strict';

const fs = require('fs');
const path = require('path');

const MESSAGES_DIR = path.join(__dirname, '..', 'src', 'messages');
const LANGUAGES = ['en', 'pl', 'ar', 'de', 'fr'];
const REF_LANG = 'en';

function loadJson(lang) {
  const file = path.join(MESSAGES_DIR, `${lang}.json`);
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function getKeys(obj, prefix = '') {
  const keys = [];
  for (const [k, v] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
      keys.push(...getKeys(v, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

function getNestedValue(obj, keyPath) {
  return keyPath.split('.').reduce((o, k) => o?.[k], obj);
}

// Load all languages
const data = {};
for (const lang of LANGUAGES) {
  try {
    data[lang] = loadJson(lang);
  } catch (err) {
    console.error(`\x1b[31mERROR: Cannot load ${lang}.json: ${err.message}\x1b[0m`);
    process.exit(1);
  }
}

const refKeys = getKeys(data[REF_LANG]);
const errors = [];
const warnings = [];

// Check each non-English language
for (const lang of LANGUAGES.filter(l => l !== REF_LANG)) {
  const langKeys = getKeys(data[lang]);
  const langKeySet = new Set(langKeys);
  const refKeySet = new Set(refKeys);

  // Missing keys (in EN but not in this language)
  for (const key of refKeys) {
    if (!langKeySet.has(key)) {
      // Skip blog post content keys (posts.*) — these are language-specific
      if (key.startsWith('posts.')) continue;
      errors.push(`${lang}: MISSING key "${key}"`);
    }
  }

  // Extra keys (in this language but not in EN)
  for (const key of langKeys) {
    if (!refKeySet.has(key)) {
      if (key.startsWith('posts.')) continue;
      warnings.push(`${lang}: EXTRA key "${key}" (not in en.json)`);
    }
  }

  // Check for untranslated values (same as English — likely copy-paste without translation)
  for (const key of refKeys) {
    if (key.startsWith('posts.')) continue;
    const enVal = getNestedValue(data[REF_LANG], key);
    const langVal = getNestedValue(data[lang], key);
    if (typeof enVal === 'string' && typeof langVal === 'string') {
      // Skip short values (numbers, codes, URLs, brand names)
      if (enVal.length < 5) continue;
      if (enVal === langVal && !enVal.includes('CueQuote') && !enVal.includes('http') && !enVal.includes('@')) {
        warnings.push(`${lang}: UNTRANSLATED "${key}" — still English: "${enVal.slice(0, 60)}..."`);
      }
    }
  }
}

// Report
console.log('\n─────────────────────────────────────');
console.log('  Translation Audit Report');
console.log('─────────────────────────────────────');
console.log(`  Reference: en.json (${refKeys.length} keys)`);
for (const lang of LANGUAGES.filter(l => l !== REF_LANG)) {
  const count = getKeys(data[lang]).length;
  const missing = errors.filter(e => e.startsWith(lang)).length;
  const icon = missing === 0 ? '✅' : '❌';
  console.log(`  ${icon} ${lang}.json: ${count} keys (${missing} missing)`);
}
console.log('─────────────────────────────────────\n');

if (errors.length > 0) {
  console.log(`\x1b[31m${errors.length} ERROR(S):\x1b[0m`);
  errors.forEach(e => console.log(`  ❌ ${e}`));
  console.log('');
}

if (warnings.length > 0) {
  console.log(`\x1b[33m${warnings.length} WARNING(S):\x1b[0m`);
  // Only show first 20 warnings to avoid flooding
  warnings.slice(0, 20).forEach(w => console.log(`  ⚠️  ${w}`));
  if (warnings.length > 20) console.log(`  ... and ${warnings.length - 20} more`);
  console.log('');
}

if (errors.length === 0) {
  console.log('\x1b[32m✅ All translations are in sync!\x1b[0m\n');
  process.exit(0);
} else {
  console.log(`\x1b[31m❌ ${errors.length} missing translations found. Fix before pushing.\x1b[0m\n`);
  process.exit(1);
}
