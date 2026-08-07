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

/** Locales whose long-tail content is submitted for indexing. Matches sitemap.ts. */
const INDEXABLE_LOCALES = new Set(['en', 'pl'])

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
const MARKET_POSTS: Record<string, string> = {
  'corporate-event-cost-2026': 'fr',
  'conference-cost-realistic-budget': 'pl',
  'plan-company-event-without-experience': 'de',
  'conference-planning-mistakes': 'ar',
  'how-to-write-av-brief': 'fr',
  'how-to-choose-event-company-checklist': 'pl',
  'event-av-cost-price-guide-2026': 'de',
  'organize-company-seminar-checklist': 'fr',
  'plan-corporate-event-from-scratch': 'pl',
  'event-budget-template-free-2026': 'de',
  'av-proposals-germany-guide': 'de',
  'av-proposals-france-guide': 'fr',
  'av-proposals-poland-guide': 'pl',
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
  if (slug && MARKET_POSTS[slug] === locale) return undefined
  return { index: false, follow: true }
}
