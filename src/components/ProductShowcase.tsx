'use client'
import { useState, useRef, useEffect } from 'react'
import { Volume2, CalendarCheck } from 'lucide-react'

interface ShowcaseContent {
  badge: { icon: 'av' | 'planner'; label: string }
  heading: string
  description: string
  bullets: string[]
  screenshot: { src: string; alt: string }
}

interface ProductShowcaseProps {
  av: ShowcaseContent
  planner: ShowcaseContent
  /** 'light' = white bg side-by-side | 'dark' = dark bg centered */
  variant: 'light' | 'dark'
  /** For light variant: 'text-left' or 'text-right' */
  textSide?: 'left' | 'right'
  id?: string
  toggleLabels?: { av: string; planner: string; hint: string }
}

export function ProductShowcase({ av, planner, variant, textSide = 'left', id, toggleLabels }: ProductShowcaseProps) {
  const [mode, setMode] = useState<'av' | 'planner'>('av')
  const [transitioning, setTransitioning] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const toggleRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const autoSwitched = useRef(false)

  // Auto-switch removed — caused layout shifts and page jumping on mobile.
  // The toggle hint ("Switch to see planner view →") is sufficient.

  const handleSwitch = (newMode: 'av' | 'planner') => {
    if (newMode === mode) return
    setHasInteracted(true)
    setTransitioning(true)
    setTimeout(() => {
      setMode(newMode)
      setTransitioning(false)
    }, 200)
  }

  const content = mode === 'av' ? av : planner
  const inactiveContent = mode === 'av' ? planner : av
  const accentColor = mode === 'av' ? '#10b981' : '#8B5CF6'
  const accentColorLight = mode === 'av' ? '#ecfdf5' : '#f5f3ff'
  const accentColorDark = mode === 'av' ? '#34d399' : '#C4B5FD'
  const checkColor = mode === 'av' ? '#10B981' : '#8B5CF6'

  // Toggle pill with motion effects
  const toggle = (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', marginBottom: 28 }}>
      <div ref={toggleRef} style={{
        display: 'inline-flex', alignItems: 'center', gap: 4,
        background: '#0F172A', borderRadius: 12, padding: 4,
        position: 'relative',
      }}>
        <button
          onClick={() => handleSwitch('av')}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600,
            border: 'none', cursor: 'pointer', transition: 'all 0.25s ease',
            background: mode === 'av' ? '#10b981' : 'transparent',
            color: mode === 'av' ? '#fff' : '#94a3b8',
            position: 'relative', zIndex: 1,
          }}
        >
          <Volume2 size={14} />
          {toggleLabels?.av || 'AV Companies'}
        </button>
        <button
          onClick={() => handleSwitch('planner')}
          className={!hasInteracted ? 'showcase-pulse' : ''}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600,
            border: 'none', cursor: 'pointer', transition: 'all 0.25s ease',
            background: mode === 'planner' ? '#8B5CF6' : 'transparent',
            color: mode === 'planner' ? '#fff' : '#94a3b8',
            position: 'relative', zIndex: 1,
          }}
        >
          <CalendarCheck size={14} />
          {toggleLabels?.planner || 'Event Planners'}
        </button>
        {/* Sliding dot indicator */}
        <div style={{
          position: 'absolute', bottom: -10, height: 3, borderRadius: 2,
          width: 24, transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          left: mode === 'av' ? 'calc(25% - 12px)' : 'calc(75% - 12px)',
          background: mode === 'av' ? '#10b981' : '#8B5CF6',
        }} />
      </div>
      {/* Arrow hint — disappears after first interaction */}
      {!hasInteracted && (
        <div className="showcase-arrow-hint" style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          fontSize: 11, color: '#64748b', marginTop: 14,
        }}>
          {toggleLabels?.hint || 'Switch to see planner view →'}
        </div>
      )}
    </div>
  )

  if (variant === 'dark') {
    const bgGradient = mode === 'av'
      ? 'linear-gradient(180deg, #08172E 0%, #0d2240 100%)'
      : 'linear-gradient(180deg, #1E0A3C 0%, #0F172A 100%)'
    const glowColor = mode === 'av'
      ? 'rgba(16,185,129,0.1)'
      : 'rgba(139,92,246,0.12)'
    const glowBottom = mode === 'av'
      ? 'rgba(16,185,129,0.25)'
      : 'rgba(139,92,246,0.2)'
    const pillBg = mode === 'av'
      ? 'rgba(16,185,129,0.15)'
      : 'rgba(139,92,246,0.15)'
    const checkBulletBg = mode === 'av'
      ? 'rgba(16,185,129,0.15)'
      : 'rgba(139,92,246,0.2)'

    return (
      <section ref={sectionRef} id={id} className="showcase-section-dark" style={{
        position: 'relative', overflow: 'hidden',
        background: bgGradient,
        transition: 'background 0.5s ease',
      }}>
        {/* Glow */}
        <div style={{
          position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 600, height: 400, borderRadius: '50%',
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          filter: 'blur(80px)', pointerEvents: 'none',
          transition: 'background 0.5s ease',
        }} />

        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {toggle}

          {/* Grid overlay: active child is relative, inactive is absolute (no height contribution) */}
          <div style={{ display: 'grid', position: 'relative' }}>
            {[content, inactiveContent].map((c, idx) => {
              const isActive = idx === 0
              const cAccentDark = c === av ? '#34d399' : '#C4B5FD'
              const cPillBg = c === av ? 'rgba(16,185,129,0.15)' : 'rgba(139,92,246,0.15)'
              const cGlowBottom = c === av ? 'rgba(16,185,129,0.25)' : 'rgba(139,92,246,0.2)'
              return (
                <div key={idx} style={{
                  gridArea: '1 / 1',
                  display: isActive ? 'block' : 'none',
                }}>
                  {/* Badge */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: cPillBg, borderRadius: 20, padding: '6px 14px', marginBottom: 20,
                    transition: 'background 0.3s ease',
                  }}>
                    {c.badge.icon === 'av'
                      ? <Volume2 size={14} style={{ color: cAccentDark }} />
                      : <CalendarCheck size={14} style={{ color: cAccentDark }} />
                    }
                    <span style={{ fontSize: 12, fontWeight: 700, color: cAccentDark, textTransform: 'uppercase', letterSpacing: 1.5 }}>
                      {c.badge.label}
                    </span>
                  </div>

                  <h2 style={{
                    fontFamily: 'var(--font-dm-sans)', fontWeight: 800, fontSize: 36, color: '#fff',
                    lineHeight: 1.15, marginBottom: 16,
                  }}>
                    {c.heading}
                  </h2>
                  <p style={{
                    fontSize: 17, color: '#94a3b8', lineHeight: 1.7,
                    maxWidth: 620, margin: '0 auto 48px',
                  }}>
                    {c.description}
                  </p>

                  {/* Screenshot */}
                  <div style={{ position: 'relative', maxWidth: 520, margin: '0 auto 48px' }}>
                    <div style={{
                      position: 'absolute', bottom: -20, left: '10%', right: '10%', height: 60,
                      background: `radial-gradient(ellipse, ${cGlowBottom} 0%, transparent 70%)`,
                      filter: 'blur(20px)', pointerEvents: 'none',
                    }} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.screenshot.src}
                      alt={c.screenshot.alt}
                      className="showcase-tilt"
                      style={{
                        width: '100%', borderRadius: 16, position: 'relative', zIndex: 1,
                        boxShadow: '0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)',
                      }}
                    />
                  </div>

                  {/* Feature pills */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
                    {c.bullets.map(item => (
                      <div key={item} style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 10, padding: '10px 16px',
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={cAccentDark} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        <span style={{ fontSize: 14, color: '#cbd5e1', fontWeight: 500 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <style>{`
          .showcase-section-dark { padding: 120px 24px; }
          .showcase-tilt { transform: perspective(1200px) rotateY(-2deg) rotateX(2deg); transition: transform 0.4s ease; }
          .showcase-tilt:hover { transform: perspective(1200px) rotateY(0deg) rotateX(0deg); }
          @keyframes showcase-pulse-anim { 0%, 100% { background: transparent; } 50% { background: rgba(139,92,246,0.15); } }
          @keyframes showcase-arrow-bounce { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(6px); } }
          .showcase-pulse { animation: showcase-pulse-anim 2s ease-in-out infinite; }
          .showcase-arrow-hint { animation: showcase-arrow-bounce 1.5s ease-in-out infinite; }
          @media (max-width: 900px) {
            .showcase-tilt { transform: none; }
          }
          @media (max-width: 768px) {
            .showcase-section-dark { padding: 64px 20px; }
          }
        `}</style>
      </section>
    )
  }

  // ── Light variant: side-by-side ──
  const isReversed = textSide === 'right'

  return (
    <section ref={sectionRef} id={id} className="showcase-section-light" style={{
      position: 'relative', overflow: 'hidden',
      background: `linear-gradient(180deg, ${mode === 'av' ? '#f0fdf4' : '#f5f3ff'} 0%, #f9fafb 40%, #fff 100%)`,
      borderTop: `3px solid ${accentColor}`,
      transition: 'background 0.5s ease, border-color 0.5s ease',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Toggle — centered above content */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          {toggle}
        </div>

        {/* Grid overlay: both variants rendered, container = taller child height */}
        <div style={{ display: 'grid' }}>
          {[content, inactiveContent].map((c, idx) => {
            const isActive = idx === 0
            const cAccent = c === av ? '#10b981' : '#8B5CF6'
            const cAccentLight = c === av ? '#ecfdf5' : '#f5f3ff'
            const cCheck = c === av ? '#10B981' : '#8B5CF6'
            return (
              <div
                key={idx}
                className={`showcase-row ${isReversed ? 'showcase-row-reverse' : ''}`}
                style={{
                  gridArea: '1 / 1',
                  display: isActive ? 'flex' : 'none',
                  alignItems: 'center', gap: 80,
                }}
              >
                {/* Screenshot side */}
                <div style={{ flex: '1 1 520px', position: 'relative' }}>
                  {/* Decorative accent line */}
                  <div style={{
                    position: 'absolute', top: -20, left: -20, width: 80, height: 80,
                    borderLeft: `3px solid ${c === av ? 'rgba(16,185,129,0.2)' : 'rgba(139,92,246,0.2)'}`,
                    borderTop: `3px solid ${c === av ? 'rgba(16,185,129,0.2)' : 'rgba(139,92,246,0.2)'}`,
                    borderRadius: '12px 0 0 0', pointerEvents: 'none',
                  }} />
                  {/* Glow behind screenshot */}
                  <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '90%', height: '80%', borderRadius: 40,
                    background: `radial-gradient(ellipse, ${c === av ? 'rgba(16,185,129,0.12)' : 'rgba(139,92,246,0.1)'} 0%, transparent 70%)`,
                    filter: 'blur(40px)', pointerEvents: 'none',
                  }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.screenshot.src}
                    alt={c.screenshot.alt}
                    style={{
                      width: '100%', borderRadius: 16, position: 'relative', zIndex: 1,
                      boxShadow: '0 25px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.06)',
                    }}
                  />
                </div>

                {/* Text side */}
                <div style={{ flex: '1 1 360px' }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: cAccentLight, borderRadius: 20, padding: '6px 14px', marginBottom: 20,
                  }}>
                    {c.badge.icon === 'av'
                      ? <Volume2 size={14} style={{ color: cAccent }} />
                      : <CalendarCheck size={14} style={{ color: cAccent }} />
                    }
                    <span style={{ fontSize: 12, fontWeight: 700, color: cAccent, textTransform: 'uppercase', letterSpacing: 1.5 }}>
                      {c.badge.label}
                    </span>
                  </div>
                  <h2 style={{
                    fontFamily: 'var(--font-dm-sans)', fontWeight: 800, fontSize: 36, color: '#08172E',
                    lineHeight: 1.15, marginBottom: 20,
                  }}>
                    {c.heading}
                  </h2>
                  <p style={{
                    fontSize: 17, color: '#6b7280', lineHeight: 1.7, marginBottom: 32,
                  }}>
                    {c.description}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {c.bullets.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{
                          width: 22, height: 22, borderRadius: '50%', background: cAccentLight,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={cCheck} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <span style={{ fontSize: 15, color: '#374151', fontWeight: 500 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .showcase-section-light { padding: 120px 24px; }
        .showcase-row { flex-wrap: wrap; }
        .showcase-row-reverse { flex-direction: row-reverse; }
        @keyframes showcase-pulse-anim { 0%, 100% { background: transparent; } 50% { background: rgba(139,92,246,0.15); } }
        @keyframes showcase-arrow-bounce { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(6px); } }
        .showcase-pulse { animation: showcase-pulse-anim 2s ease-in-out infinite; }
        .showcase-arrow-hint { animation: showcase-arrow-bounce 1.5s ease-in-out infinite; }
        @media (max-width: 900px) {
          .showcase-row { flex-direction: column-reverse !important; gap: 32px !important; }
          .showcase-row-reverse { flex-direction: column !important; gap: 32px !important; }
          .showcase-row > div, .showcase-row-reverse > div {
            flex: none !important;
            width: 100% !important;
          }
        }
        @media (max-width: 768px) {
          .showcase-section-light { padding: 64px 20px; }
        }
      `}</style>
    </section>
  )
}
