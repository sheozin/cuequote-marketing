import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Documentation — Getting Started",
  description:
    "Learn how to use CueQuote to create professional AV proposals.",
  alternates: { canonical: "/docs" },
};

const ARTICLE_KEYS = [
  {
    id: "quick-start",
    key: "quickStart",
    contentKeys: ["content1"],
    stepKeys: ["step1", "step2", "step3", "step4", "step5"],
  },
  {
    id: "creating-proposals",
    key: "creatingProposals",
    contentKeys: ["content1", "content2"],
    stepKeys: ["step1", "step2", "step3", "step4", "step5"],
  },
  {
    id: "equipment-catalog",
    key: "equipmentCatalog",
    contentKeys: ["content1", "content2"],
    stepKeys: ["step1", "step2", "step3", "step4"],
  },
  {
    id: "clients",
    key: "clients",
    contentKeys: ["content1", "content2"],
    stepKeys: ["step1", "step2", "step3", "step4"],
  },
  {
    id: "pdf-templates",
    key: "pdfTemplates",
    contentKeys: ["content1", "content2"],
    stepKeys: ["step1", "step2", "step3", "step4"],
  },
  {
    id: "terms-details",
    key: "termsDetails",
    contentKeys: ["content1", "content2"],
    stepKeys: ["step1", "step2", "step3", "step4", "step5"],
  },
  {
    id: "billing-plans",
    key: "billingPlans",
    contentKeys: ["content1"],
    stepKeys: ["step1", "step2", "step3", "step4"],
  },
  {
    id: "settings",
    key: "settings",
    contentKeys: ["content1"],
    stepKeys: ["step1", "step2", "step3", "step4", "step5", "step6"],
  },
];

export default async function DocsPage() {
  const t = await getTranslations("docs");

  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #08172E 0%, #0f2d50 50%, #08172E 100%)",
          padding: "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              fontWeight: 600,
              color: "#10b981",
              background: "rgba(16,185,129,0.15)",
              padding: "6px 16px",
              borderRadius: 20,
              marginBottom: 28,
            }}
          >
            <Sparkles size={12} /> {t("badge")}
          </div>
          <h1
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 800,
              fontSize: 48,
              color: "#fff",
              marginBottom: 20,
              lineHeight: 1.15,
              letterSpacing: -1,
            }}
          >
            {t("heading")}{" "}
            <span style={{ color: "#10b981" }}>{t("headingHighlight")}</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Sidebar + Content */}
      <section style={{ background: "#fff", minHeight: "80vh" }}>
        <div
          className="docs-layout"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            gap: 0,
          }}
        >
          {/* Sidebar */}
          <aside
            className="docs-sidebar"
            style={{
              width: 260,
              minWidth: 260,
              borderRight: "1px solid #e5e7eb",
              padding: "40px 24px",
              position: "sticky",
              top: 64,
              alignSelf: "flex-start",
              height: "fit-content",
              maxHeight: "calc(100vh - 64px)",
              overflowY: "auto",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#6b7280",
                textTransform: "uppercase",
                letterSpacing: 1.2,
                marginBottom: 16,
              }}
            >
              {t("toc")}
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {ARTICLE_KEYS.map((a) => (
                <a
                  key={a.id}
                  href={`#${a.id}`}
                  style={{
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#4b5563",
                    padding: "8px 12px",
                    borderRadius: 8,
                    transition: "background 0.15s, color 0.15s",
                  }}
                  className="docs-sidebar-link"
                >
                  {t(`${a.key}.title`)}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main
            className="docs-content"
            style={{
              flex: 1,
              maxWidth: 720,
              padding: "48px 48px 96px",
            }}
          >
            {ARTICLE_KEYS.map((article, idx) => (
              <article
                key={article.id}
                id={article.id}
                style={{
                  marginBottom: 64,
                  paddingBottom: idx < ARTICLE_KEYS.length - 1 ? 64 : 0,
                  borderBottom:
                    idx < ARTICLE_KEYS.length - 1
                      ? "1px solid #e5e7eb"
                      : "none",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 800,
                    fontSize: 28,
                    color: "#08172E",
                    marginBottom: 20,
                    letterSpacing: -0.5,
                  }}
                >
                  {t(`${article.key}.title`)}
                </h2>

                {article.contentKeys.map((ck) => (
                  <p
                    key={ck}
                    style={{
                      fontSize: 17,
                      color: "#4b5563",
                      lineHeight: 1.8,
                      marginBottom: 20,
                    }}
                  >
                    {t(`${article.key}.${ck}`)}
                  </p>
                ))}

                <ol
                  style={{
                    paddingLeft: 24,
                    marginBottom: 24,
                  }}
                >
                  {article.stepKeys.map((sk) => (
                    <li
                      key={sk}
                      style={{
                        fontSize: 16,
                        color: "#374151",
                        lineHeight: 1.8,
                        marginBottom: 8,
                      }}
                    >
                      {t(`${article.key}.${sk}`)}
                    </li>
                  ))}
                </ol>

                <div
                  style={{
                    background: "#ecfdf5",
                    borderLeft: "4px solid #10b981",
                    borderRadius: "0 12px 12px 0",
                    padding: "16px 20px",
                    fontSize: 15,
                    color: "#065f46",
                    lineHeight: 1.7,
                  }}
                >
                  <strong style={{ display: "block", marginBottom: 4 }}>
                    {t("tip")}
                  </strong>
                  {t(`${article.key}.tip`)}
                </div>
              </article>
            ))}
          </main>
        </div>
      </section>

      <style>{`
        .docs-sidebar-link:hover {
          background: #f3f4f6 !important;
          color: #10b981 !important;
        }
        @media (max-width: 768px) {
          .docs-layout { flex-direction: column !important; }
          .docs-sidebar {
            position: static !important;
            width: 100% !important;
            min-width: 100% !important;
            border-right: none !important;
            border-bottom: 1px solid #e5e7eb !important;
            max-height: none !important;
            padding: 24px !important;
          }
          .docs-content {
            padding: 32px 20px 64px !important;
            max-width: 100% !important;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}
