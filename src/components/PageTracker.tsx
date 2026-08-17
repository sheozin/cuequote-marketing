'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// When the IP lookup is unavailable we infer the country from the browser's timezone.
// It has to resolve to a country, not a city: writing "Los Angeles" into a column called
// `country` split the US across five rows and was indistinguishable from a real lookup.
// An unmapped timezone yields null rather than a guess.
const TZ_COUNTRY: Record<string, string> = {
  // Europe
  'Europe/London': 'United Kingdom', 'Europe/Dublin': 'Ireland', 'Europe/Lisbon': 'Portugal',
  'Europe/Madrid': 'Spain', 'Europe/Paris': 'France', 'Europe/Brussels': 'Belgium',
  'Europe/Amsterdam': 'Netherlands', 'Europe/Luxembourg': 'Luxembourg', 'Europe/Berlin': 'Germany',
  'Europe/Zurich': 'Switzerland', 'Europe/Vienna': 'Austria', 'Europe/Rome': 'Italy',
  'Europe/Malta': 'Malta', 'Europe/Prague': 'Czechia', 'Europe/Bratislava': 'Slovakia',
  'Europe/Warsaw': 'Poland', 'Europe/Budapest': 'Hungary', 'Europe/Ljubljana': 'Slovenia',
  'Europe/Zagreb': 'Croatia', 'Europe/Belgrade': 'Serbia', 'Europe/Bucharest': 'Romania',
  'Europe/Sofia': 'Bulgaria', 'Europe/Athens': 'Greece', 'Europe/Istanbul': 'Turkey',
  'Europe/Copenhagen': 'Denmark', 'Europe/Oslo': 'Norway', 'Europe/Stockholm': 'Sweden',
  'Europe/Helsinki': 'Finland', 'Europe/Tallinn': 'Estonia', 'Europe/Riga': 'Latvia',
  'Europe/Vilnius': 'Lithuania', 'Europe/Kyiv': 'Ukraine', 'Europe/Kiev': 'Ukraine',
  'Europe/Minsk': 'Belarus', 'Europe/Moscow': 'Russia', 'Europe/Reykjavik': 'Iceland',
  'Atlantic/Reykjavik': 'Iceland',
  // North America
  'America/New_York': 'United States', 'America/Detroit': 'United States',
  'America/Chicago': 'United States', 'America/Denver': 'United States',
  'America/Phoenix': 'United States', 'America/Los_Angeles': 'United States',
  'America/Anchorage': 'United States', 'Pacific/Honolulu': 'United States',
  'America/Toronto': 'Canada', 'America/Vancouver': 'Canada', 'America/Edmonton': 'Canada',
  'America/Winnipeg': 'Canada', 'America/Halifax': 'Canada',
  'America/Mexico_City': 'Mexico', 'America/Monterrey': 'Mexico', 'America/Tijuana': 'Mexico',
  // South America
  'America/Sao_Paulo': 'Brazil', 'America/Bogota': 'Colombia', 'America/Lima': 'Peru',
  'America/Santiago': 'Chile', 'America/Argentina/Buenos_Aires': 'Argentina',
  // Middle East
  'Asia/Dubai': 'United Arab Emirates', 'Asia/Riyadh': 'Saudi Arabia', 'Asia/Qatar': 'Qatar',
  'Asia/Kuwait': 'Kuwait', 'Asia/Bahrain': 'Bahrain', 'Asia/Muscat': 'Oman',
  'Asia/Amman': 'Jordan', 'Asia/Beirut': 'Lebanon', 'Asia/Jerusalem': 'Israel',
  'Asia/Tel_Aviv': 'Israel', 'Asia/Baghdad': 'Iraq', 'Asia/Tehran': 'Iran',
  // Africa
  'Africa/Cairo': 'Egypt', 'Africa/Casablanca': 'Morocco', 'Africa/Algiers': 'Algeria',
  'Africa/Tunis': 'Tunisia', 'Africa/Tripoli': 'Libya', 'Africa/Lagos': 'Nigeria',
  'Africa/Accra': 'Ghana', 'Africa/Nairobi': 'Kenya', 'Africa/Kampala': 'Uganda',
  'Africa/Dar_es_Salaam': 'Tanzania', 'Africa/Kigali': 'Rwanda',
  'Africa/Johannesburg': 'South Africa', 'Africa/Addis_Ababa': 'Ethiopia',
  // Asia-Pacific
  'Asia/Karachi': 'Pakistan', 'Asia/Kolkata': 'India', 'Asia/Calcutta': 'India',
  'Asia/Colombo': 'Sri Lanka', 'Asia/Dhaka': 'Bangladesh', 'Asia/Kathmandu': 'Nepal',
  'Asia/Bangkok': 'Thailand', 'Asia/Ho_Chi_Minh': 'Vietnam', 'Asia/Saigon': 'Vietnam',
  'Asia/Jakarta': 'Indonesia', 'Asia/Kuala_Lumpur': 'Malaysia', 'Asia/Singapore': 'Singapore',
  'Asia/Manila': 'Philippines', 'Asia/Hong_Kong': 'Hong Kong', 'Asia/Macau': 'Macao',
  'Asia/Taipei': 'Taiwan', 'Asia/Shanghai': 'China', 'Asia/Chongqing': 'China',
  'Asia/Seoul': 'South Korea', 'Asia/Tokyo': 'Japan', 'Asia/Almaty': 'Kazakhstan',
  'Asia/Tashkent': 'Uzbekistan', 'Asia/Baku': 'Azerbaijan', 'Asia/Tbilisi': 'Georgia',
  'Asia/Yerevan': 'Armenia',
  'Australia/Sydney': 'Australia', 'Australia/Melbourne': 'Australia',
  'Australia/Brisbane': 'Australia', 'Australia/Perth': 'Australia',
  'Australia/Adelaide': 'Australia', 'Pacific/Auckland': 'New Zealand',
}

// ipapi is not consistent about a few names; keep one spelling per country.
const COUNTRY_ALIASES: Record<string, string> = {
  'The Netherlands': 'Netherlands',
  'Czech Republic': 'Czechia',
  'Russian Federation': 'Russia',
  'Republic of Korea': 'South Korea',
  'Viet Nam': 'Vietnam',
}

function countryFromTimezone(): string | null {
  try {
    return TZ_COUNTRY[Intl.DateTimeFormat().resolvedOptions().timeZone] ?? null
  } catch {
    return null
  }
}

function getSessionId(): string {
  const key = 'cq_sid'
  let sid = sessionStorage.getItem(key)
  if (!sid) {
    // crypto.randomUUID rather than Math.random: this id groups a visitor's
    // page views, and Math.random's 6 base-36 characters collide often enough
    // across concurrent visitors to merge two people's sessions in analytics.
    sid = `s_${Date.now()}_${crypto.randomUUID().slice(0, 8)}`
    sessionStorage.setItem(key, sid)
  }
  return sid
}

function getDeviceType(): string {
  const w = window.innerWidth
  if (w < 768) return 'mobile'
  if (w < 1024) return 'tablet'
  return 'desktop'
}

function getBrowser(): string {
  const ua = navigator.userAgent
  if (ua.includes('Firefox')) return 'Firefox'
  if (ua.includes('Edg')) return 'Edge'
  if (ua.includes('Chrome')) return 'Chrome'
  if (ua.includes('Safari')) return 'Safari'
  if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera'
  return 'Other'
}

export default function PageTracker() {
  const pathname = usePathname()

  // Allow setting internal flag via URL param: ?cq_internal=1
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('cq_internal') === '1') {
      localStorage.setItem('cq_internal', '1')
    } else if (params.get('cq_internal') === '0') {
      localStorage.removeItem('cq_internal')
      // Clear the cross-domain cookie too, or the URL says off while the cookie
      // still says on and tracking stays silently disabled.
      document.cookie = 'cq_internal=; max-age=0; domain=.cuequote.com; path=/'
    }
  }, [])

  useEffect(() => {
    // Don't track admin pages or internal users
    if (pathname?.startsWith('/admin')) return
    // The admin toggle lives on app.cuequote.com and cannot write this origin's
    // localStorage, so it sets a cookie on the shared parent domain instead.
    if (localStorage.getItem('cq_internal') === '1') return
    if (document.cookie.split('; ').includes('cq_internal=1')) return

    const track = async () => {
      try {
        const lang = navigator.language?.split('-')[0] || 'en'
        // Extract site locale from URL path
        const pathLocale = pathname?.match(/^\/(en|pl|ar|de|fr)\//)?.[1] || 'en'

        // Get country — only call external IP API if user hasn't declined tracking
        // Basic page views always tracked, but geolocation (sends IP to third party) respects opt-out
        let country: string | null = null
        // 'ipapi' means the IP was actually looked up; 'timezone' means we inferred it from
        // the browser clock. They used to be indistinguishable once stored.
        let countrySource: 'ipapi' | 'timezone' | null = null

        const consent = localStorage.getItem('cq_analytics_consent')
        if (consent !== 'declined') {
          // Country can't change mid-session, so resolve it once. Calling ipapi.co on every
          // page view was burning the free tier — it now answers 429, which logged a console
          // error on each view and (below) used to be parsed as if it were a real answer.
          const cached = sessionStorage.getItem('cq_geo_country')
          const cachedSource = sessionStorage.getItem('cq_geo_source')
          if (cached) {
            country = cached === '-' ? null : cached
            countrySource = country ? (cachedSource as 'ipapi' | 'timezone' | null) : null
          } else {
            try {
              const geo = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(2000) })
              if (!geo.ok) throw new Error(`ipapi ${geo.status}`)
              const geoData = await geo.json()
              const raw = geoData.country_name || geoData.country || null
              // Validate: only accept plain strings up to 100 chars, no HTML/script
              if (raw && typeof raw === 'string' && raw.length <= 100 && !/[<>"'&]/.test(raw)) {
                country = COUNTRY_ALIASES[raw] ?? raw
                countrySource = 'ipapi'
              }
            } catch {
              // Rate limited, blocked or timed out — infer the country from the timezone
              country = countryFromTimezone()
              countrySource = country ? 'timezone' : null
            }
            sessionStorage.setItem('cq_geo_country', country ?? '-')
            if (countrySource) sessionStorage.setItem('cq_geo_source', countrySource)
          }
        } else {
          // Declined: infer from the timezone only, no external call and no IP sent anywhere
          country = countryFromTimezone()
          countrySource = country ? 'timezone' : null
        }

        await supabase.from('page_views').insert({
          session_id: getSessionId(),
          page_url: window.location.href,
          page_path: pathname || '/',
          referrer: document.referrer || null,
          country,
          country_source: countrySource,
          device_type: getDeviceType(),
          browser: getBrowser(),
          screen_width: window.innerWidth,
          language: lang,
          site_locale: pathLocale,
        })
      } catch {
        // Silent fail — analytics should never break the site
      }
    }

    // Small delay to not block page render
    const timer = setTimeout(track, 500)
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
