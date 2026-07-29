# CueQuote Marketing Site — Project Rules

## i18n — Always All 5 Languages (ENFORCED)

When adding or modifying content, ALWAYS update ALL 5 language files:
- `src/messages/en.json`
- `src/messages/pl.json`
- `src/messages/ar.json`
- `src/messages/de.json`
- `src/messages/fr.json`

Same applies to tutorials: `src/lib/tutorials/en.ts`, `pl.ts`, `ar.ts`, `de.ts`, `fr.ts`

**MANDATORY: Run `npm run check-translations` before every push.** This script compares all 5 language files and reports missing keys, untranslated values, and structural mismatches. It exits with error code 1 if any keys are missing — treat this as a build blocker.

When adding new i18n keys:
1. Add to en.json first
2. IMMEDIATELY add translations to all 4 other languages (use a subagent if needed)
3. Run `npm run check-translations` to verify zero errors
4. Only then proceed with the push

## Blog Publishing

- Space posts 2-3 days apart, newest-first in `src/lib/blog-posts.ts`
- Never date a post in a future month
- All 5 languages before push
- Add to sitemap (automatic via blog-posts.ts)

## Changelog

- Entries come from Supabase `cms_changelog` table (project `rurazinghbfskuoeikwi`)
- Include `translations` JSONB column with PL, AR, DE, FR
- One feature per row, sequential dates
- Changelog page reads user locale and displays translated content

## Mobile Spacing — Pre-publish Check

Before pushing any page or component changes, verify:

1. **No inline padding > 80px** without a mobile override — use CSS classes with `@media (max-width: 768px)` to reduce to 48-64px
2. **No inline gap > 48px** without a mobile override — stacked columns on mobile should use 32-40px gap
3. **No grid overlays** where inactive children inflate container height — use `position: absolute` on inactive items so only the active child determines height
4. **No fixed heights** on content containers (images/screenshots OK) — use `auto` or `min-height`
5. **Test on 375px width** (iPhone SE) — the narrowest common viewport

The global `globals.css` already applies `clamp(48px, 8vw, 120px)` to all `<section>` padding on mobile, but new components using `<div>` wrappers instead of `<section>` need their own responsive padding.

## Docs

- Articles defined in `src/app/[locale]/docs/page.tsx` ARTICLE_KEYS array
- Content in `src/messages/*.json` under the `docs` section key
- Each article needs: title, content1, content2, step1-N, tip
