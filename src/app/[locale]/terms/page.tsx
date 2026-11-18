import type { Metadata } from "next";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { FileText, Sparkles } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("terms");
  const locale = await getLocale();
  const localePath = locale === 'en' ? '' : `/${locale}`;
  const pagePath = '/terms';
  const title = t("metaTitle", { defaultValue: "Terms of Service" });
  const description = t("metaDescription", { defaultValue: "CueQuote terms of service: the rules and guidelines for using our platform." });
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

// Text lives in messages/<locale>.json under terms.sections and terms.page (all
// 5 languages). English is the governing version; translations say so.
const SECTION_IDS = ["acceptance", "description", "accounts", "billing", "your-data", "ai-content", "acceptable-use", "availability", "liability", "termination", "changes", "governing-law", "contact"] as const;

export default async function TermsPage() {
  const t = await getTranslations("terms");
  const locale = await getLocale();
  const SECTIONS = SECTION_IDS.map((id) => ({ id, title: t(`sections.${id}.title`), content: t(`sections.${id}.content`) }));
  const updated = new Intl.DateTimeFormat(locale, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date("2026-11-17"));
  return (
    <>
      <Nav />
      <main>

      {/* Hero */}
      <section style={{
        padding: "100px 24px 60px",
        background: "linear-gradient(180deg, #f0fdf4 0%, #fff 100%)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#10b981",
            background: "#ecfdf5", border: "1px solid rgba(16,185,129,0.15)", padding: "6px 14px", borderRadius: 20, marginBottom: 20,
          }}>
            <FileText size={14} /> {t("page.badge")}
          </div>
          <h1 style={{
            fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 44, color: "#08172E",
            marginBottom: 12, lineHeight: 1.15, letterSpacing: -1,
          }}>
            {t("page.heroTitle")}
          </h1>
          <p style={{ fontSize: 17, color: "#6b7280", marginBottom: 8, lineHeight: 1.7 }}>
            {t("page.heroSubtitle")}
          </p>
          <p style={{ fontSize: 14, color: "#6b7280" }}>
            {t("page.lastUpdated", { date: updated })}
          </p>
          {locale !== "en" && (
            <p style={{ fontSize: 13, color: "#6b7280", marginTop: 12, fontStyle: "italic" }}>{t("page.languageNote")}</p>
          )}
        </div>
      </section>

      {/* Table of Contents + Content */}
      <section style={{ padding: "64px 24px 96px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }} className="terms-layout">
          <style>{`
            .terms-layout { display: grid; grid-template-columns: 220px 1fr; gap: 48px; }
            @media (max-width: 768px) {
              .terms-layout { grid-template-columns: 1fr !important; gap: 32px !important; }
            }
          `}</style>

          {/* Table of Contents */}
          <aside>
            <div style={{
              position: "sticky", top: 88,
              background: "#f9fafb", borderRadius: 16, padding: "24px 20px",
              border: "1px solid #e5e7eb",
            }}>
              <h3 style={{
                fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 13, color: "#08172E",
                textTransform: "uppercase", letterSpacing: 1, marginBottom: 16,
              }}>
                {t("page.contents")}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {SECTIONS.map((s) => (
                  <a key={s.id} href={`#${s.id}`} style={{
                    textDecoration: "none", fontSize: 13, color: "#6b7280",
                    lineHeight: 1.4, transition: "color 0.2s",
                  }}>
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {SECTIONS.map((s, i) => (
              <div key={s.id} id={s.id} style={{
                padding: "32px 0",
                borderBottom: i < SECTIONS.length - 1 ? "1px solid #e5e7eb" : "none",
              }}>
                <h2 style={{
                  fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 22, color: "#08172E",
                  marginBottom: 16,
                }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.8 }}>
                  {s.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact banner */}
      <section style={{
        padding: "64px 24px",
        background: "#08172E",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 28, color: "#fff",
            marginBottom: 12, lineHeight: 1.3,
          }}>
            {t("page.ctaTitle")}
          </h2>
          <p style={{ fontSize: 16, color: "#94a3b8", marginBottom: 24, lineHeight: 1.6 }}>
            {t("page.ctaSubtitle")}
          </p>
          <a
            href="mailto:legal@cuequote.com"
            style={{
              display: "inline-block", background: "#10b981", color: "#fff",
              padding: "14px 32px", borderRadius: 10, fontWeight: 600, fontSize: 16,
              textDecoration: "none",
            }}
          >
            {t("page.ctaButton")}
          </a>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
}
