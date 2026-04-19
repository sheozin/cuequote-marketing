import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SubscribeForm from "../components/SubscribeForm";
import { POSTS as ALL_BLOG_POSTS } from "../lib/blog-posts";
import { getTranslations, getLocale } from "next-intl/server";
import {
  Sparkles, FileText, Share2, Package, Globe, TrendingUp,
  MessageSquare, Mic, MonitorPlay, Zap, ArrowRight,
  Check, ChevronDown, CreditCard, Crown, Rocket,
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
          <div key={i} className="mockup-fade" style={{
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
            <div style={{ textAlign: "end" }}>
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
        @media (prefers-reduced-motion: reduce) {
          .mockup-fade { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default async function HomePage() {
  const locale = await getLocale();
  const t = await getTranslations("hero");
  const tFeatures = await getTranslations("features");
  const tPricing = await getTranslations("pricing");
  const tSubscribe = await getTranslations("subscribe");
  const tSocial = await getTranslations("socialProof");
  const tUseCases = await getTranslations("useCases");
  const tHowItWorks = await getTranslations("howItWorks");
  const tHomePricing = await getTranslations("homePricing");
  const tHomeFaq = await getTranslations("homeFaq");
  const tHomeBlog = await getTranslations("homeBlog");
  const tPosts = await getTranslations("posts");
  const tHomeCta = await getTranslations("homeCta");

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
              display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: "#10b981",
              background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.15)",
              padding: "6px 14px", borderRadius: 20, marginBottom: 24,
            }}>
              <Sparkles size={14} /> {t("badge")}
            </div>
            <h1 style={{
              fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: "clamp(2rem, 8vw, 3rem)",
              color: "#fff", lineHeight: 1.1, marginBottom: 20, letterSpacing: -1,
            }}>
              {t("title")}{" "}
              <span style={{ color: "#10b981" }}>{t("titleHighlight")}</span>{" "}
              {t("titleEnd")}
            </h1>
            <p style={{ fontSize: 18, color: "#94a3b8", lineHeight: 1.7, marginBottom: 32, maxWidth: 500 }}>
              {t("subtitle")}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href={`${APP_URL}/signup?lang=${locale}`} style={{
                textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
                background: "#10b981", color: "#fff", padding: "14px 28px", borderRadius: 10,
                fontWeight: 600, fontSize: 16, transition: "background 0.2s",
              }}>
                <Sparkles size={18} /> {t("cta")}
              </Link>
              <Link href="#how-it-works" style={{
                textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
                border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "14px 28px", borderRadius: 10,
                fontWeight: 500, fontSize: 16,
              }}>
                {t("ctaSecondary")} <ArrowRight size={16} />
              </Link>
            </div>
            <p style={{ fontSize: 13, color: "#64748b", marginTop: 16 }}>{t("noCreditCard")} &bull; {t("freeProposals")}</p>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <ProposalMockup />
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          }
        `}</style>
      </section>

      {/* ── 2. Social Proof ─────────────────────────────────────────────────── */}
      <section style={{ padding: "48px 24px", background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: 2, marginBottom: 24 }}>
            {tSocial("trusted")}
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", opacity: 0.7 }}>
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
              {tUseCases("title")}
            </h2>
            <p style={{ fontSize: 18, color: "#6b7280", maxWidth: 600, margin: "0 auto" }}>
              {tUseCases("subtitle")}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { icon: <Mic size={24} />, titleKey: "avProductionTitle" as const, descKey: "avProductionDesc" as const },
              { icon: <Zap size={24} />, titleKey: "freelanceTitle" as const, descKey: "freelanceDesc" as const },
              { icon: <MonitorPlay size={24} />, titleKey: "agencyTitle" as const, descKey: "agencyDesc" as const },
            ].map(({ icon, titleKey, descKey }) => (
              <div key={titleKey} style={{
                background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 32,
                transition: "box-shadow 0.3s, transform 0.3s",
              }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", marginBottom: 20 }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 20, color: "#08172E", marginBottom: 8 }}>{tUseCases(titleKey)}</h3>
                <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.6 }}>{tUseCases(descKey)}</p>
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
              {tFeatures("title")}
            </h2>
            <p style={{ fontSize: 18, color: "#6b7280", maxWidth: 600, margin: "0 auto" }}>
              {tFeatures("subtitle")}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { icon: <Sparkles size={22} />, titleKey: "aiTitle" as const, descKey: "aiDesc" as const },
              { icon: <FileText size={22} />, titleKey: "pdfTitle" as const, descKey: "pdfDesc" as const },
              { icon: <Share2 size={22} />, titleKey: "shareTitle" as const, descKey: "shareDesc" as const },
              { icon: <CreditCard size={22} />, titleKey: "invoicingTitle" as const, descKey: "invoicingDesc" as const },
              { icon: <Package size={22} />, titleKey: "catalogTitle" as const, descKey: "catalogDesc" as const },
              { icon: <Globe size={22} />, titleKey: "currencyTitle" as const, descKey: "currencyDesc" as const },
              { icon: <TrendingUp size={22} />, titleKey: "analyticsTitle" as const, descKey: "analyticsDesc" as const },
            ].map(({ icon, titleKey, descKey }) => (
              <div key={titleKey} style={{
                background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28,
              }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", marginBottom: 16 }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, color: "#08172E", marginBottom: 6 }}>{tFeatures(titleKey)}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{tFeatures(descKey)}</p>
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
              {tHowItWorks("title")}
            </h2>
            <p style={{ fontSize: 18, color: "#6b7280" }}>{tHowItWorks("subtitle")}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }} className="steps-grid">
            {[
              { step: "1", titleKey: "step1Title" as const, descKey: "step1Desc" as const },
              { step: "2", titleKey: "step2Title" as const, descKey: "step2Desc" as const },
              { step: "3", titleKey: "step3Title" as const, descKey: "step3Desc" as const },
            ].map(({ step, titleKey, descKey }) => (
              <div key={step} style={{ textAlign: "center" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%", background: "#10b981", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 24,
                  margin: "0 auto 20px",
                }}>
                  {step}
                </div>
                <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 22, color: "#08172E", marginBottom: 8 }}>{tHowItWorks(titleKey)}</h3>
                <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.6 }}>{tHowItWorks(descKey)}</p>
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
              {tPricing("title")}
            </h2>
            <p style={{ fontSize: 18, color: "#6b7280" }}>{tPricing("subtitle")}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, maxWidth: 1100, margin: "0 auto" }} className="home-pricing-grid">
            {[
              { name: "Free", price: "€0", period: "", icon: <Zap size={20} />, features: [tHomePricing("freeF1"), tHomePricing("freeF2"), tHomePricing("freeF3"), tHomePricing("freeF4")], cta: tPricing("startFree"), ctaStyle: "outline" as const, popular: false },
              { name: "Starter", price: "€39", period: "/mo", icon: <CreditCard size={20} />, features: [tHomePricing("starterF1"), tHomePricing("starterF2"), tHomePricing("starterF3"), tHomePricing("starterF4")], cta: tPricing("startTrial"), ctaStyle: "primary" as const, popular: true },
              { name: "Pro", price: "€99", period: "/mo", icon: <Crown size={20} />, features: [tHomePricing("proF1"), tHomePricing("proF2"), tHomePricing("proF3"), tHomePricing("proF4")], cta: tPricing("startTrial"), ctaStyle: "primary" as const, popular: false },
              { name: "Business", price: "€199", period: "/mo", icon: <Rocket size={20} />, features: [tHomePricing("businessF1"), tHomePricing("businessF2"), tHomePricing("businessF3"), tHomePricing("businessF4")], cta: tPricing("startTrial"), ctaStyle: "primary" as const, popular: false },
            ].map(({ name, price, period, icon, features, cta, ctaStyle, popular }) => (
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
                    {tPricing("popular")}
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <div style={{ color: "#10b981" }}>{icon}</div>
                  <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 20, color: "#08172E" }}>{name}</h3>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <span style={{ fontSize: 44, fontWeight: 800, color: "#08172E", letterSpacing: -1 }}>{price}</span>
                  <span style={{ fontSize: 15, color: "#9ca3af", fontWeight: 500 }}>{period}</span>
                </div>
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
              .home-pricing-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 560px) {
              .home-pricing-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ── 7. Blog (placeholder) ───────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 36, color: "#08172E" }}>
              {tHomeBlog("title")}
            </h2>
            <Link href="/blog" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#10b981", display: "flex", alignItems: "center", gap: 4 }}>
              {tHomeBlog("viewAll")} <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {ALL_BLOG_POSTS.slice(0, 3).map(({ slug, date }) => (
              <Link key={slug} href={`/blog/${slug}`} style={{ textDecoration: "none", cursor: "pointer" }}>
                <article style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28, height: "100%" }}>
                  <div style={{ fontSize: 12, color: "#10b981", fontWeight: 600, marginBottom: 12 }}>
                    {new Date(date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, color: "#08172E", marginBottom: 8, lineHeight: 1.3 }}>{tPosts(`${slug}.title`)}</h3>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{tPosts(`${slug}.excerpt`)}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: "96px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 36, color: "#08172E", marginBottom: 12 }}>
              {tHomeFaq("title")}
            </h2>
          </div>

          {[
            { q: tHomeFaq("q1"), a: tHomeFaq("a1") },
            { q: tHomeFaq("q2"), a: tHomeFaq("a2") },
            { q: tHomeFaq("q3"), a: tHomeFaq("a3") },
            { q: tHomeFaq("q4"), a: tHomeFaq("a4") },
            { q: tHomeFaq("q5"), a: tHomeFaq("a5") },
            { q: tHomeFaq("q6"), a: tHomeFaq("a6") },
            { q: tHomeFaq("q7"), a: tHomeFaq("a7") },
            { q: tHomeFaq("q8"), a: tHomeFaq("a8") },
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

      <style>{`
        summary::-webkit-details-marker { display: none; }
        details[open] summary svg { transform: rotate(180deg); }
      `}</style>

      {/* ── 9. Email Capture ────────────────────────────────────────────────── */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <MessageSquare size={32} style={{ color: "#10b981", margin: "0 auto 16px" }} />
          <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 22, color: "#08172E", marginBottom: 8 }}>
            {tSubscribe("title")}
          </h3>
          <p style={{ fontSize: 15, color: "#6b7280", marginBottom: 24 }}>
            {tSubscribe("subtitle")}
          </p>
          <SubscribeForm />
        </div>
      </section>

      {/* ── 10. Final CTA ───────────────────────────────────────────────────── */}
      <section style={{
        padding: "96px 24px", background: "linear-gradient(135deg, #08172E 0%, #0f2d50 100%)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 40, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
            {tHomeCta("title")}
          </h2>
          <p style={{ fontSize: 18, color: "#94a3b8", marginBottom: 32 }}>
            {tHomeCta("subtitle")}
          </p>
          <Link href={`${APP_URL}/signup?lang=${locale}`} style={{
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
            background: "#10b981", color: "#fff", padding: "16px 36px", borderRadius: 12,
            fontWeight: 700, fontSize: 18,
          }}>
            <Sparkles size={20} /> {tHomeCta("cta")}
          </Link>
          <p style={{ fontSize: 13, color: "#64748b", marginTop: 16 }}>{tHomeCta("noCreditCard")}</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
