import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Check, ChevronDown, Package, Sparkles, ArrowRight, Zap, CreditCard, Crown, Rocket, Building2 } from "lucide-react";

const APP_URL = "https://app.cuequote.com";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for AV proposal generation. Start free, upgrade as you grow.",
};

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "",
    desc: "Try CueQuote with no commitment.",
    icon: <Zap size={20} />,
    features: ["3 proposals/month", "Basic PDF (with watermark)", "Share links", "1 user"],
    cta: "Start Free",
    ctaStyle: "outline" as const,
  },
  {
    name: "Starter",
    price: "€39",
    period: "/mo",
    desc: "For freelancers and small teams.",
    icon: <CreditCard size={20} />,
    features: ["15 proposals/month", "Full branding (logo + colors)", "Client management", "3 users", "Email support"],
    cta: "Start 3-day Trial",
    ctaStyle: "primary" as const,
    popular: true,
    save: "Most chosen by AV professionals",
  },
  {
    name: "Pro",
    price: "€99",
    period: "/mo",
    desc: "For growing production companies.",
    icon: <Crown size={20} />,
    features: ["50 proposals/month", "Custom templates", "Advanced analytics", "10 users", "Priority support"],
    cta: "Start 3-day Trial",
    ctaStyle: "primary" as const,
  },
  {
    name: "Business",
    price: "€199",
    period: "/mo",
    desc: "For teams that quote at scale.",
    icon: <Rocket size={20} />,
    features: ["Unlimited proposals", "API access", "Dedicated support", "Custom integrations", "25 users"],
    cta: "Start 3-day Trial",
    ctaStyle: "primary" as const,
  },
];

const faqs = [
  { q: "Can I change plans at any time?", a: "Yes. Upgrade or downgrade at any time. Changes take effect on your next billing cycle." },
  { q: "Is there a contract or commitment?", a: "No. All plans are month-to-month with no long-term commitment. Cancel anytime." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, Amex) through Stripe. For Enterprise plans, we also support invoicing." },
  { q: "Do you offer annual pricing?", a: "Yes. Annual plans save 20%. The discount is applied automatically when you choose annual billing in the app." },
  { q: "What happens when I hit my proposal limit?", a: "You can upgrade your plan or purchase credit packs starting at €19 for 3 proposals." },
  { q: "Is there a free trial?", a: "Yes. Starter, Pro, and Business plans come with a 3-day free trial. No credit card required to start." },
  { q: "What are credit packs?", a: "Credit packs let you buy proposals without a monthly subscription. Buy a 3-pack for €19 or a 10-pack for €49. Credits never expire and include branded PDFs." },
];

export default function PricingPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section style={{
        padding: "100px 24px 20px", textAlign: "center",
        background: "linear-gradient(180deg, #f0fdf4 0%, #fff 100%)",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#10b981",
          background: "#ecfdf5", border: "1px solid rgba(16,185,129,0.15)", padding: "6px 14px", borderRadius: 20, marginBottom: 20,
        }}>
          <Sparkles size={14} /> Save 20% with annual billing
        </div>
        <h1 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 48, color: "#08172E", marginBottom: 14, letterSpacing: -1.5, lineHeight: 1.1 }}>
          Plans that grow with you
        </h1>
        <p style={{ fontSize: 18, color: "#6b7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
          Start free. Upgrade when you need more. No contracts, no surprises.
        </p>
      </section>

      {/* Plans */}
      <section style={{ padding: "40px 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, maxWidth: 1100, margin: "0 auto" }} className="pricing-grid">
          {plans.map(({ name, price, period, desc, icon, features, cta, ctaStyle, popular, save }) => (
            <div key={name} style={{
              background: "#fff", borderRadius: 20, padding: "32px 28px",
              border: popular ? "2px solid #10b981" : "1px solid #e5e7eb",
              position: "relative",
              boxShadow: popular ? "0 16px 48px rgba(16,185,129,0.12)" : "0 2px 12px rgba(0,0,0,0.04)",
              display: "flex", flexDirection: "column",
              transform: popular ? "scale(1.03)" : "none",
              zIndex: popular ? 2 : 1,
            }}>
              {popular && (
                <div style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                  background: "linear-gradient(135deg, #10b981, #059669)", color: "#fff", fontSize: 12, fontWeight: 700,
                  padding: "6px 20px", borderRadius: 20, whiteSpace: "nowrap",
                }}>
                  Most Popular
                </div>
              )}

              {/* Plan icon + name */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <div style={{ color: "#10b981" }}>{icon}</div>
                <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 20, color: "#08172E" }}>{name}</h3>
              </div>
              <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 20, lineHeight: 1.5 }}>{desc}</p>

              {/* Price */}
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: 44, fontWeight: 800, color: "#08172E", letterSpacing: -1 }}>{price}</span>
                <span style={{ fontSize: 15, color: "#9ca3af", fontWeight: 500 }}>{period}</span>
                {save && (
                  <p style={{ fontSize: 12, color: "#10b981", fontWeight: 600, marginTop: 4 }}>{save}</p>
                )}
              </div>

              {/* Features */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1 }}>
                {features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#4b5563", marginBottom: 13 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Check size={12} style={{ color: "#10b981" }} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href={`${APP_URL}/signup`} style={{
                textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                padding: "14px 24px", borderRadius: 10, fontWeight: 600, fontSize: 15, marginTop: 24,
                background: ctaStyle === "primary" ? "#10b981" : "transparent",
                color: ctaStyle === "primary" ? "#fff" : "#08172E",
                border: ctaStyle === "primary" ? "none" : "1px solid #e5e7eb",
                transition: "all 0.2s",
              }}>
                {cta}
                {ctaStyle === "primary" && <ArrowRight size={16} />}
              </Link>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 560px) {
            .pricing-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Enterprise */}
      <section style={{ padding: "72px 24px", background: "#08172E", position: "relative", overflow: "hidden" }}>
        {/* Glow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 16 }}>
            <Building2 size={24} style={{ color: "#10b981" }} />
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 30, color: "#fff" }}>
              Enterprise
            </h2>
          </div>
          <p style={{ fontSize: 17, color: "#94a3b8", marginBottom: 28, lineHeight: 1.6 }}>
            Custom pricing for large teams with advanced security and dedicated support.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginBottom: 32 }}>
            {["Everything in Business", "SSO & SAML", "SLA guarantee", "Unlimited users", "On-boarding support"].map((f) => (
              <div key={f} style={{
                display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "#cbd5e1",
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                padding: "8px 16px", borderRadius: 10,
              }}>
                <Check size={14} style={{ color: "#10b981" }} /> {f}
              </div>
            ))}
          </div>
          <Link href="/contact" style={{
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px",
            borderRadius: 10, fontWeight: 600, fontSize: 15,
            background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", color: "#10b981",
            transition: "all 0.2s",
          }}>
            Contact Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Credit Packs */}
      <section style={{ padding: "80px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
              <Package size={22} style={{ color: "#10b981" }} />
              <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 30, color: "#08172E" }}>
                Credit Packs
              </h2>
            </div>
            <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
              Need a few proposals without a subscription? Buy credits, use anytime.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, maxWidth: 600, margin: "0 auto 32px" }} className="packs-grid">
            {/* 3-Pack */}
            <div style={{
              background: "#fff", border: "1px solid #e5e7eb", borderRadius: 20, padding: "32px 28px",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
              transition: "all 0.2s",
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: 16, background: "#ecfdf5",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
              }}>
                <span style={{ fontSize: 24, fontWeight: 800, color: "#10b981" }}>3</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, color: "#08172E", marginBottom: 4 }}>3 Proposals</h3>
              <div style={{ marginBottom: 4 }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: "#08172E" }}>€19</span>
              </div>
              <p style={{ fontSize: 13, color: "#10b981", fontWeight: 600, marginBottom: 16 }}>€6.33 per proposal</p>
              <Link href={`${APP_URL}/signup`} style={{
                textDecoration: "none", display: "block", width: "100%", textAlign: "center", padding: "12px 20px",
                borderRadius: 10, fontWeight: 600, fontSize: 14,
                border: "1px solid #e5e7eb", color: "#08172E", transition: "all 0.2s",
              }}>
                Buy 3-Pack
              </Link>
            </div>

            {/* 10-Pack */}
            <div style={{
              background: "#fff", border: "2px solid #10b981", borderRadius: 20, padding: "32px 28px",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
              position: "relative", boxShadow: "0 8px 30px rgba(16,185,129,0.08)",
            }}>
              <div style={{
                position: "absolute", top: -12, background: "#10b981", color: "#fff",
                fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 12,
              }}>
                Best Value
              </div>
              <div style={{
                width: 56, height: 56, borderRadius: 16, background: "#ecfdf5",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
              }}>
                <span style={{ fontSize: 24, fontWeight: 800, color: "#10b981" }}>10</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, color: "#08172E", marginBottom: 4 }}>10 Proposals</h3>
              <div style={{ marginBottom: 4 }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: "#08172E" }}>€49</span>
              </div>
              <p style={{ fontSize: 13, color: "#10b981", fontWeight: 600, marginBottom: 16 }}>€4.90 per proposal</p>
              <Link href={`${APP_URL}/signup`} style={{
                textDecoration: "none", display: "block", width: "100%", textAlign: "center", padding: "12px 20px",
                borderRadius: 10, fontWeight: 600, fontSize: 14,
                background: "#10b981", color: "#fff", transition: "all 0.2s",
              }}>
                Buy 10-Pack
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            {["No monthly fee", "Credits never expire", "Branded PDFs included"].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6b7280" }}>
                <Check size={14} style={{ color: "#10b981" }} /> {t}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 500px) {
            .packs-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* FAQ */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 32, color: "#08172E", marginBottom: 48, textAlign: "center" }}>
            Frequently asked questions
          </h2>
          {faqs.map(({ q, a }, i) => (
            <details key={i} style={{ borderBottom: "1px solid #e5e7eb", padding: "20px 0" }}>
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

      {/* Final CTA */}
      <section style={{
        padding: "80px 24px", textAlign: "center",
        background: "linear-gradient(135deg, #08172E 0%, #0f2d50 100%)",
      }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 32, color: "#fff", marginBottom: 12, lineHeight: 1.2 }}>
            Ready to quote faster?
          </h2>
          <p style={{ fontSize: 16, color: "#94a3b8", marginBottom: 28 }}>
            Join AV professionals who create proposals in minutes, not hours.
          </p>
          <Link href={`${APP_URL}/signup`} style={{
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
            background: "#10b981", color: "#fff", padding: "16px 36px", borderRadius: 12,
            fontWeight: 700, fontSize: 17,
          }}>
            <Sparkles size={18} /> Start Free
          </Link>
          <p style={{ fontSize: 13, color: "#64748b", marginTop: 14 }}>No credit card required</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
