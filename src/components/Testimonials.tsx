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
  user_name?: string
}

// Fallback testimonials when DB has none yet
const FALLBACK: Testimonial[] = [
  {
    id: 'f1',
    quote: 'We used to spend 3 hours on every proposal. Now it takes 15 minutes and looks more professional than anything we created manually.',
    rating: 5,
    role: 'Production Manager',
    company_name: null,
    show_name: false,
    show_company: false,
  },
  {
    id: 'f2',
    quote: 'The AI understands exactly what equipment a corporate conference needs. It even suggested items we would have forgotten.',
    rating: 5,
    role: 'AV Technician',
    company_name: null,
    show_name: false,
    show_company: false,
  },
  {
    id: 'f3',
    quote: 'Our clients love the branded PDFs. The proposals look like they came from a design agency, not a small AV company.',
    rating: 5,
    role: 'Business Owner',
    company_name: null,
    show_name: false,
    show_company: false,
  },
]

export function Testimonials({ title, subtitle }: { title: string; subtitle: string }) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  useEffect(() => {
    supabase
      .from('user_testimonials')
      .select('id, quote, rating, role, company_name, show_name, show_company')
      .eq('is_approved', true)
      .order('rating', { ascending: false })
      .limit(6)
      .then(({ data }) => {
        setTestimonials(data && data.length >= 3 ? data : FALLBACK)
      })
  }, [])

  if (testimonials.length === 0) return null

  return (
    <section style={{ padding: '96px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }} className="testimonials-grid">
          {testimonials.slice(0, 3).map((t) => (
            <div key={t.id} style={{
              background: '#f9fafb',
              borderRadius: 16,
              padding: 28,
              border: '1px solid #f3f4f6',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < t.rating ? '#f59e0b' : '#e5e7eb'} stroke="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <p style={{
                fontSize: 15,
                color: '#374151',
                lineHeight: 1.7,
                flex: 1,
                fontStyle: 'italic',
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Attribution */}
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 700,
                  }}>
                    {(t.role || 'U')[0].toUpperCase()}
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: '#08172E' }}>
                      {t.role || 'CueQuote User'}
                    </p>
                    {t.show_company && t.company_name && (
                      <p style={{ fontSize: 12, color: '#9ca3af' }}>{t.company_name}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
