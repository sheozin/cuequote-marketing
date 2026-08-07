import type { Metadata } from "next";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { AvCostCalculator } from "../../../components/AvCostCalculator";
import { getTranslations, getLocale } from "next-intl/server";
import { headers } from "next/headers";
import { fetchRates, marketFromCountry } from "../../../lib/marketPricing";

/** Equipment names shown on the breakdown lines — one per RATES key in AvCostCalculator. */
const ITEM_KEYS = [
  "audioSystem", "microphone", "audioEngineer",
  "projector", "screen", "ledSmall", "ledLarge",
  "camera", "switcher", "streamPlatform",
  "lightingBasic", "lightingAmbient", "lightingPro", "lightingTech",
  "stageSmall", "stageLarge", "backdrop",
  "technician", "projectLead", "setupCrew",
] as const;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("avCalculator");
  const locale = await getLocale();
  const localePath = locale === 'en' ? '' : `/${locale}`;
  const pagePath = '/av-cost-calculator';
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
      siteName: "CueQuote",
      type: "website",
      images: [{ url: 'https://cuequote.com/og-image.png', width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, site: '@cuequote' },
  };
}

export default async function AvCostCalculatorPage() {
  const t = await getTranslations("avCalculator");
  const locale = await getLocale();
  const localePath = locale === 'en' ? '' : `/${locale}`;
  const guideHref = `${localePath}/blog/event-av-cost-price-guide-2026`;

  // Vercel resolves the visitor's country at the edge, so the calculator opens on
  // their own market without asking. The dropdown still lets them change it.
  const country = (await headers()).get("x-vercel-ip-country");
  const defaultMarket = marketFromCountry(country);
  const { rates } = await fetchRates();

  const faqs = [1, 2, 3, 4].map((n) => ({
    q: t(`faq${n}Q`),
    a: t(`faq${n}A`),
  }));

  // Safe: built from static translation strings, not user input
  const structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cuequote.com' },
          { '@type': 'ListItem', position: 2, name: t("h1"), item: `https://cuequote.com${localePath}/av-cost-calculator` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  });

  return (
    <>
      <Nav />
      <main>
        <script type="application/ld+json" suppressHydrationWarning>{structuredData}</script>

        <section style={{ padding: "112px 24px 40px", background: "#fff" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div style={{
              display: "inline-block", fontSize: 12, fontWeight: 600, color: "#047857",
              background: "#ecfdf5", padding: "5px 14px", borderRadius: 20, marginBottom: 20,
              letterSpacing: 0.5, textTransform: "uppercase",
            }}>
              {t("badge")}
            </div>
            <h1 style={{
              fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 44,
              color: "#08172E", marginBottom: 14, lineHeight: 1.1, letterSpacing: -1.5,
              maxWidth: 720,
            }}>
              {t("h1")}
            </h1>
            <p style={{ fontSize: 18, color: "#4b5563", maxWidth: 620, lineHeight: 1.6, marginBottom: 0 }}>
              {t("intro")}
            </p>
          </div>
        </section>

        <section style={{ padding: "32px 24px 72px", background: "#fff" }}>
          <AvCostCalculator
            guideHref={guideHref}
            signupHref="https://app.cuequote.com/signup?utm_source=website&utm_medium=calculator&utm_campaign=av_cost"
            defaultMarket={defaultMarket}
            rates={rates}
            locale={locale}
            labels={{
              market: t("market"), marketHint: t("marketHint"),
              marketMetro: t("marketMetro"), marketOther: t("marketOther"),
              ratesNote: t("ratesNote"),
              attendees: t("attendees"), days: t("days"), video: t("video"),
              lighting: t("lighting"), staging: t("staging"), streaming: t("streaming"),
              shortNotice: t("shortNotice"), shortNoticeHint: t("shortNoticeHint"),
              none: t("none"), projector: t("projector"),
              ledSmall: t("ledSmall"), ledLarge: t("ledLarge"),
              lightBasic: t("lightBasic"), lightAmbient: t("lightAmbient"), lightPro: t("lightPro"),
              stageSmall: t("stageSmall"), stageLarge: t("stageLarge"),
              yourEstimate: t("yourEstimate"), perDay: t("perDay"), oneOff: t("oneOff"), qty: t("qty"),
              breakdown: t("breakdown"), catAudio: t("catAudio"), catVideo: t("catVideo"),
              catLighting: t("catLighting"), catStaging: t("catStaging"), catCrew: t("catCrew"),
              catSurcharge: t("catSurcharge"),
              items: Object.fromEntries(
                ITEM_KEYS.map((k) => [k, t(`items.${k}`)])
              ),
              excludedTitle: t("excludedTitle"), excluded: t("excluded"),
              sourceNote: t("sourceNote"), sourceLink: t("sourceLink"),
              ctaTitle: t("ctaTitle"), ctaBody: t("ctaBody"), ctaButton: t("ctaButton"),
            }}
          />
        </section>

        <section style={{ padding: "64px 24px", background: "#f9fafb" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 28,
              color: "#08172E", letterSpacing: -0.8, marginBottom: 28,
            }}>
              {t("faqTitle")}
            </h2>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderBottom: "1px solid #e5e7eb", padding: "18px 0" }}>
                <h3 style={{
                  fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 17,
                  color: "#08172E", marginBottom: 8,
                }}>
                  {f.q}
                </h3>
                <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.7, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
