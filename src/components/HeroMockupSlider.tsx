'use client'
import { useState, useEffect } from 'react'

const avItems = [
  { cat: "Audio", name: "Line Array Speaker System", qty: 2, price: 1200, color: "#8b5cf6" },
  { cat: "Audio", name: "Wireless Handheld Microphone", qty: 4, price: 120, color: "#8b5cf6" },
  { cat: "Video", name: "LED Wall Panel (P2.6)", qty: 12, price: 350, color: "#3b82f6" },
  { cat: "Video", name: "HD PTZ Camera", qty: 3, price: 400, color: "#3b82f6" },
  { cat: "Lighting", name: "LED Wash Light", qty: 16, price: 80, color: "#f59e0b" },
  { cat: "Labor", name: "AV Technician", qty: 2, price: 450, color: "#10b981" },
]

// Lucide SVG paths for categories (matching app icons)
const catIcons: Record<string, { color: string; bg: string; path: string }> = {
  audio: { color: "#7c3aed", bg: "#f3e8ff", path: "M11 5L6 9H2v6h4l5 4V5z M19.07 4.93a10 10 0 0 1 0 14.14 M15.54 8.46a5 5 0 0 1 0 7.07" },
  lighting: { color: "#d97706", bg: "#fef3c7", path: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5 M9 18h6 M10 22h4" },
  video: { color: "#2563eb", bg: "#dbeafe", path: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" },
  crew: { color: "#059669", bg: "#ecfdf5", path: "M12 2a4 4 0 0 0-4 4v2.5C8 10.5 9 12 12 12s4-1.5 4-3.5V6a4 4 0 0 0-4-4z M20 17.5c0-2.5-3.4-4-8-4s-8 1.5-8 4V20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2.5z" },
}

function CatIcon({ type, size = 16 }: { type: string; size?: number }) {
  const cfg = catIcons[type] || catIcons.audio
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={cfg.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={cfg.path} />
    </svg>
  )
}

interface HeroMockupSliderProps {
  avSubtitle: string
  plannerSubtitle: string
  avCta: string
  plannerCta: string
  ctaLink: string
  t: Record<string, string> // all hero.* translations
}

export function HeroMockupSlider({ avSubtitle, plannerSubtitle, avCta, plannerCta, ctaLink, t }: HeroMockupSliderProps) {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => { setActive(prev => (prev === 0 ? 1 : 0)); setFading(false) }, 400)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const handleDotClick = (idx: number) => {
    if (idx === active) return
    setFading(true)
    setTimeout(() => { setActive(idx); setFading(false) }, 400)
  }

  const categories = [
    { key: "audio", range: "€4,500 — €6,800" },
    { key: "lighting", range: "€3,200 — €5,400" },
    { key: "video", range: "€3,500 — €5,000" },
    { key: "crew", range: "€2,500 — €4,000" },
  ]

  return (
    <div className="hero-slider-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
      {/* LEFT: Text */}
      {/* min-height covers the taller of the two slides. Without it the column resized on
          every auto-rotation, moving the whole page ~25px every 6s — most of the mobile CLS. */}
      <div className="hero-slider-text" style={{ transition: "opacity 0.4s ease", opacity: fading ? 0 : 1 }}>
        <h1 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 44, color: "#fff", lineHeight: 1.1, letterSpacing: -1.5, marginBottom: 16 }}>
          {active === 0 ? (
            <>{t.title} <span style={{ color: "#10b981" }}>{t.titleHighlight}</span> {t.titleEnd}</>
          ) : (
            <>{t.plannerHeadline1} <span style={{ color: "#10b981" }}>{t.plannerHeadline2}</span> {t.plannerHeadline3}</>
          )}
        </h1>
        <p style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.6, marginBottom: 28, maxWidth: 440 }}>
          {active === 0 ? avSubtitle : plannerSubtitle}
        </p>
        <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
          <a href={ctaLink} style={{
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
            padding: "14px 28px", borderRadius: 10, fontWeight: 700, fontSize: 15,
            background: "#10b981", color: "#fff", boxShadow: "0 4px 14px rgba(16,185,129,0.25)",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>
            {active === 0 ? avCta : plannerCta}
          </a>
        </div>
        <p style={{ fontSize: 12, color: "#94a3b8" }}>
          {t.plannerNoCreditCard || 'No credit card required'} • {active === 0 ? (t.freeProposals || '3 free proposals/month') : (t.plannerFreePlans || '3 free plans/month')}
        </p>
      </div>

      {/* RIGHT: Card */}
      <div>
        <div className="hero-slider-card" style={{
          background: "#fff", borderRadius: 16, border: "1px solid #e5e7eb",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)", overflow: "hidden",
          maxWidth: 480, width: "100%", transition: "opacity 0.4s ease", opacity: fading ? 0 : 1,
        }}>
          {active === 0 ? (
            <>
              <div style={{ padding: "16px 20px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: 11, color: "#10b981", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{t.heroAvGenerated || 'AI Generated Proposal'}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#08172E", marginTop: 2 }}>{t.heroAvEvent || 'Corporate Conference 2026'}</div>
                </div>
                <div style={{ fontSize: 14, color: "#10b981", fontWeight: 700 }}>€8,540</div>
              </div>
              <div style={{ padding: "8px 0" }}>
                {avItems.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 20px", fontSize: 13 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color }} />
                      <div>
                        <div style={{ fontWeight: 500, color: "#111827" }}>{item.name}</div>
                        <div style={{ fontSize: 11, color: "#6b7280" }}>{item.cat}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: "end" }}>
                      <div style={{ fontWeight: 600, color: "#111827" }}>€{(item.qty * item.price).toLocaleString()}</div>
                      <div style={{ fontSize: 11, color: "#6b7280" }}>{item.qty} × €{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: "10px 20px", borderTop: "1px solid #f3f4f6", fontSize: 10, color: "#6b7280", textAlign: "center" }}>
                {t.heroAvFooter || 'For AV Companies — proposal with your catalog prices'}
              </div>
            </>
          ) : (
            <>
              <div style={{ padding: "16px 20px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f0fdf4" }}>
                <div>
                  <div style={{ fontSize: 11, color: "#059669", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{t.heroPlannerGenerated || 'AI Production Plan'}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#08172E", marginTop: 2 }}>{t.heroPlannerEvent || 'Annual Gala — 350 Guests'}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 13, color: "#059669", fontWeight: 700 }}>€15K — €22K</div>
                  <div style={{ fontSize: 9, color: "#6b7280" }}>{t.heroPlannerEstimated || 'estimated budget'}</div>
                </div>
              </div>
              <div style={{ padding: "12px 20px", borderBottom: "1px solid #f3f4f6", fontSize: 12, color: "#64748b", lineHeight: 1.5, background: "#fafbfc" }}>
                {t.heroPlannerScope || 'Full production plan for a 350-guest evening gala with keynote, awards, live jazz quartet, and DJ after-party.'}
              </div>
              <div style={{ padding: "10px 20px" }}>
                {categories.map((cat, i) => {
                  const cfg = catIcons[cat.key] || catIcons.audio
                  const catName = t[`heroCat${cat.key.charAt(0).toUpperCase() + cat.key.slice(1)}`] || cat.key
                  const catItems = t[`heroCat${cat.key.charAt(0).toUpperCase() + cat.key.slice(1)}Items`] || ''
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: i < 3 ? "1px solid #f3f4f6" : "none" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 28, height: 28, borderRadius: 7, background: cfg.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <CatIcon type={cat.key} size={14} />
                        </div>
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 600, color: "#08172E" }}>{catName}</div>
                          <div style={{ fontSize: 10, color: "#6b7280" }}>{catItems}</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#059669", whiteSpace: "nowrap" }}>{cat.range}</div>
                    </div>
                  )
                })}
              </div>
              <div style={{ margin: "0 16px 12px", padding: "8px 12px", background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 8, fontSize: 10, color: "#92400e", display: "flex", gap: 6, alignItems: "flex-start" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <span>{t.heroPlannerTip || 'Check if your venue has AV exclusivity'}</span>
              </div>
              <div style={{ padding: "10px 20px", borderTop: "1px solid #f3f4f6", fontSize: 10, color: "#6b7280", textAlign: "center" }}>
                {t.heroPlannerFooter || 'For Event Planners — complete production plan with budget & tips'}
              </div>
            </>
          )}
        </div>
        {/* The dot stays small; the button around it is a 24px tap target with a label. */}
        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginTop: 8 }}>
          {[t.heroAvGenerated || "AI Generated Proposal", t.heroPlannerGenerated || "AI Production Plan"].map((label, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              aria-label={label}
              aria-current={active === i}
              style={{
                width: 24, height: 24, padding: 0, display: "flex", alignItems: "center",
                justifyContent: "center", background: "none", border: "none", cursor: "pointer",
              }}
            >
              <span style={{
                display: "block", width: active === i ? 24 : 8, height: 8, borderRadius: 4,
                background: active === i ? "#10b981" : "#d1d5db", transition: "all 0.3s",
              }} />
            </button>
          ))}
        </div>
      </div>
      <style>{`
        /* Both slides must reserve the height of the taller one, or the auto-rotation
           resizes the hero every 6s and drags the whole page with it. The floors step up
           as the viewport narrows because the copy wraps onto more lines; values come
           from measuring both slides in all five locales at each width. */
        .hero-slider-text { min-height: 340px; }
        .hero-slider-card { min-height: 520px; }
        @media (max-width: 768px) {
          .hero-slider-text { min-height: 390px; }
          .hero-slider-card { min-height: 545px; }
          .hero-slider-grid { grid-template-columns: 1fr !important; gap: 32px !important; text-align: center; }
          .hero-slider-grid h1 { font-size: 28px !important; }
          .hero-slider-grid p { max-width: 100% !important; }
        }
        @media (max-width: 375px) {
          .hero-slider-text { min-height: 415px; }
          .hero-slider-card { min-height: 570px; }
        }
        @media (max-width: 340px) {
          .hero-slider-text { min-height: 445px; }
          .hero-slider-card { min-height: 605px; }
        }
      `}</style>
    </div>
  )
}
