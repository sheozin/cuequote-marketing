import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Check, ChevronDown } from "lucide-react";

const APP_URL = "https://app.cuequote.com";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for AV proposal generation. Start free, upgrade as you grow.",
};

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "forever",
    desc: "Try CueQuote with no commitment.",
    features: ["3 proposals/month", "Basic PDF (with watermark)", "Share links", "1 user"],
    cta: "Start Free",
  },
  {
    name: "Starter",
    price: "€39",
    period: "/month",
    desc: "For growing AV businesses.",
    features: ["15 proposals/month", "Full branding (logo + colors)", "Client management", "3 users", "Email support"],
    cta: "Start 3-day Trial",
    popular: true,
  },
  {
    name: "Pro",
    price: "€99",
    period: "/month",
    desc: "For established production companies.",
    features: ["50 proposals/month", "Custom templates", "Advanced analytics", "10 users", "Priority support"],
    cta: "Start 3-day Trial",
  },
  {
    name: "Business",
    price: "€199",
    period: "/month",
    desc: "For teams that need more.",
    features: ["Unlimited proposals", "API access", "Dedicated support", "Custom integrations", "25 users"],
    cta: "Start 3-day Trial",
  },
];

const faqs = [
  { q: "Can I change plans at any time?", a: "Yes. Upgrade or downgrade at any time. Changes take effect on your next billing cycle." },
  { q: "Is there a contract or commitment?", a: "No. All plans are month-to-month with no long-term commitment. Cancel anytime." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, Amex) through Stripe. For Enterprise plans, we also support invoicing." },
  { q: "Do you offer annual pricing?", a: "Yes. Annual plans save 20%. Contact us for details." },
  { q: "What happens when I hit my proposal limit?", a: "You can upgrade your plan or purchase credit packs starting at €19 for 3 proposals." },
  { q: "Is there a free trial?", a: "Yes. Starter, Pro, and Business plans come with a 3-day free trial. No credit card required to start." },
  { q: "What are credit packs?", a: "Credit packs let you buy proposals without a monthly subscription. Buy a 3-pack for €19 or a 10-pack for €49. Credits never expire and include branded PDFs." },
];

export default function PricingPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 40px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 44, color: "#08172E", marginBottom: 12, letterSpacing: -1 }}>
          Simple, transparent pricing
        </h1>
        <p style={{ fontSize: 18, color: "#6b7280", maxWidth: 500, margin: "0 auto" }}>
          Start free. Upgrade when you need more.
        </p>
      </section>

      {/* Plans */}
      <section style={{ padding: "0 24px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, maxWidth: 1100, margin: "0 auto" }}>
          {plans.map(({ name, price, period, desc, features, cta, popular }) => (
            <div key={name} style={{
              background: "#fff", borderRadius: 20, padding: 32,
              border: popular ? "2px solid #10b981" : "1px solid #e5e7eb",
              position: "relative",
              boxShadow: popular ? "0 12px 40px rgba(16,185,129,0.1)" : "none",
            }}>
              {popular && (
                <div style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                  background: "#10b981", color: "#fff", fontSize: 12, fontWeight: 700,
                  padding: "6px 20px", borderRadius: 20,
                }}>
                  Most Popular
                </div>
              )}
              <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 20, color: "#08172E", marginBottom: 4 }}>{name}</h3>
              <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 20 }}>{desc}</p>
              <div style={{ marginBottom: 28 }}>
                <span style={{ fontSize: 42, fontWeight: 800, color: "#08172E" }}>{price}</span>
                <span style={{ fontSize: 15, color: "#6b7280" }}>{period}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                {features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#4b5563", marginBottom: 12 }}>
                    <Check size={16} style={{ color: "#10b981", flexShrink: 0 }} /> {f}
                  </li>
                ))}
              </ul>
              <Link href={`${APP_URL}/signup`} style={{
                textDecoration: "none", display: "block", textAlign: "center", padding: "14px 24px",
                borderRadius: 10, fontWeight: 600, fontSize: 15,
                background: popular ? "#10b981" : "transparent",
                color: popular ? "#fff" : "#08172E",
                border: popular ? "none" : "1px solid #e5e7eb",
                transition: "all 0.2s",
              }}>
                {cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise */}
      <section style={{ padding: "64px 24px", background: "#08172E" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 28, color: "#fff", marginBottom: 12 }}>
            Enterprise
          </h2>
          <p style={{ fontSize: 16, color: "#94a3b8", marginBottom: 8 }}>
            Everything in Business, plus:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 auto 28px", maxWidth: 360, textAlign: "left" }}>
            {["SSO & SAML", "SLA guarantee", "Unlimited users", "On-boarding support"].map((f) => (
              <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "#cbd5e1", marginBottom: 10 }}>
                <Check size={16} style={{ color: "#10b981", flexShrink: 0 }} /> {f}
              </li>
            ))}
          </ul>
          <Link href="/contact" style={{
            textDecoration: "none", display: "inline-block", padding: "14px 32px",
            borderRadius: 10, fontWeight: 600, fontSize: 15,
            border: "1px solid rgba(255,255,255,0.2)", color: "#fff",
          }}>
            Contact Sales
          </Link>
        </div>
      </section>

      {/* Credit Packs */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 28, color: "#08172E", marginBottom: 8 }}>
            Credit Packs
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280", marginBottom: 32 }}>
            Need a few proposals without a subscription?
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, maxWidth: 520, margin: "0 auto 24px" }}>
            <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28, textAlign: "center" }}>
              <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, color: "#08172E", marginBottom: 4 }}>3-Pack</h3>
              <div style={{ marginBottom: 8 }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: "#08172E" }}>€19</span>
              </div>
              <p style={{ fontSize: 13, color: "#6b7280" }}>€6.33/proposal</p>
            </div>
            <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28, textAlign: "center" }}>
              <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, color: "#08172E", marginBottom: 4 }}>10-Pack</h3>
              <div style={{ marginBottom: 8 }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: "#08172E" }}>€49</span>
              </div>
              <p style={{ fontSize: 13, color: "#6b7280" }}>€4.90/proposal</p>
            </div>
          </div>
          <p style={{ fontSize: 14, color: "#6b7280" }}>No monthly fee. No expiry. Includes branded PDFs.</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 32, color: "#08172E", marginBottom: 48, textAlign: "center" }}>
            Pricing FAQ
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

      <Footer />
    </>
  );
}
