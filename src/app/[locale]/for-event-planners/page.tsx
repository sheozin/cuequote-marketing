import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { Testimonials } from "../../../components/Testimonials";
import {
  Sparkles, ArrowRight, AlertTriangle, ClipboardList, Search,
  BarChart3, Shield, Scale, FileText, Users,
  Building2, Award, Heart, HelpCircle, ChevronDown,
} from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

const APP_URL = "https://app.cuequote.com";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("plannerPage");
  const locale = await getLocale();
  const localePath = locale === 'en' ? '' : `/${locale}`;
  const pagePath = '/for-event-planners';
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
        'x-default': `https://cuequote.com${pagePath}`,
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

export default async function ForEventPlannersPage() {
  const locale = await getLocale();
  const t = await getTranslations("plannerPage");

  const problems = [
    { icon: <BarChart3 size={20} />, titleKey: "problem1Title" as const, descKey: "problem1Desc" as const },
    { icon: <AlertTriangle size={20} />, titleKey: "problem2Title" as const, descKey: "problem2Desc" as const },
    { icon: <Search size={20} />, titleKey: "problem3Title" as const, descKey: "problem3Desc" as const },
    { icon: <Shield size={20} />, titleKey: "problem4Title" as const, descKey: "problem4Desc" as const },
  ];

  const steps = [
    { step: "1", titleKey: "how1Title" as const, descKey: "how1Desc" as const },
    { step: "2", titleKey: "how2Title" as const, descKey: "how2Desc" as const },
    { step: "3", titleKey: "how3Title" as const, descKey: "how3Desc" as const },
    { step: "4", titleKey: "how4Title" as const, descKey: "how4Desc" as const },
  ];

  const features = [
    { icon: <ClipboardList size={22} />, titleKey: "feat1Title" as const, descKey: "feat1Desc" as const },
    { icon: <Scale size={22} />, titleKey: "feat2Title" as const, descKey: "feat2Desc" as const },
    { icon: <Search size={22} />, titleKey: "feat3Title" as const, descKey: "feat3Desc" as const },
    { icon: <BarChart3 size={22} />, titleKey: "feat4Title" as const, descKey: "feat4Desc" as const },
    { icon: <FileText size={22} />, titleKey: "feat5Title" as const, descKey: "feat5Desc" as const },
    { icon: <Users size={22} />, titleKey: "feat6Title" as const, descKey: "feat6Desc" as const },
  ];

  const useCases = [
    { icon: <Building2 size={28} />, titleKey: "useCase1Title" as const, subtitleKey: "useCase1Subtitle" as const, descKey: "useCase1Desc" as const },
    { icon: <Award size={28} />, titleKey: "useCase2Title" as const, subtitleKey: "useCase2Subtitle" as const, descKey: "useCase2Desc" as const },
    { icon: <Heart size={28} />, titleKey: "useCase3Title" as const, subtitleKey: "useCase3Subtitle" as const, descKey: "useCase3Desc" as const },
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
      <main>

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
            <Link href="#how-it-works" style={{
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "14px 28px", borderRadius: 10,
              fontWeight: 500, fontSize: 16,
            }}>
              {t("ctaHow")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Problems ───────────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#ef4444", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>
              {t("problemsLabel")}
            </p>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 36, color: "#08172E", marginBottom: 12 }}>
              {t("problemsTitle")}
            </h2>
            <p style={{ fontSize: 18, color: "#6b7280", maxWidth: 600, margin: "0 auto" }}>
              {t("problemsSubtitle")}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {problems.map(({ icon, titleKey, descKey }) => (
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
      <section id="how-it-works" style={{ padding: "96px 24px", background: "#f9fafb" }}>
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

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }} className="planner-steps-grid">
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
            .planner-steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 480px) {
            .planner-steps-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── Screenshot: Event Templates ─────────────────────────────────── */}
      <section style={{ padding: "100px 24px", background: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: 40, left: 0, width: 200, height: 200, opacity: 0.04,
          backgroundImage: "radial-gradient(circle, #08172E 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 80 }} className="planner-showcase-row">
          <div style={{ flex: "1 1 360px", position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#ecfdf5", borderRadius: 20, padding: "6px 14px", marginBottom: 20,
            }}>
              <ClipboardList size={14} style={{ color: "#10b981" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#059669", textTransform: "uppercase", letterSpacing: 1.5 }}>{t("showcaseTemplatesBadge", { defaultValue: "EVENT TEMPLATES" })}</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 32, color: "#08172E", lineHeight: 1.15, marginBottom: 20 }}>
              {t("showcaseTemplatesTitle", { defaultValue: "8 event types. AI handles the rest." })}
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 28 }}>
              {t("showcaseTemplatesDesc", { defaultValue: "Choose your event type — conference, wedding, gala, product launch — and AI generates a complete production plan with equipment, crew, and budget ranges." })}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                t("showcaseTemplatesBullet1", { defaultValue: "Market-rate budget ranges — know what's fair" }),
                t("showcaseTemplatesBullet2", { defaultValue: "Crew recommendations with daily rates" }),
                t("showcaseTemplatesBullet3", { defaultValue: "Export vendor briefs to send to AV companies" }),
              ].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: "1 1 520px", position: "relative" }}>
            <div style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: "90%", height: "80%", borderRadius: 40,
              background: "radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, transparent 70%)",
              filter: "blur(40px)", pointerEvents: "none",
            }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/screenshots/planner-02-templates.png" alt="Event type templates — conference, wedding, product launch, gala" style={{
              width: "100%", borderRadius: 16, position: "relative", zIndex: 1,
              boxShadow: "0 25px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
            }} />
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .planner-showcase-row { flex-direction: column !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* ── Screenshot: Budget Review ─────────────────────────────────────── */}
      <section style={{ padding: "100px 24px", background: "#f9fafb", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 80 }} className="planner-showcase-row-rev">
          <div style={{ flex: "1 1 520px", position: "relative", order: 1 }}>
            <div style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: "90%", height: "80%", borderRadius: 40,
              background: "radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)",
              filter: "blur(40px)", pointerEvents: "none",
            }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/screenshots/planner-05-budget-review.png" alt="AI-generated production budget with equipment and crew costs" style={{
              width: "100%", borderRadius: 16, position: "relative", zIndex: 1,
              boxShadow: "0 25px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
            }} />
          </div>
          <div style={{ flex: "1 1 360px", position: "relative", zIndex: 1, order: 2 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#f5f3ff", borderRadius: 20, padding: "6px 14px", marginBottom: 20,
            }}>
              <BarChart3 size={14} style={{ color: "#8b5cf6" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#7c3aed", textTransform: "uppercase", letterSpacing: 1.5 }}>{t("showcaseBudgetBadge", { defaultValue: "BUDGET REVIEW" })}</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 32, color: "#08172E", lineHeight: 1.15, marginBottom: 20 }}>
              {t("showcaseBudgetTitle", { defaultValue: "Know your budget before calling a vendor" })}
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 28 }}>
              {t("showcaseBudgetDesc", { defaultValue: "AI generates detailed budget estimates with market-rate pricing. Compare quotes when they come back — and know if you're getting a fair deal." })}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                t("showcaseBudgetBullet1", { defaultValue: "Detailed cost breakdown by category" }),
                t("showcaseBudgetBullet2", { defaultValue: "Market-rate ranges so you know what's fair" }),
                t("showcaseBudgetBullet3", { defaultValue: "Compare vendor quotes side by side" }),
              ].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#f5f3ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .planner-showcase-row-rev { flex-direction: column !important; gap: 40px !important; }
            .planner-showcase-row-rev > div:first-child { order: 2 !important; }
            .planner-showcase-row-rev > div:last-child { order: 1 !important; }
          }
        `}</style>
      </section>

      {/* ── Features ───────────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
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
                transition: "box-shadow 0.3s, transform 0.3s",
              }} className="planner-feature-card">
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
        <style>{`
          .planner-feature-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-2px); }
        `}</style>
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
                  <ChevronDown size={18} style={{ color: "#6b7280", flexShrink: 0 }} />
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

      </main>
      <Footer />
    </>
  );
}
