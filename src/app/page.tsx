import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {
  Sparkles, FileText, Share2, Package, Globe, TrendingUp,
  MessageSquare, Mic, MonitorPlay, Lightbulb, Zap, ArrowRight,
  Check, ChevronDown,
} from "lucide-react";

const APP_URL = "https://app.cuequote.com";

// ─── ProposalMockup ────────────────────────────────────────────────────────────
function ProposalMockup() {
  const items = [
    { cat: "Audio", name: "Line Array Speaker System", qty: 2, price: 1200, color: "#8b5cf6" },
    { cat: "Audio", name: "Wireless Handheld Microphone", qty: 4, price: 120, color: "#8b5cf6" },
    { cat: "Video", name: "LED Wall Panel (P2.6)", qty: 12, price: 350, color: "#3b82f6" },
    { cat: "Video", name: "HD PTZ Camera", qty: 3, price: 400, color: "#3b82f6" },
    { cat: "Lighting", name: "LED Wash Light", qty: 16, price: 80, color: "#f59e0b" },
    { cat: "Labor", name: "AV Technician", qty: 2, price: 450, color: "#10b981" },
  ];

  return (
    <div style={{
      background: "#fff", borderRadius: 16, border: "1px solid #e5e7eb",
      boxShadow: "0 20px 60px rgba(0,0,0,0.08)", overflow: "hidden",
      maxWidth: 480, width: "100%",
    }}>
      {/* Title bar */}
      <div style={{ padding: "16px 20px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 11, color: "#10b981", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>AI Generated</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#08172E", marginTop: 2 }}>Corporate Conference 2026</div>
        </div>
        <div style={{ fontSize: 12, color: "#10b981", fontWeight: 700 }}>€8,540</div>
      </div>
      {/* Items */}
      <div style={{ padding: "8px 0" }}>
        {items.map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "10px 20px", fontSize: 13,
            animation: `fadeSlideUp 0.4s ease ${i * 0.12}s both`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color }} />
              <div>
                <div style={{ fontWeight: 500, color: "#111827" }}>{item.name}</div>
                <div style={{ fontSize: 11, color: "#9ca3af" }}>{item.cat}</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 600, color: "#111827" }}>€{(item.qty * item.price).toLocaleString()}</div>
              <div style={{ fontSize: 11, color: "#9ca3af" }}>{item.qty} × €{item.price}</div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(135deg, #08172E 0%, #0f2d50 50%, #08172E 100%)",
        padding: "100px 24px 80px", position: "relative", overflow: "hidden",
      }}>
        {/* Glow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center",
        }} className="hero-grid">
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-block", fontSize: 12, fontWeight: 600, color: "#10b981",
              background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)",
              padding: "4px 12px", borderRadius: 20, marginBottom: 24,
            }}>
              AI-Powered AV Quoting
            </div>
            <h1 style={{
              fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 48,
              color: "#fff", lineHeight: 1.1, marginBottom: 20, letterSpacing: -1,
            }}>
              Turn event descriptions into{" "}
              <span style={{ color: "#10b981" }}>professional AV proposals</span>{" "}
              in seconds
            </h1>
            <p style={{ fontSize: 18, color: "#94a3b8", lineHeight: 1.7, marginBottom: 32, maxWidth: 500 }}>
              Describe your event, and CueQuote generates a complete equipment list with accurate pricing — ready to send as a branded PDF.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href={`${APP_URL}/signup`} style={{
                textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
                background: "#10b981", color: "#fff", padding: "14px 28px", borderRadius: 10,
                fontWeight: 600, fontSize: 16, transition: "background 0.2s",
              }}>
                <Sparkles size={18} /> Start Free
              </Link>
              <Link href="#how-it-works" style={{
                textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
                border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "14px 28px", borderRadius: 10,
                fontWeight: 500, fontSize: 16,
              }}>
                See How It Works <ArrowRight size={16} />
              </Link>
            </div>
            <p style={{ fontSize: 13, color: "#64748b", marginTop: 16 }}>No credit card required • 3 free proposals/month</p>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <ProposalMockup />
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
            .hero-grid h1 { font-size: 36px !important; }
          }
        `}</style>
      </section>

      {/* ── 2. Social Proof ─────────────────────────────────────────────────── */}
      <section style={{ padding: "48px 24px", background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: 2, marginBottom: 24 }}>
            Trusted by AV professionals
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", opacity: 0.5 }}>
            {["AV Production Co.", "EventTech GmbH", "Sound & Vision", "ProStage Europe", "LiveTech ME"].map((name) => (
              <span key={name} style={{ fontSize: 16, fontWeight: 700, color: "#9ca3af", whiteSpace: "nowrap" }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Use Cases ────────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 36, color: "#08172E", marginBottom: 12 }}>
              Built for AV professionals
            </h2>
            <p style={{ fontSize: 18, color: "#6b7280", maxWidth: 600, margin: "0 auto" }}>
              Whether you run a rental house, freelance, or manage an agency — CueQuote fits your workflow.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { icon: <Mic size={24} />, title: "AV Production Companies", desc: "Generate accurate proposals from your equipment catalog. Send branded PDFs that match your company identity." },
              { icon: <Zap size={24} />, title: "Freelance AV Technicians", desc: "Quote faster than your competitors. Go from WhatsApp inquiry to professional proposal in 2 minutes." },
              { icon: <MonitorPlay size={24} />, title: "Event Agencies", desc: "Scope AV requirements for client events without deep technical knowledge. AI handles the equipment selection." },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{
                background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 32,
                transition: "box-shadow 0.3s, transform 0.3s",
              }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", marginBottom: 20 }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 20, color: "#08172E", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Features ─────────────────────────────────────────────────────── */}
      <section id="features" style={{ padding: "96px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 36, color: "#08172E", marginBottom: 12 }}>
              Everything you need to quote faster
            </h2>
            <p style={{ fontSize: 18, color: "#6b7280", maxWidth: 600, margin: "0 auto" }}>
              From AI generation to PDF export — all in one platform.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { icon: <Sparkles size={22} />, title: "AI Proposal Generation", desc: "Describe your event in plain language. AI generates a complete, scoped equipment list with quantities and pricing." },
              { icon: <FileText size={22} />, title: "Branded PDF Export", desc: "One-click PDF with your logo, colors, and layout. Professional proposals your clients will trust." },
              { icon: <Share2 size={22} />, title: "Share Links", desc: "Send a link. Track views. Know when they open it. Get notified when they accept or decline." },
              { icon: <Package size={22} />, title: "Equipment Catalog", desc: "Manage your inventory with default pricing. AI pulls from your catalog for accurate, consistent quoting." },
              { icon: <Globe size={22} />, title: "Multi-Currency", desc: "Quote in EUR, USD, GBP, CHF, PLN, AED, or EGP. Set per-company defaults or override per-proposal." },
              { icon: <TrendingUp size={22} />, title: "Win Tracking", desc: "Dashboard with pipeline value, win rate, and proposal analytics. Know what's working." },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{
                background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28,
              }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", marginBottom: 16 }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, color: "#08172E", marginBottom: 6 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. How It Works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 36, color: "#08172E", marginBottom: 12 }}>
              Three steps. Two minutes.
            </h2>
            <p style={{ fontSize: 18, color: "#6b7280" }}>From event brief to sent proposal.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }} className="steps-grid">
            {[
              { step: "1", title: "Describe", desc: "Type or paste your event brief. Include venue, attendees, AV needs — as much or as little as you want." },
              { step: "2", title: "Review", desc: "AI generates a complete equipment list. Edit quantities, prices, add or remove items. Everything is editable." },
              { step: "3", title: "Send", desc: "Export a branded PDF or share a link. Track when your client views it. Get notified when they respond." },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ textAlign: "center" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%", background: "#10b981", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 24,
                  margin: "0 auto 20px",
                }}>
                  {step}
                </div>
                <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 22, color: "#08172E", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .steps-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* ── 6. Pricing ──────────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 36, color: "#08172E", marginBottom: 12 }}>
              Simple, transparent pricing
            </h2>
            <p style={{ fontSize: 18, color: "#6b7280" }}>Start free. Upgrade as you grow.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20, maxWidth: 1100, margin: "0 auto" }}>
            {[
              { name: "Free", price: "€0", period: "forever", features: ["3 proposals/month", "Basic PDF export", "Share links", "1 user"], cta: "Start Free" },
              { name: "Pay-per-proposal", price: "€9", period: "/proposal", features: ["No monthly fee", "Branded PDFs", "Client tracking", "3 users"], cta: "Get Started" },
              { name: "Starter", price: "€59", period: "/month", features: ["25 proposals/month", "Full branding", "Priority support", "5 users"], cta: "Start Trial", popular: true },
              { name: "Pro", price: "€99", period: "/month", features: ["Unlimited proposals", "Custom templates", "API access", "Analytics", "10 users"], cta: "Start Trial" },
            ].map(({ name, price, period, features, cta, popular }) => (
              <div key={name} style={{
                background: "#fff", borderRadius: 16, padding: 32,
                border: popular ? "2px solid #10b981" : "1px solid #e5e7eb",
                position: "relative",
              }}>
                {popular && (
                  <div style={{
                    position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                    background: "#10b981", color: "#fff", fontSize: 12, fontWeight: 700,
                    padding: "4px 16px", borderRadius: 20,
                  }}>
                    Popular
                  </div>
                )}
                <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, color: "#08172E", marginBottom: 8 }}>{name}</h3>
                <div style={{ marginBottom: 24 }}>
                  <span style={{ fontSize: 36, fontWeight: 800, color: "#08172E" }}>{price}</span>
                  <span style={{ fontSize: 14, color: "#6b7280" }}>{period}</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
                  {features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#4b5563", marginBottom: 10 }}>
                      <Check size={16} style={{ color: "#10b981", flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>
                <Link href={`${APP_URL}/signup`} style={{
                  textDecoration: "none", display: "block", textAlign: "center", padding: "12px 24px",
                  borderRadius: 10, fontWeight: 600, fontSize: 14,
                  background: popular ? "#10b981" : "transparent",
                  color: popular ? "#fff" : "#08172E",
                  border: popular ? "none" : "1px solid #e5e7eb",
                }}>
                  {cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Blog (placeholder) ───────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 36, color: "#08172E" }}>
              From the blog
            </h2>
            <Link href="/blog" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#10b981", display: "flex", alignItems: "center", gap: 4 }}>
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { title: "How to Write an AV Proposal That Wins", excerpt: "The anatomy of proposals that close deals — from structure to pricing psychology.", date: "Mar 2026" },
              { title: "The True Cost of Manual AV Quoting", excerpt: "Hours of spreadsheet work per quote. Here's what it actually costs your business.", date: "Mar 2026" },
              { title: "AI in Event Production: What's Real vs. Hype", excerpt: "Separating practical AI tools from marketing buzzwords in the events industry.", date: "Mar 2026" },
            ].map(({ title, excerpt, date }) => (
              <div key={title} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 12, color: "#10b981", fontWeight: 600, marginBottom: 12 }}>{date}</div>
                <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, color: "#08172E", marginBottom: 8, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: "96px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 36, color: "#08172E", marginBottom: 12 }}>
              Frequently asked questions
            </h2>
          </div>

          {[
            { q: "How does the AI generate proposals?", a: "You describe your event in plain language — type of event, venue, attendee count, AV needs. CueQuote's AI analyzes the requirements and generates a complete equipment list with quantities and pricing based on your catalog." },
            { q: "Can I customize the generated proposals?", a: "Absolutely. Everything is editable — add, remove, or modify line items, adjust quantities and prices, set discounts and VAT. The AI gives you a starting point; you have full control." },
            { q: "What equipment categories does CueQuote cover?", a: "Audio, video, lighting, simultaneous interpretation, streaming, digital signage, staging, labor, and transport. We seed your catalog with 30 common AV items, and you can add your own." },
            { q: "Is my data secure?", a: "Yes. We use Supabase with row-level security. Your equipment catalog, pricing, and client data are isolated to your company. No other user can access your data." },
            { q: "Can I use my own branding?", a: "Yes. Upload your logo, set your brand colors, and all PDFs and share pages will use your branding. Your clients see your company, not CueQuote." },
            { q: "Do you offer a free plan?", a: "Yes. The free plan includes 3 proposals per month with basic PDF export and share links. No credit card required." },
          ].map(({ q, a }, i) => (
            <details key={i} style={{
              borderBottom: "1px solid #e5e7eb", padding: "20px 0",
            }}>
              <summary style={{
                fontFamily: "var(--font-dm-sans)", fontWeight: 600, fontSize: 16, color: "#08172E",
                cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                {q}
                <ChevronDown size={18} style={{ color: "#9ca3af", flexShrink: 0 }} />
              </summary>
              <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7, marginTop: 12 }}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── 9. Email Capture ────────────────────────────────────────────────── */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <MessageSquare size={32} style={{ color: "#10b981", margin: "0 auto 16px" }} />
          <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 22, color: "#08172E", marginBottom: 8 }}>
            Stay in the loop
          </h3>
          <p style={{ fontSize: 15, color: "#6b7280", marginBottom: 24 }}>
            Get tips on AV quoting, product updates, and industry insights. No spam.
          </p>
          <form style={{ display: "flex", gap: 8, maxWidth: 420, margin: "0 auto" }} className="email-form">
            <input type="email" placeholder="you@company.com" style={{
              flex: 1, padding: "12px 16px", borderRadius: 8, border: "1px solid #e5e7eb",
              fontSize: 14, outline: "none",
            }} />
            <button type="submit" style={{
              background: "#10b981", color: "#fff", padding: "12px 24px", borderRadius: 8,
              fontWeight: 600, fontSize: 14, border: "none", cursor: "pointer",
            }}>
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ── 10. Final CTA ───────────────────────────────────────────────────── */}
      <section style={{
        padding: "96px 24px", background: "linear-gradient(135deg, #08172E 0%, #0f2d50 100%)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 40, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
            Start creating proposals today
          </h2>
          <p style={{ fontSize: 18, color: "#94a3b8", marginBottom: 32 }}>
            Join AV professionals who quote faster and win more deals with CueQuote.
          </p>
          <Link href={`${APP_URL}/signup`} style={{
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
            background: "#10b981", color: "#fff", padding: "16px 36px", borderRadius: 12,
            fontWeight: 700, fontSize: 18,
          }}>
            <Sparkles size={20} /> Get Started Free
          </Link>
          <p style={{ fontSize: 13, color: "#64748b", marginTop: 16 }}>No credit card required</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
