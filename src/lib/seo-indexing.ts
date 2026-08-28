/**
 * Which locale copies of long-tail content we ask Google to index.
 *
 * WHY THIS EXISTS
 * Every blog post and tutorial is built at all five locales, so 74 posts and 33
 * tutorials become ~535 URLs. Measured 2026-08-07 over six months, that split is:
 *
 *   en  92 pages  3128 impressions  32 clicks
 *   fr  22 pages   391 impressions   0 clicks
 *   de  27 pages    81 impressions   1 click
 *   pl  29 pages    40 impressions   0 clicks
 *   ar  14 pages    21 impressions   0 clicks
 *
 * Half the pages produce 15% of impressions and one click. Meanwhile 39 URLs sit
 * in "Crawled - currently not indexed" and 46 in "Discovered - currently not
 * indexed" — Google declining to spend crawl budget on a footprint this large
 * from a domain with 33 clicks in six months.
 *
 * So the translated long-tail is withdrawn from the index to concentrate crawl
 * budget on the pages that earn it. This mirrors sitemap.ts, which already only
 * submits EN and PL (its "Phase 1"). Reverse it the same way: widen
 * INDEXABLE_LOCALES as EN and PL indexing recovers.
 *
 * WHAT THIS DOES NOT TOUCH
 * Marketing pages (home, pricing, for-av-companies…) stay indexable in every
 * locale — they are the pages a German or French buyer should be able to find.
 * Only translated long-tail content is withdrawn.
 */

/** Locales whose long-tail content is submitted for indexing. Matches sitemap.ts.
 *
 * `ar` added 2026-08-19 on evidence, not preference. The weekly SEO watchdog
 * found eight Arabic posts ranking at positions 3.0-9.0 while serving noindex —
 * against a site-wide average of 27.9. Arabic queries in this niche are far less
 * contested than English ones, so the copies that were withdrawn to save crawl
 * budget were the ones best placed to earn it back. The Gulf and Egypt are also
 * live markets for this business rather than hypothetical ones.
 *
 * Withdraw it again if the ranking positions decay or crawl budget visibly
 * suffers; the reason it was out is recorded above and still applies to de/fr. */
const INDEXABLE_LOCALES = new Set(['en', 'pl', 'ar'])

/**
 * Posts written FOR a specific market rather than translated into it, mapped to
 * the market they were written for. These keep their locale copy indexable
 * because they target that language's queries directly, and they were measurably
 * the best non-English performers on the site.
 *
 * The slugs are English because commit a7c7332 (2026-08-03) renamed 13
 * originally-native slugs — `ile-kosztuje-organizacja-konferencji` became
 * `conference-cost-realistic-budget`, and so on. The old URLs 308-redirect, so
 * nothing broke, but the mapping from post to intended market only survives
 * here. Keep this list in step if market-specific posts are added.
 */
const MARKET_POSTS: Record<string, string[]> = {
  'corporate-event-cost-2026': ['fr'],
  'conference-cost-realistic-budget': ['pl'],
  'plan-company-event-without-experience': ['de'],
  // ar and fr. The 2026-08-24 watchdog found the French copy at position 6.0
  // with a click while serving noindex — a post can genuinely land in more than
  // one market, and the old Record<string, string> could only name one, so
  // whichever market was written down silently suppressed the other.
  'conference-planning-mistakes': ['ar', 'fr'],
  'how-to-write-av-brief': ['fr'],
  'how-to-choose-event-company-checklist': ['pl'],
  'event-av-cost-price-guide-2026': ['de'],
  'organize-company-seminar-checklist': ['fr'],
  'plan-corporate-event-from-scratch': ['pl'],
  'event-budget-template-free-2026': ['de'],
  'av-proposals-germany-guide': ['de'],
  'av-proposals-france-guide': ['fr'],
  'av-proposals-poland-guide': ['pl'],
  // Position 11.4 in GSC on 2026-08-08 — the best position of any page or query
  // on the site outside brand terms, and it earned a click. The 2026-08-07
  // blanket noindex caught it because comparison posts were never considered
  // market posts; Rentman is an EU vendor with real DACH presence, so the German
  // copy is exactly what this list exists to protect.
  'cuequote-vs-rentman': ['de'],
  // Position 2.8 with a click, serving noindex, found by the watchdog on
  // 2026-08-24. The best position anywhere on the site. Nothing about a pricing
  // guide is language-neutral — "was kostet veranstaltungstechnik" is its own
  // query with its own competitors — so the German copy earns its own place.
  'how-much-does-av-cost-for-events': ['de'],
  // 231 impressions in the week to 2026-08-28 — more than every other query on
  // the site combined — for "glossaire audiovisuel pro", at position 37.9 while
  // serving noindex. A glossary is the most language-bound content there is: the
  // French terms ARE the page, and no English copy can rank for them. The
  // watchdog missed it because suppressed_but_ranking only looks below position
  // 20, and this ranks badly precisely because it is suppressed.
  'av-industry-glossary': ['fr'],
}


/**
 * Robots directive for a long-tail page, or undefined to leave it indexable.
 *
 * `follow: true` is deliberate: these pages stay crawlable and keep passing link
 * equity to the pages we do want ranked. Only indexing is withdrawn.
 */
export function longTailRobots(
  locale: string,
  slug?: string,
): { index: false; follow: true } | undefined {
  if (INDEXABLE_LOCALES.has(locale)) return undefined
  if (slug && MARKET_POSTS[slug]?.includes(locale)) return undefined
  return { index: false, follow: true }
}
