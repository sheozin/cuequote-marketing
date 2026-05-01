import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { Sparkles, Check, ArrowRight, Globe, Calendar, BarChart3, Zap } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

const APP_URL = "https://app.cuequote.com";

export const metadata: Metadata = {
  title: "About",
  description: "CueQuote is built by AVE Events — a team that has been in the AV production trenches. We built the tool we wished existed.",
  alternates: { canonical: "/about" },
};

export default async function AboutPage() {
  const locale = await getLocale();
  const t = await getTranslations("about");

  const diffItems = [
    { icon: <BarChart3 size={20} style={{ color: "#10b981" }} />, title: t("diff1") },
    { icon: <Zap size={20} style={{ color: "#10b981" }} />, title: t("diff2") },
    { icon: <Globe size={20} style={{ color: "#10b981" }} />, title: t("diff3") },
    { icon: <Check size={20} style={{ color: "#10b981" }} />, title: t("diff4") },
  ];

  return (
    <>
      <Nav />

      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
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
            fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 48, color: "#fff",
            marginBottom: 20, lineHeight: 1.15, letterSpacing: -1,
          }}>
            {t("heading")}{" "}
            <span style={{ color: "#10b981" }}>{t("headingHighlight")}</span>
          </h1>

          <p style={{
            fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto",
          }}>
            {t("p1")}
          </p>
        </div>
      </section>

      {/* ── Section 2: Story + Stats ────────────────────────────────────── */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div className="about-story-grid" style={{
          maxWidth: 1040, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start",
        }}>
          {/* Left: narrative */}
          <div style={{ fontSize: 17, color: "#4b5563", lineHeight: 1.8 }}>
            <p style={{ marginBottom: 24 }}>
              {t.rich("p2", {
                strong: (chunks) => <strong style={{ color: "#08172E" }}>{chunks}</strong>,
              })}
            </p>
            <p style={{ marginBottom: 24 }}>
              {t("p3")}
            </p>
            <p style={{ marginBottom: 24 }}>
              {t("p4")}
            </p>
            <p style={{ marginBottom: 0 }}>
              {t.rich("p5", {
                strong: (chunks) => <strong style={{ color: "#08172E" }}>{chunks}</strong>,
              })}
            </p>
          </div>

          {/* Right: info card */}
          <div style={{
            background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)",
            borderRadius: 20, padding: 40,
            border: "1px solid #e5e7eb",
          }}>
            <h3 style={{
              fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, color: "#08172E",
              marginBottom: 32, textTransform: "uppercase", letterSpacing: 1,
            }}>
              At a Glance
            </h3>

            {[
              { label: "Founded", value: "2026" },
              { label: "Headquarters", value: "Warsaw, Poland" },
              { label: "Industry", value: "AV & Event Production" },
              { label: "Events Quoted", value: "10,000+" },
              { label: "Countries Served", value: "15+" },
              { label: "Team", value: "AVE Events" },
            ].map((stat, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "16px 0",
                borderBottom: i < 5 ? "1px solid #e5e7eb" : "none",
              }}>
                <span style={{ fontSize: 14, color: "#6b7280", fontWeight: 500 }}>{stat.label}</span>
                <span style={{ fontSize: 15, color: "#08172E", fontWeight: 700 }}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Why We're Different ──────────────────────────────── */}
      <section style={{ padding: "96px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{
              fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 36, color: "#08172E",
              marginBottom: 12, letterSpacing: -0.5,
            }}>
              {t("whyDifferent")}
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 560, margin: "0 auto" }}>
              Built from real-world AV production experience, not a generic template.
            </p>
          </div>

          <div className="about-diff-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
          }}>
            {diffItems.map((item, i) => (
              <div key={i} style={{
                background: "#fff", borderRadius: 16, padding: "32px 28px",
                border: "1px solid #e5e7eb",
                borderLeft: "4px solid #10b981",
                transition: "box-shadow 0.2s",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: "#ecfdf5",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16,
                }}>
                  {item.icon}
                </div>
                <p style={{
                  fontSize: 15, color: "#374151", lineHeight: 1.6, fontWeight: 500, margin: 0,
                }}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: CTA ──────────────────────────────────────────────── */}
      <section style={{
        padding: "96px 24px",
        background: "linear-gradient(135deg, #08172E 0%, #0f2d50 100%)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 32, color: "#fff",
            marginBottom: 16, letterSpacing: -0.5,
          }}>
            Ready to transform your AV quoting?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", marginBottom: 32, lineHeight: 1.7 }}>
            Join AV professionals who close deals faster with CueQuote.
          </p>
          <Link href={`${APP_URL}/signup?lang=${locale}`} style={{
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
            background: "#10b981", color: "#fff", padding: "16px 32px", borderRadius: 12,
            fontWeight: 600, fontSize: 16, transition: "background 0.2s",
          }}>
            <Sparkles size={18} /> {t("cta")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-diff-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
    </>
  );
}
