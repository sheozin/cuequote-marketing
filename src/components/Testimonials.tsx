'use client'
import { useState, useEffect } from 'react'
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

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div style={{
      background: '#f9fafb',
      borderRadius: 16,
      padding: 28,
      border: '1px solid #f3f4f6',
      display: 'flex',
      flexDirection: 'column',
      minWidth: 340,
      maxWidth: 380,
      flexShrink: 0,
    }}>
      <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < t.rating ? '#f59e0b' : '#e5e7eb'} stroke="none">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, flex: 1, fontStyle: 'italic' }}>
        &ldquo;{t.quote}&rdquo;
      </p>
      <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: '50%',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: 12, fontWeight: 700,
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

  useEffect(() => {
    supabase
      .from('user_testimonials')
      .select('id, quote, rating, role, company_name, show_name, show_company')
      .eq('is_approved', true)
      .order('rating', { ascending: false })
      .limit(10)
      .then(({ data }) => {
        setTestimonials(data && data.length >= 3 ? data : FALLBACK)
      })
  }, [])

  if (testimonials.length === 0) return null

  // Duplicate for seamless infinite scroll
  const items = [...testimonials, ...testimonials]

  return (
    <section style={{ padding: '80px 0', background: '#fff', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 36,
            fontWeight: 800,
            color: '#08172E',
            marginBottom: 12,
          }}>
            {title}
          </h2>
          <p style={{ fontSize: 16, color: '#6b7280', maxWidth: 500, margin: '0 auto' }}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Marquee container */}
      <div style={{ position: 'relative' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 80,
          background: 'linear-gradient(to right, #fff, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 80,
          background: 'linear-gradient(to left, #fff, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        {/* Scrolling track */}
        <div className="testimonial-marquee" style={{
          display: 'flex',
          gap: 24,
          width: 'max-content',
        }}>
          {items.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes testimonial-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonial-marquee {
          animation: testimonial-scroll ${testimonials.length * 6}s linear infinite;
        }
        .testimonial-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
