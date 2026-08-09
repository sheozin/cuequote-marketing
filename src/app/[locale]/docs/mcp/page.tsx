import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Nav from "../../../../components/Nav";
import Footer from "../../../../components/Footer";
import { getLocale } from "next-intl/server";

// English-only, like the other two developer pages: this is configuration and
// tool names, and a half-translated reference is harder to follow.

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const localePath = locale === "en" ? "" : `/${locale}`;
  const title = "MCP Server — CueQuote";
  const description =
    "Connect CueQuote to Claude, ChatGPT or any MCP client. Ask your assistant to quote an event and get a costed proposal from your own equipment catalogue.";
  return {
    title,
    description,
    alternates: {
      canonical: `https://cuequote.com${localePath}/docs/mcp`,
      languages: {
        en: "https://cuequote.com/docs/mcp",
        pl: "https://cuequote.com/pl/docs/mcp",
        "x-default": "https://cuequote.com/docs/mcp",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://cuequote.com${localePath}/docs/mcp`,
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

export default async function McpDocsPage() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "56px 24px 96px" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#10b981", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>
          MCP server
        </p>
        <h1 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 40, color: "#08172E", letterSpacing: -1.2, marginBottom: 16 }}>
          Quote an event from inside your AI assistant
        </h1>
        <p style={{ ...P, fontSize: 17 }}>
          Connect CueQuote to Claude, ChatGPT or any client that speaks Model Context Protocol, then
          ask it in plain language:
        </p>
        <p style={{ ...P, padding: "14px 18px", background: "#f8fafc", borderLeft: "3px solid #10b981", borderRadius: 6, fontStyle: "italic" }}>
          &ldquo;Quote the Warsaw conference — 300 people, keynote stage with LED, four breakout rooms,
          14 October.&rdquo;
        </p>
        <p style={P}>
          You get a real proposal priced from <strong>your own equipment catalogue</strong>, saved as a
          draft in CueQuote. The assistant is not guessing at prices; it is calling your account.
          Available on the <strong>Business plan</strong>.
        </p>

        <H2 id="connect">Connecting</H2>
        <p style={P}>
          Create an API key in <strong>Settings → API keys</strong>, then point your client at the server
          URL with the key as a bearer token.
        </p>
        <Code>{`Server URL:  https://api.cuequote.com/mcp
Transport:   HTTP (JSON-RPC 2.0)
Auth header: Authorization: Bearer cq_live_...`}</Code>
        <p style={P}>
          In a client that takes a JSON config, that is:
        </p>
        <Code>{`{
  "mcpServers": {
    "cuequote": {
      "type": "http",
      "url": "https://api.cuequote.com/mcp",
      "headers": {
        "Authorization": "Bearer cq_live_your_key_here"
      }
    }
  }
}`}</Code>
        <p style={P}>
          Clients that add remote servers through a form instead want the same two things: the URL, and
          an <span style={{ fontFamily: MONO }}>Authorization</span> header. There is nothing to install
          and nothing to run locally.
        </p>

        <H2 id="tools">What the assistant can do</H2>
        <table style={{ width: "100%", borderCollapse: "collapse", margin: "8px 0 24px" }}>
          <thead>
            <tr>
              <th style={TH}>Tool</th>
              <th style={TH}>What it does</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...TD, fontFamily: MONO }}>create_proposal</td>
              <td style={TD}>Turns an event description into a costed proposal from your catalogue. Accepts date, venue, attendee count, duration and client details. Returns the total, the line items and links to the draft.</td>
            </tr>
            <tr>
              <td style={{ ...TD, fontFamily: MONO }}>list_proposals</td>
              <td style={TD}>Recent proposals with status and total, optionally filtered — so you can ask &ldquo;what have we quoted this week?&rdquo; or &ldquo;which proposals are still drafts?&rdquo;</td>
            </tr>
            <tr>
              <td style={{ ...TD, fontFamily: MONO }}>get_proposal</td>
              <td style={TD}>One proposal with its full equipment list and pricing.</td>
            </tr>
          </tbody>
        </table>

        <H2 id="safety">What it will not do</H2>
        <p style={P}>
          <strong>Everything it creates is a draft.</strong> The assistant cannot send a proposal to a
          client, cannot email anyone, and cannot change your prices or catalogue. Sending stays a
          deliberate act you take in CueQuote after reviewing what was generated.
        </p>
        <p style={P}>
          A key only ever reaches its own account. It cannot read another company&apos;s proposals, and a
          publishable widget key is refused here outright.
        </p>
        <p style={P}>
          Proposals created this way count against your monthly allowance like any other, and the same
          60 requests per hour limit applies.
        </p>

        <H2 id="tips">Getting better quotes</H2>
        <p style={P}>
          The quality of the quote follows the quality of the description, exactly as it does in the app.
          Attendee count and duration drive equipment quantities; the venue affects regional pricing.
          &ldquo;Conference for 300&rdquo; produces a generic answer — &ldquo;300-person conference,
          keynote stage with a 6m LED wall, four breakout rooms with projection, roving mics for Q&amp;A,
          recorded livestream&rdquo; produces something you can send.
        </p>
        <p style={P}>
          If your catalogue is empty the tool will say so rather than invent equipment. Pricing comes
          from your rates, so there is nothing to price against until you add them.
        </p>

        <H2 id="troubleshooting">Troubleshooting</H2>
        <table style={{ width: "100%", borderCollapse: "collapse", margin: "8px 0 24px" }}>
          <thead>
            <tr><th style={TH}>You see</th><th style={TH}>Fix</th></tr>
          </thead>
          <tbody>
            <tr><td style={TD}>&ldquo;This API key is not valid or has been revoked&rdquo;</td><td style={TD}>The key is wrong, revoked, or you have used a <span style={{ fontFamily: MONO }}>cq_pub_</span> widget key. Create a fresh API key in Settings.</td></tr>
            <tr><td style={TD}>&ldquo;Missing API key&rdquo;</td><td style={TD}>The Authorization header is not reaching the server. Check your client sends custom headers.</td></tr>
            <tr><td style={TD}>&ldquo;The API is available on the Business plan&rdquo;</td><td style={TD}>MCP uses the same access as the REST API.</td></tr>
            <tr><td style={TD}>The assistant invents prices instead of calling the tool</td><td style={TD}>Ask it explicitly to use CueQuote, e.g. &ldquo;use the cuequote tool to quote this&rdquo;. Some clients need the server enabled per conversation.</td></tr>
          </tbody>
        </table>

        <div style={{ marginTop: 56, padding: 24, background: "#f0fdf4", border: "1px solid #a7f3d0", borderRadius: 14 }}>
          <p style={{ ...P, marginBottom: 8, fontWeight: 700, color: "#065f46" }}>Also available</p>
          <p style={{ ...P, marginBottom: 0 }}>
            The <Link href="/docs/api" style={{ color: "#10b981", fontWeight: 600 }}>REST API</Link> for your own
            systems, and the <Link href="/docs/widget" style={{ color: "#10b981", fontWeight: 600 }}>website
            quote form</Link> for your visitors. All three call the same estimator, so a quote is a quote
            wherever it came from.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
