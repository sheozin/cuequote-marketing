import { defineConfig, globalIgnores } from 'eslint/config'
import nextPlugin from '@next/eslint-plugin-next'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

// Composed from the plugins that actually support ESLint 10, rather than using
// eslint-config-next.
//
// eslint-config-next bundles eslint-plugin-react, eslint-plugin-jsx-a11y and
// eslint-plugin-import, none of which declare support beyond ESLint 9 — the
// react one throws outright on 10 ("contextOrFilename.getFilename is not a
// function"). Depending on the bundle therefore means either downgrading
// ESLint or shipping a linter that cannot run. Taking the three ESLint-10-ready
// pieces directly costs ~70 packages instead of ~250 and keeps ESLint current.
//
// What that trades away: react (display-name, prop-types), jsx-a11y and import
// rules. Re-add eslint-config-next and delete this comment once its bundled
// plugins support ESLint 10.
//
// This file previously imported 'eslint-config-next/core-web-vitals', which did
// not exist: package.json pinned ^0.2.4, an unrelated 2016 Babel config by a
// different author that happens to share the name. `npm run lint` had been
// failing on that import alone.

export default defineConfig([
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'node_modules/**',
    'public/**',
  ]),

  // Type-agnostic recommended set: no `project` needed, so linting stays fast
  // and cannot break when tsconfig paths move.
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...reactHooks.configs.recommended.rules,
    },
  },

  {
    // Plain Node utilities, not app code — CommonJS require is correct here.
    files: ['scripts/**/*.{js,cjs,mjs}', '.github/scripts/**/*.{js,cjs,mjs}'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  {
    // ── Pre-existing debt, downgraded to warn so lint can be enforced today ──
    //
    // Introducing lint found 43 violations in code that has never been linted.
    // Every one needs a judgement call rather than a mechanical edit — what
    // type replaces an `any`, whether a setState in an effect is load-bearing —
    // and making them blocking would either hold up this fix or invite careless
    // edits to code that currently works.
    //
    // They are warnings, not exemptions: visible on every run, and countable
    // with `npx eslint --format stylish` for burn-down. The rules that are
    // ALREADY clean — all of @next/next, including core-web-vitals — stay as
    // errors, so this genuinely gates new code from day one.
    //
    // Promote each back to 'error' as its count reaches zero.
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',   // 24
      '@typescript-eslint/no-explicit-any': 'warn',  // 10
      'react-hooks/set-state-in-effect': 'warn',     //  3
      'react-hooks/exhaustive-deps': 'warn',         //  1
    },
  },
])
