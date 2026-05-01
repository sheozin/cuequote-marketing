import type { Metadata } from "next";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { Shield, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("privacy");
  return {
    title: t("metaTitle", { defaultValue: "Privacy Policy" }),
    description: t("metaDescription", { defaultValue: "CueQuote privacy policy — how we collect, use, and protect your data." }),
    alternates: { canonical: "/privacy" },
  };
}

const SECTIONS = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: `When you use CueQuote, we collect information you provide directly — such as your name, email address, company name, and proposal data. We also collect usage data automatically, including browser type, device information, IP address, and interaction patterns within the application.`,
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: `We use your information to provide and improve CueQuote, process payments, send transactional emails (account confirmations, proposal notifications), and communicate product updates. We never sell your personal data to third parties.`,
  },
  {
    id: "data-storage",
    title: "3. Data Storage & Security",
    content: `Your data is stored securely using Supabase infrastructure with encryption at rest and in transit. Proposal data, client information, and equipment catalogs are stored in PostgreSQL databases with row-level security policies. We use industry-standard security measures to protect your information.`,
  },
  {
    id: "third-party",
    title: "4. Third-Party Services",
    content: `CueQuote uses the following third-party services: Supabase (database & authentication), Stripe (payment processing), Vercel (hosting), and Anthropic (AI proposal generation). Each service has its own privacy policy and processes data according to their terms.`,
  },
  {
    id: "ai-content",
    title: "5. AI-Generated Content",
    content: `When you generate proposals using CueQuote's AI features, your event descriptions are sent to our AI provider (Anthropic) for processing. We do not store or use your event descriptions for training AI models. Generated proposals are stored in your account and accessible only to you and anyone you share them with.`,
  },
  {
    id: "cookies",
    title: "6. Cookies",
    content: `CueQuote uses essential cookies for authentication and session management. We use analytics cookies (with your consent) to understand how the application is used. You can manage cookie preferences through your browser settings.`,
  },
  {
    id: "gdpr",
    title: "7. Your Rights (GDPR)",
    content: `If you are in the European Economic Area, you have the right to access, correct, delete, or export your personal data. You can also object to processing or request restriction of processing. To exercise these rights, contact us at privacy@cuequote.com.`,
  },
  {
    id: "data-retention",
    title: "8. Data Retention",
    content: `We retain your account data for as long as your account is active. If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it for legal or compliance purposes.`,
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    content: `We may update this privacy policy from time to time. We will notify you of significant changes via email or through a notice in the application. Continued use of CueQuote after changes constitutes acceptance of the updated policy.`,
  },
  {
    id: "contact",
    title: "10. Contact",
    content: `For privacy-related questions or requests, contact us at privacy@cuequote.com. Data controller: AVE Events, Europe.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Nav />

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
          <p style={{ fontSize: 14, color: "#9ca3af" }}>
            Last updated: March 16, 2026
          </p>
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

      <Footer />
    </>
  );
}
