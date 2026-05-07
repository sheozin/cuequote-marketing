'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://rurazinghbfskuoeikwi.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1cmF6aW5naGJmc2t1b2Vpa3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMTI2MDAsImV4cCI6MjA5MDc4ODYwMH0.lWiRDtQdkYFzs_R1Rnvb9jMcdDpo_a68yDY_dEbwseU'
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

  useEffect(() => {
    // Don't track admin pages
    if (pathname?.startsWith('/admin')) return

    const track = async () => {
      try {
        // Get country from timezone (rough approximation, no API call needed)
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
        const lang = navigator.language?.split('-')[0] || 'en'

        await supabase.from('page_views').insert({
          session_id: getSessionId(),
          page_url: window.location.href,
          page_path: pathname || '/',
          referrer: document.referrer || null,
          country: tz.split('/')[0] || null,
          device_type: getDeviceType(),
          browser: getBrowser(),
          screen_width: window.innerWidth,
          language: lang,
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
