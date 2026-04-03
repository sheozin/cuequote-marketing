import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Sparkles } from "lucide-react";

const APP_URL = "https://app.cuequote.com";

export const metadata: Metadata = {
  title: "About",
  description: "CueQuote is built by AVE Events — a team that has been in the AV production trenches. We built the tool we wished existed.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />

      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            display: "inline-block", fontSize: 12, fontWeight: 600, color: "#10b981",
            background: "#ecfdf5", padding: "4px 12px", borderRadius: 20, marginBottom: 24,
          }}>
            Our Story
          </div>

          <h1 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 44, color: "#08172E", marginBottom: 24, lineHeight: 1.15, letterSpacing: -1 }}>
            Built by AV professionals,{" "}
            <span style={{ color: "#10b981" }}>for AV professionals</span>
          </h1>

          <div style={{ fontSize: 17, color: "#4b5563", lineHeight: 1.8 }}>
            <p style={{ marginBottom: 24 }}>
              CueQuote was born from a simple frustration: quoting AV equipment for live events takes too long.
            </p>
            <p style={{ marginBottom: 24 }}>
              We&apos;re <strong>AVE Events</strong> — a production company based in Europe that has managed conferences, corporate events, and live shows across the continent and the Middle East. We know what it&apos;s like to receive a brief at 10 PM and need a proposal by morning.
            </p>
            <p style={{ marginBottom: 24 }}>
              Spreadsheets, copy-paste from old proposals, manual calculations — we did it all. And we watched other companies do the same. Hours of work for every quote. Errors in pricing. Inconsistent formatting. Proposals that didn&apos;t reflect the quality of our production work.
            </p>
            <p style={{ marginBottom: 24 }}>
              So we built CueQuote: an AI-powered tool that turns event descriptions into complete, professional AV proposals. The same quality output in 2 minutes instead of 2 hours.
            </p>

            <div style={{
              background: "#f9fafb", borderRadius: 16, padding: 32, marginBottom: 32,
              border: "1px solid #e5e7eb",
            }}>
              <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 20, color: "#08172E", marginBottom: 16 }}>
                Why we&apos;re different
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "We've scoped hundreds of real AV proposals — the AI knows what a 300-person conference actually needs",
                  "Built by the same team behind CueDeck, the live event production console",
                  "We understand the AV rental workflow, not just generic quoting",
                  "European-first: multi-currency, VAT support, GDPR compliant",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 12, marginBottom: 12, fontSize: 15 }}>
                    <span style={{ color: "#10b981", fontWeight: 700, flexShrink: 0 }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p style={{ marginBottom: 32 }}>
              CueQuote is part of the <strong>CueDeck ecosystem</strong> — tools purpose-built for the live event production industry. We&apos;re not a generic proposal tool with an AV skin. We built this from the ground up for our industry.
            </p>
          </div>

          <Link href={`${APP_URL}/signup`} style={{
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
            background: "#10b981", color: "#fff", padding: "14px 28px", borderRadius: 10,
            fontWeight: 600, fontSize: 16,
          }}>
            <Sparkles size={18} /> Try CueQuote Free
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
