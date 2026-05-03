import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { Check, ChevronDown, Package, Sparkles, ArrowRight, Zap, CreditCard, Crown, Rocket, Building2 } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

const APP_URL = "https://app.cuequote.com";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pricing");
  const title = t("metaTitle", { defaultValue: "Pricing" });
  const description = t("metaDescription", { defaultValue: "Simple, transparent pricing for AV proposal generation. Start free, upgrade as you grow." });
  return {
    title,
    description,
    alternates: { canonical: "/pricing" },
    openGraph: { title, description },
  };
}

export default async function PricingPage() {
  const locale = await getLocale();
  const t = await getTranslations("pricing");

  const newFeatureLabels = new Set([
    t("starterF4"),
    t("proF3"),
    t("proF4"),
    t("proF5"),
    t("proF6"),
  ]);

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
      save: t("starterSave"),
    },
    {
      name: t("proName"),
      price: "€79",
      period: t("perMonth"),
      desc: t("proDesc"),
      icon: <Crown size={20} />,
      features: [t("proF1"), t("proF2"), t("proF3"), t("proF4"), t("proF5"), t("proF6"), t("proF7"), t("proF8")],
      cta: t("startTrial"),
      ctaStyle: "featured" as const,
      popular: true,
      note: t("proNote", { defaultValue: "Best value for teams" }),
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

  const comparisonRows = [
    { cat: t("compProposals", { defaultValue: "Proposals" }) },
    { label: t("compAiPerMonth", { defaultValue: "AI proposals/month" }), free: "3", starter: "10", pro: "40", business: "120" },
    { label: t("compBrandedPdf", { defaultValue: "Branded PDFs" }), free: false, starter: true, pro: true, business: true },
    { label: t("compTemplates", { defaultValue: "PDF templates" }), free: "1", starter: "4", pro: "4", business: "4" },
    { label: t("compRecurring", { defaultValue: "Recurring proposals" }), free: false, starter: false, pro: true, business: true },
    { cat: t("compClientExp", { defaultValue: "Client Experience" }) },
    { label: t("compShareLinks", { defaultValue: "Share links + tracking" }), free: true, starter: true, pro: true, business: true },
    { label: t("compEsig", { defaultValue: "E-signatures" }), free: t("compNameOnly", { defaultValue: "Name only" }), starter: t("compFull", { defaultValue: "Full" }), pro: t("compFull", { defaultValue: "Full" }), business: t("compFull", { defaultValue: "Full" }) },
    { label: t("compPortal", { defaultValue: "Client portal" }), free: false, starter: false, pro: true, business: true },
    { label: t("compAnalytics", { defaultValue: "Proposal analytics" }), free: t("compViewsOnly", { defaultValue: "Views only" }), starter: t("compViewsOnly", { defaultValue: "Views only" }), pro: t("compFull", { defaultValue: "Full" }), business: t("compFull", { defaultValue: "Full" }) },
    { cat: t("compCustomization", { defaultValue: "Customization" }) },
    { label: t("compWhiteLabel", { defaultValue: "White-label PDFs" }), free: false, starter: false, pro: true, business: true },
    { label: t("compTerms", { defaultValue: "Custom terms & T&C" }), free: true, starter: true, pro: true, business: true },
    { label: t("compMultiLang", { defaultValue: "Multi-language" }), free: true, starter: true, pro: true, business: true },
    { cat: t("compTeamSupport", { defaultValue: "Team & Support" }) },
    { label: t("compTeamMembers", { defaultValue: "Team members" }), free: "1", starter: "1", pro: "5", business: "20" },
    { label: t("compClients", { defaultValue: "Client management" }), free: false, starter: true, pro: true, business: true },
    { label: t("compInvoicing", { defaultValue: "Invoicing" }), free: false, starter: true, pro: true, business: true },
    { label: t("compApi", { defaultValue: "API access" }), free: false, starter: false, pro: false, business: true },
    { label: t("compSupport", { defaultValue: "Support" }), free: t("compCommunity", { defaultValue: "Community" }), starter: t("compEmail", { defaultValue: "Email" }), pro: t("compPriority", { defaultValue: "Priority" }), business: t("compDedicated", { defaultValue: "Dedicated" }) },
  ];

  return (
    <>
      <Nav />

      <style>{`
        .pricing-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; max-width: 1140px; margin: -70px auto 0; position: relative; z-index: 2; }
        @media (max-width: 900px) { .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; } .feat-card { transform: none !important; } }
        @media (max-width: 560px) { .pricing-grid { grid-template-columns: 1fr !important; } }
        .packs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; max-width: 580px; margin: 0 auto 32px; }
        @media (max-width: 500px) { .packs-grid { grid-template-columns: 1fr !important; } }
        .comp-table { width: 100%; border-collapse: collapse; }
        .comp-table th, .comp-table td { padding: 14px 16px; font-size: 13px; text-align: center; }
        .comp-table th:first-child, .comp-table td:first-child { text-align: start; }
        .comp-table thead th { font-weight: 700; color: #08172E; border-bottom: 2px solid #e5e7eb; font-size: 14px; }
        .comp-table tbody td { border-bottom: 1px solid #f3f4f6; color: #374151; }
        .comp-table .pro-col { background: #f0fdf4; }
        .comp-table thead .pro-col { border-radius: 12px 12px 0 0; }
        summary::-webkit-details-marker { display: none; }
        details[open] summary svg { transform: rotate(180deg); }
      `}</style>

      {/* Hero — Dark */}
      <section style={{
        background: "linear-gradient(135deg, #08172E 0%, #0f2d50 50%, #08172E 100%)",
        padding: "100px 24px 120px", textAlign: "center",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: "#10b981",
          background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", padding: "6px 16px", borderRadius: 100, marginBottom: 24,
        }}>
          <Sparkles size={13} /> {t("heroBadge")}
        </div>
        <h1 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 48, color: "#fff", marginBottom: 14, letterSpacing: -1.5, lineHeight: 1.1 }}>
          {t("heroTitle")}
        </h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
          {t("heroSubtitle")}
        </p>
      </section>

      {/* Plan Cards */}
      <section style={{ padding: "0 24px 80px" }}>
        <div className="pricing-grid" style={{ padding: "0 8px" }}>
          {plans.map(({ name, price, period, desc, icon, features, cta, ctaStyle, popular, save, note }) => {
            const isFeat = popular;
            return (
              <div key={name} className={isFeat ? "feat-card" : ""} style={{
                background: isFeat ? "linear-gradient(135deg, #08172E 0%, #0f2d50 100%)" : "#fff",
                borderRadius: 20, padding: isFeat ? "44px 28px 36px" : "32px 24px 28px",
                border: isFeat ? "1.5px solid rgba(16,185,129,0.4)" : "1px solid #e5e7eb",
                position: "relative",
                transform: isFeat ? "scale(1.04)" : "none",
                boxShadow: isFeat ? "0 20px 60px rgba(8,23,46,0.35)" : "0 2px 12px rgba(0,0,0,0.04)",
                display: "flex", flexDirection: "column",
                zIndex: isFeat ? 3 : 1,
              }}>
                {popular && (
                  <div style={{
                    position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                    background: "#10b981", color: "#fff", fontSize: 11, fontWeight: 700,
                    padding: "6px 20px", borderRadius: 100, whiteSpace: "nowrap", letterSpacing: 0.5,
                    textTransform: "uppercase",
                  }}>
                    {t("popular")}
                  </div>
                )}

                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                    background: isFeat ? "rgba(16,185,129,0.15)" : "#f0fdf4", color: "#10b981",
                  }}>{icon}</div>
                  <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 22, color: isFeat ? "#fff" : "#08172E", letterSpacing: -0.5 }}>{name}</h3>
                </div>
                <p style={{ fontSize: 13, color: isFeat ? "rgba(255,255,255,0.45)" : "#9ca3af", marginBottom: 20, lineHeight: 1.4 }}>{desc}</p>

                <div style={{ marginBottom: 4 }}>
                  <span style={{ fontSize: 48, fontWeight: 800, color: isFeat ? "#fff" : "#08172E", letterSpacing: -2 }}>{price}</span>
                  <span style={{ fontSize: 16, fontWeight: 500, color: isFeat ? "rgba(255,255,255,0.35)" : "#9ca3af" }}>{period}</span>
                </div>
                <p style={{ fontSize: 12, color: "#10b981", fontWeight: 600, marginBottom: 20, minHeight: 18 }}>
                  {save || note || "\u00A0"}
                </p>

                <div style={{ height: 1, background: isFeat ? "rgba(255,255,255,0.08)" : "#f3f4f6", marginBottom: 20 }} />

                <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1 }}>
                  {features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: isFeat ? "rgba(255,255,255,0.8)" : "#4b5563", padding: "6px 0" }}>
                      <Check size={15} style={{ color: "#10b981", flexShrink: 0 }} />
                      <span>{f}</span>
                      {newFeatureLabels.has(f) && (
                        <span style={{
                          fontSize: 9, fontWeight: 700, color: "#10b981",
                          background: isFeat ? "rgba(16,185,129,0.2)" : "rgba(16,185,129,0.1)",
                          padding: "2px 6px", borderRadius: 4, flexShrink: 0, letterSpacing: 0.5,
                        }}>NEW</span>
                      )}
                    </li>
                  ))}
                </ul>

                <Link href={`${APP_URL}/signup?lang=${locale}`} style={{
                  textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  padding: "14px 24px", borderRadius: 12, fontWeight: 700, fontSize: 15, marginTop: 24,
                  background: ctaStyle === "featured" ? "#10b981" : ctaStyle === "primary" ? "#08172E" : "transparent",
                  color: ctaStyle === "outline" ? "#08172E" : "#fff",
                  border: ctaStyle === "outline" ? "1.5px solid #e5e7eb" : "none",
                  transition: "all 0.2s",
                }}>
                  {cta} {ctaStyle !== "outline" && <ArrowRight size={16} />}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 28, color: "#08172E", textAlign: "center", marginBottom: 8, letterSpacing: -0.5 }}>
            {t("compareTitle", { defaultValue: "Compare all features" })}
          </h2>
          <p style={{ textAlign: "center", color: "#6b7280", fontSize: 15, marginBottom: 40 }}>
            {t("compareSubtitle", { defaultValue: "See exactly what's included in each plan" })}
          </p>

          <div style={{ overflowX: "auto" }}>
            <table className="comp-table">
              <thead>
                <tr>
                  <th style={{ width: "30%" }}></th>
                  <th>{t("freeName")}</th>
                  <th>{t("starterName")}</th>
                  <th className="pro-col">{t("proName")}</th>
                  <th>{t("businessName")}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => {
                  if ('cat' in row && !('label' in row)) {
                    return (
                      <tr key={i}>
                        <td style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: "#9ca3af", paddingTop: 28, borderBottom: "none" }}>{row.cat}</td>
                        <td style={{ borderBottom: "none" }}></td>
                        <td style={{ borderBottom: "none" }}></td>
                        <td className="pro-col" style={{ borderBottom: "none" }}></td>
                        <td style={{ borderBottom: "none" }}></td>
                      </tr>
                    );
                  }
                  const r = row as { label: string; free: boolean | string; starter: boolean | string; pro: boolean | string; business: boolean | string };
                  const renderCell = (val: boolean | string, isPro?: boolean) => {
                    if (val === true) return <td className={isPro ? "pro-col" : ""} style={{ color: "#10b981", fontSize: 16 }}>✓</td>;
                    if (val === false) return <td className={isPro ? "pro-col" : ""} style={{ color: "#d1d5db" }}>—</td>;
                    return <td className={isPro ? "pro-col" : ""} style={{ fontSize: 13, fontWeight: val === t("compFull", { defaultValue: "Full" }) ? 600 : 400, color: val === t("compFull", { defaultValue: "Full" }) ? "#10b981" : "#374151" }}>{val}</td>;
                  };
                  return (
                    <tr key={i}>
                      <td style={{ fontWeight: 500, color: "#6b7280" }}>{r.label}</td>
                      {renderCell(r.free)}
                      {renderCell(r.starter)}
                      {renderCell(r.pro, true)}
                      {renderCell(r.business)}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section style={{ padding: "72px 24px", background: "#08172E", position: "relative", overflow: "hidden" }}>
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
            <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 480, margin: "0 auto" }}>
              {t("creditPacksSubtitle")}
            </p>
          </div>
          <div className="packs-grid">
            <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 20, padding: "32px 28px", textAlign: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <span style={{ fontSize: 24, fontWeight: 800, color: "#10b981" }}>5</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, marginBottom: 4 }}>5 Proposals</h3>
              <div><span style={{ fontSize: 36, fontWeight: 800 }}>€25</span></div>
              <p style={{ fontSize: 13, color: "#10b981", fontWeight: 600, marginBottom: 16 }}>€5.00 each</p>
              <Link href={`${APP_URL}/signup?lang=${locale}`} style={{ textDecoration: "none", display: "block", padding: "12px", borderRadius: 10, fontWeight: 600, fontSize: 14, border: "1px solid #e5e7eb", color: "#08172E" }}>
                {t("buy3Pack")}
              </Link>
            </div>
            <div style={{ background: "#fff", border: "2px solid #10b981", borderRadius: 20, padding: "32px 28px", textAlign: "center", position: "relative", boxShadow: "0 8px 30px rgba(16,185,129,0.08)" }}>
              <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#10b981", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 12 }}>
                {t("bestValue")}
              </div>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <span style={{ fontSize: 24, fontWeight: 800, color: "#10b981" }}>15</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, marginBottom: 4 }}>15 Proposals</h3>
              <div><span style={{ fontSize: 36, fontWeight: 800 }}>€59</span></div>
              <p style={{ fontSize: 13, color: "#10b981", fontWeight: 600, marginBottom: 16 }}>€3.93 each</p>
              <Link href={`${APP_URL}/signup?lang=${locale}`} style={{ textDecoration: "none", display: "block", padding: "12px", borderRadius: 10, fontWeight: 600, fontSize: 14, background: "#10b981", color: "#fff" }}>
                {t("buy10Pack")}
              </Link>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            {[t("noMonthlyFee"), t("creditsNeverExpire"), t("brandedPdfsIncluded")].map((b) => (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6b7280" }}>
                <Check size={14} style={{ color: "#10b981" }} /> {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 32, color: "#08172E", marginBottom: 48, textAlign: "center" }}>
            {t("faq")}
          </h2>
          {faqs.map(({ q, a }, i) => (
            <details key={i} style={{ borderBottom: "1px solid #e5e7eb", padding: "20px 0" }}>
              <summary style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 600, fontSize: 16, color: "#08172E", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {q} <ChevronDown size={18} style={{ color: "#9ca3af", flexShrink: 0 }} />
              </summary>
              <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7, marginTop: 12 }}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "80px 24px", textAlign: "center", background: "linear-gradient(135deg, #08172E 0%, #0f2d50 100%)" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 32, color: "#fff", marginBottom: 12, lineHeight: 1.2 }}>
            {t("readyTitle")}
          </h2>
          <p style={{ fontSize: 16, color: "#94a3b8", marginBottom: 28 }}>{t("readySubtitle")}</p>
          <Link href={`${APP_URL}/signup?lang=${locale}`} style={{
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
            background: "#10b981", color: "#fff", padding: "16px 36px", borderRadius: 12, fontWeight: 700, fontSize: 17,
          }}>
            <Sparkles size={18} /> {t("startFree")}
          </Link>
          <p style={{ fontSize: 13, color: "#64748b", marginTop: 14 }}>{t("noCreditCard")}</p>
        </div>
      </section>

      {/* FAQ structured data for rich search results — content is from trusted i18n keys, not user input */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(({ q, a }) => ({
          "@type": "Question",
          "name": q,
          "acceptedAnswer": { "@type": "Answer", "text": a }
        }))
      }) }} />

      <Footer />
    </>
  );
}
