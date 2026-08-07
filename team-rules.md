# CueQuote Marketing — Team Rules

Gap-fill only: conventions and hard-won lessons that apply to this repo but aren't already in `CLAUDE.md`. See `deploy.md` for deployment specifics.

## Security
- Supabase mutations never throw — `supabase-js` resolves normally even on an RLS denial or constraint violation. Always destructure `{ error }` on every `.insert/.update/.delete/.upsert/.rpc()` call and act on it before showing a success state. An unchecked write has previously reported false success for a week before being caught.
- If you ever write or touch an RLS policy or `SECURITY DEFINER` function on the shared Supabase project: a policy's subquery runs *as the calling role*, not as the definer. A subquery into a table that role can't read returns zero rows and the policy silently denies everything — route it through a `SECURITY DEFINER` helper instead.
- A `SECURITY DEFINER` function must never trust a caller-supplied `user_id`/`email` parameter — derive identity from `auth.uid()` only. Anything else is an authorization bypass waiting to happen.
- `public.notifications.type` has a CHECK constraint (explicit allow-list). Adding a new notification type needs a migration widening it first, or the insert fails with 23514 — silently, if the error isn't checked.
- pg_cron jobs and DB triggers that call an edge function must read the webhook secret from `vault.decrypted_secrets`, never `current_setting('app.settings.webhook_secret')` (unset on this project) or a literal string — both fail silently (pg_cron reports success; the function returns 401/403).

## Git workflow
- Never `git add -A`, `git add .`, or `git commit -a`. Sherif runs parallel Claude Code sessions against the same repos, and a bulk add can sweep another session's uncommitted work into your commit under an unrelated message. Always `git status --short` first, stage explicit paths by name, and `git diff --cached --stat` before committing. (Enforced by a PreToolUse hook in `~/.claude/hooks/`, not just a habit to remember.)
- If a bulk-staged commit happens anyway, don't reflexively revert — check whether the swept-in work is already deployed/applied elsewhere; reverting live work is worse than a messy commit. Report it and let the user decide.

## Content, data integrity & i18n
- Never introduce placeholder, invented, or "reasonable estimate" data anywhere it could be mistaken for real — pricing, stats, counts, testimonials, dates. If real data isn't available yet, leave the field out rather than filling it with a plausible guess.
- Never date content (blog posts, changelog entries) in a future month relative to the real current date.
- After writing or editing a blog post or long content page, verify data integrity before calling it done: does the item count match what the title claims, are entries merged/garbled, is numbering sequential — then visually check the actual rendering in a browser, not just the source.
- No emoji icons in marketing pages, banners, or feature cards — use Lucide icons or clean SVG, matching the existing design system.

## SEO
Full current policy lives in memory as `rule_cuequote_marketing_seo_policy` (measured from Search Console 2026-08-07); the load-bearing points:
- Do not translate new blog posts/tutorials into de/fr/ar — six months of data showed 92 non-English pages produced a single click total. If a market genuinely matters, write a market-specific post for it and register the slug in `MARKET_POSTS` in `src/lib/seo-indexing.ts`, or it gets noindexed in the very market it targets.
- Meta description ≤ 160 characters, title ≤ 60 — both get truncated in the SERP otherwise.
- New static pages must be added to `sitemap.ts`'s `staticPages`; `sitemapLocales` is deliberately `['en','pl']` for now — widen only when EN/PL indexing recovers, and widen `INDEXABLE_LOCALES` in `seo-indexing.ts` in step.
- After creating or modifying any page or blog post, verify OG metadata (og:image, og:title, og:description, twitter:card) — use the `og-validator` agent or curl the live URLs post-deploy.
- Don't propose "write more pages" as a growth plan for this site — competitors have 5–25x the indexable page count and outrank it anyway; authority (backlinks), not page count, is the current ceiling.
- When checking Google Search Console: always pull the CSV export. The UI's filter box has silently returned zero rows for real, ranking pages (locale-prefixed paths, www-hostname) — treat "no data" in the UI as unproven until checked against the export.

## Release checklist (for user-facing app features documented from this site)
- A shipped user-facing feature needs: a version bump (app repo's `package.json` + `Sidebar.tsx` `APP_VERSION`), a changelog row in Supabase `cms_changelog` (one feature per row, `translations` JSONB for PL/AR/DE/FR, sequential dates), a docs article (`src/app/[locale]/docs/page.tsx` `ARTICLE_KEYS` + all 5 `src/messages/*.json` here), and a tutorial (`src/lib/tutorials/*.ts`, all 5 languages, matching the app repo's tutorial content for the same feature).
- Internal/admin-only/infra changes get **none** of the above — no version bump, no changelog row, no announcement email.
- Changelog entries and announcements are user-facing only — never SEO, hreflang, refactors, or infra changes. One feature per changelog row; never bundle several into one entry.
- Maximum one feature-announcement email per day — batch same-day features into a single announcement rather than sending several.
- After a version release, add a product-update blog post here (banner image, all 5 languages, user-facing features only).

## Verification
- "Pushed" ≠ "deployed" ≠ "live in the browser" — confirm all three before telling the user something is done. Full steps in `deploy.md`.
- Don't diagnose a "works locally, dead in production" report by reading the suspect component first. Diff the environment before the code: response/CSP headers (`curl -sI`), installed dependency versions vs `package.json`, and `git log` around when reports started. A caret-range dependency bump is a behaviour change even when this repo's own diff looks untouched — this exact next.config.ts sets its own CSP, so a silently-broken feature here is exactly this failure mode.

## Working conventions
- Always open URLs (previews, live site, mockups) in Google Chrome — `open -a "Google Chrome" <url>` — never a bare `open`, which defaults to Safari on this machine.
- Before modifying or removing any existing component or system, read the full file and understand what it's connected to first. Don't assume a piece of UI is self-contained if it's actually driven by admin-managed data (e.g. the campaign/promo-linked popup system).
- When updating docs, tutorials, or marketing content, cross-reference ALL existing app routes/features against what's already documented before adding anything — fix every gap found in the same pass, not just the one from the current task.
