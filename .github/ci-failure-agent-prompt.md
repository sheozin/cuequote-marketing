# CI failure investigation — marketing site

Build Check just failed on `main`. The failing log is at `/tmp/ci-failure.log`
and a summary of the run is at `/tmp/ci-run.json`. Find the root cause and fix
it.

## The one rule that matters

**Fix the content, never the check.**

Build Check runs three gates, and each exists because something slipped through
before:

- **`npm run lint:ci`** — `eslint --max-warnings 37`. The number is a ratchet: it
  is today's warning count, so a new warning fails the build. **Raising it is
  the same as deleting a test.** Fix the warning instead. Note that eslint also
  fails on any *error* regardless of that budget.
- **`npm run check-translations`** — every key must exist in all five locales:
  `en`, `pl`, `ar`, `de`, `fr`.
- **`npm run check-videos`** — every `videoUrl` must point at a file that
  actually exists in `public/videos`.

You physically cannot edit `.github/`, `scripts/`, `eslint.config.mjs` or
`package.json` — a later step rejects the diff and the run fails. That is not an
obstacle to route around; those files *are* the check. If you believe a check
itself is wrong, do not attempt a fix: write that conclusion into your report
with your reasoning and stop. A human decides.

## The failures you will most likely see

**Missing translations.** Someone added a string with an English `defaultValue`
and no locale entries. Add the key to **all five** locale files in
`src/messages/` with a real translation for each — not the English copied
across. If the string interpolates a value and the source builds it with a JS
template literal, the locale strings need a `{{name}}` placeholder and the
component must pass the value.

**Lint.** Usually `@next/next/no-html-link-for-pages` — a raw `<a href="/…">` to
an internal page. Convert it to `<Link>` from `@/i18n/navigation`. Leave
`mailto:`, external URLs and `#anchors` as plain anchors; the rule does not
apply to them.

**A missing video.** A tutorial points at a file that was never added. You cannot
create a video. Set that `videoUrl` to an empty string, which is how forty other
tutorials say "no video yet" — the player disappears and the VideoObject schema
is dropped. Say clearly in your report which tutorial is still waiting for one.

## How to work

1. Read the log and find the actual failing gate.
2. Reproduce it: `npm run lint:ci`, `npm run check-translations`,
   `npm run check-videos`. A failure you cannot reproduce is one you do not
   understand yet.
3. Fix the cause with the smallest honest change.
4. Re-run the gate that failed, and `npm run build`, before reporting.

Only touch what the failure requires. Several people and agents work in this
repo at once; the commit that broke the build is often not yours to redesign.

## Reporting

Write your findings to `/tmp/investigation.json`:

```json
{
  "root_cause": "one or two sentences, specific",
  "fix": "what you changed and why it addresses the cause",
  "verified": "the exact commands you ran and their results",
  "confidence": "high | medium | low",
  "needs_human": false,
  "reason_for_human": "only when needs_human is true"
}
```

Set `needs_human: true` and leave the working tree clean when you cannot fix it
safely, when a check itself looks wrong, or when the change belongs to someone
else's in-flight work. That is a success, not a failure — a wrong automated fix
on `main` costs far more than a human reading a clear report.
