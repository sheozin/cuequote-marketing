'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
)

interface Testimonial {
  id: string
  quote: string
  rating: number
  role: string | null
  company_name: string | null
  show_name: boolean
  show_company: boolean
  user_name?: string | null
}

const FALLBACK: Testimonial[] = [
  { id: 'f1', quote: 'We used to spend 3 hours on every proposal. Now it takes 15 minutes and looks more professional than anything we created manually.', rating: 5, role: 'Production Manager', company_name: null, show_name: false, show_company: false },
  { id: 'f2', quote: 'The AI understands exactly what equipment a corporate conference needs. It even suggested items we would have forgotten.', rating: 5, role: 'AV Technician', company_name: null, show_name: false, show_company: false },
  { id: 'f3', quote: 'Our clients love the branded PDFs. The proposals look like they came from a design agency, not a small AV company.', rating: 5, role: 'Business Owner', company_name: null, show_name: false, show_company: false },
  { id: 'f4', quote: 'Tracking who viewed our proposals and when they opened the PDF — that alone justified the subscription.', rating: 5, role: 'Sales Director', company_name: null, show_name: false, show_company: false },
  { id: 'f5', quote: 'We switched from spreadsheets to CueQuote. The time saved on quoting lets us focus on actually running events.', rating: 5, role: 'Event Producer', company_name: null, show_name: false, show_company: false },
  { id: 'f6', quote: 'The market-rate budgets feature is perfect for planners. My clients get realistic estimates before we even talk to vendors.', rating: 5, role: 'Event Planner', company_name: null, show_name: false, show_company: false },
]

const HOLD = 4000

function Card({ t }: { t: Testimonial }) {
  const displayName = t.show_name && t.user_name ? t.user_name : null
  const displayRole = t.role ? t.role.charAt(0).toUpperCase() + t.role.slice(1) : 'CueQuote User'
  const initials = displayName
    ? displayName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    : displayRole[0].toUpperCase()

  return (
    <div style={{
      background: '#f9fafb', borderRadius: 16, padding: '24px 26px',
      border: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', height: '100%',
    }}>
      <div style={{ display: 'flex', gap: 2, marginBottom: 14 }}>
        {[1, 2, 3, 4, 5].map(i => (
          <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill={i <= t.rating ? '#f59e0b' : '#e5e7eb'} stroke="none">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, flex: 1, fontStyle: 'italic', margin: 0 }}>
        &ldquo;{t.quote}&rdquo;
      </p>
      <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
          background: 'linear-gradient(135deg, #10b981, #059669)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: 12, fontWeight: 700,
        }}>
          {initials}
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#08172E', margin: 0 }}>
            {displayName || displayRole}
          </p>
          {displayName && (
            <p style={{ fontSize: 11, color: '#6b7280', margin: 0 }}>
              {[displayRole, t.show_company ? t.company_name : null].filter(Boolean).join(' · ')}
            </p>
          )}
          {!displayName && t.show_company && t.company_name && (
            <p style={{ fontSize: 11, color: '#6b7280', margin: 0 }}>{t.company_name}</p>
          )}
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
      .select('id, quote, rating, role, user_name, company_name, show_name, show_company')
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
    const cards = el.querySelectorAll<HTMLElement>('.m-snap-card')
    if (cards[index]) {
      // Use scrollLeft instead of scrollIntoView to avoid scrolling the entire page
      const card = cards[index]
      const containerWidth = el.offsetWidth
      const cardLeft = card.offsetLeft
      const cardWidth = card.offsetWidth
      el.scrollTo({ left: cardLeft - (containerWidth - cardWidth) / 2, behavior: 'smooth' })
    }
    setActive(index)
  }, [])

  // Auto-advance on mobile only
  useEffect(() => {
    if (paused || testimonials.length === 0) return
    timerRef.current = setTimeout(() => {
      scrollTo((active + 1) % testimonials.length)
    }, HOLD)
    return () => clearTimeout(timerRef.current)
  }, [active, paused, testimonials.length, scrollTo])

  // Detect manual scroll
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let t: ReturnType<typeof setTimeout>
    const onScroll = () => {
      clearTimeout(t)
      t = setTimeout(() => {
        const cards = el.querySelectorAll<HTMLElement>('.m-snap-card')
        const cw = cards[0]?.offsetWidth || 1
        const idx = Math.round(el.scrollLeft / (cw + 16))
        if (idx !== active && idx >= 0 && idx < testimonials.length) setActive(idx)
      }, 100)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => { el.removeEventListener('scroll', onScroll); clearTimeout(t) }
  }, [active, testimonials.length])

  if (testimonials.length === 0) return null

  // Desktop: show first 3, mobile: carousel all
  const desktopCards = testimonials.slice(0, 3)

  return (
    <section style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
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

        {/* Desktop: static 3-column grid */}
        <div className="testimonial-desktop" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
        }}>
          {desktopCards.map(t => (
            <Card key={t.id} t={t} />
          ))}
        </div>

        {/* Mobile: snap carousel */}
        <div
          className="testimonial-mobile"
          style={{ display: 'none' }}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setTimeout(() => setPaused(false), 2000)}
        >
          <div
            ref={scrollRef}
            style={{
              display: 'flex', gap: 16, overflowX: 'auto',
              scrollSnapType: 'x mandatory', scrollBehavior: 'smooth',
              padding: '0 calc((100vw - 300px) / 2)',
            }}
            className="testimonial-scroll-hide"
          >
            {testimonials.map((t, i) => (
              <div key={`${t.id}-${i}`} className="m-snap-card" style={{
                scrollSnapAlign: 'center', flexShrink: 0, width: 300,
              }}>
                <Card t={t} />
              </div>
            ))}
          </div>

          {/* Dots */}
          {/* The dot stays small; the button around it is a 24px tap target with a label. */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 12 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`${title} — ${i + 1}`}
                aria-current={active === i}
                style={{
                  width: 24, height: 24, padding: 0, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer',
                }}
              >
                <span style={{
                  display: 'block', width: active === i ? 24 : 8, height: 8, borderRadius: 4,
                  background: active === i ? '#10b981' : '#d1d5db', transition: 'all 0.3s',
                }} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-scroll-hide::-webkit-scrollbar { display: none; }
        .testimonial-scroll-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @media (max-width: 768px) {
          .testimonial-desktop { display: none !important; }
          .testimonial-mobile { display: block !important; }
        }
      `}</style>
    </section>
  )
}
