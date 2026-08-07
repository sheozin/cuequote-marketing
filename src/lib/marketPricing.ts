/**
 * Market pricing for the AV cost calculator.
 *
 * REGION_MULTIPLIERS is a copy of the table the app prices proposals with —
 * av-proposal/src/lib/regionPricing.ts. That file is the source of truth. This
 * copy exists only so the marketing site can show an indicative figure without
 * calling the app.
 *
 * Because of that, the calculator hands the app the region KEY, never the
 * multiplier. The app always re-prices from its own table, so if these two ever
 * drift the damage is limited to the indicative number on this page and can
 * never reach a real proposal.
 *
 * Base reference = Western Europe (1.0x). Two multipliers, not one: AV hardware
 * is bought on a global market so its rental barely moves between countries,
 * while crew is local and varies enormously. A 2026-08-07 audit of published
 * rates in 13 regions found the two moving independently in every market.
 *
 * The day-rates in AvCostCalculator are quoted from
 * /blog/event-av-cost-price-guide-2026 and sit at that base.
 */

export const REGION_MULTIPLIERS: Record<string, { equipment: number; labour: number }> = {
  gulf: { equipment: 0.8, labour: 0.65 },
  usa_tier1: { equipment: 1.0, labour: 1.6 },
  usa_tier2: { equipment: 1.0, labour: 1.35 },
  uk: { equipment: 1.4, labour: 0.75 },
  western_eu: { equipment: 1.0, labour: 1.0 },
  scandinavia: { equipment: 1.3, labour: 1.4 },
  eastern_eu: { equipment: 1.0, labour: 0.8 },
  egypt: { equipment: 0.4, labour: 0.4 },
  turkey: { equipment: 0.35, labour: 0.3 },
  india: { equipment: 0.3, labour: 0.3 },
  southeast_asia: { equipment: 0.5, labour: 0.5 },
  east_asia: { equipment: 1.3, labour: 0.4 },
  australia: { equipment: 1.5, labour: 1.4 },
  latam: { equipment: 0.5, labour: 0.5 },
  africa: { equipment: 0.4, labour: 0.4 },
}

/**
 * Every country the app can price, taken from the `countries` arrays in
 * regionPricing.ts. Display names are not stored — Intl.DisplayNames renders
 * them in the visitor's own language, so the list needs no translation.
 *
 * `usa_tier1` carries no country code in the app (it is matched by city), so it
 * is offered as an explicit second US entry rather than being unreachable.
 */
export interface Market {
  /** Value used in the <select> and in the handoff to the app. */
  id: string
  /** ISO 3166-1 alpha-2, for Intl.DisplayNames. */
  country: string
  region: string
  currency: string
  /** Disambiguates the two US tiers in the dropdown. */
  suffix?: 'metro' | 'other'
}

export const MARKETS: Market[] = [
  // Gulf
  { id: 'ae', country: 'AE', region: 'gulf', currency: 'AED' },
  { id: 'sa', country: 'SA', region: 'gulf', currency: 'SAR' },
  { id: 'qa', country: 'QA', region: 'gulf', currency: 'QAR' },
  { id: 'om', country: 'OM', region: 'gulf', currency: 'OMR' },
  { id: 'kw', country: 'KW', region: 'gulf', currency: 'KWD' },
  { id: 'bh', country: 'BH', region: 'gulf', currency: 'BHD' },
  // North America — two tiers, because major metros price well above the rest
  { id: 'us_metro', country: 'US', region: 'usa_tier1', currency: 'USD', suffix: 'metro' },
  { id: 'us', country: 'US', region: 'usa_tier2', currency: 'USD', suffix: 'other' },
  { id: 'ca', country: 'CA', region: 'usa_tier2', currency: 'CAD' },
  // UK
  { id: 'gb', country: 'GB', region: 'uk', currency: 'GBP' },
  // Western Europe
  { id: 'de', country: 'DE', region: 'western_eu', currency: 'EUR' },
  { id: 'fr', country: 'FR', region: 'western_eu', currency: 'EUR' },
  { id: 'nl', country: 'NL', region: 'western_eu', currency: 'EUR' },
  { id: 'be', country: 'BE', region: 'western_eu', currency: 'EUR' },
  { id: 'ch', country: 'CH', region: 'western_eu', currency: 'CHF' },
  { id: 'at', country: 'AT', region: 'western_eu', currency: 'EUR' },
  { id: 'it', country: 'IT', region: 'western_eu', currency: 'EUR' },
  { id: 'es', country: 'ES', region: 'western_eu', currency: 'EUR' },
  { id: 'pt', country: 'PT', region: 'western_eu', currency: 'EUR' },
  { id: 'ie', country: 'IE', region: 'western_eu', currency: 'EUR' },
  { id: 'lu', country: 'LU', region: 'western_eu', currency: 'EUR' },
  // Scandinavia
  { id: 'se', country: 'SE', region: 'scandinavia', currency: 'SEK' },
  { id: 'no', country: 'NO', region: 'scandinavia', currency: 'NOK' },
  { id: 'dk', country: 'DK', region: 'scandinavia', currency: 'DKK' },
  { id: 'fi', country: 'FI', region: 'scandinavia', currency: 'EUR' },
  // Eastern Europe
  { id: 'pl', country: 'PL', region: 'eastern_eu', currency: 'PLN' },
  { id: 'cz', country: 'CZ', region: 'eastern_eu', currency: 'CZK' },
  { id: 'hu', country: 'HU', region: 'eastern_eu', currency: 'HUF' },
  { id: 'ro', country: 'RO', region: 'eastern_eu', currency: 'RON' },
  { id: 'bg', country: 'BG', region: 'eastern_eu', currency: 'BGN' },
  { id: 'sk', country: 'SK', region: 'eastern_eu', currency: 'EUR' },
  { id: 'hr', country: 'HR', region: 'eastern_eu', currency: 'EUR' },
  { id: 'rs', country: 'RS', region: 'eastern_eu', currency: 'RSD' },
  { id: 'si', country: 'SI', region: 'eastern_eu', currency: 'EUR' },
  { id: 'lv', country: 'LV', region: 'eastern_eu', currency: 'EUR' },
  { id: 'lt', country: 'LT', region: 'eastern_eu', currency: 'EUR' },
  { id: 'ee', country: 'EE', region: 'eastern_eu', currency: 'EUR' },
  // Middle East / Africa
  { id: 'eg', country: 'EG', region: 'egypt', currency: 'EGP' },
  { id: 'tr', country: 'TR', region: 'turkey', currency: 'TRY' },
  { id: 'za', country: 'ZA', region: 'africa', currency: 'ZAR' },
  { id: 'ke', country: 'KE', region: 'africa', currency: 'KES' },
  { id: 'ng', country: 'NG', region: 'africa', currency: 'NGN' },
  { id: 'gh', country: 'GH', region: 'africa', currency: 'GHS' },
  { id: 'et', country: 'ET', region: 'africa', currency: 'ETB' },
  { id: 'tz', country: 'TZ', region: 'africa', currency: 'TZS' },
  { id: 'rw', country: 'RW', region: 'africa', currency: 'RWF' },
  // Asia-Pacific
  { id: 'in', country: 'IN', region: 'india', currency: 'INR' },
  { id: 'sg', country: 'SG', region: 'southeast_asia', currency: 'SGD' },
  { id: 'th', country: 'TH', region: 'southeast_asia', currency: 'THB' },
  { id: 'my', country: 'MY', region: 'southeast_asia', currency: 'MYR' },
  { id: 'id', country: 'ID', region: 'southeast_asia', currency: 'IDR' },
  { id: 'ph', country: 'PH', region: 'southeast_asia', currency: 'PHP' },
  { id: 'vn', country: 'VN', region: 'southeast_asia', currency: 'VND' },
  { id: 'jp', country: 'JP', region: 'east_asia', currency: 'JPY' },
  { id: 'kr', country: 'KR', region: 'east_asia', currency: 'KRW' },
  { id: 'hk', country: 'HK', region: 'east_asia', currency: 'HKD' },
  { id: 'cn', country: 'CN', region: 'east_asia', currency: 'CNY' },
  { id: 'tw', country: 'TW', region: 'east_asia', currency: 'TWD' },
  { id: 'au', country: 'AU', region: 'australia', currency: 'AUD' },
  { id: 'nz', country: 'NZ', region: 'australia', currency: 'NZD' },
  // Latin America
  { id: 'mx', country: 'MX', region: 'latam', currency: 'MXN' },
  { id: 'br', country: 'BR', region: 'latam', currency: 'BRL' },
  { id: 'ar', country: 'AR', region: 'latam', currency: 'ARS' },
  { id: 'co', country: 'CO', region: 'latam', currency: 'COP' },
  { id: 'pe', country: 'PE', region: 'latam', currency: 'PEN' },
  { id: 'cl', country: 'CL', region: 'latam', currency: 'CLP' },
]

export const DEFAULT_MARKET = 'de'

export function findMarket(id: string | undefined | null): Market {
  return MARKETS.find((m) => m.id === id) ?? MARKETS.find((m) => m.id === DEFAULT_MARKET)!
}

/** Vercel gives us a country code; pick the plain-country entry, not the metro tier. */
export function marketFromCountry(code: string | undefined | null): string {
  if (!code) return DEFAULT_MARKET
  const lower = code.toLowerCase()
  return MARKETS.find((m) => m.id === lower)?.id ?? DEFAULT_MARKET
}

/**
 * Units of currency per 1 USD. Only used if the live fetch below fails — the
 * page must still render a number rather than an error.
 * Captured 2026-08-07 from exchangerate-api.com.
 */
export const FALLBACK_RATES: Record<string, number> = {
  USD: 1, AED: 3.6725, QAR: 3.64, SAR: 3.75, OMR: 0.3845, KWD: 0.3086, BHD: 0.376,
  CAD: 1.4012, GBP: 0.743, EUR: 0.8673, CHF: 0.8116,
  SEK: 9.5071, NOK: 9.5363, DKK: 6.4719,
  PLN: 3.7294, CZK: 21.0159, HUF: 316, RON: 4.552, BGN: 1.6963, RSD: 102,
  EGP: 49.7889, TRY: 47.6472, INR: 95.2668,
  SGD: 1.2829, THB: 33.0863, MYR: 4.0899, IDR: 17936, PHP: 60.8129, VND: 26148,
  JPY: 158, KRW: 1423, HKD: 7.8447, CNY: 6.7634, TWD: 32.2107,
  AUD: 1.4215, NZD: 1.7034,
  MXN: 17.2213, BRL: 5.1139, ARS: 1497, COP: 3181, PEN: 3.3822, CLP: 914,
  ZAR: 16.3362, KES: 129, NGN: 1364, GHS: 11.7426, ETB: 161, TZS: 2645, RWF: 1473,
}

/**
 * Live USD-based rates, refreshed daily by the Next cache. Keyless endpoint, so
 * there is no secret to leak and nothing to rotate. Any failure falls back to
 * the table above rather than breaking the page.
 */
export async function fetchRates(): Promise<{ rates: Record<string, number>; live: boolean }> {
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD', {
      next: { revalidate: 86400 },
    })
    if (!res.ok) return { rates: FALLBACK_RATES, live: false }
    const data = await res.json()
    if (data?.result !== 'success' || !data?.rates?.EUR) {
      return { rates: FALLBACK_RATES, live: false }
    }
    return { rates: data.rates as Record<string, number>, live: true }
  } catch {
    return { rates: FALLBACK_RATES, live: false }
  }
}
