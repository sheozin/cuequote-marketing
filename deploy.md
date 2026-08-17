# CueQuote Marketing — Deploy Runbook

## Platform
- Vercel project `cuequote-marketing` (project id `prj_h6CiBLpPDcnFRHA8ohECuWlEjTb8`, team `sherifs-projects-8e43e692` / org `team_PwIbNALSFmtcg9ELOX9o34M0`) — see `.vercel/project.json`.
- GitHub repo: `sheozin/cuequote-marketing`, deploys from `main`.
- Next.js 16 (App Router) + next-intl.

## Production domains
- `cuequote.com` — canonical.
- `www.cuequote.com` — 308-redirects to the apex (`next.config.ts` → `redirects()`, deliberately first in the chain; Google had indexed both hosts and split ranking signals).
- **Not this repo:** `app.cuequote.com` is the separate `sheozin/cuequote` (av-proposal) SPA. If a report is about "the app" rather than the marketing site, confirm which URL before touching this repo.

## Commands (`package.json`)
- `npm run dev` — local dev server
- `npm run build` — production build (`next build`)
- `npm run start` — serve a production build locally
- `npm run lint` — currently broken independent of any commit (`eslint-config-next@16` bundles an `eslint-plugin-react` that throws under ESLint 10). Not run in CI. Fix means deliberately downgrading ESLint 10→9, not a side effect of an unrelated change.
- `npm run check-translations` — validates all 5 `src/messages/*.json` files stay in sync; mandatory before every push (see CLAUDE.md and `team-rules.md`).

## CI — `.github/workflows/`
- `build-check.yml` — every push/PR to `main`: `npm run check-translations` then `npm run build` with placeholder `NEXT_PUBLIC_SUPABASE_*` values, so it gates on broken code, not missing secrets. This exists to catch a bad commit before Vercel does.
- `security-audit.yml` — Mondays 06:00 UTC: `npm audit`, secrets scan, SAST, header checks (`.github/scripts/audit.js`), opens an auto-fix PR for dependency issues and files a report Issue either way. The auto-fix PR still needs a human look before merging.

## Environment variables
Confirmed in `.env.local` (client-side, `NEXT_PUBLIC_*`, also set in Vercel):
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Both point at the CueQuote Supabase project (shared with the app repo — see below). Never print or commit their values. If a change needs a variable not listed here, check the Vercel dashboard (Project → Settings → Environment Variables) rather than guessing — TBD, not independently verified beyond what's local.

## Supabase
- Project ref `rurazinghbfskuoeikwi` (region eu-west-1) — the same project `av-proposal` (the app) uses.
- This repo has **no `supabase/migrations` directory**. Schema lives entirely in the `av-proposal` repo; this site only reads it, via the anon key, through a small number of `SECURITY DEFINER` RPCs called as an anonymous visitor (e.g. `get_public_stats`, `get_active_popup_campaign`) plus direct reads of `cms_changelog` for the public changelog page. If anon access to any RPC or table is ever tightened, grep this repo first — it may be a caller nobody remembered.
- The live database is the source of truth. The migrations directory in `av-proposal` cannot rebuild it from scratch (many tables/functions exist only live) — don't assume file state reflects real schema state.
- **DB password:** in the macOS Keychain (service `CueQuote Supabase DB password`, account `postgres.rurazinghbfskuoeikwi`) — never in a file, `.env`, or this repo. This site authenticates with the anon key only; the Postgres password is only needed for direct tools (pg_dump, psql, TablePlus), which this codebase never touches.

## Post-deploy verification (do this before telling the user something is live)
"Pushed to git," "deployed," and "visible in the browser" are three separate facts — confirm all three, don't infer the third from the first two:
1. `git log origin/main..HEAD` is empty.
2. The Vercel deployment for that commit shows `Ready` on the Production target — check `vercel ls` / dashboard, or sanity-check the deployment's age against `git log -1 --format=%cr`.
3. `curl -sL "https://cuequote.com/?cb=$RANDOM" | grep <something unique to the change>` — cache-bust the URL since the CDN can still serve a cached response with nonzero `age`.
4. Only then report it as live. If the user still sees stale content after that, it's their browser/edge cache — point them at an incognito reload before re-diagnosing the deploy itself.

Avoid proving a deploy by grepping a built/minified bundle: minifiers can turn string literals into backticks and Next.js code-splits by route, so a real, live change can grep as "not found." A commit-identity check (steps 2–3 above) is far more reliable than a bundle grep.

## Migration-drift caution
Schema changes for this project happen in `av-proposal`, not here — but if a session working in this repo ever needs to touch Supabase schema, know that `av-proposal`'s `supabase/migrations` directory cannot rebuild the database from scratch, and `supabase db push` needs the ledger state checked first (it does now stop at a pre-flight check rather than replaying blindly, as of 2026-08-04). Do schema work from the `av-proposal` repo.

## When a push does not trigger a build
Vercel builds this repo through the GitHub App, so a dropped webhook means the
push lands on `main` and nothing happens — `vercel ls` just shows the previous
deployment quietly getting older. That is not a broken project config, and the
first check is not the config:

    curl -s https://www.githubstatus.com/api/v2/summary.json | grep -i webhook

On 2026-08-17 the Webhooks component was degraded for hours and two pushes were
never delivered. To deploy without waiting for it to clear:

    curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_h6CiBLpPDcnFRHA8ohECuWlEjTb8/f0GQdU3OKm

That hook builds `main` from GitHub, so it ships exactly what is committed.
Prefer it to `vercel deploy --prod`, which uploads the local working tree and
will happily put uncommitted files into production.
