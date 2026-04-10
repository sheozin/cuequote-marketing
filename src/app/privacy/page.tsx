import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "CueQuote privacy policy — how we collect, use, and protect your data.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: `When you use CueQuote, we collect information you provide directly — such as your name, email address, company name, and proposal data. We also collect usage data automatically, including browser type, device information, IP address, and interaction patterns within the application.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use your information to provide and improve CueQuote, process payments, send transactional emails (account confirmations, proposal notifications), and communicate product updates. We never sell your personal data to third parties.`,
  },
  {
    title: "3. Data Storage & Security",
    content: `Your data is stored securely using Supabase infrastructure with encryption at rest and in transit. Proposal data, client information, and equipment catalogs are stored in PostgreSQL databases with row-level security policies. We use industry-standard security measures to protect your information.`,
  },
  {
    title: "4. Third-Party Services",
    content: `CueQuote uses the following third-party services: Supabase (database & authentication), Stripe (payment processing), Vercel (hosting), and Anthropic (AI proposal generation). Each service has its own privacy policy and processes data according to their terms.`,
  },
  {
    title: "5. AI-Generated Content",
    content: `When you generate proposals using CueQuote's AI features, your event descriptions are sent to our AI provider (Anthropic) for processing. We do not store or use your event descriptions for training AI models. Generated proposals are stored in your account and accessible only to you and anyone you share them with.`,
  },
  {
    title: "6. Cookies",
    content: `CueQuote uses essential cookies for authentication and session management. We use analytics cookies (with your consent) to understand how the application is used. You can manage cookie preferences through your browser settings.`,
  },
  {
    title: "7. Your Rights (GDPR)",
    content: `If you are in the European Economic Area, you have the right to access, correct, delete, or export your personal data. You can also object to processing or request restriction of processing. To exercise these rights, contact us at privacy@cuequote.com.`,
  },
  {
    title: "8. Data Retention",
    content: `We retain your account data for as long as your account is active. If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it for legal or compliance purposes.`,
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this privacy policy from time to time. We will notify you of significant changes via email or through a notice in the application. Continued use of CueQuote after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "10. Contact",
    content: `For privacy-related questions or requests, contact us at privacy@cuequote.com. Data controller: AVE Events, Europe.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 36, color: "#08172E", marginBottom: 8, letterSpacing: -0.5 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 14, color: "#9ca3af", marginBottom: 48 }}>
            Last updated: March 16, 2026
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 20, color: "#08172E", marginBottom: 12 }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.8 }}>
                  {s.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
