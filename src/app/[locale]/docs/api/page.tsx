import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Nav from "../../../../components/Nav";
import Footer from "../../../../components/Footer";
import { getLocale } from "next-intl/server";

// Deliberately English-only, unlike the rest of the site. This is a code
// reference — endpoint names, JSON keys and error codes are English by
// definition, and a half-translated reference is harder to follow than an
// untranslated one. The surrounding chrome still localises.

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const localePath = locale === "en" ? "" : `/${locale}`;
  const title = "API Reference — CueQuote";
  const description =
    "Generate costed AV proposals from your own systems. REST API reference: authentication, endpoints, errors and rate limits.";
  return {
    title,
    description,
    alternates: {
      canonical: `https://cuequote.com${localePath}/docs/api`,
      languages: {
        en: "https://cuequote.com/docs/api",
        pl: "https://cuequote.com/pl/docs/api",
        "x-default": "https://cuequote.com/docs/api",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://cuequote.com${localePath}/docs/api`,
      siteName: "CueQuote",
      type: "article",
    },
  };
}

const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";

function Code({ children }: { children: string }) {
  return (
    <pre
      style={{
        background: "#08172E",
        color: "#e2e8f0",
        padding: "18px 20px",
        borderRadius: 12,
        overflowX: "auto",
        fontSize: 13,
        lineHeight: 1.6,
        fontFamily: MONO,
        margin: "16px 0 24px",
      }}
    >
      <code>{children}</code>
    </pre>
  );
}

function Tag({ children, color = "#10b981" }: { children: string; color?: string }) {
  return (
    <span
      style={{
        fontFamily: MONO,
        fontSize: 11,
        fontWeight: 700,
        color: "#fff",
        background: color,
        padding: "3px 8px",
        borderRadius: 6,
        marginRight: 10,
        letterSpacing: 0.4,
      }}
    >
      {children}
    </span>
  );
}

function H2({ children, id }: { children: string; id: string }) {
  return (
    <h2
      id={id}
      style={{
        fontFamily: "var(--font-dm-sans)",
        fontWeight: 800,
        fontSize: 26,
        color: "#08172E",
        margin: "48px 0 16px",
        letterSpacing: -0.5,
        scrollMarginTop: 90,
      }}
    >
      {children}
    </h2>
  );
}

const P: React.CSSProperties = { fontSize: 15.5, lineHeight: 1.75, color: "#374151", marginBottom: 16 };
const TD: React.CSSProperties = { padding: "10px 12px", borderBottom: "1px solid #e5e7eb", fontSize: 14, color: "#374151", verticalAlign: "top" };
const TH: React.CSSProperties = { ...TD, fontWeight: 700, color: "#08172E", borderBottom: "2px solid #e5e7eb", textAlign: "left" };

export default async function ApiDocsPage() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "56px 24px 96px" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#10b981", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>
          API Reference
        </p>
        <h1 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 40, color: "#08172E", letterSpacing: -1.2, marginBottom: 16 }}>
          Generate proposals from your own systems
        </h1>
        <p style={{ ...P, fontSize: 17 }}>
          Describe an event in plain language and get back a costed proposal, priced from your own
          equipment catalogue — the same engine the app uses. Available on the Business plan.
        </p>

        <H2 id="authentication">Authentication</H2>
        <p style={P}>
          Create a key in <strong>Settings → API keys</strong>. It is shown once; we store only a hash,
          so it cannot be retrieved later. Send it as a bearer token on every request.
        </p>
        <Code>{`Authorization: Bearer cq_live_xxxxxxxxxxxxxxxxxxxxxxxx`}</Code>
        <p style={P}>
          Keys carry the permissions of the company they belong to and nothing else. A key can never
          read or write another account&apos;s data. Revoking a key in Settings takes effect immediately.
        </p>

        <H2 id="base-url">Base URL</H2>
        <Code>{`https://api.cuequote.com`}</Code>

        <H2 id="create-proposal">Create a proposal</H2>
        <p style={P}>
          <Tag>POST</Tag>
          <span style={{ fontFamily: MONO, fontSize: 14 }}>/v1/proposals</span>
        </p>
        <p style={P}>
          The only required field is <code style={{ fontFamily: MONO }}>event.description</code>. Everything
          else improves the result: attendee count and duration drive equipment quantities, and the venue
          affects regional pricing.
        </p>
        <Code>{`curl -X POST https://api.cuequote.com/v1/proposals \\
  -H "Authorization: Bearer $CUEQUOTE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Warsaw Tech Summit 2026",
    "client": { "name": "Acme Events", "email": "ops@acme.example" },
    "event": {
      "description": "Two-day tech summit, 200 attendees, main stage with LED
                      and simultaneous interpretation, plus two breakout rooms.",
      "date": "2026-11-03",
      "venue": "Warsaw",
      "attendees": 200,
      "days": 2
    }
  }'`}</Code>

        <p style={{ ...P, fontWeight: 700, color: "#08172E" }}>Response — 201 Created</p>
        <Code>{`{
  "id": "4b888edb-d71a-4aa1-87fb-26ba1d3fc103",
  "status": "draft",
  "title": "Warsaw Tech Summit 2026",
  "currency": "PLN",
  "subtotal": 40010,
  "total": 40010,
  "scope_summary": "Two-day summit with a main stage ...",
  "line_items": [
    {
      "category": "video",
      "name": "LED Wall Panel (P2.6)",
      "quantity": 21,
      "unit": "day",
      "unit_price": 350,
      "is_optional": false
    }
  ],
  "share_url": "https://app.cuequote.com/share/961419b1-...",
  "app_url": "https://app.cuequote.com/proposals/4b888edb-...",
  "quota": { "used": 8, "limit": 120 }
}`}</Code>
        <p style={P}>
          The proposal is created as a <strong>draft</strong>. It appears in the app immediately, editable
          like any other, and nothing is sent to the client until you send it.
        </p>

        <table style={{ width: "100%", borderCollapse: "collapse", margin: "8px 0 24px" }}>
          <thead>
            <tr>
              <th style={TH}>Field</th>
              <th style={TH}>Type</th>
              <th style={TH}>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ ...TD, fontFamily: MONO }}>event.description</td><td style={TD}>string</td><td style={TD}>Required. Up to 10,000 characters.</td></tr>
            <tr><td style={{ ...TD, fontFamily: MONO }}>event.date</td><td style={TD}>string</td><td style={TD}>YYYY-MM-DD.</td></tr>
            <tr><td style={{ ...TD, fontFamily: MONO }}>event.venue</td><td style={TD}>string</td><td style={TD}>City or venue name. Affects regional pricing.</td></tr>
            <tr><td style={{ ...TD, fontFamily: MONO }}>event.attendees</td><td style={TD}>number</td><td style={TD}>Drives equipment sizing.</td></tr>
            <tr><td style={{ ...TD, fontFamily: MONO }}>event.days</td><td style={TD}>number</td><td style={TD}>Defaults to 1.</td></tr>
            <tr><td style={{ ...TD, fontFamily: MONO }}>title</td><td style={TD}>string</td><td style={TD}>Optional. Generated from the venue and size if omitted.</td></tr>
            <tr><td style={{ ...TD, fontFamily: MONO }}>client</td><td style={TD}>object</td><td style={TD}>Creates a new client. Use <span style={{ fontFamily: MONO }}>client_id</span> instead to attach an existing one.</td></tr>
            <tr><td style={{ ...TD, fontFamily: MONO }}>currency</td><td style={TD}>string</td><td style={TD}>Defaults to your company currency.</td></tr>
          </tbody>
        </table>

        <H2 id="fetch-proposal">Fetch a proposal</H2>
        <p style={P}>
          <Tag color="#3b82f6">GET</Tag>
          <span style={{ fontFamily: MONO, fontSize: 14 }}>/v1/proposals/{"{id}"}</span>
        </p>
        <Code>{`curl https://api.cuequote.com/v1/proposals/4b888edb-... \\
  -H "Authorization: Bearer $CUEQUOTE_API_KEY"`}</Code>
        <p style={P}>
          Returns the proposal with its line items and current status, so you can poll for acceptance
          from your CRM.
        </p>

        <H2 id="errors">Errors</H2>
        <p style={P}>
          Every error returns a JSON body with a stable <span style={{ fontFamily: MONO }}>code</span> and a
          human-readable message. Match on the code, not the message.
        </p>
        <Code>{`{ "error": { "code": "quota_exceeded", "message": "...", "used": 120, "limit": 120 } }`}</Code>
        <table style={{ width: "100%", borderCollapse: "collapse", margin: "8px 0 24px" }}>
          <thead>
            <tr>
              <th style={TH}>Status</th>
              <th style={TH}>Code</th>
              <th style={TH}>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={TD}>401</td><td style={{ ...TD, fontFamily: MONO }}>unauthorized</td><td style={TD}>No bearer key supplied.</td></tr>
            <tr><td style={TD}>401</td><td style={{ ...TD, fontFamily: MONO }}>invalid_key</td><td style={TD}>Key is wrong or has been revoked.</td></tr>
            <tr><td style={TD}>400</td><td style={{ ...TD, fontFamily: MONO }}>invalid_request</td><td style={TD}>Missing or oversized field.</td></tr>
            <tr><td style={TD}>403</td><td style={{ ...TD, fontFamily: MONO }}>plan_required</td><td style={TD}>API access is on the Business plan.</td></tr>
            <tr><td style={TD}>403</td><td style={{ ...TD, fontFamily: MONO }}>subscription_inactive</td><td style={TD}>Payment is past due or cancelled.</td></tr>
            <tr><td style={TD}>404</td><td style={{ ...TD, fontFamily: MONO }}>not_found</td><td style={TD}>No such proposal or client on this account.</td></tr>
            <tr><td style={TD}>422</td><td style={{ ...TD, fontFamily: MONO }}>empty_catalog</td><td style={TD}>Add equipment first — pricing comes from your own rates.</td></tr>
            <tr><td style={TD}>429</td><td style={{ ...TD, fontFamily: MONO }}>rate_limited</td><td style={TD}>More than 60 requests in an hour.</td></tr>
            <tr><td style={TD}>429</td><td style={{ ...TD, fontFamily: MONO }}>quota_exceeded</td><td style={TD}>Monthly proposal allowance used.</td></tr>
            <tr><td style={TD}>502</td><td style={{ ...TD, fontFamily: MONO }}>generation_failed</td><td style={TD}>The generator did not return a usable proposal. Retry.</td></tr>
          </tbody>
        </table>

        <H2 id="limits">Rate limits and quota</H2>
        <p style={P}>
          <strong>60 requests per hour per key.</strong> Generation runs a language model over your
          catalogue, so this is a spend control as much as an abuse control.
        </p>
        <p style={P}>
          <strong>Proposals count against your monthly plan allowance</strong>, the same as ones created in
          the app — 120 a month on Business. The API is another door to the same engine, not a separate
          budget. Every response includes a <span style={{ fontFamily: MONO }}>quota</span> object so you can
          track it without a second call.
        </p>
        <p style={P}>
          Generation typically takes 20–60 seconds depending on event complexity. Set your client timeout
          to at least 90 seconds.
        </p>

        <div style={{ marginTop: 56, padding: 24, background: "#f0fdf4", border: "1px solid #a7f3d0", borderRadius: 14 }}>
          <p style={{ ...P, marginBottom: 8, fontWeight: 700, color: "#065f46" }}>Need something not here?</p>
          <p style={{ ...P, marginBottom: 0 }}>
            The <Link href="/docs/widget" style={{ color: "#10b981", fontWeight: 600 }}>website quote form</Link> puts this same engine on your own site with one script tag. Or connect it to an <Link href="/docs/mcp" style={{ color: "#10b981", fontWeight: 600 }}>AI assistant</Link> over MCP. Webhooks and Zapier are on the roadmap.
            Tell us what you are building at{" "}
            <a href="mailto:hello@cuequote.com" style={{ color: "#10b981", fontWeight: 600 }}>hello@cuequote.com</a>{" "}
            and it will shape what ships next.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
