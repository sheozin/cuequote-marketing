'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { createClient } from '@supabase/supabase-js'
import { X } from 'lucide-react'
import { useLocale } from 'next-intl'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://rurazinghbfskuoeikwi.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1cmF6aW5naGJmc2t1b2Vpa3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMTI2MDAsImV4cCI6MjA5MDc4ODYwMH0.lWiRDtQdkYFzs_R1Rnvb9jMcdDpo_a68yDY_dEbwseU'
)

interface PopupContent {
  headline: string
  subtext: string
  cta: string
  badge?: string
}

interface PopupCampaign {
  id: string
  phase: 'launch' | 'early_bird' | 'urgency' | 'exclusive' | 'last_call'
  trigger_type: 'timed' | 'scroll' | 'exit_intent' | 'returning' | 'all'
  content: PopupContent
  seats_remaining: number | null
  promo_code: string | null
  signup_url: string
}

const PHASE_COLORS: Record<string, { bg: string; gradient: string; accent: string }> = {
  launch:     { bg: '#0F172A', gradient: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', accent: '#38BDF8' },
  early_bird: { bg: '#064E3B', gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)', accent: '#6EE7B7' },
  urgency:    { bg: '#7F1D1D', gradient: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)', accent: '#FCA5A5' },
  exclusive:  { bg: '#4C1D95', gradient: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)', accent: '#C4B5FD' },
  last_call:  { bg: '#7F1D1D', gradient: 'linear-gradient(135deg, #7F1D1D 0%, #991B1B 100%)', accent: '#FCA5A5' },
}

const LS_DISMISSED_PREFIX = 'cq_popup_dismissed_'
const LS_VISITED_KEY = 'cq_visited_before'
const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000

export default function SmartPopup() {
  useLocale() // for potential i18n
  const [campaign, setCampaign] = useState<PopupCampaign | null>(null)
  const [visible, setVisible] = useState(false)
  const [animateIn, setAnimateIn] = useState(false)
  const triggeredRef = useRef(false)

  // Fetch campaign on mount
  useEffect(() => {
    supabase.rpc('get_active_popup_campaign').then(({ data }) => {
      const camp = (Array.isArray(data) ? data[0] : data) as PopupCampaign | undefined
      if (!camp) return

      // Check dismissal
      const dismissedRaw = localStorage.getItem(`${LS_DISMISSED_PREFIX}${camp.id}`)
      if (dismissedRaw) {
        const dismissedAt = parseInt(dismissedRaw, 10)
        if (Date.now() - dismissedAt < THREE_DAYS_MS) return
      }

      // Check returning visitor logic
      const hasVisitedBefore = localStorage.getItem(LS_VISITED_KEY) === 'true'
      if (camp.trigger_type === 'returning' && !hasVisitedBefore) {
        // Mark as visited but don't show
        localStorage.setItem(LS_VISITED_KEY, 'true')
        return
      }
      // Mark visited for future visits
      localStorage.setItem(LS_VISITED_KEY, 'true')

      setCampaign(camp)
    })
  }, [])

  const showPopup = useCallback(() => {
    if (triggeredRef.current) return
    triggeredRef.current = true
    setVisible(true)
    // Small delay so CSS transition fires
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimateIn(true))
    })
  }, [])

  // Set up trigger based on trigger_type
  useEffect(() => {
    if (!campaign) return

    const type = campaign.trigger_type
    let timer: ReturnType<typeof setTimeout> | null = null
    let scrollHandler: (() => void) | null = null
    let mouseHandler: ((e: MouseEvent) => void) | null = null

    if (type === 'timed') {
      timer = setTimeout(showPopup, 30_000)
    } else if (type === 'returning') {
      timer = setTimeout(showPopup, 5_000)
    } else if (type === 'all') {
      timer = setTimeout(showPopup, 10_000)
    } else if (type === 'scroll') {
      scrollHandler = () => {
        const scrolled = window.scrollY + window.innerHeight
        const total = document.documentElement.scrollHeight
        if (scrolled / total >= 0.6) showPopup()
      }
      window.addEventListener('scroll', scrollHandler, { passive: true })
    } else if (type === 'exit_intent') {
      // Desktop only: mouse leaves viewport through the top
      mouseHandler = (e: MouseEvent) => {
        if (e.clientY <= 0) showPopup()
      }
      document.addEventListener('mouseleave', mouseHandler)
    }

    return () => {
      if (timer) clearTimeout(timer)
      if (scrollHandler) window.removeEventListener('scroll', scrollHandler)
      if (mouseHandler) document.removeEventListener('mouseleave', mouseHandler)
    }
  }, [campaign, showPopup])

  const handleDismiss = useCallback(() => {
    if (!campaign) return
    localStorage.setItem(`${LS_DISMISSED_PREFIX}${campaign.id}`, String(Date.now()))
    setAnimateIn(false)
    setTimeout(() => setVisible(false), 300)
  }, [campaign])

  if (!campaign || !visible) return null

  const colors = PHASE_COLORS[campaign.phase] ?? PHASE_COLORS.launch
  const { headline, subtext, cta, badge } = campaign.content

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleDismiss}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9998,
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          opacity: animateIn ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
        aria-hidden="true"
      />

      {/* Modal */}
      <style>{`
        .cq-popup-modal {
          position: fixed;
          z-index: 9999;
          left: 0; right: 0; bottom: 0;
          width: 100%;
          padding: 0 0 env(safe-area-inset-bottom, 0);
        }
        .cq-popup-card {
          border-radius: 20px 20px 0 0;
        }
        @media (min-width: 640px) {
          .cq-popup-modal {
            left: 50%; right: auto; bottom: auto;
            top: 50%;
            width: auto;
            max-width: 560px;
            min-width: 480px;
            padding: 0;
          }
          .cq-popup-card {
            border-radius: 20px;
          }
        }
      `}</style>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={headline}
        className="cq-popup-modal"
        style={{
          transform: animateIn
            ? (typeof window !== 'undefined' && window.innerWidth >= 640
                ? 'translateX(-50%) translateY(-50%) scale(1)'
                : 'translateY(0) scale(1)')
            : (typeof window !== 'undefined' && window.innerWidth >= 640
                ? 'translateX(-50%) translateY(calc(-50% + 40px)) scale(0.95)'
                : 'translateY(40px) scale(0.95)'),
          opacity: animateIn ? 1 : 0,
          transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease',
        }}
      >
        <div
          className="cq-popup-card"
          style={{
            background: colors.gradient,
            overflow: 'hidden',
            boxShadow: '0 -8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)',
            color: '#fff',
            fontFamily: 'var(--font-dm-sans, var(--font-inter, system-ui, sans-serif))',
          }}
        >
          {/* Close button */}
          <button
            onClick={handleDismiss}
            aria-label="Close popup"
            style={{
              position: 'absolute',
              top: 14,
              right: 14,
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '50%',
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'rgba(255,255,255,0.7)',
              transition: 'background 0.15s, color 0.15s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.22)'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
            }}
          >
            <X size={15} strokeWidth={2.5} />
          </button>

          {/* Content */}
          <div style={{ padding: '32px 28px 28px' }}>
            {/* Branding */}
            <div style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 0.5 }}>
                <span style={{ color: '#fff' }}>Cue</span>
                <span style={{ color: '#34D399' }}>Quote</span>
              </span>
              {badge && (
                <span style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 20,
                  padding: '2px 10px',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 0.8,
                  textTransform: 'uppercase',
                  color: colors.accent,
                }}>
                  {badge}
                </span>
              )}
            </div>

            {/* Headline */}
            <h2 style={{
              margin: '0 0 10px',
              fontSize: 'clamp(22px, 5vw, 28px)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: -0.5,
              color: '#fff',
            }}>
              {headline}
            </h2>

            {/* Subtext */}
            <p style={{
              margin: '0 0 20px',
              fontSize: 15,
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.75)',
            }}>
              {subtext}
            </p>

            {/* Seats remaining */}
            {campaign.seats_remaining != null && campaign.seats_remaining > 0 && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 20,
                padding: '10px 14px',
                background: 'rgba(0,0,0,0.2)',
                borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <span style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: colors.accent,
                  flexShrink: 0,
                  boxShadow: `0 0 0 3px ${colors.accent}33`,
                }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
                  <strong style={{ color: colors.accent }}>{campaign.seats_remaining}</strong> seats remaining at this price
                </span>
              </div>
            )}

            {/* Promo code */}
            {campaign.promo_code && (
              <div style={{ marginBottom: 20 }}>
                <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.5)' }}>
                  Your promo code
                </p>
                <code style={{
                  display: 'block',
                  background: 'rgba(0,0,0,0.3)',
                  border: `1px dashed ${colors.accent}66`,
                  borderRadius: 10,
                  padding: '12px 16px',
                  fontSize: 20,
                  fontWeight: 900,
                  letterSpacing: 3,
                  textAlign: 'center',
                  color: colors.accent,
                  fontFamily: 'monospace',
                }}>
                  {campaign.promo_code}
                </code>
              </div>
            )}

            {/* CTA button */}
            <a
              href={campaign.signup_url}
              style={{
                display: 'block',
                width: '100%',
                padding: '15px 24px',
                background: '#fff',
                color: colors.bg,
                borderRadius: 12,
                textAlign: 'center',
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: -0.2,
                textDecoration: 'none',
                transition: 'transform 0.15s, box-shadow 0.15s, opacity 0.15s',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.35)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
              }}
              onClick={handleDismiss}
            >
              {cta}
            </a>

            {/* Dismiss link */}
            <button
              onClick={handleDismiss}
              style={{
                display: 'block',
                width: '100%',
                marginTop: 12,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 13,
                color: 'rgba(255,255,255,0.4)',
                textAlign: 'center',
                padding: '4px 0',
                transition: 'color 0.15s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            >
              No thanks, I&apos;ll pass
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
