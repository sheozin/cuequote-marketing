import type { Metadata } from "next";
import { Inter, DM_Sans, Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { Analytics } from "@vercel/analytics/react";
import CampaignBanner from "../../components/CampaignBanner";
import CookieConsent from "../../components/CookieConsent";
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
// SoftwareApplication schema is intentionally excluded here; it lives only on the homepage and pricing page.
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
          <Analytics />
          <CampaignBanner />
          <CookieConsent />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
