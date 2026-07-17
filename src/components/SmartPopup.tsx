'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { createClient } from '@supabase/supabase-js'
import { X } from 'lucide-react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://rurazinghbfskuoeikwi.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1cmF6aW5naGJmc2t1b2Vpa3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMTI2MDAsImV4cCI6MjA5MDc4ODYwMH0.lWiRDtQdkYFzs_R1Rnvb9jMcdDpo_a68yDY_dEbwseU'
)

interface PopupCampaign {
  id: string
  phase: 'launch' | 'early_bird' | 'urgency' | 'exclusive' | 'last_call'
  trigger_type: 'timed' | 'scroll' | 'exit_intent' | 'returning' | 'all'
  variants: Array<{ headline: string; subtext: string; cta: string; badge?: string }>
  variant_count: number
  seats_remaining: number | null
  promo_code: string | null
  discount_pct: number | null
  signup_url: string
}

const PHASE_COLORS: Record<string, { bg: string; gradient: string; accent: string }> = {
  launch:     { bg: '#0F172A', gradient: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', accent: '#38BDF8' },
  early_bird: { bg: '#064E3B', gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)', accent: '#6EE7B7' },
  urgency:    { bg: '#7F1D1D', gradient: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)', accent: '#FCA5A5' },
  exclusive:  { bg: '#4C1D95', gradient: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)', accent: '#C4B5FD' },
  last_call:  { bg: '#7F1D1D', gradient: 'linear-gradient(135deg, #7F1D1D 0%, #991B1B 100%)', accent: '#FCA5A5' },
}

const STARTER_PRICE = 29

const LS_DISMISSED_PREFIX = 'cq_popup_dismissed_'
const LS_VISITED_KEY = 'cq_visited_before'
const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000

const POPUP_CSS = `
.cq-popup-backdrop {
  position: fixed; inset: 0; z-index: 9998;
  background: rgba(0,0,0,0.65);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
}
.cq-popup-backdrop[data-animate="true"] { opacity: 1; }
.cq-popup-backdrop[data-animate="false"] { opacity: 0; }
.cq-popup-backdrop { transition: opacity 0.3s ease; }

.cq-popup-wrap {
  position: fixed; z-index: 9999;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: none;
  padding: 0;
}
@media (min-width: 640px) {
  .cq-popup-wrap {
    align-items: center;
    padding: 24px;
  }
}

.cq-popup-dialog {
  pointer-events: auto;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08);
  position: relative;
}
@media (min-width: 640px) {
  .cq-popup-dialog {
    max-width: 520px;
    border-radius: 20px;
    box-shadow: 0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08);
  }
}

.cq-popup-dialog[data-animate="true"] {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.cq-popup-dialog[data-animate="false"] {
  opacity: 0;
  transform: translateY(30px) scale(0.97);
}
.cq-popup-dialog {
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
}
`

export default function SmartPopup() {
  const [campaign, setCampaign] = useState<PopupCampaign | null>(null)
  const [visible, setVisible] = useState(false)
  const [animateIn, setAnimateIn] = useState(false)
  const triggeredRef = useRef(false)

  useEffect(() => {
    supabase.rpc('get_active_popup_campaign').then(({ data, error }) => {
      if (error) { console.error('[SmartPopup] RPC error:', error); return }
      const camp = (Array.isArray(data) ? data[0] : data) as PopupCampaign | undefined
      console.log('[SmartPopup] Campaign data:', camp ? camp.phase : 'none')
      if (!camp) return

      const dismissedRaw = localStorage.getItem(`${LS_DISMISSED_PREFIX}${camp.id}`)
      if (dismissedRaw) {
        const dismissedAt = parseInt(dismissedRaw, 10)
        if (Date.now() - dismissedAt < THREE_DAYS_MS) return
      }

      const hasVisitedBefore = localStorage.getItem(LS_VISITED_KEY) === 'true'
      if (camp.trigger_type === 'returning' && !hasVisitedBefore) {
        localStorage.setItem(LS_VISITED_KEY, 'true')
        return
      }
      localStorage.setItem(LS_VISITED_KEY, 'true')

      // Variant rotation: increment visit count, pick variant by modulo
      const visitCount = parseInt(localStorage.getItem('cq_popup_visit_count') || '0', 10)
      localStorage.setItem('cq_popup_visit_count', String(visitCount + 1))
      const variantIdx = visitCount % camp.variant_count
      // Attach selected variant for render convenience
      ;(camp as PopupCampaign & { _variantIdx: number })._variantIdx = variantIdx

      setCampaign(camp)
    })
  }, [])

  const showPopup = useCallback(() => {
    if (triggeredRef.current) return
    triggeredRef.current = true
    setVisible(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimateIn(true))
    })
  }, [])

  useEffect(() => {
    if (!campaign) return
    const type = campaign.trigger_type
    let timer: ReturnType<typeof setTimeout> | null = null
    let scrollHandler: (() => void) | null = null
    let mouseHandler: ((e: MouseEvent) => void) | null = null

    if (type === 'timed') timer = setTimeout(showPopup, 10_000)
    else if (type === 'returning') timer = setTimeout(showPopup, 5_000)
    else if (type === 'all') timer = setTimeout(showPopup, 10_000)
    else if (type === 'scroll') {
      scrollHandler = () => {
        const pct = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight
        if (pct >= 0.6) showPopup()
      }
      window.addEventListener('scroll', scrollHandler, { passive: true })
    } else if (type === 'exit_intent') {
      mouseHandler = (e: MouseEvent) => { if (e.clientY <= 0) showPopup() }
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
  const variantIdx = (campaign as PopupCampaign & { _variantIdx?: number })._variantIdx ?? 0
  const { headline, subtext, cta, badge } = campaign.variants[variantIdx] ?? campaign.variants[0]
  const discountPct = campaign.discount_pct ?? 0
  const discountedPrice = discountPct > 0
    ? Math.round(STARTER_PRICE * (1 - discountPct / 100))
    : null

  return (
    <>
      <style>{POPUP_CSS}</style>

      {/* Backdrop */}
      <div className="cq-popup-backdrop" data-animate={String(animateIn)} onClick={handleDismiss} aria-hidden="true" />

      {/* Centered wrapper */}
      <div className="cq-popup-wrap">
        <div
          role="dialog"
          aria-modal="true"
          aria-label={headline}
          className="cq-popup-dialog"
          data-animate={String(animateIn)}
          style={{ background: colors.gradient, color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          {/* Close */}
          <button
            onClick={handleDismiss}
            aria-label="Close"
            style={{
              position: 'absolute', top: 14, right: 14, zIndex: 1,
              background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '50%', width: 34, height: 34,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'rgba(255,255,255,0.7)',
            }}
          >
            <X size={16} strokeWidth={2.5} />
          </button>

          <div style={{ padding: '36px 32px 32px' }}>
            {/* Brand + badge */}
            <div style={{ marginBottom: 22, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: 0.3 }}>
                <span style={{ color: '#fff' }}>Cue</span>
                <span style={{ color: '#34D399' }}>Quote</span>
              </span>
              {badge && (
                <span style={{
                  background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 20, padding: '3px 12px',
                  fontSize: 11, fontWeight: 700, letterSpacing: 0.8,
                  textTransform: 'uppercase', color: colors.accent,
                }}>
                  {badge}
                </span>
              )}
            </div>

            {/* Headline */}
            <h2 style={{ margin: '0 0 12px', fontSize: 30, fontWeight: 800, lineHeight: 1.15, letterSpacing: -0.5 }}>
              {headline}
            </h2>

            {/* Subtext */}
            <p style={{ margin: '0 0 22px', fontSize: 16, lineHeight: 1.5, color: 'rgba(255,255,255,0.75)' }}>
              {subtext}
            </p>

            {/* Pricing — show discount */}
            {discountedPrice && (
              <div style={{
                display: 'flex', alignItems: 'baseline', gap: 12,
                marginBottom: 22, padding: '14px 18px',
                background: 'rgba(0,0,0,0.25)', borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <div>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through' }}>
                    €{STARTER_PRICE}/mo
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: 32, fontWeight: 900, color: colors.accent }}>€{discountedPrice}</span>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>/mo</span>
                </div>
                <span style={{
                  background: colors.accent + '22', border: `1px solid ${colors.accent}44`,
                  borderRadius: 8, padding: '2px 8px',
                  fontSize: 12, fontWeight: 700, color: colors.accent,
                }}>
                  {discountPct}% OFF
                </span>
              </div>
            )}

            {/* Seats remaining */}
            {campaign.seats_remaining != null && campaign.seats_remaining > 0 && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                marginBottom: 22, padding: '10px 14px',
                background: 'rgba(0,0,0,0.2)', borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: colors.accent, flexShrink: 0,
                  animation: 'pulse 2s infinite',
                }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
                  <strong style={{ color: colors.accent }}>{campaign.seats_remaining}</strong> seats remaining at this price
                </span>
              </div>
            )}

            {/* Promo code */}
            {campaign.promo_code && (
              <div style={{ marginBottom: 22 }}>
                <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.5)' }}>
                  Your promo code
                </p>
                <code style={{
                  display: 'block', background: 'rgba(0,0,0,0.3)',
                  border: `1px dashed ${colors.accent}66`, borderRadius: 10,
                  padding: '14px 16px', fontSize: 22, fontWeight: 900,
                  letterSpacing: 4, textAlign: 'center',
                  color: colors.accent, fontFamily: 'monospace',
                }}>
                  {campaign.promo_code}
                </code>
              </div>
            )}

            {/* CTA */}
            <a
              href={campaign.signup_url}
              onClick={handleDismiss}
              style={{
                display: 'block', width: '100%', padding: '16px 24px',
                background: '#fff', color: colors.bg,
                borderRadius: 12, textAlign: 'center',
                fontWeight: 800, fontSize: 17, letterSpacing: -0.2,
                textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              {cta}
            </a>

            {/* Dismiss */}
            <button
              onClick={handleDismiss}
              style={{
                display: 'block', width: '100%', marginTop: 14,
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 13, color: 'rgba(255,255,255,0.4)',
                textAlign: 'center', padding: '4px 0',
              }}
            >
              No thanks, I&apos;ll pass
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
