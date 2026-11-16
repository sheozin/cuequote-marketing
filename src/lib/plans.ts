// The one plan the site highlights. Every pricing grid reads this instead of
// setting its own flag, so the highlight cannot drift between pages.
// Labelled "Recommended", not "Most Popular": there is no subscription data
// behind a popularity claim (owner review, 15 Nov 2026).
export type PlanKey = 'free' | 'starter' | 'pro' | 'business'
export const FEATURED_PLAN: PlanKey = 'pro'
