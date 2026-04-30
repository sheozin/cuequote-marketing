import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { getTranslations, getLocale } from "next-intl/server";
import { getTutorials, type Tutorial } from "@/lib/tutorials";

export const metadata: Metadata = {
  title: "Tutorials — Learn CueQuote",
  description:
    "Step-by-step video guides to master CueQuote's AV proposal automation features.",
  alternates: { canonical: "/tutorials" },
};

const DIFFICULTY_STYLES: Record<Tutorial["difficulty"], { background: string; color: string }> = {
  beginner: { background: "rgba(16,185,129,0.1)", color: "#059669" },
  intermediate: { background: "rgba(59,130,246,0.1)", color: "#2563eb" },
  advanced: { background: "rgba(139,92,246,0.1)", color: "#7c3aed" },
};

export default async function TutorialsPage() {
  const t = await getTranslations("tutorials");
  const locale = await getLocale();
  const tutorials = getTutorials(locale);

  return (
    <>
      <Nav />

      <style>{`
        .tutorial-card:hover {
          box-shadow: 0 8px 30px rgba(0,0,0,0.12) !important;
          transform: translateY(-2px) !important;
        }
        .tutorial-thumb:hover .play-btn {
          transform: scale(1.1);
        }
        @media (max-width: 768px) {
          .tutorials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #08172E 0%, #0f2847 50%, #08172E 100%)",
        padding: "100px 24px 80px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{
            display: "inline-block",
            background: "rgba(16,185,129,0.15)",
            color: "#10b981",
            fontSize: 13,
            fontWeight: 600,
            padding: "6px 16px",
            borderRadius: 100,
            marginBottom: 24,
          }}>
            {t("badge")}
          </span>
          <h1 style={{
            fontSize: 48,
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: 20,
            fontFamily: "var(--font-dm-sans)",
          }}>
            {t("heading")}
          </h1>
          <p style={{
            fontSize: 18,
            color: "#94a3b8",
            lineHeight: 1.6,
            maxWidth: 600,
            margin: "0 auto",
          }}>
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Master Walkthrough — Featured */}
      <section style={{
        padding: "0 24px 60px",
        maxWidth: 1000,
        margin: "-40px auto 0",
        position: "relative",
        zIndex: 10,
      }}>
        <div style={{
          background: "#fff",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          border: "1px solid #e5e7eb",
        }}>
          {/* Video embed */}
          <div style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            background: "linear-gradient(135deg, #08172E, #0f2d50)",
          }}>
            <iframe
              src="https://www.youtube.com/embed/z0Pn10CDPMY"
              title="CueQuote — Complete Product Walkthrough"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
          {/* Info bar */}
          <div style={{
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                <span style={{
                  background: "rgba(16,185,129,0.1)",
                  color: "#059669",
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "4px 12px",
                  borderRadius: 100,
                }}>
                  PRODUCT TOUR
                </span>
                <span style={{ color: "#9ca3af", fontSize: 13 }}>8 min</span>
              </div>
              <h2 style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: 22,
                fontWeight: 800,
                color: "#08172E",
                margin: 0,
              }}>
                Complete Product Walkthrough
              </h2>
              <p style={{ color: "#6b7280", fontSize: 14, margin: "6px 0 0", maxWidth: 500 }}>
                See every feature end-to-end — from signup to a fully priced, professional AV proposal in under 5 minutes.
              </p>
            </div>
            <a
              href="https://app.cuequote.com/signup"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#10b981",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                padding: "12px 24px",
                borderRadius: 10,
                textDecoration: "none",
                transition: "background 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              Try It Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Tutorial Grid */}
      <section style={{ padding: "40px 24px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="tutorials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 32,
          }}
        >
          {tutorials.map((tut) => {
            const diffStyle = DIFFICULTY_STYLES[tut.difficulty];
            const diffLabel = t(tut.difficulty);
            return (
              <Link
                key={tut.slug}
                href={`/tutorials/${tut.slug}`}
                className="tutorial-card"
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  border: "1px solid #e5e7eb",
                  borderRadius: 16,
                  overflow: "hidden",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  cursor: "pointer",
                  background: "#fff",
                }}
              >
                {/* Thumbnail */}
                <div
                  className="tutorial-thumb"
                  style={{
                    background: "linear-gradient(135deg, #08172E, #1a2a42)",
                    borderRadius: 0,
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="play-btn"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(16,185,129,0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.2s",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <polygon points="8,5 20,12 8,19" />
                    </svg>
                  </div>
                  {/* "Coming soon" overlay — only if no video */}
                  {!tut.videoUrl && (
                    <span style={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      background: "rgba(0,0,0,0.6)",
                      color: "#94a3b8",
                      fontSize: 11,
                      fontWeight: 500,
                      padding: "3px 10px",
                      borderRadius: 6,
                    }}>
                      {t("comingSoon")}
                    </span>
                  )}
                  {/* Duration badge */}
                  <span style={{
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    background: "rgba(0,0,0,0.7)",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "3px 8px",
                    borderRadius: 6,
                  }}>
                    {tut.duration}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    {/* Difficulty badge */}
                    <span style={{
                      fontSize: 11,
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: 100,
                      background: diffStyle.background,
                      color: diffStyle.color,
                    }}>
                      {diffLabel}
                    </span>
                    {/* Category tag */}
                    <span style={{
                      fontSize: 11,
                      fontWeight: 500,
                      padding: "3px 10px",
                      borderRadius: 100,
                      background: "#f3f4f6",
                      color: "#6b7280",
                    }}>
                      {tut.category}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#08172E",
                    marginBottom: 8,
                    fontFamily: "var(--font-dm-sans)",
                  }}>
                    {tut.title}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    color: "#6b7280",
                    lineHeight: 1.6,
                    margin: 0,
                  }}>
                    {tut.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{
        padding: "64px 24px 80px",
        textAlign: "center",
        background: "#f9fafb",
      }}>
        <h2 style={{
          fontSize: 28,
          fontWeight: 700,
          color: "#08172E",
          marginBottom: 12,
          fontFamily: "var(--font-dm-sans)",
        }}>
          {t("ctaTitle")}
        </h2>
        <p style={{
          fontSize: 16,
          color: "#6b7280",
          marginBottom: 32,
        }}>
          {t("ctaSubtitle")}
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <Link href="/docs" style={{
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 600,
            color: "#fff",
            background: "#10b981",
            padding: "12px 28px",
            borderRadius: 8,
            transition: "background 0.2s",
          }}>
            {t("viewDocs")}
          </Link>
          <Link href="/contact" style={{
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 600,
            color: "#08172E",
            background: "#fff",
            padding: "12px 28px",
            borderRadius: 8,
            border: "1px solid #e5e7eb",
            transition: "background 0.2s",
          }}>
            {t("contactUs")}
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
