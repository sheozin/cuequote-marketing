import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Check, ChevronDown, Package, Sparkles, ArrowRight, Zap, CreditCard, Crown, Rocket, Building2 } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

const APP_URL = "https://app.cuequote.com";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for AV proposal generation. Start free, upgrade as you grow.",
  alternates: { canonical: "/pricing" },
};

export default async function PricingPage() {
  const locale = await getLocale();
  const t = await getTranslations("pricing");

  const plans = [
    {
      name: t("freeName"),
      price: "€0",
      period: "",
      desc: t("freeDesc"),
      icon: <Zap size={20} />,
      features: [t("freeF1"), t("freeF2"), t("freeF3"), t("freeF4")],
      cta: t("startFree"),
      ctaStyle: "outline" as const,
    },
    {
      name: t("starterName"),
      price: "€29",
      period: t("perMonth"),
      desc: t("starterDesc"),
      icon: <CreditCard size={20} />,
      features: [t("starterF1"), t("starterF2"), t("starterF3"), t("starterF4"), t("starterF5"), t("starterF6")],
      cta: t("startTrial"),
      ctaStyle: "primary" as const,
      popular: true,
      save: t("starterSave"),
    },
    {
      name: t("proName"),
      price: "€79",
      period: t("perMonth"),
      desc: t("proDesc"),
      icon: <Crown size={20} />,
      features: [t("proF1"), t("proF2"), t("proF3"), t("proF4"), t("proF5"), t("proF6")],
      cta: t("startTrial"),
      ctaStyle: "primary" as const,
    },
    {
      name: t("businessName"),
      price: "€179",
      period: t("perMonth"),
      desc: t("businessDesc"),
      icon: <Rocket size={20} />,
      features: [t("businessF1"), t("businessF2"), t("businessF3"), t("businessF4"), t("businessF5"), t("businessF6")],
      cta: t("startTrial"),
      ctaStyle: "primary" as const,
    },
  ];

  const faqs = [
    { q: t("faqQ1"), a: t("faqA1") },
    { q: t("faqQ2"), a: t("faqA2") },
    { q: t("faqQ3"), a: t("faqA3") },
    { q: t("faqQ4"), a: t("faqA4") },
    { q: t("faqQ5"), a: t("faqA5") },
    { q: t("faqQ6"), a: t("faqA6") },
    { q: t("faqQ7"), a: t("faqA7") },
  ];

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
          <Sparkles size={14} /> {t("heroBadge")}
        </div>
        <h1 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 48, color: "#08172E", marginBottom: 14, letterSpacing: -1.5, lineHeight: 1.1 }}>
          {t("heroTitle")}
        </h1>
        <p style={{ fontSize: 18, color: "#6b7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
          {t("heroSubtitle")}
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
              boxShadow: popular ? "0 8px 24px rgba(16,185,129,0.15)" : "0 2px 12px rgba(0,0,0,0.04)",
              display: "flex", flexDirection: "column",
              zIndex: popular ? 2 : 1,
            }}>
              {popular && (
                <div style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                  background: "linear-gradient(135deg, #10b981, #059669)", color: "#fff", fontSize: 12, fontWeight: 700,
                  padding: "6px 20px", borderRadius: 20, whiteSpace: "nowrap",
                }}>
                  {t("popular")}
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
              <Link href={`${APP_URL}/signup?lang=${locale}`} style={{
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
              {t("enterpriseTitle")}
            </h2>
          </div>
          <p style={{ fontSize: 17, color: "#94a3b8", marginBottom: 28, lineHeight: 1.6 }}>
            {t("enterpriseDesc")}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginBottom: 32 }}>
            {[t("enterpriseF1"), t("enterpriseF2"), t("enterpriseF3"), t("enterpriseF4"), t("enterpriseF5")].map((f) => (
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
            {t("contactSales")} <ArrowRight size={16} />
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
                {t("creditPacksTitle")}
              </h2>
            </div>
            <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
              {t("creditPacksSubtitle")}
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
                <span style={{ fontSize: 24, fontWeight: 800, color: "#10b981" }}>5</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, color: "#08172E", marginBottom: 4 }}>5 Proposals</h3>
              <div style={{ marginBottom: 4 }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: "#08172E" }}>€25</span>
              </div>
              <p style={{ fontSize: 13, color: "#10b981", fontWeight: 600, marginBottom: 16 }}>€5.00 each</p>
              <Link href={`${APP_URL}/signup?lang=${locale}`} style={{
                textDecoration: "none", display: "block", width: "100%", textAlign: "center", padding: "12px 20px",
                borderRadius: 10, fontWeight: 600, fontSize: 14,
                border: "1px solid #e5e7eb", color: "#08172E", transition: "all 0.2s",
              }}>
                {t("buy3Pack")}
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
                {t("bestValue")}
              </div>
              <div style={{
                width: 56, height: 56, borderRadius: 16, background: "#ecfdf5",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
              }}>
                <span style={{ fontSize: 24, fontWeight: 800, color: "#10b981" }}>15</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, color: "#08172E", marginBottom: 4 }}>15 Proposals</h3>
              <div style={{ marginBottom: 4 }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: "#08172E" }}>€59</span>
              </div>
              <p style={{ fontSize: 13, color: "#10b981", fontWeight: 600, marginBottom: 16 }}>€3.93 each</p>
              <Link href={`${APP_URL}/signup?lang=${locale}`} style={{
                textDecoration: "none", display: "block", width: "100%", textAlign: "center", padding: "12px 20px",
                borderRadius: 10, fontWeight: 600, fontSize: 14,
                background: "#10b981", color: "#fff", transition: "all 0.2s",
              }}>
                {t("buy10Pack")}
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            {[t("noMonthlyFee"), t("creditsNeverExpire"), t("brandedPdfsIncluded")].map((badge) => (
              <div key={badge} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6b7280" }}>
                <Check size={14} style={{ color: "#10b981" }} /> {badge}
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
            {t("faq")}
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

      <style>{`
        summary::-webkit-details-marker { display: none; }
        details[open] summary svg { transform: rotate(180deg); }
      `}</style>

      {/* Final CTA */}
      <section style={{
        padding: "80px 24px", textAlign: "center",
        background: "linear-gradient(135deg, #08172E 0%, #0f2d50 100%)",
      }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 32, color: "#fff", marginBottom: 12, lineHeight: 1.2 }}>
            {t("readyTitle")}
          </h2>
          <p style={{ fontSize: 16, color: "#94a3b8", marginBottom: 28 }}>
            {t("readySubtitle")}
          </p>
          <Link href={`${APP_URL}/signup?lang=${locale}`} style={{
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
            background: "#10b981", color: "#fff", padding: "16px 36px", borderRadius: 12,
            fontWeight: 700, fontSize: 17,
          }}>
            <Sparkles size={18} /> {t("startFree")}
          </Link>
          <p style={{ fontSize: 13, color: "#64748b", marginTop: 14 }}>{t("noCreditCard")}</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
