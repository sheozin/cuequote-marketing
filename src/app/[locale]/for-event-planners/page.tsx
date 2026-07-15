import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import {
  Sparkles, ArrowRight, AlertTriangle, ClipboardList, Search,
  BarChart3, Shield, Scale, FileText, Users,
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
      },
    },
    openGraph: { title, description },
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
