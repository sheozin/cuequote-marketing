import type { Metadata } from "next";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { Shield } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("privacy");
  const locale = await getLocale();
  const localePath = locale === 'en' ? '' : `/${locale}`;
  const pagePath = '/privacy';
  const title = t("metaTitle", { defaultValue: "Privacy Policy" });
  const description = t("metaDescription", { defaultValue: "CueQuote privacy policy: how we collect, use, and protect your data." });
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

const SECTIONS = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: `When you use CueQuote, we collect information you provide directly, such as your name, email address, company name, and proposal data. We also collect usage data automatically, including browser type, device information, IP address, and how features are used within the application.`,
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information and Why We May",
    content: `We use your information to provide CueQuote, process payments, send transactional emails (account confirmations, proposal notifications) and tell you about product updates. We never sell your personal data. The legal bases are: performing our contract with you (your account, proposals, invoices and billing); legal obligations (keeping invoices and tax records); our legitimate interests (keeping the service secure and preventing fraud, improving CueQuote, product update emails you can unsubscribe from, and contacting businesses as described in section 6); and your consent where we ask for it.`,
  },
  {
    id: "data-storage",
    title: "3. Data Storage & Security",
    content: `Your data is stored in a Supabase database hosted on AWS in Ireland (EU), encrypted at rest and in transit. Proposal data, client information, and equipment catalogs are protected by row-level security, so each company can reach only its own records. We use industry-standard security measures to protect your information.`,
  },
  {
    id: "third-party",
    title: "4. Third-Party Services and Transfers Outside the EU",
    content: `CueQuote uses the following service providers: Supabase (database and authentication), Stripe (payment processing), Vercel (hosting), Resend (email delivery), Anthropic (AI proposal generation), and Cloudflare (the security check on the signup page and our incoming email). Each processes data only to provide its service to us. Stripe, Vercel, Resend, Anthropic and Cloudflare are based in the United States, so some data may be processed there. Those transfers are protected by the safeguards in each provider's data processing terms, such as the European Commission's Standard Contractual Clauses or the EU-US Data Privacy Framework.`,
  },
  {
    id: "ai-content",
    title: "5. AI-Generated Content",
    content: `When you generate proposals using CueQuote's AI features, your event descriptions are sent to our AI provider (Anthropic) for processing. We do not store or use your event descriptions for training AI models. If you upload a price list to load your catalogue, its text is sent to the same provider to extract the items, kept only until you confirm or discard the import and deleted from our servers a day after that (and after 30 days at the latest), and never used for training. Generated proposals are stored in your account and accessible only to you and anyone you share them with.`,
  },
  {
    id: "business-contacts",
    title: "6. Businesses We Contact",
    content: `We sometimes email audio-visual and event companies that are not CueQuote users to introduce the product. We use business contact details that the company publishes itself, such as the address on its own website, found through public business listings. We keep the company name, the contact address and a record of what we sent, on the basis of our legitimate interest in offering a relevant business tool. Every such email says how to stop: reply "stop" and we will not email you again. We then keep the address only on a do-not-contact list, so that it stays excluded. You can also write to privacy@cuequote.com to ask what we hold or to have it deleted.`,
  },
  {
    id: "cookies",
    title: "7. Cookies",
    content: `CueQuote uses essential cookies to keep you signed in and to run your session. Our website measures visits with Vercel Web Analytics, which does not use cookies and does not identify individual visitors. You can manage cookies through your browser settings.`,
  },
  {
    id: "gdpr",
    title: "8. Your Rights (GDPR)",
    content: `You have the right to access, correct, delete, or export your personal data, to object to processing or ask us to restrict it, and to withdraw any consent you have given. To exercise these rights, contact us at privacy@cuequote.com. You also have the right to complain to a data protection authority. In Poland, where we are established, that is the President of the Personal Data Protection Office (UODO, uodo.gov.pl); you can also contact the authority in the country where you live or work.`,
  },
  {
    id: "data-retention",
    title: "9. Data Retention",
    content: `We retain your account data for as long as your account is active. If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it for legal or compliance purposes, such as invoices. When you sign up, we record the IP address and browser you signed up from to protect CueQuote and its users against fraud and abuse. These are deleted automatically after 30 days.`,
  },
  {
    id: "changes",
    title: "10. Changes to This Policy",
    content: `We may update this privacy policy from time to time. We will notify you of significant changes via email or through a notice in the application. Continued use of CueQuote after changes constitutes acceptance of the updated policy.`,
  },
  {
    id: "contact",
    title: "11. Contact and Data Controller",
    content: `CueQuote is a product of AVE Events, ul. Hoża 86/410, Warszawa, Poland, which is the data controller for the personal data described in this policy. For privacy-related questions or requests, contact us at privacy@cuequote.com.`,
  },
];

export default async function PrivacyPage() {
  const tData = await getTranslations("dataHandling");
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
            <Shield size={14} /> Privacy Policy
          </div>
          <h1 style={{
            fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 44, color: "#08172E",
            marginBottom: 12, lineHeight: 1.15, letterSpacing: -1,
          }}>
            Your Privacy Matters
          </h1>
          <p style={{ fontSize: 17, color: "#6b7280", marginBottom: 8, lineHeight: 1.7 }}>
            How we collect, use, and protect your data at CueQuote.
          </p>
          <p style={{ fontSize: 14, color: "#6b7280" }}>
            Last updated: November 17, 2026
          </p>
        </div>
      </section>

      {/* Plain-language data answers. Linked from the app's signup page as #your-data.
          Every sentence is backed by code or vendor terms (docs/agent-team, Phase 1.5). */}
      <section id="your-data" style={{ padding: "56px 24px 8px", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 28, color: "#08172E", marginBottom: 8 }}>
            {tData("title")}
          </h2>
          <p style={{ fontSize: 15, color: "#6b7280", marginBottom: 24 }}>{tData("intro")}</p>
          <div style={{ display: "grid", gap: 16 }}>
            {[1, 2, 3, 4].map(n => (
              <div key={n} style={{ background: "#f9fafb", border: "1px solid #f3f4f6", borderRadius: 12, padding: "18px 20px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#08172E", margin: "0 0 6px" }}>{tData(`q${n}`)}</h3>
                <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.7, margin: 0 }}>{tData(`a${n}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents + Content */}
      <section style={{ padding: "64px 24px 96px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }} className="privacy-layout">
          <style>{`
            .privacy-layout { display: grid; grid-template-columns: 220px 1fr; gap: 48px; }
            @media (max-width: 768px) {
              .privacy-layout { grid-template-columns: 1fr !important; gap: 32px !important; }
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
                Contents
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
            Questions about your privacy?
          </h2>
          <p style={{ fontSize: 16, color: "#94a3b8", marginBottom: 24, lineHeight: 1.6 }}>
            We take your data protection seriously. Reach out anytime.
          </p>
          <a
            href="mailto:privacy@cuequote.com"
            style={{
              display: "inline-block", background: "#10b981", color: "#fff",
              padding: "14px 32px", borderRadius: 10, fontWeight: 600, fontSize: 16,
              textDecoration: "none",
            }}
          >
            Contact Privacy Team
          </a>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
}
