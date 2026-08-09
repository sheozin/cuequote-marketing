import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Nav from "../../../../components/Nav";
import Footer from "../../../../components/Footer";
import { getLocale } from "next-intl/server";

// English-only, like the other three developer pages: this is payload shapes
// and verification code, and a half-translated reference is harder to follow.

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const localePath = locale === "en" ? "" : `/${locale}`;
  const title = "Webhooks — CueQuote";
  const description =
    "Get a signed HTTP callback the moment a proposal is sent, viewed, accepted or rejected. Push AV quote events straight into your CRM.";
  return {
    title,
    description,
    alternates: {
      canonical: `https://cuequote.com${localePath}/docs/webhooks`,
      languages: {
        en: "https://cuequote.com/docs/webhooks",
        pl: "https://cuequote.com/pl/docs/webhooks",
        "x-default": "https://cuequote.com/docs/webhooks",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://cuequote.com${localePath}/docs/webhooks`,
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

export default async function WebhooksDocsPage() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "56px 24px 96px" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#10b981", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>
          Webhooks
        </p>
        <h1 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 40, color: "#08172E", letterSpacing: -1.2, marginBottom: 16 }}>
          Know the moment a client accepts
        </h1>
        <p style={{ ...P, fontSize: 17 }}>
          Instead of polling the API to find out what changed, let us tell you. When a proposal is
          sent, opened, accepted or rejected, we post a signed JSON payload to a URL you control —
          usually within a second.
        </p>
        <p style={P}>
          Available on the <strong>Business plan</strong>.
        </p>

        <H2 id="setup">Adding an endpoint</H2>
        <p style={P}>
          In CueQuote, go to <strong>Settings → Webhooks</strong> and choose{" "}
          <strong>Add endpoint</strong>. Paste the https URL that should receive the events and tick
          the ones you want.
        </p>
        <p style={P}>
          You will be shown a <strong>signing secret</strong> starting{" "}
          <span style={{ fontFamily: MONO }}>whsec_</span>. Copy it then — it is shown once. It is what
          lets you prove a request came from us rather than from anyone who learned your URL.
        </p>

        <H2 id="events">Events</H2>
        <table style={{ width: "100%", borderCollapse: "collapse", margin: "8px 0 24px" }}>
          <thead>
            <tr>
              <th style={TH}>Event</th>
              <th style={TH}>Fires when</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ ...TD, fontFamily: MONO }}>proposal.sent</td><td style={TD}>You send a proposal to a client.</td></tr>
            <tr><td style={{ ...TD, fontFamily: MONO }}>proposal.viewed</td><td style={TD}>The client opens the share link for the first time.</td></tr>
            <tr><td style={{ ...TD, fontFamily: MONO }}>proposal.accepted</td><td style={TD}>The client accepts. This is the one most people wire to their CRM.</td></tr>
            <tr><td style={{ ...TD, fontFamily: MONO }}>proposal.rejected</td><td style={TD}>The client declines.</td></tr>
          </tbody>
        </table>
        <p style={P}>
          Events fire wherever the change happened — in the app, through the{" "}
          <Link href="/docs/api" style={{ color: "#10b981", fontWeight: 600 }}>API</Link>, or from a
          client clicking accept on a share link.
        </p>

        <H2 id="payload">The payload</H2>
        <Code>{`{
  "event": "proposal.accepted",
  "created_at": "2026-08-09T14:02:11.482Z",
  "data": {
    "proposal": {
      "id": "4b888edb-d71a-4aa1-87fb-26ba1d3fc103",
      "title": "Warsaw Tech Summit 2026",
      "status": "accepted",
      "currency": "PLN",
      "subtotal": 40010,
      "total": 40010,
      "event_date": "2026-11-03",
      "venue_name": "Warsaw",
      "attendee_count": 200,
      "created_at": "2026-08-01T09:14:22.010Z",
      "share_url": "https://app.cuequote.com/share/961419b1-...",
      "app_url": "https://app.cuequote.com/proposals/4b888edb-..."
    },
    "client": {
      "id": "c2f0a1e8-...",
      "name": "Acme Events",
      "contact_name": "Marta Nowak",
      "contact_email": "ops@acme.example"
    }
  }
}`}</Code>
        <p style={P}>
          <span style={{ fontFamily: MONO }}>client</span> is <span style={{ fontFamily: MONO }}>null</span>{" "}
          if the proposal has no client attached. Line items are not included — fetch the proposal from
          the API if you need them.
        </p>

        <H2 id="verify">Verifying the signature</H2>
        <p style={P}>
          Every request carries an <span style={{ fontFamily: MONO }}>X-CueQuote-Signature</span> header:
        </p>
        <Code>{`X-CueQuote-Signature: t=1786296938,v1=5a1f...c93b`}</Code>
        <p style={P}>
          <span style={{ fontFamily: MONO }}>v1</span> is an HMAC-SHA256 of{" "}
          <span style={{ fontFamily: MONO }}>{"{timestamp}.{raw body}"}</span>, keyed with your signing
          secret. Compute it over the <strong>raw body</strong> — parsing and re-serialising the JSON
          changes the bytes and the signature will not match.
        </p>
        <Code>{`// Node.js / Express
import crypto from 'node:crypto'

app.post('/hooks/cuequote',
  express.raw({ type: 'application/json' }),   // raw body, not express.json()
  (req, res) => {
    const header = req.get('X-CueQuote-Signature') || ''
    const { t, v1 } = Object.fromEntries(
      header.split(',').map(p => p.split('='))
    )

    // Reject anything older than five minutes, so a captured request
    // cannot be replayed at you later.
    if (Math.abs(Date.now() / 1000 - Number(t)) > 300) return res.sendStatus(400)

    const expected = crypto
      .createHmac('sha256', process.env.CUEQUOTE_WEBHOOK_SECRET)
      .update(\`\${t}.\${req.body}\`)
      .digest('hex')

    // timingSafeEqual, not ===, so the comparison does not leak the
    // signature one byte at a time.
    const ok = v1.length === expected.length && crypto.timingSafeEqual(
      Buffer.from(v1), Buffer.from(expected)
    )
    if (!ok) return res.sendStatus(401)

    const { event, data } = JSON.parse(req.body)
    // ... your logic
    res.sendStatus(200)
  })`}</Code>

        <Code>{`# Python / Flask
import hmac, hashlib, time
from flask import request, abort

@app.post("/hooks/cuequote")
def cuequote():
    parts = dict(p.split("=") for p in request.headers.get("X-CueQuote-Signature", "").split(","))
    if abs(time.time() - int(parts["t"])) > 300:
        abort(400)

    expected = hmac.new(
        SECRET.encode(),
        f"{parts['t']}.{request.get_data(as_text=True)}".encode(),
        hashlib.sha256,
    ).hexdigest()

    if not hmac.compare_digest(parts["v1"], expected):
        abort(401)

    payload = request.get_json()
    # ... your logic
    return "", 200`}</Code>

        <H2 id="responding">Responding</H2>
        <p style={P}>
          Return any <strong>2xx</strong> status. Anything else is recorded as a failure and shown in
          your Settings so you can see the endpoint is broken.
        </p>
        <p style={P}>
          Answer quickly and do the work afterwards — we give up after{" "}
          <strong>10 seconds</strong>. If your handler is slow, acknowledge first and queue the job.
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse", margin: "8px 0 24px" }}>
          <thead>
            <tr><th style={TH}>Rule</th><th style={TH}>Why</th></tr>
          </thead>
          <tbody>
            <tr><td style={TD}>https only</td><td style={TD}>A signed payload sent in plaintext still exposes your client&apos;s name, the event and the value to anyone on the network path.</td></tr>
            <tr><td style={TD}>Public addresses only</td><td style={TD}>Endpoints resolving to private or internal ranges are refused, both when you add them and again at delivery time.</td></tr>
            <tr><td style={TD}>No redirects</td><td style={TD}>We deliver to the URL you gave us and do not follow a 301 or 302 elsewhere.</td></tr>
            <tr><td style={TD}>Expect repeats</td><td style={TD}>Treat handlers as idempotent — key off the proposal id and event rather than assuming exactly one delivery.</td></tr>
          </tbody>
        </table>

        <H2 id="troubleshooting">Troubleshooting</H2>
        <table style={{ width: "100%", borderCollapse: "collapse", margin: "8px 0 24px" }}>
          <thead>
            <tr><th style={TH}>You see</th><th style={TH}>Fix</th></tr>
          </thead>
          <tbody>
            <tr><td style={TD}>Signature never matches</td><td style={TD}>You are almost certainly hashing a re-serialised body. Capture the raw bytes before any JSON middleware touches them.</td></tr>
            <tr><td style={TD}>&ldquo;Failing&rdquo; badge in Settings</td><td style={TD}>Your endpoint returned a non-2xx or timed out in the last 7 days. Check your own logs first.</td></tr>
            <tr><td style={TD}>Nothing arrives at all</td><td style={TD}>Confirm the event is ticked on the endpoint, and that the status actually changed — re-sending an already-sent proposal does not fire <span style={{ fontFamily: MONO }}>proposal.sent</span> twice.</td></tr>
            <tr><td style={TD}>&ldquo;The endpoint must be an https URL&rdquo;</td><td style={TD}>http is refused. Use https, including in staging.</td></tr>
            <tr><td style={TD}>Lost the signing secret</td><td style={TD}>It cannot be shown again. Delete the endpoint and add it back to get a new one.</td></tr>
          </tbody>
        </table>

        <div style={{ marginTop: 56, padding: 24, background: "#f0fdf4", border: "1px solid #a7f3d0", borderRadius: 14 }}>
          <p style={{ ...P, marginBottom: 8, fontWeight: 700, color: "#065f46" }}>Also available</p>
          <p style={{ ...P, marginBottom: 0 }}>
            The <Link href="/docs/api" style={{ color: "#10b981", fontWeight: 600 }}>REST API</Link> to create
            proposals, the <Link href="/docs/widget" style={{ color: "#10b981", fontWeight: 600 }}>website quote
            form</Link> for your visitors, and the{" "}
            <Link href="/docs/mcp" style={{ color: "#10b981", fontWeight: 600 }}>MCP server</Link> for AI
            assistants. Building something we have not covered? Tell us at{" "}
            <a href="mailto:hello@cuequote.com" style={{ color: "#10b981", fontWeight: 600 }}>hello@cuequote.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
