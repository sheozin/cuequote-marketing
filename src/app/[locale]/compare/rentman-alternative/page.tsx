import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Nav from "../../../../components/Nav";
import Footer from "../../../../components/Footer";
import { getLocale } from "next-intl/server";
import { ArrowRight, Check, Minus } from "lucide-react";

/**
 * A landing page for people searching for a Rentman alternative.
 *
 * Built because Search Console shows CueQuote already at position 8.2 for
 * "which av rental and event production companies use rentman to manage
 * quoting, invoicing, and crew management?" — fifteen impressions, no clicks,
 * and nothing good to land on. The existing /blog/cuequote-vs-rentman post
 * answers "which should I buy"; this answers the different question someone
 * asks when they have already decided to look elsewhere.
 *
 * English only, on purpose. Ninety-two non-English pages produced one click in
 * six months, so the other locales are canonicalised to English and left out of
 * the sitemap rather than translated.
 *
 * Every number about Rentman here was read from rentman.io/pricing on
 * 2026-08-16 and is stated as of that date. Getting a competitor's pricing
 * wrong is worse than not mentioning it — the blog post this page links to had
 * to be corrected for exactly that.
 */

const APP_URL = "https://app.cuequote.com";
const PAGE_PATH = "/compare/rentman-alternative";
const PRICING_CHECKED = "August 2026";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const title = "Rentman Alternative for AV Quoting | CueQuote";
  const description =
    "Looking for a Rentman alternative? CueQuote is built for AV proposals and quoting, not warehouse operations. An honest comparison of what each one does well.";
  return {
    title,
    description,
    // One page, one language. Non-English requests canonicalise to the English
    // URL and are told not to index, so this cannot split its own signals.
    robots: locale === "en" ? undefined : { index: false, follow: true },
    alternates: { canonical: `https://cuequote.com${PAGE_PATH}` },
    openGraph: {
      title,
      description,
      url: `https://cuequote.com${PAGE_PATH}`,
      siteName: "CueQuote",
      type: "website",
      images: [{ url: "https://cuequote.com/og-image.png", width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["https://cuequote.com/og-image.png"] },
  };
}

const DOES_WELL = [
  "Warehouse and equipment tracking, down to the serial number",
  "Crew scheduling, availability and timesheets",
  "Sub-hire and cross-rental between companies",
  "Knowing what is on which truck, and when it comes back",
];

const WHERE_IT_COSTS = [
  "Quoting is a 9 euro per-user add-on on top of a 39 euro base fee and at least one module",
  "The office users who write documents are the ones you pay for",
  "Building a proposal is manual: pick items, set quantities, write the scope",
  "Operations depth you pay for whether or not you have a warehouse",
];

const CUEQUOTE_DOES = [
  "Describe the event, or attach the client's RFP, and get a costed proposal back",
  "Priced from your own catalogue, in your own currency and language",
  "A client-facing document they can read, comment on and accept online",
  "Flat price per company, not per seat",
];

const CUEQUOTE_DOES_NOT = [
  "Barcode scanning or serial-number tracking",
  "Warehouse locations and truck packing",
  "Sub-hire management between rental houses",
  "Crew timesheets and payroll export",
];

export default function RentmanAlternativePage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ background: "linear-gradient(135deg,#08172E 0%,#0f2d50 55%,#08172E 100%)", padding: "104px 24px 72px", color: "#fff" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase", color: "#6ee7b7", marginBottom: 18 }}>
              Comparison
            </p>
            <h1 style={{ fontSize: "clamp(32px,5vw,50px)", lineHeight: 1.08, fontWeight: 800, letterSpacing: "-1.4px", margin: 0 }}>
              A Rentman alternative — if what you need is quoting
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: "#a9bdd4", marginTop: 22 }}>
              Rentman is a good platform, and for a rental house with a warehouse it is hard to beat.
              This page is for the people it does not fit: the AV production companies whose real
              bottleneck is writing the proposal, not tracking the truck.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 34 }}>
              <a href={`${APP_URL}/signup?utm_source=compare&utm_campaign=rentman-alternative`}
                 style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#10b981", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 26px", borderRadius: 10, textDecoration: "none" }}>
                Try CueQuote free <ArrowRight size={17} />
              </a>
              <Link href="/pricing"
                 style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,255,255,.25)", color: "#fff", fontWeight: 600, fontSize: 16, padding: "14px 26px", borderRadius: 10, textDecoration: "none" }}>
                See pricing
              </Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "72px 24px", background: "#fff" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.7px", color: "#08172E" }}>
              What Rentman is genuinely good at
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#4b5563", marginTop: 14 }}>
              It is worth being straight about this, because if any of the following is your daily
              problem then Rentman is probably the right answer and this page is not for you.
            </p>
            <ul style={{ listStyle: "none", padding: 0, marginTop: 24 }}>
              {DOES_WELL.map((item) => (
                <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 13, fontSize: 16.5, color: "#374151", lineHeight: 1.55 }}>
                  <Check size={19} style={{ color: "#10b981", flexShrink: 0, marginTop: 3 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.7px", color: "#08172E", marginTop: 56 }}>
              Why people look for an alternative
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#4b5563", marginTop: 14 }}>
              Rentman&apos;s pricing is modular. Every account pays a base platform fee of 39 euros a
              month, and the modules are charged per power user on top: Inventory at 14 to 19 euros,
              Crew at 14 to 24 euros, and quoting and invoicing as a 9 euro add-on. Basic users —
              technicians, warehouse staff, freelancers — are always free, which is a genuinely fair
              structure if most of your team never writes a document. Prices checked {PRICING_CHECKED}.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#4b5563", marginTop: 14 }}>
              The awkward case is the production company with no warehouse. You are buying an
              operations platform to reach a quoting add-on, and paying for the office users who are
              the very people writing proposals.
            </p>
            <ul style={{ listStyle: "none", padding: 0, marginTop: 24 }}>
              {WHERE_IT_COSTS.map((item) => (
                <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 13, fontSize: 16.5, color: "#374151", lineHeight: 1.55 }}>
                  <Minus size={19} style={{ color: "#9ca3af", flexShrink: 0, marginTop: 3 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section style={{ padding: "72px 24px", background: "#f7f9fb" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.7px", color: "#08172E" }}>
              Where CueQuote is different
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#4b5563", marginTop: 14 }}>
              CueQuote does one half of the job. You describe the event in plain language, or attach
              the client&apos;s brief, and it comes back with a costed proposal built from your own
              catalogue — which you then edit, send, and have accepted online.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 22, marginTop: 30 }}>
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: 24 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#08172E", margin: 0 }}>What it does</h3>
                <ul style={{ listStyle: "none", padding: 0, marginTop: 16 }}>
                  {CUEQUOTE_DOES.map((i) => (
                    <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 11, fontSize: 15.5, color: "#374151", lineHeight: 1.5 }}>
                      <Check size={17} style={{ color: "#10b981", flexShrink: 0, marginTop: 2 }} />{i}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Stated plainly rather than buried. Someone who needs these will
                  waste a trial finding out, and resent the page that hid it. */}
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: 24 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#08172E", margin: 0 }}>What it does not do</h3>
                <ul style={{ listStyle: "none", padding: 0, marginTop: 16 }}>
                  {CUEQUOTE_DOES_NOT.map((i) => (
                    <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 11, fontSize: 15.5, color: "#6b7280", lineHeight: 1.5 }}>
                      <Minus size={17} style={{ color: "#9ca3af", flexShrink: 0, marginTop: 2 }} />{i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "72px 24px", background: "#fff" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.7px", color: "#08172E" }}>
              Which one should you use?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#4b5563", marginTop: 14 }}>
              If you own equipment, run a warehouse and schedule crew across overlapping jobs, use
              Rentman. That is what it was built for and CueQuote does not replace it.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#4b5563", marginTop: 14 }}>
              If you sub-hire most of your kit, or your team is small and the slow part of the week is
              writing proposals, CueQuote covers that half at a flat price per company. Plenty of
              firms run both: Rentman once the job is confirmed, CueQuote to win it in the first
              place. There is a longer breakdown in our{" "}
              <Link href="/blog/cuequote-vs-rentman" style={{ color: "#059669", fontWeight: 600 }}>
                full CueQuote vs Rentman comparison
              </Link>
              , and if you quote for events rather than rent equipment, the{" "}
              <Link href="/for-event-planners" style={{ color: "#059669", fontWeight: 600 }}>
                planner side
              </Link>{" "}
              may fit better.
            </p>

            <div style={{ marginTop: 40, padding: 28, background: "#08172E", borderRadius: 16, color: "#fff" }}>
              <h3 style={{ fontSize: 21, fontWeight: 800, margin: 0 }}>Try it on a real event</h3>
              <p style={{ fontSize: 16, color: "#a9bdd4", marginTop: 10, lineHeight: 1.6 }}>
                Free to start, no card. Describe one event you have already quoted and compare what
                comes back with what you sent.
              </p>
              <a href={`${APP_URL}/signup?utm_source=compare&utm_campaign=rentman-alternative`}
                 style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#10b981", color: "#fff", fontWeight: 700, fontSize: 16, padding: "13px 24px", borderRadius: 10, textDecoration: "none", marginTop: 18 }}>
                Start free <ArrowRight size={17} />
              </a>
            </div>

            <p style={{ fontSize: 13.5, color: "#9ca3af", marginTop: 30, lineHeight: 1.6 }}>
              Rentman is a trademark of its respective owner and is not affiliated with CueQuote.
              Pricing and features described here were taken from Rentman&apos;s public pricing page in{" "}
              {PRICING_CHECKED} and may have changed since.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
