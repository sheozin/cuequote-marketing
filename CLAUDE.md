# CueQuote Marketing Site — Project Rules

## i18n — Always All 5 Languages

When adding or modifying content, ALWAYS update ALL 5 language files:
- `src/messages/en.json`
- `src/messages/pl.json`
- `src/messages/ar.json`
- `src/messages/de.json`
- `src/messages/fr.json`

Same applies to tutorials: `src/lib/tutorials/en.ts`, `pl.ts`, `ar.ts`, `de.ts`, `fr.ts`

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

## Docs

- Articles defined in `src/app/[locale]/docs/page.tsx` ARTICLE_KEYS array
- Content in `src/messages/*.json` under the `docs` section key
- Each article needs: title, content1, content2, step1-N, tip
