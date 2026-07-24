import type { Metadata } from "next";
import { Inter, DM_Sans, Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import CampaignBanner from "../../components/CampaignBanner";
import PageTracker from "../../components/PageTracker";
import SmartPopup from "../../components/SmartPopup";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", weight: ["500", "600", "700", "800"], display: "swap" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo", weight: ["500", "600", "700", "800"], display: "swap" });

const BASE_URL = "https://cuequote.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "CueQuote — The AI Platform for Event Professionals",
    template: "%s | CueQuote",
  },
  description:
    "Create professional event proposals or detailed production plans in under 2 minutes. AI-powered for AV companies, event planners, and production professionals.",
  keywords: [
    "event proposal software", "AI proposal generator", "event planning tool", "AV proposal software",
    "production planning", "event equipment quote", "proposal automation",
  ],
  authors: [{ name: "CueQuote" }],
  creator: "CueQuote",
  openGraph: {
    title: "CueQuote — The AI Platform for Event Professionals",
    description: "Create professional event proposals or detailed production plans in under 2 minutes.",
    url: BASE_URL,
    siteName: "CueQuote",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CueQuote — The AI Platform for Event Professionals",
    description: "Create professional event proposals or detailed production plans in under 2 minutes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    languages: {
      en: BASE_URL,
      pl: `${BASE_URL}/pl`,
      ar: `${BASE_URL}/ar`,
      de: `${BASE_URL}/de`,
      fr: `${BASE_URL}/fr`,
      'x-default': BASE_URL,
    },
  },
  other: { "theme-color": "#08172E" },
};

// JSON-LD structured data — static, trusted content (no user input)
const jsonLdString = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "CueQuote",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.svg` },
      foundingDate: "2026",
      description: "The AI platform for event professionals — proposals, production planning, and more.",
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "CueQuote",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: "CueQuote",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: BASE_URL,
      offers: [
        { "@type": "Offer", name: "Free", price: "0", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Starter", price: "29", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Pro", price: "79", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Business", price: "179", priceCurrency: "EUR" },
      ],
      description: "The AI platform for event professionals — proposals, production planning, and more.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "3",
        reviewCount: "3",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Johne S." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "CueQuote has completely changed the way we work. It generates professional proposals in minutes directly from our equipment catalog, creates risk assessments, and helps us manage inventory — all in one platform. It's an all-in-one solution that every AV production company should have.",
          publisher: { "@type": "Organization", name: "AVE Events" },
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Alex D." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "I was skeptical about AI writing our proposals — we have very specific pricing. But CueQuote uses our exact catalog prices, not estimates. The first proposal it generated was 95% ready. I adjusted two line items and sent it. We've done 40+ proposals this way now.",
          publisher: { "@type": "Organization", name: "SoundPro Events" },
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Aneta M." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "CueQuote has shortened our proposal preparation time and increased the efficiency of our sales process. The tool allows quick creation of clear quotes, easy project management, and maintaining consistency of offers directed to clients.",
          publisher: { "@type": "Organization", name: "AVE Events" },
        },
      ],
    },
  ],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={`${inter.variable} ${dmSans.variable} ${cairo.variable}`}>
      <head>
        <meta name="theme-color" content="#08172E" />
        {/* Safe: jsonLdString is built from static trusted data, not user input */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString }} />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CampaignBanner />
          <PageTracker />
          <SmartPopup />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
