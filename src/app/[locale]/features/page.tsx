import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

const APP_URL = "https://app.cuequote.com";

// Screenshots come from the app's marketing demo workspace, retaken every
// Monday by the Demo Capture workflow (av-proposal scripts/capture-demo.mjs)
// at the same storage path, so this page always shows the current app.
// Supabase's render endpoint serves them resized (about 35 KB at 960 px
// instead of 230 KB at full size). resize=contain is required: with only a
// width, Supabase keeps the full height and crops to a narrow middle strip.
const SHOT = (id: string, width: number) =>
  `https://rurazinghbfskuoeikwi.supabase.co/storage/v1/render/image/public/marketing-assets/social/app-${id}.jpg?width=${width}&resize=contain&quality=75`;

const SECTIONS = [
  { key: "quote", ids: ["dashboard", "proposals", "proposal-editor", "catalog", "templates", "proposal-terms", "risk-plan", "client-proposal"] },
  { key: "invoice", ids: ["clients", "client-detail", "invoices", "invoice-editor", "proforma"] },
  { key: "suppliers", ids: ["suppliers", "supplier-quotes", "supplier-compare", "work-order"] },
  { key: "warehouse", ids: ["jobs", "job-pack-list", "job-without-quote", "inventory", "inventory-availability", "inventory-unit"] },
  { key: "crew", ids: ["crew", "crew-events", "crew-badges", "crew-sheet", "crew-contracts", "badge-settings"] },
  { key: "team", ids: ["team"] },
] as const;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("featuresPage");
  const locale = await getLocale();
  const localePath = locale === "en" ? "" : `/${locale}`;
  const pagePath = "/features";
  const title = t("metaTitle");
  const description = t("metaDescription");
  return {
    title,
    description,
    alternates: {
      canonical: `https://cuequote.com${localePath}${pagePath}`,
      languages: {
        en: `https://cuequote.com${pagePath}`,
        pl: `https://cuequote.com/pl${pagePath}`,
        ar: `https://cuequote.com/ar${pagePath}`,
        de: `https://cuequote.com/de${pagePath}`,
        fr: `https://cuequote.com/fr${pagePath}`,
        "x-default": `https://cuequote.com${pagePath}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://cuequote.com${localePath}${pagePath}`,
      siteName: "CueQuote",
      type: "website",
      images: [{ url: "https://cuequote.com/og-image.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@cuequote",
      images: ["https://cuequote.com/og-image.png"],
    },
  };
}

export default async function FeaturesPage() {
  const locale = await getLocale();
  const t = await getTranslations("featuresPage");

  return (
    <>
      <Nav />
      <main>
        <section style={{
          background: "linear-gradient(135deg, #08172E 0%, #0f2d50 50%, #08172E 100%)",
          padding: "120px 16px 88px", textAlign: "center", position: "relative", overflow: "hidden",
        }}>
          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
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
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 640, margin: "0 auto 32px" }}>
              {t("heroSubtitle")}
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href={`${APP_URL}/signup?lang=${locale}`} style={{
                textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
                background: "#10b981", color: "#fff", padding: "14px 28px", borderRadius: 10, fontWeight: 600, fontSize: 16,
              }}>
                <Sparkles size={18} /> {t("ctaStart")}
              </Link>
              <Link href="/pricing" style={{
                textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
                border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "14px 28px", borderRadius: 10, fontWeight: 500, fontSize: 16,
              }}>
                {t("ctaPricing")} {locale === "ar" ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </Link>
            </div>
          </div>
        </section>

        {SECTIONS.map(({ key, ids }, si) => (
          <section key={key} id={key} style={{ padding: "80px 16px", background: si % 2 ? "#f8fafc" : "#fff" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 36px)", color: "#08172E", marginBottom: 12 }}>
                  {t(`sections.${key}.title`)}
                </h2>
                <p style={{ fontSize: 18, color: "#6b7280", maxWidth: 640, margin: "0 auto" }}>{t(`sections.${key}.subtitle`)}</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: 28 }}>
                {ids.map((id) => {
                  const title = t(`items.${id}.title`);
                  return (
                    <article key={id} style={{
                      background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, overflow: "hidden",
                      boxShadow: "0 1px 3px rgba(8,23,46,0.06)", display: "flex", flexDirection: "column",
                    }}>
                      <div style={{ background: "#EEF1F5", borderBottom: "1px solid #e5e7eb", padding: "8px 12px", display: "flex", gap: 6 }} aria-hidden="true">
                        <span style={{ width: 8, height: 8, borderRadius: 4, background: "#CBD2DA" }} />
                        <span style={{ width: 8, height: 8, borderRadius: 4, background: "#CBD2DA" }} />
                        <span style={{ width: 8, height: 8, borderRadius: 4, background: "#CBD2DA" }} />
                      </div>
                      {/* eslint-disable-next-line @next/next/no-img-element -- remote, resized by Supabase, refreshed weekly */}
                      <img
                        src={SHOT(id, 960)}
                        srcSet={`${SHOT(id, 640)} 640w, ${SHOT(id, 960)} 960w, ${SHOT(id, 1440)} 1440w`}
                        sizes="(max-width: 760px) 100vw, 400px"
                        alt={t("screenshotAlt", { title })}
                        width={1440}
                        height={900}
                        loading={si === 0 ? "eager" : "lazy"}
                        decoding="async"
                        style={{ width: "100%", height: "auto", aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "top left", display: "block" }}
                      />
                      <div style={{ padding: "20px 22px 24px" }}>
                        <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, color: "#08172E", marginBottom: 8 }}>{title}</h3>
                        <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.6 }}>{t(`items.${id}.desc`)}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        <section style={{ padding: "88px 16px", background: "#08172E", textAlign: "center" }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 36px)", color: "#fff", marginBottom: 12 }}>
              {t("ctaTitle")}
            </h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", marginBottom: 28 }}>{t("ctaSubtitle")}</p>
            <Link href={`${APP_URL}/signup?lang=${locale}`} style={{
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
              background: "#10b981", color: "#fff", padding: "14px 28px", borderRadius: 10, fontWeight: 600, fontSize: 16,
            }}>
              <Sparkles size={18} /> {t("ctaStart")}
            </Link>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", marginTop: 24 }}>
              <Link href="/pricing" style={{ color: "rgba(255,255,255,0.75)" }}>{t("planNote")}</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
