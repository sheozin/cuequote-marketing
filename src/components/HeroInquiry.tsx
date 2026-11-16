import { Link } from '@/i18n/navigation'

// One audience (small AV companies and freelance technicians), one promise:
// a client inquiry goes in, a proposal comes out. The sample proposal answers
// the sample inquiry line for line, and its total is derived from the rows so
// it always adds up.
const items = [
  { cat: "Audio", name: "Line Array Speaker System", qty: 2, price: 1200, color: "#8b5cf6" },
  { cat: "Audio", name: "Wireless Handheld Microphone", qty: 4, price: 120, color: "#8b5cf6" },
  { cat: "Video", name: "LED Wall Panel (P2.6)", qty: 12, price: 350, color: "#3b82f6" },
  { cat: "Video", name: "HD PTZ Camera", qty: 3, price: 400, color: "#3b82f6" },
  { cat: "Lighting", name: "LED Wash Light", qty: 16, price: 80, color: "#f59e0b" },
  { cat: "Labor", name: "AV Technician", qty: 2, price: 450, color: "#10b981" },
]
const euro = (n: number) => `€${n.toLocaleString('en-US')}`
const total = items.reduce((sum, item) => sum + item.qty * item.price, 0)

interface HeroInquiryProps {
  ctaLink: string
  t: {
    title: string; titleHighlight: string; titleEnd: string; subtitle: string
    cta: string; noCreditCard: string; freeProposals: string; plannerLink: string
    inquiryLabel: string; inquiryText: string
    generated: string; event: string; footer: string
  }
}

export function HeroInquiry({ ctaLink, t }: HeroInquiryProps) {
  return (
    <div className="hero-inquiry-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
      {/* LEFT: the promise */}
      <div>
        <h1 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 44, color: "#fff", lineHeight: 1.1, letterSpacing: -1.5, marginBottom: 16 }}>
          {t.title} <span style={{ color: "#10b981" }}>{t.titleHighlight}</span> {t.titleEnd}
        </h1>
        <p style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.6, marginBottom: 28, maxWidth: 460 }}>
          {t.subtitle}
        </p>
        <div style={{ display: "flex", gap: 12, marginBottom: 12 }} className="hero-inquiry-cta">
          <a href={ctaLink} style={{
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
            padding: "14px 28px", borderRadius: 10, fontWeight: 700, fontSize: 15,
            background: "#10b981", color: "#fff", boxShadow: "0 4px 14px rgba(16,185,129,0.25)",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>
            {t.cta}
          </a>
        </div>
        <p style={{ fontSize: 12, color: "#94a3b8", marginBottom: 20 }}>
          {t.noCreditCard} • {t.freeProposals}
        </p>
        {/* Planners keep their own page; this is their way there. */}
        <Link href="/for-event-planners" style={{ fontSize: 13, color: "#cbd5e1", textDecoration: "underline", textUnderlineOffset: 3 }}>
          {t.plannerLink}
        </Link>
      </div>

      {/* RIGHT: inquiry in, proposal out */}
      <div style={{ maxWidth: 480, width: "100%" }} className="hero-inquiry-visual">
        <div style={{
          background: "#dcfce7", color: "#14532d", borderRadius: "14px 14px 14px 4px",
          padding: "12px 16px", fontSize: 13, lineHeight: 1.5, marginBottom: 10,
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)", textAlign: "start",
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: "#166534", marginBottom: 4 }}>
            {t.inquiryLabel}
          </div>
          {t.inquiryText}
        </div>
        <div aria-hidden="true" style={{ textAlign: "center", color: "#10b981", fontSize: 18, lineHeight: 1, marginBottom: 10 }}>↓</div>
        <div style={{
          background: "#fff", borderRadius: 16, border: "1px solid #e5e7eb",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)", overflow: "hidden",
        }}>
          <div style={{ padding: "16px 20px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "start" }}>
            <div>
              <div style={{ fontSize: 11, color: "#10b981", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{t.generated}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#08172E", marginTop: 2 }}>{t.event}</div>
            </div>
            <div style={{ fontSize: 14, color: "#10b981", fontWeight: 700 }}>{euro(total)}</div>
          </div>
          <div style={{ padding: "6px 0" }}>
            {items.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 20px", fontSize: 13 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, textAlign: "start" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 500, color: "#111827" }}>{item.name}</div>
                    <div style={{ fontSize: 11, color: "#6b7280" }}>{item.cat}</div>
                  </div>
                </div>
                <div style={{ textAlign: "end" }}>
                  <div style={{ fontWeight: 600, color: "#111827" }}>{euro(item.qty * item.price)}</div>
                  <div style={{ fontSize: 11, color: "#6b7280" }}>{item.qty} × {euro(item.price)}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: "10px 20px", borderTop: "1px solid #f3f4f6", fontSize: 11, color: "#6b7280", textAlign: "center" }}>
            {t.footer}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hero-inquiry-grid { grid-template-columns: 1fr !important; gap: 32px !important; text-align: center; }
          .hero-inquiry-grid h1 { font-size: 28px !important; }
          .hero-inquiry-grid p { max-width: 100% !important; }
          .hero-inquiry-cta { justify-content: center; }
          .hero-inquiry-visual { margin: 0 auto; }
        }
      `}</style>
    </div>
  )
}
