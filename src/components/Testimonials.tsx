'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)

interface Testimonial {
  id: string
  quote: string
  rating: number
  role: string | null
  company_name: string | null
  show_name: boolean
  show_company: boolean
}

const FALLBACK: Testimonial[] = [
  { id: 'f1', quote: 'We used to spend 3 hours on every proposal. Now it takes 15 minutes and looks more professional than anything we created manually.', rating: 5, role: 'Production Manager', company_name: null, show_name: false, show_company: false },
  { id: 'f2', quote: 'The AI understands exactly what equipment a corporate conference needs. It even suggested items we would have forgotten.', rating: 5, role: 'AV Technician', company_name: null, show_name: false, show_company: false },
  { id: 'f3', quote: 'Our clients love the branded PDFs. The proposals look like they came from a design agency, not a small AV company.', rating: 5, role: 'Business Owner', company_name: null, show_name: false, show_company: false },
  { id: 'f4', quote: 'Tracking who viewed our proposals and when they opened the PDF — that alone justified the subscription.', rating: 5, role: 'Sales Director', company_name: null, show_name: false, show_company: false },
  { id: 'f5', quote: 'We switched from spreadsheets to CueQuote. The time saved on quoting lets us focus on actually running events.', rating: 5, role: 'Event Producer', company_name: null, show_name: false, show_company: false },
  { id: 'f6', quote: 'The market-rate budgets feature is perfect for planners. My clients get realistic estimates before we even talk to vendors.', rating: 5, role: 'Event Planner', company_name: null, show_name: false, show_company: false },
]

const HOLD_DURATION = 4000 // 4 seconds per card

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="testimonial-card" style={{
      background: '#f9fafb',
      borderRadius: 16,
      padding: '24px 28px',
      border: '1px solid #f3f4f6',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      <div style={{ display: 'flex', gap: 2, marginBottom: 14 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill={i < t.rating ? '#f59e0b' : '#e5e7eb'} stroke="none">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, flex: 1, fontStyle: 'italic', margin: 0 }}>
        &ldquo;{t.quote}&rdquo;
      </p>
      <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: 12, fontWeight: 700, flexShrink: 0,
          }}>
            {(t.role || 'U')[0].toUpperCase()}
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#08172E', margin: 0 }}>
              {t.role || 'CueQuote User'}
            </p>
            {t.show_company && t.company_name && (
              <p style={{ fontSize: 11, color: '#9ca3af', margin: 0 }}>{t.company_name}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Testimonials({ title, subtitle }: { title: string; subtitle: string }) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    supabase
      .from('user_testimonials')
      .select('id, quote, rating, role, company_name, show_name, show_company')
      .eq('is_approved', true)
      .order('rating', { ascending: false })
      .limit(10)
      .then(({ data }) => {
        if (data && data.length > 0) {
          const needed = Math.max(0, 4 - data.length)
          setTestimonials([...data, ...FALLBACK.slice(0, needed)])
        } else {
          setTestimonials(FALLBACK)
        }
      })
  }, [])

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current
    if (!el) return
    const cards = el.querySelectorAll<HTMLElement>('.snap-card')
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }
    setActive(index)
  }, [])

  // Auto-advance
  useEffect(() => {
    if (paused || testimonials.length === 0) return
    timerRef.current = setTimeout(() => {
      const next = (active + 1) % testimonials.length
      scrollTo(next)
    }, HOLD_DURATION)
    return () => clearTimeout(timerRef.current)
  }, [active, paused, testimonials.length, scrollTo])

  // Detect manual scroll → update active dot
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let scrollTimer: ReturnType<typeof setTimeout>
    const onScroll = () => {
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        const cards = el.querySelectorAll<HTMLElement>('.snap-card')
        const scrollLeft = el.scrollLeft
        const cardWidth = cards[0]?.offsetWidth || 1
        const gap = 20
        const idx = Math.round(scrollLeft / (cardWidth + gap))
        if (idx !== active && idx >= 0 && idx < testimonials.length) {
          setActive(idx)
        }
      }, 100)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => { el.removeEventListener('scroll', onScroll); clearTimeout(scrollTimer) }
  }, [active, testimonials.length])

  if (testimonials.length === 0) return null

  return (
    <section style={{ padding: '80px 0', background: '#fff', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{
            fontFamily: 'var(--font-dm-sans)', fontSize: 36, fontWeight: 800,
            color: '#08172E', marginBottom: 12,
          }}>
            {title}
          </h2>
          <p style={{ fontSize: 16, color: '#6b7280', maxWidth: 500, margin: '0 auto' }}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div
        style={{ position: 'relative' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => { setTimeout(() => setPaused(false), 2000) }}
      >
        {/* Fade edges */}
        <div className="testimonial-fade-left" />
        <div className="testimonial-fade-right" />

        <div
          ref={scrollRef}
          className="testimonial-scroll"
          style={{
            display: 'flex',
            gap: 20,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            paddingLeft: 'max(24px, calc((100vw - 1200px) / 2 + 24px))',
            paddingRight: 'max(24px, calc((100vw - 1200px) / 2 + 24px))',
            paddingBottom: 8,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="snap-card"
              style={{
                scrollSnapAlign: 'start',
                flexShrink: 0,
                width: 'clamp(300px, 80vw, 380px)',
              }}
            >
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 20 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              style={{
                width: active === i ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: active === i ? '#10b981' : '#d1d5db',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Progress bar under active dot */}
        {!paused && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
            <div style={{ width: 48, height: 2, background: '#e5e7eb', borderRadius: 1, overflow: 'hidden' }}>
              <div
                key={active}
                style={{
                  height: '100%',
                  background: '#10b981',
                  borderRadius: 1,
                  animation: `testimonial-progress ${HOLD_DURATION}ms linear`,
                }}
              />
            </div>
          </div>
        )}
      </div>

      <style>{`
        .testimonial-scroll::-webkit-scrollbar { display: none; }
        .testimonial-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .testimonial-fade-left, .testimonial-fade-right {
          position: absolute; top: 0; bottom: 0; width: 60px; z-index: 2; pointer-events: none;
        }
        .testimonial-fade-left { left: 0; background: linear-gradient(to right, #fff, transparent); }
        .testimonial-fade-right { right: 0; background: linear-gradient(to left, #fff, transparent); }
        @keyframes testimonial-progress {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  )
}
