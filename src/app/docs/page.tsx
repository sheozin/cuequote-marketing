import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation — Getting Started",
  description:
    "Learn how to use CueQuote to create professional AV proposals.",
  alternates: { canonical: "/docs" },
};

const ARTICLES = [
  {
    id: "quick-start",
    title: "Quick Start",
    content: [
      "Getting started with CueQuote takes just a few minutes. Follow these five steps and you'll have your first professional AV proposal ready to share.",
    ],
    steps: [
      "Sign up for a free account at app.cuequote.com",
      "Create your company profile and upload your logo",
      "Set your brand color — this will be applied to all your proposals automatically",
      "Navigate to Proposals and click \"New Proposal\"",
      "Describe the event in plain language and let CueQuote's AI generate a complete equipment list with pricing",
    ],
    tip: "You can create up to 3 proposals per month on the free plan — no credit card required.",
  },
  {
    id: "creating-proposals",
    title: "Creating Proposals",
    content: [
      "CueQuote's AI-powered proposal engine turns a simple event description into a detailed, professional quote in seconds.",
      "Start by describing the event: the venue type, audience size, what kind of production is needed (sound, lighting, video, staging), and any special requirements. The more detail you provide, the more accurate the generated equipment list will be.",
    ],
    steps: [
      "Click \"New Proposal\" from your dashboard",
      "Enter the event description — be as specific as possible about the venue and requirements",
      "CueQuote's AI generates a complete equipment list with quantities and pricing",
      "Review and edit: add, remove, or adjust any line items",
      "Download as a branded PDF or share via a unique link",
    ],
    tip: "Use the share link feature to let clients view proposals online — they can approve directly from the link.",
  },
  {
    id: "equipment-catalog",
    title: "Equipment Catalog",
    content: [
      "Your equipment catalog is the backbone of accurate proposals. CueQuote lets you maintain a detailed inventory of your gear with default pricing.",
      "Equipment is organized into categories: Audio, Lighting, Video, Staging, Rigging, Power & Distribution, and Custom. Each item can have a name, description, default rental price, and internal notes.",
    ],
    steps: [
      "Go to Settings → Equipment Catalog",
      "Add items manually or import from a CSV spreadsheet",
      "Set default rental prices per item — these will be used when AI generates proposals",
      "Organize items into categories for easy browsing",
    ],
    tip: "When you import from CSV, use columns: Name, Category, Price, Description. CueQuote will map them automatically.",
  },
  {
    id: "clients",
    title: "Clients",
    content: [
      "Keep all your client information organized in one place. CueQuote supports different client types to help you categorize your business relationships.",
      "Each client record stores contact details, company information, and is linked to all their proposals — giving you a complete history of your quoting relationship.",
    ],
    steps: [
      "Navigate to Clients and click \"Add Client\"",
      "Fill in contact and company details",
      "Select the client type: Direct, Agency, Venue, or Corporate",
      "Link the client to new proposals from the proposal creation screen",
    ],
    tip: "Client types help you track where your business comes from. Use the \"Agency\" type for production companies that subcontract your services.",
  },
  {
    id: "pdf-templates",
    title: "PDF Templates",
    content: [
      "CueQuote offers four professionally designed PDF templates so your proposals always look polished and on-brand.",
      "Each template automatically applies your company logo, brand color, and contact information. You can switch templates at any time — existing proposals will update to use the new template when re-downloaded.",
    ],
    steps: [
      "Modern — Clean lines, generous white space, contemporary feel. Best for tech-forward clients.",
      "Bold — Strong typography, high-contrast layout. Great for making a statement.",
      "Classic — Traditional proposal format with structured sections. Ideal for corporate clients.",
      "Minimal — Stripped-back design focused on content. Perfect when simplicity matters.",
    ],
    tip: "You can set a default template in Settings, but override it per proposal if needed. Your brand color is applied to headings, accents, and borders.",
  },
  {
    id: "terms-details",
    title: "Terms & Details",
    content: [
      "Every proposal can include customizable terms and conditions, payment terms, and inclusion/exclusion lists. These sections build trust and set clear expectations with your clients.",
      "You can set defaults that apply to all new proposals, then customize per proposal as needed.",
    ],
    steps: [
      "Go to Settings → Proposal Defaults to set your standard terms",
      "Edit inclusions: what's covered in the quoted price (e.g., delivery, setup, operator)",
      "Edit exclusions: what's not included (e.g., power supply, venue access fees)",
      "Set payment terms: deposit percentage, payment schedule, accepted methods",
      "Add your full Terms & Conditions — these appear on the last page of the PDF",
    ],
    tip: "Each proposal has its own copy of these terms. Changing the defaults won't affect existing proposals — only new ones.",
  },
  {
    id: "billing-plans",
    title: "Billing & Plans",
    content: [
      "CueQuote offers flexible plans to match your business size. Start free and upgrade as you grow.",
    ],
    steps: [
      "Free — 3 proposals/month, 1 user, basic PDF template",
      "Starter ($19/mo) — 20 proposals/month, 2 users, all templates, client management",
      "Pro ($49/mo) — Unlimited proposals, 5 users, custom branding, priority support",
      "Business ($99/mo) — Everything in Pro + team management, API access, dedicated support",
    ],
    tip: "You can upgrade or downgrade at any time from Settings → Billing. Changes take effect at the start of the next billing cycle.",
  },
  {
    id: "settings",
    title: "Settings",
    content: [
      "The Settings page is where you configure everything about your CueQuote workspace. Keeping your settings up-to-date ensures every proposal reflects your brand accurately.",
    ],
    steps: [
      "Company Profile — Business name, address, phone, email, and website",
      "Logo — Upload your company logo (PNG or SVG recommended, max 2MB)",
      "Brand Color — Choose a hex color that matches your brand; applied to all PDF templates",
      "Currency — Set your default currency (USD, EUR, GBP, PLN, and more)",
      "Language — Set the proposal language (affects PDF headings and labels)",
      "Proposal Defaults — Default template, terms, inclusions, exclusions, and payment terms",
    ],
    tip: "Your logo looks best at a minimum of 400px wide. CueQuote will automatically resize it for the PDF.",
  },
];

export default function DocsPage() {
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
            <Sparkles size={12} /> Documentation
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
            Getting Started with{" "}
            <span style={{ color: "#10b981" }}>CueQuote</span>
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
            Learn how to create professional AV proposals in minutes
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
              On this page
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {ARTICLES.map((a) => (
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
                  {a.title}
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
            {ARTICLES.map((article, idx) => (
              <article
                key={article.id}
                id={article.id}
                style={{
                  marginBottom: 64,
                  paddingBottom: idx < ARTICLES.length - 1 ? 64 : 0,
                  borderBottom:
                    idx < ARTICLES.length - 1
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
                  {article.title}
                </h2>

                {article.content.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 17,
                      color: "#4b5563",
                      lineHeight: 1.8,
                      marginBottom: 20,
                    }}
                  >
                    {p}
                  </p>
                ))}

                {article.steps && (
                  <ol
                    style={{
                      paddingLeft: 24,
                      marginBottom: 24,
                    }}
                  >
                    {article.steps.map((step, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: 16,
                          color: "#374151",
                          lineHeight: 1.8,
                          marginBottom: 8,
                        }}
                      >
                        {step}
                      </li>
                    ))}
                  </ol>
                )}

                {article.tip && (
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
                      Tip
                    </strong>
                    {article.tip}
                  </div>
                )}
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
