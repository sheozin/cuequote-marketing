import type { Metadata } from "next";
import Nav from "../../../../components/Nav";
import Footer from "../../../../components/Footer";
import { getLocale } from "next-intl/server";

// Same English-only decision as the API reference: this is an install guide
// built around a code snippet, and a half-translated one is harder to follow.

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const localePath = locale === "en" ? "" : `/${locale}`;
  const title = "Website Quote Form — CueQuote";
  const description =
    "Put an instant AV quote form on your own website. One script tag: visitors get a budget range in a minute, you get the lead and a costed draft proposal.";
  return {
    title,
    description,
    alternates: {
      canonical: `https://cuequote.com${localePath}/docs/widget`,
      languages: {
        en: "https://cuequote.com/docs/widget",
        pl: "https://cuequote.com/pl/docs/widget",
        "x-default": "https://cuequote.com/docs/widget",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://cuequote.com${localePath}/docs/widget`,
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

export default async function WidgetDocsPage() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "56px 24px 96px" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#10b981", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>
          Website quote form
        </p>
        <h1 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 40, color: "#08172E", letterSpacing: -1.2, marginBottom: 16 }}>
          Answer enquiries in a minute, not three days
        </h1>
        <p style={{ ...P, fontSize: 17 }}>
          Most AV websites say &ldquo;contact us for a quote&rdquo;. Yours can give a real budget range
          while the visitor is still reading the page — priced from your own equipment rates. You get
          their details and a fully costed draft proposal waiting in CueQuote.
        </p>
        <p style={P}>
          Available on the <strong>Pro plan</strong> and above.
        </p>

        <H2 id="setup">Setting it up</H2>
        <p style={P}>
          In CueQuote, go to <strong>Settings → Website quote form</strong> and choose{" "}
          <strong>Set up the form</strong>. Give it a name and list the domains it will run on — both{" "}
          <span style={{ fontFamily: MONO }}>yourcompany.com</span> and{" "}
          <span style={{ fontFamily: MONO }}>www.yourcompany.com</span> if you use both.
        </p>
        <p style={P}>
          You will get a script tag with your key and brand colour already filled in. Paste it into your
          page wherever you want the form to appear.
        </p>
        <Code>{`<script src="https://cuequote.com/quote.js"
        data-key="cq_pub_your_key_here"
        data-color="#10b981"></script>`}</Code>
        <p style={P}>
          That is the entire installation. It works in WordPress (a Custom HTML block), Squarespace,
          Wix, Webflow, and anything else that lets you paste HTML.
        </p>

        <H2 id="options">Options</H2>
        <table style={{ width: "100%", borderCollapse: "collapse", margin: "8px 0 24px" }}>
          <thead>
            <tr>
              <th style={TH}>Attribute</th>
              <th style={TH}>Required</th>
              <th style={TH}>What it does</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ ...TD, fontFamily: MONO }}>data-key</td><td style={TD}>Yes</td><td style={TD}>Your publishable key, from Settings. Always starts <span style={{ fontFamily: MONO }}>cq_pub_</span>.</td></tr>
            <tr><td style={{ ...TD, fontFamily: MONO }}>data-color</td><td style={TD}>No</td><td style={TD}>Accent colour for the button and bars. Defaults to your brand colour.</td></tr>
            <tr><td style={{ ...TD, fontFamily: MONO }}>data-target</td><td style={TD}>No</td><td style={TD}>A CSS selector to mount into, e.g. <span style={{ fontFamily: MONO }}>#quote-box</span>. Without it, the form appears where the script tag sits.</td></tr>
          </tbody>
        </table>
        <p style={P}>
          The form renders in a shadow root, so your site&apos;s CSS cannot affect it and it cannot affect
          your layout. It is responsive and stacks to one column on phones.
        </p>

        <H2 id="what-visitors-see">What visitors see — and what they don&apos;t</H2>
        <p style={P}>
          The visitor describes their event, enters guest count, date, name and email, and gets a{" "}
          <strong>total budget range plus a breakdown by category</strong> — audio, lighting, video,
          staging, crew.
        </p>
        <p style={P}>
          <strong>They never see your unit prices.</strong> No per-item rates, no equipment list, no line
          items — only ranges. Your rate card stays yours, which is why this is safe to put on a public
          page where competitors can see it.
        </p>
        <p style={P}>
          The range is deliberately labelled as indicative rather than a quote, so nobody arrives
          believing they have been given a firm price.
        </p>

        <H2 id="what-you-get">What you get</H2>
        <p style={P}>
          The moment someone submits, you receive an email with their name, email, the estimate range and
          their description, plus a button straight to the draft.
        </p>
        <p style={P}>
          In CueQuote you will find a <strong>fully costed draft proposal</strong> — the complete equipment
          list at your real prices, with the client already created and attached. Review it, adjust
          anything, and send. The slow part of answering an enquiry is already done.
        </p>

        <H2 id="limits">Limits and safety</H2>
        <table style={{ width: "100%", borderCollapse: "collapse", margin: "8px 0 24px" }}>
          <thead>
            <tr><th style={TH}>Control</th><th style={TH}>Why</th></tr>
          </thead>
          <tbody>
            <tr><td style={TD}>Only runs on your listed domains</td><td style={TD}>If someone copies your key onto another site, it stops working there.</td></tr>
            <tr><td style={TD}>25 quotes per day</td><td style={TD}>Each estimate runs AI over your catalogue, so this caps the cost if the form is ever hammered. Ask us if you need it raised.</td></tr>
            <tr><td style={TD}>Name and email required</td><td style={TD}>Every estimate produces a lead, and it discourages casual abuse.</td></tr>
            <tr><td style={TD}>Ranges only, never rates</td><td style={TD}>Your pricing is not exposed on a public page.</td></tr>
          </tbody>
        </table>
        <p style={P}>
          The key in your HTML is <strong>publishable</strong> — it is meant to be visible, and it can only
          do this one thing. Never put a <span style={{ fontFamily: MONO }}>cq_live_</span> API key on a
          public page; the widget refuses one outright.
        </p>
        <p style={P}>
          Quotes count towards your monthly proposal allowance, the same as proposals made in the app.
        </p>

        <H2 id="troubleshooting">Troubleshooting</H2>
        <table style={{ width: "100%", borderCollapse: "collapse", margin: "8px 0 24px" }}>
          <thead>
            <tr><th style={TH}>You see</th><th style={TH}>Fix</th></tr>
          </thead>
          <tbody>
            <tr><td style={TD}>&ldquo;This key is not enabled for …&rdquo;</td><td style={TD}>The domain is not on the key&apos;s list. Add it in Settings — and add the www version too if your site uses it.</td></tr>
            <tr><td style={TD}>Nothing appears at all</td><td style={TD}>Check the browser console. If it says the key must be publishable, you have pasted an API key instead of a widget key.</td></tr>
            <tr><td style={TD}>&ldquo;This widget is not ready yet&rdquo;</td><td style={TD}>Your equipment catalogue is empty. Pricing comes from your own rates, so add equipment first.</td></tr>
            <tr><td style={TD}>&ldquo;Reached its quote limit for today&rdquo;</td><td style={TD}>25 quotes used in 24 hours. It resets on a rolling basis; contact us to raise it.</td></tr>
          </tbody>
        </table>

        <div style={{ marginTop: 56, padding: 24, background: "#f0fdf4", border: "1px solid #a7f3d0", borderRadius: 14 }}>
          <p style={{ ...P, marginBottom: 8, fontWeight: 700, color: "#065f46" }}>Want it to do more?</p>
          <p style={{ ...P, marginBottom: 0 }}>
            If you need the quote pushed into your CRM, or a fuller integration, the{" "}
            <a href="/docs/api" style={{ color: "#10b981", fontWeight: 600 }}>API</a> does that on the
            Business plan. Tell us what you are building at{" "}
            <a href="mailto:hello@cuequote.com" style={{ color: "#10b981", fontWeight: 600 }}>hello@cuequote.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
