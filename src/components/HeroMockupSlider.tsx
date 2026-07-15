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

const plannerItems = [
  { cat: "Audio", name: "PA Speaker System", rangeLow: 1800, rangeHigh: 2800, color: "#8b5cf6", why: "Even coverage for 350 attendees" },
  { cat: "Audio", name: "Wireless Microphones (6)", rangeLow: 600, rangeHigh: 1000, color: "#8b5cf6", why: "Keynote speakers + panel" },
  { cat: "Lighting", name: "Stage Lighting + Uplighting", rangeLow: 2800, rangeHigh: 4700, color: "#f59e0b", why: "Elegant gala ambiance" },
  { cat: "Video", name: "LED Video Wall 3×2m", rangeLow: 3000, rangeHigh: 4500, color: "#3b82f6", why: "Presentations + IMAG" },
  { cat: "Crew", name: "Technical Crew (4)", rangeLow: 2000, rangeHigh: 3300, color: "#10b981", why: "Audio, lighting, video, stage mgr" },
]

export function HeroMockupSlider() {
  const [active, setActive] = useState(0) // 0 = AV, 1 = Planner
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
    <div style={{ maxWidth: 480, width: "100%", position: "relative" }}>
      <div style={{
        background: "#fff", borderRadius: 16, border: "1px solid #e5e7eb",
        boxShadow: "0 20px 60px rgba(0,0,0,0.08)", overflow: "hidden",
        transition: "opacity 0.4s ease",
        opacity: fading ? 0 : 1,
      }}>
        {/* Title bar */}
        <div style={{
          padding: "16px 20px", borderBottom: "1px solid #f3f4f6",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{
              fontSize: 11, color: "#10b981", fontWeight: 600,
              textTransform: "uppercase", letterSpacing: 1,
            }}>
              {active === 0 ? "AI Generated" : "AI Production Plan"}
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#08172E", marginTop: 2 }}>
              {active === 0 ? "Corporate Conference 2026" : "Annual Gala — 350 Guests"}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            {active === 0 ? (
              <div style={{ fontSize: 14, color: "#10b981", fontWeight: 700 }}>€8,540</div>
            ) : (
              <div>
                <div style={{ fontSize: 12, color: "#10b981", fontWeight: 700 }}>€15,000 — €22,000</div>
                <div style={{ fontSize: 9, color: "#94a3b8" }}>estimated budget</div>
              </div>
            )}
          </div>
        </div>

        {/* Items */}
        <div style={{ padding: "8px 0" }}>
          {active === 0 ? (
            // AV Company view — fixed prices
            avItems.map((item, i) => (
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
            ))
          ) : (
            // Event Planner view — budget ranges + "why"
            plannerItems.map((item, i) => (
              <div key={i} style={{
                padding: "10px 20px", fontSize: 13,
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color }} />
                    <div>
                      <div style={{ fontWeight: 500, color: "#111827" }}>{item.name}</div>
                      <div style={{ fontSize: 11, color: "#9ca3af" }}>{item.cat}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: "end" }}>
                    <div style={{ fontWeight: 600, color: "#111827", fontSize: 12 }}>€{item.rangeLow.toLocaleString()} — €{item.rangeHigh.toLocaleString()}</div>
                  </div>
                </div>
                <div style={{ fontSize: 10, color: "#10b981", marginLeft: 18, marginTop: 2, fontWeight: 500 }}>
                  ↳ {item.why}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer label */}
        <div style={{
          padding: "10px 20px", borderTop: "1px solid #f3f4f6",
          fontSize: 10, color: "#94a3b8", textAlign: "center", fontWeight: 500,
        }}>
          {active === 0 ? "For AV Companies — proposal with your prices" : "For Event Planners — production plan with market rates"}
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
        <button
          onClick={() => handleDotClick(0)}
          style={{
            width: active === 0 ? 24 : 8, height: 8, borderRadius: 4,
            background: active === 0 ? "#10b981" : "#d1d5db",
            border: "none", cursor: "pointer", transition: "all 0.3s",
          }}
        />
        <button
          onClick={() => handleDotClick(1)}
          style={{
            width: active === 1 ? 24 : 8, height: 8, borderRadius: 4,
            background: active === 1 ? "#10b981" : "#d1d5db",
            border: "none", cursor: "pointer", transition: "all 0.3s",
          }}
        />
      </div>
    </div>
  )
}
