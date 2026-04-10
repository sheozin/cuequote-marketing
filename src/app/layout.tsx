import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", weight: ["500", "600", "700", "800"] });

const BASE_URL = "https://cuequote.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "CueQuote — AI-Powered AV Proposals in Seconds",
    template: "%s | CueQuote",
  },
  description:
    "Turn event descriptions into professional AV equipment proposals in under 2 minutes. AI-powered quoting for AV production companies, event agencies, and freelance techs.",
  keywords: [
    "AV proposal software", "AV quoting tool", "audio visual proposal", "event equipment quote",
    "AV production estimate", "AI proposal generator", "AV rental pricing",
  ],
  authors: [{ name: "CueQuote" }],
  creator: "CueQuote",
  openGraph: {
    title: "CueQuote — AI-Powered AV Proposals in Seconds",
    description: "Turn event descriptions into professional AV equipment proposals in under 2 minutes.",
    url: BASE_URL,
    siteName: "CueQuote",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CueQuote — AI-Powered AV Proposals in Seconds",
    description: "Turn event descriptions into professional AV equipment proposals in under 2 minutes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: BASE_URL },
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
      description: "AI-powered AV proposal generation for event production professionals.",
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
        { "@type": "Offer", name: "Pay-per-proposal", price: "9", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Starter", price: "39", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Pro", price: "99", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Business", price: "199", priceCurrency: "EUR" },
      ],
      description: "AI-powered AV proposal generator for event production professionals.",
    },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        <meta name="theme-color" content="#08172E" />
        {/* JSON-LD: static trusted content, safe for dangerouslySetInnerHTML */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
