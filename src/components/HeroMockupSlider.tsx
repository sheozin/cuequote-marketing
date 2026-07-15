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

interface HeroMockupSliderProps {
  avSubtitle: string
  plannerSubtitle: string
  avCta: string
  plannerCta: string
  ctaLink: string
}

export function HeroMockupSlider({ avSubtitle, plannerSubtitle, avCta, plannerCta, ctaLink }: HeroMockupSliderProps) {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setActive(prev => (prev === 0 ? 1 : 0))
        setFading(false)
      }, 400)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const handleDotClick = (idx: number) => {
    if (idx === active) return
    setFading(true)
    setTimeout(() => {
      setActive(idx)
      setFading(false)
    }, 400)
  }

  return (
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48,
      maxWidth: 1100, margin: "0 auto", alignItems: "center",
    }}>
      {/* ═══ LEFT: Text that rotates ═══ */}
      <div style={{ transition: "opacity 0.4s ease", opacity: fading ? 0 : 1 }}>
        <h1 style={{
          fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 44,
          color: "#fff", lineHeight: 1.1, letterSpacing: -1.5, marginBottom: 16,
        }}>
          {active === 0 ? (
            <>Turn event descriptions into <span style={{ color: "#10b981" }}>professional AV proposals</span> in seconds</>
          ) : (
            <>Plan your event&apos;s <span style={{ color: "#10b981" }}>AV production</span> with confidence</>
          )}
        </h1>
        <p style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.6, marginBottom: 28, maxWidth: 440 }}>
          {active === 0 ? avSubtitle : plannerSubtitle}
        </p>
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
          <a href={ctaLink} style={{
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
            padding: "14px 28px", borderRadius: 10, fontWeight: 700, fontSize: 15,
            background: "#10b981", color: "#fff", boxShadow: "0 4px 14px rgba(16,185,129,0.25)",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>
            {active === 0 ? avCta : plannerCta}
          </a>
        </div>
        <p style={{ fontSize: 12, color: "#64748b" }}>
          No credit card required • 3 free {active === 0 ? 'proposals' : 'plans'}/month
        </p>
      </div>

      {/* ═══ RIGHT: Mockup card that rotates ═══ */}
      <div>
        <div style={{
          background: "#fff", borderRadius: 16, border: "1px solid #e5e7eb",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)", overflow: "hidden",
          maxWidth: 480, width: "100%",
          transition: "opacity 0.4s ease", opacity: fading ? 0 : 1,
        }}>
          {active === 0 ? (
            /* ═══ AV COMPANY CARD ═══ */
            <>
              <div style={{ padding: "16px 20px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: 11, color: "#10b981", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>AI Generated Proposal</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#08172E", marginTop: 2 }}>Corporate Conference 2026</div>
                </div>
                <div style={{ fontSize: 14, color: "#10b981", fontWeight: 700 }}>€8,540</div>
              </div>
              <div style={{ padding: "8px 0" }}>
                {avItems.map((item, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "10px 20px", fontSize: 13,
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color }} />
                      <div>
                        <div style={{ fontWeight: 500, color: "#111827" }}>{item.name}</div>
                        <div style={{ fontSize: 11, color: "#9ca3af" }}>{item.cat}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: "end" }}>
                      <div style={{ fontWeight: 600, color: "#111827" }}>€{(item.qty * item.price).toLocaleString()}</div>
                      <div style={{ fontSize: 11, color: "#9ca3af" }}>{item.qty} × €{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: "10px 20px", borderTop: "1px solid #f3f4f6", fontSize: 10, color: "#94a3b8", textAlign: "center" }}>
                For AV Companies — proposal with your catalog prices
              </div>
            </>
          ) : (
            /* ═══ EVENT PLANNER CARD ═══ */
            <>
              <div style={{ padding: "16px 20px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f0fdf4" }}>
                <div>
                  <div style={{ fontSize: 11, color: "#059669", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>AI Production Plan</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#08172E", marginTop: 2 }}>Annual Gala — 350 Guests</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 13, color: "#059669", fontWeight: 700 }}>€15K — €22K</div>
                  <div style={{ fontSize: 9, color: "#94a3b8" }}>estimated budget</div>
                </div>
              </div>

              {/* Scope summary */}
              <div style={{ padding: "12px 20px", borderBottom: "1px solid #f3f4f6", fontSize: 12, color: "#64748b", lineHeight: 1.5, background: "#fafbfc" }}>
                Full AV production for a 350-guest evening gala with keynote, awards, live jazz quartet, and DJ after-party.
              </div>

              {/* Category budgets */}
              <div style={{ padding: "10px 20px" }}>
                {[
                  { icon: "🔊", cat: "Audio & Sound", range: "€4,500 — €6,800", items: "PA, mics, console, engineer" },
                  { icon: "💡", cat: "Lighting", range: "€3,200 — €5,400", items: "Uplighting, moving heads, designer" },
                  { icon: "📺", cat: "Video & Screens", range: "€3,500 — €5,000", items: "LED wall, cameras, operator" },
                  { icon: "👷", cat: "Crew", range: "€2,500 — €4,000", items: "4 crew: audio, lighting, video, stage mgr" },
                ].map((cat, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "8px 0", borderBottom: i < 3 ? "1px solid #f3f4f6" : "none",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 14 }}>{cat.icon}</span>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 600, color: "#08172E" }}>{cat.cat}</div>
                        <div style={{ fontSize: 10, color: "#94a3b8" }}>{cat.items}</div>
                      </div>
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#059669", whiteSpace: "nowrap" }}>{cat.range}</div>
                  </div>
                ))}
              </div>

              {/* Tip */}
              <div style={{
                margin: "0 16px 12px", padding: "8px 12px",
                background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 8,
                fontSize: 10, color: "#92400e", display: "flex", gap: 6, alignItems: "flex-start",
              }}>
                <span style={{ fontSize: 12, flexShrink: 0 }}>💡</span>
                <span>Check if Hilton has AV exclusivity — outside vendor fee may apply</span>
              </div>

              <div style={{ padding: "10px 20px", borderTop: "1px solid #f3f4f6", fontSize: 10, color: "#94a3b8", textAlign: "center" }}>
                For Event Planners — production plan with market rates & tips
              </div>
            </>
          )}
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
          <button onClick={() => handleDotClick(0)} style={{
            width: active === 0 ? 24 : 8, height: 8, borderRadius: 4,
            background: active === 0 ? "#10b981" : "#d1d5db",
            border: "none", cursor: "pointer", transition: "all 0.3s",
          }} />
          <button onClick={() => handleDotClick(1)} style={{
            width: active === 1 ? 24 : 8, height: 8, borderRadius: 4,
            background: active === 1 ? "#10b981" : "#d1d5db",
            border: "none", cursor: "pointer", transition: "all 0.3s",
          }} />
        </div>
      </div>
    </div>
  )
}
