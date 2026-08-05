'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

function getSessionId(): string {
  const key = 'cq_sid'
  let sid = sessionStorage.getItem(key)
  if (!sid) {
    sid = `s_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
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
    }
  }, [])

  useEffect(() => {
    // Don't track admin pages or internal users
    if (pathname?.startsWith('/admin')) return
    if (localStorage.getItem('cq_internal') === '1') return

    const track = async () => {
      try {
        const lang = navigator.language?.split('-')[0] || 'en'
        // Extract site locale from URL path
        const pathLocale = pathname?.match(/^\/(en|pl|ar|de|fr)\//)?.[1] || 'en'

        // Get country — only call external IP API if user hasn't declined tracking
        // Basic page views always tracked, but geolocation (sends IP to third party) respects opt-out
        const timezoneRegion = () =>
          Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[1]?.replace(/_/g, ' ') || null

        let country: string | null = null
        const consent = localStorage.getItem('cq_analytics_consent')
        if (consent !== 'declined') {
          // Country can't change mid-session, so resolve it once. Calling ipapi.co on every
          // page view was burning the free tier — it now answers 429, which logged a console
          // error on each view and (below) used to be parsed as if it were a real answer.
          const cached = sessionStorage.getItem('cq_geo_country')
          if (cached) {
            country = cached === '-' ? timezoneRegion() : cached
          } else {
            try {
              const geo = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(2000) })
              if (!geo.ok) throw new Error(`ipapi ${geo.status}`)
              const geoData = await geo.json()
              const raw = geoData.country_name || geoData.country || null
              // Validate: only accept plain strings up to 100 chars, no HTML/script
              if (raw && typeof raw === 'string' && raw.length <= 100 && !/[<>"'&]/.test(raw)) {
                country = raw
              }
            } catch {
              // Rate limited, blocked or timed out — fall back to the timezone region
              country = timezoneRegion()
            }
            sessionStorage.setItem('cq_geo_country', country ?? '-')
          }
        } else {
          // Declined: use timezone-based region only (no external API call)
          country = timezoneRegion()
        }

        await supabase.from('page_views').insert({
          session_id: getSessionId(),
          page_url: window.location.href,
          page_path: pathname || '/',
          referrer: document.referrer || null,
          country,
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
