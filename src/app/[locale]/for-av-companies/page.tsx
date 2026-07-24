import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { Testimonials } from "../../../components/Testimonials";
import {
  Sparkles, FileText, PenTool, CreditCard, Package, TrendingUp,
  ArrowRight, Clock, AlertTriangle, EyeOff, Palette,
  MessageSquare, Cpu, Send, Building2, Rocket, Music,
  HelpCircle, ChevronDown,
} from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

const APP_URL = "https://app.cuequote.com";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("avPage");
  const locale = await getLocale();
  const localePath = locale === 'en' ? '' : `/${locale}`;
  const pagePath = '/for-av-companies';
  const title = t("metaTitle");
  const description = t("metaDescription");
  return {
    title,
    description,
    alternates: {
      canonical: `https://cuequote.com${localePath}${pagePath}`,
      languages: {
        'en': `https://cuequote.com${pagePath}`,
        'pl': `https://cuequote.com/pl${pagePath}`,
        'ar': `https://cuequote.com/ar${pagePath}`,
        'de': `https://cuequote.com/de${pagePath}`,
        'fr': `https://cuequote.com/fr${pagePath}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://cuequote.com${localePath}${pagePath}`,
      siteName: 'CueQuote',
      type: 'website',
      images: [{ url: 'https://cuequote.com/og-image.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@cuequote',
      images: ['https://cuequote.com/og-image.png'],
    },
  };
}

export default async function ForAvCompaniesPage() {
  const locale = await getLocale();
  const t = await getTranslations("avPage");

  const painPoints = [
    { icon: <Clock size={20} />, titleKey: "pain1Title" as const, descKey: "pain1Desc" as const },
    { icon: <AlertTriangle size={20} />, titleKey: "pain2Title" as const, descKey: "pain2Desc" as const },
    { icon: <EyeOff size={20} />, titleKey: "pain3Title" as const, descKey: "pain3Desc" as const },
    { icon: <Palette size={20} />, titleKey: "pain4Title" as const, descKey: "pain4Desc" as const },
  ];

  const steps = [
    { step: "1", icon: <MessageSquare size={22} />, titleKey: "how1Title" as const, descKey: "how1Desc" as const },
    { step: "2", icon: <Cpu size={22} />, titleKey: "how2Title" as const, descKey: "how2Desc" as const },
    { step: "3", icon: <Send size={22} />, titleKey: "how3Title" as const, descKey: "how3Desc" as const },
  ];

  const features = [
    { icon: <Sparkles size={22} />, titleKey: "feat1Title" as const, descKey: "feat1Desc" as const },
    { icon: <FileText size={22} />, titleKey: "feat2Title" as const, descKey: "feat2Desc" as const },
    { icon: <PenTool size={22} />, titleKey: "feat3Title" as const, descKey: "feat3Desc" as const },
    { icon: <CreditCard size={22} />, titleKey: "feat4Title" as const, descKey: "feat4Desc" as const },
    { icon: <Package size={22} />, titleKey: "feat5Title" as const, descKey: "feat5Desc" as const },
    { icon: <TrendingUp size={22} />, titleKey: "feat6Title" as const, descKey: "feat6Desc" as const },
  ];

  const useCases = [
    { icon: <Building2 size={28} />, titleKey: "useCase1Title" as const, subtitleKey: "useCase1Subtitle" as const, descKey: "useCase1Desc" as const },
    { icon: <Rocket size={28} />, titleKey: "useCase2Title" as const, subtitleKey: "useCase2Subtitle" as const, descKey: "useCase2Desc" as const },
    { icon: <Music size={28} />, titleKey: "useCase3Title" as const, subtitleKey: "useCase3Subtitle" as const, descKey: "useCase3Desc" as const },
  ];

  const faqs = [
    { qKey: "faq1Q" as const, aKey: "faq1A" as const },
    { qKey: "faq2Q" as const, aKey: "faq2A" as const },
    { qKey: "faq3Q" as const, aKey: "faq3A" as const },
    { qKey: "faq4Q" as const, aKey: "faq4A" as const },
    { qKey: "faq5Q" as const, aKey: "faq5A" as const },
  ];

  return (
    <>
      <Nav />

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(135deg, #08172E 0%, #0f2d50 50%, #08172E 100%)",
        padding: "120px 24px 100px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: "#10b981",
            background: "rgba(16,185,129,0.15)", padding: "6px 16px", borderRadius: 20, marginBottom: 28,
          }}>
            <Sparkles size={12} /> {t("badge")}
          </div>

          <h1 style={{
            fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: "clamp(2rem, 6vw, 48px)", color: "#fff",
            marginBottom: 20, lineHeight: 1.15, letterSpacing: -1,
          }}>
            {t("heroTitle")}
          </h1>

          <p style={{
            fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 640, margin: "0 auto 32px",
          }}>
            {t("heroSubtitle")}
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={`${APP_URL}/signup?lang=${locale}`} style={{
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
              background: "#10b981", color: "#fff", padding: "14px 28px", borderRadius: 10,
              fontWeight: 600, fontSize: 16,
            }}>
              <Sparkles size={18} /> {t("ctaStart")}
            </Link>
            <Link href="#features" style={{
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "14px 28px", borderRadius: 10,
              fontWeight: 500, fontSize: 16,
            }}>
              {t("ctaDemo")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pain Points ────────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#ef4444", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>
              {t("painLabel")}
            </p>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 36, color: "#08172E", marginBottom: 12 }}>
              {t("painTitle")}
            </h2>
            <p style={{ fontSize: 18, color: "#6b7280", maxWidth: 600, margin: "0 auto" }}>
              {t("painSubtitle")}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {painPoints.map(({ icon, titleKey, descKey }) => (
              <div key={titleKey} style={{
                background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 16, padding: 28,
                borderLeft: "4px solid #ef4444",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, background: "#fee2e2",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#ef4444", marginBottom: 16,
                }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 16, color: "#991b1b", marginBottom: 6 }}>
                  {t(titleKey)}
                </h3>
                <p style={{ fontSize: 14, color: "#7f1d1d", lineHeight: 1.6, opacity: 0.8 }}>{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#10b981", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>
              {t("howLabel")}
            </p>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 36, color: "#08172E", marginBottom: 12 }}>
              {t("howTitle")}
            </h2>
            <p style={{ fontSize: 18, color: "#6b7280" }}>{t("howSubtitle")}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="av-steps-grid">
            {steps.map(({ step, titleKey, descKey }) => (
              <div key={step} style={{ textAlign: "center" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%", background: "#10b981", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 24,
                  margin: "0 auto 20px",
                }}>
                  {step}
                </div>
                <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, color: "#08172E", marginBottom: 8 }}>
                  {t(titleKey)}
                </h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .av-steps-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── Features Grid ──────────────────────────────────────────────────── */}
      <section id="features" style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#10b981", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>
              {t("featuresLabel")}
            </p>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 36, color: "#08172E", marginBottom: 12 }}>
              {t("featuresTitle")}
            </h2>
            <p style={{ fontSize: 18, color: "#6b7280", maxWidth: 600, margin: "0 auto" }}>
              {t("featuresSubtitle")}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {features.map(({ icon, titleKey, descKey }) => (
              <div key={titleKey} style={{
                background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 16, padding: 28,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, background: "#ecfdf5",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", marginBottom: 16,
                }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, color: "#08172E", marginBottom: 6 }}>{t(titleKey)}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ──────────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#10b981", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>
              {t("useCasesLabel")}
            </p>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 36, color: "#08172E", marginBottom: 12 }}>
              {t("useCasesTitle")}
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {useCases.map(({ icon, titleKey, subtitleKey, descKey }) => (
              <div key={titleKey} style={{
                background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 32,
                textAlign: "center",
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14, background: "#ecfdf5",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981",
                  margin: "0 auto 20px",
                }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 20, color: "#08172E", marginBottom: 4 }}>
                  {t(titleKey)}
                </h3>
                <p style={{ fontSize: 13, color: "#10b981", fontWeight: 600, marginBottom: 12 }}>
                  {t(subtitleKey)}
                </p>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────────────── */}
      <Testimonials title={t("testimonialsTitle")} subtitle={t("testimonialsSubtitle")} />

      {/* ── Pricing Teaser ─────────────────────────────────────────────────── */}
      <section style={{ padding: "64px 24px", background: "#ecfdf5", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <Sparkles size={24} style={{ color: "#10b981", marginBottom: 16 }} />
          <h2 style={{
            fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 28, color: "#08172E",
            marginBottom: 8,
          }}>
            {t("pricingTeaser")}
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280", marginBottom: 24 }}>
            {t("pricingDesc")}
          </p>
          <Link href="/pricing" style={{
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
            color: "#10b981", fontWeight: 600, fontSize: 16,
          }}>
            {t("pricingLink")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#10b981", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>
              {t("faqLabel")}
            </p>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 36, color: "#08172E" }}>
              {t("faqTitle")}
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map(({ qKey, aKey }) => (
              <details key={qKey} style={{
                background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 12,
                overflow: "hidden",
              }}>
                <summary style={{
                  padding: "20px 24px", cursor: "pointer", fontFamily: "var(--font-dm-sans)",
                  fontWeight: 600, fontSize: 16, color: "#08172E", listStyle: "none",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                  {t(qKey)}
                  <ChevronDown size={18} style={{ color: "#9ca3af", flexShrink: 0 }} />
                </summary>
                <div style={{ padding: "0 24px 20px", fontSize: 15, color: "#6b7280", lineHeight: 1.7 }}>
                  {t(aKey)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────────────────────── */}
      <section style={{
        padding: "96px 24px",
        background: "linear-gradient(135deg, #08172E 0%, #0f2d50 100%)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 40, color: "#fff",
            marginBottom: 16, lineHeight: 1.2,
          }}>
            {t("ctaBottomTitle")}
          </h2>
          <p style={{ fontSize: 18, color: "#94a3b8", marginBottom: 32 }}>
            {t("ctaBottomSubtitle")}
          </p>
          <Link href={`${APP_URL}/signup?lang=${locale}`} style={{
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
            background: "#10b981", color: "#fff", padding: "16px 36px", borderRadius: 12,
            fontWeight: 700, fontSize: 18,
          }}>
            <Sparkles size={20} /> {t("ctaBottomButton")}
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
