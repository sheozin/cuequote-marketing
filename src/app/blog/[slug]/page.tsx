import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";

/* ─── Blog post data ────────────────────────────────────────────────────────── */

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Guides: { bg: "#ecfdf5", text: "#10b981" },
  Industry: { bg: "#eff6ff", text: "#3b82f6" },
  Technology: { bg: "#f5f3ff", text: "#8b5cf6" },
  Business: { bg: "#fef3c7", text: "#d97706" },
};

const POSTS: BlogPost[] = [
  {
    slug: "how-to-write-av-proposal-that-wins",
    title: "How to Write an AV Proposal That Wins",
    excerpt: "A step-by-step guide to crafting AV proposals that close deals — from scoping equipment to presenting pricing that clients trust.",
    category: "Guides",
    date: "2026-03-10",
    readTime: "7 min read",
    content: [
      "Winning AV proposals share a common trait: they make the client feel understood before a single piece of equipment is mentioned. The best proposals open with a brief restatement of the event objectives — the keynote that needs to land perfectly, the breakout sessions that demand seamless audio, the LED wall that sets the tone for the entire conference. When a client reads your proposal and thinks \"they get it,\" you have already cleared the biggest hurdle.",
      "Structure matters more than most AV professionals realize. A proposal that jumps straight into a spreadsheet of line items forces the client to do the mental work of connecting equipment to outcomes. Instead, organize your proposal around event zones or functional areas — main stage, breakout rooms, registration, livestream — and list the equipment under each. This approach tells a story: here is what your attendees will experience in each space, and here is exactly what makes it happen.",
      "Pricing psychology plays a critical role. Avoid the trap of presenting one giant total at the bottom of a long list. Break costs into logical sections so the client can see where their budget is going. Offer two or three tiers when appropriate — a \"recommended\" package and a \"premium\" option give the client agency without overwhelming them. Always include what is covered: delivery, setup, a dedicated technician, teardown. Hidden costs erode trust faster than a high price tag ever will.",
      "The format of your proposal signals professionalism before a single word is read. A clean, branded PDF with your logo, consistent typography, and a clear layout tells the client you run a serious operation. Contrast this with a plain email or a screenshot of a spreadsheet — the difference in perceived value is enormous. Tools like CueQuote let you generate branded, structured proposals in minutes, so there is no excuse for sending anything less than polished.",
      "Finally, follow up with intention. Attach the proposal to a share link so you know when the client opens it. If they have not viewed it after 48 hours, a brief check-in is appropriate. If they viewed it multiple times, they are comparing you to competitors — that is your cue to call and address questions directly. The proposal is not the finish line; it is the starting gate for the conversation that closes the deal.",
    ],
  },
  {
    slug: "true-cost-of-manual-av-quoting",
    title: "The True Cost of Manual AV Quoting",
    excerpt: "How much time and revenue are AV companies losing to spreadsheet-based quoting? We break down the hidden costs.",
    category: "Industry",
    date: "2026-03-08",
    readTime: "5 min read",
    content: [
      "Most AV companies quote the same way they did a decade ago: open a spreadsheet, duplicate the last similar project, manually update line items, recalculate totals, copy everything into a Word document or email, and send. The process works — in the sense that proposals eventually reach clients. But \"works\" is not the same as \"efficient,\" and the hidden costs of this workflow are staggering when you add them up over a year.",
      "Time is the most obvious cost. Industry surveys suggest that an experienced AV project manager spends 45 to 90 minutes building a single proposal from scratch using spreadsheets. For a company sending 20 proposals per month, that is 15 to 30 hours — nearly an entire work week — spent on document assembly rather than client relationships, site visits, or creative production design. When you factor in the hourly cost of senior staff, manual quoting can easily represent tens of thousands of euros in labor annually.",
      "Errors are the silent revenue killer. A mistyped quantity, a forgotten line item, an outdated rental rate carried over from a copied spreadsheet — these mistakes either cost you margin when you honor a low quote or cost you credibility when you send a correction. One AV rental company we spoke with estimated that pricing errors appeared in roughly 12% of their manually created proposals. At scale, that is a serious problem.",
      "Speed-to-quote directly impacts win rate. In a competitive market, the first professional proposal in a client's inbox sets the anchor. If your competitor sends a polished quote in two hours while you are still formatting a spreadsheet the next morning, you are playing catch-up. Research across service industries shows that responding within the first hour increases conversion likelihood by a factor of seven. Every hour spent on manual formatting is an hour your competitor is using to close the deal.",
      "The solution is not about replacing human judgment — it is about eliminating the repetitive assembly work so your team can focus on what actually wins contracts: understanding client needs, recommending the right equipment, and building relationships. Automated quoting tools like CueQuote handle the tedious parts — catalog lookups, pricing calculations, PDF formatting — while keeping you in full control of the final output.",
    ],
  },
  {
    slug: "ai-in-event-production-real-vs-hype",
    title: "AI in Event Production: What's Real vs. Hype",
    excerpt: "Separating genuine AI applications in live events from marketing fluff. Where AI actually helps AV professionals today.",
    category: "Technology",
    date: "2026-03-05",
    readTime: "6 min read",
    content: [
      "The event production industry is awash in AI marketing claims. Every software vendor, equipment manufacturer, and platform now describes itself as \"AI-powered.\" For AV professionals trying to make practical purchasing decisions, separating real utility from buzzword decoration has become a necessary skill. The good news: genuine AI applications in event production do exist, and some of them are genuinely transformative. The bad news: most of what is marketed as AI is either basic automation wearing a fancy label or vaporware that has not shipped yet.",
      "Where AI delivers real value today is in tasks that involve pattern recognition and repetitive decision-making. Proposal generation is a strong example: given an event description, AI can recommend appropriate equipment types, estimate quantities based on venue size and attendee count, and apply your pricing catalog — tasks that follow learnable patterns but consume significant human time. Similarly, AI-driven camera tracking for livestreams, automatic audio mixing for multi-speaker panels, and real-time captioning have moved from novelty to production-ready tools.",
      "The hype typically clusters around two areas: fully autonomous event production and predictive analytics with insufficient data. Claims that AI will \"run your entire event\" ignore the reality that live production is fundamentally about handling the unexpected — the speaker who changes their presentation five minutes before going on stage, the last-minute room flip, the client who adds a breakout session the night before. AI excels at structured, repeatable tasks; it struggles with the improvisation that defines great AV technicians.",
      "Predictive analytics is the other over-promised area. Some platforms claim to predict event attendance, equipment failure, or client satisfaction using AI. While predictive models can work with large datasets, most AV companies do not have the volume of historical data needed to train reliable models. A company running 200 events per year simply does not generate enough data points for meaningful prediction. Be skeptical of any tool that promises to predict outcomes from your data unless you are operating at massive scale.",
      "The practical advice for AV professionals: adopt AI tools that automate your most time-consuming repetitive tasks — quoting, inventory management, scheduling — and evaluate them based on time saved, not marketing claims. Ignore tools that require you to change your workflow dramatically for uncertain benefits. The best AI tools in event production feel like a faster version of what you already do, not a science fiction reimagining of your job.",
    ],
  },
  {
    slug: "av-equipment-pricing-guide",
    title: "AV Equipment Pricing: A Guide for Event Professionals",
    excerpt: "Understanding rental rates, markup strategies, and pricing psychology for AV equipment proposals.",
    category: "Guides",
    date: "2026-03-02",
    readTime: "8 min read",
    content: [
      "Pricing AV equipment for events is part science, part psychology, and part market awareness. Get it right, and you build a sustainable business with healthy margins. Get it wrong, and you either leave money on the table or price yourself out of deals. This guide covers the fundamentals that every AV professional — from freelancers to rental house owners — should understand when building their pricing strategy.",
      "Start with your cost basis. Every piece of equipment in your inventory has a true cost that includes purchase price, depreciation schedule, maintenance, insurance, storage, and transport. A common approach is to target a rental rate that recovers the equipment's purchase price within 25 to 40 rental days. For example, an LED wall panel purchased for 3,500 euros with a target recovery of 30 days would have a base daily rate of approximately 117 euros. This is your floor — the rate below which you are losing money on that asset. From there, market rates, demand, and competitive positioning determine your actual pricing.",
      "Markup strategies vary by segment. Corporate events typically support higher margins than music festivals or nonprofit galas because corporate clients prioritize reliability and service over price. A common structure is to apply a 2.5x to 3.5x markup on equipment cost for corporate work, while festival and touring work might operate at 1.5x to 2x. Labor, transport, and rigging often carry different margins than equipment rental, so keep these as separate line items with their own markup logic.",
      "Pricing psychology matters in how you present numbers, not just what you charge. Anchoring is powerful: when you present a comprehensive AV package at 15,000 euros that includes everything from microphones to LED walls, the client evaluates the total against their budget. When you present 47 individual line items, they evaluate each one against what they think it should cost — and they will always find items that feel expensive in isolation. Group your pricing into logical sections (audio, video, lighting, labor) with subtotals, and let the client see value at the category level.",
      "Finally, build flexibility into your pricing. Offer a recommended package and a reduced option rather than a single take-it-or-leave-it quote. Clients appreciate choice, and the contrast between options often makes the recommended package feel like the obvious pick. Include a brief note explaining what the reduced option sacrifices — \"single-camera coverage instead of multi-camera\" tells the client exactly what they are trading for a lower price. This approach respects the client's budget while protecting your margin on the work that matters most.",
    ],
  },
  {
    slug: "from-whatsapp-quotes-to-professional-proposals",
    title: "From WhatsApp Quotes to Professional Proposals",
    excerpt: "Many AV freelancers still quote via messaging apps. Here's why upgrading your proposal game wins more business.",
    category: "Business",
    date: "2026-02-28",
    readTime: "5 min read",
    content: [
      "If you are an AV freelancer or small production company, there is a good chance your quoting process looks something like this: a client messages you on WhatsApp asking for a price on a corporate event. You mentally estimate the equipment, type out a list with prices, and hit send. Maybe you add it up in the Notes app first. The client replies with a thumbs-up emoji, and you have a deal. It works — until it does not.",
      "The WhatsApp quote breaks down in three predictable ways. First, there is no record that both parties can reference cleanly. When the client asks \"what was included again?\" two weeks later, you are scrolling through chat history trying to find the message. Second, it signals a level of informality that caps your perceived value. A client choosing between your WhatsApp message and a competitor's branded PDF with line items, terms, and a company logo will — consciously or not — associate the PDF with a more professional operation. Third, you cannot track engagement. You have no idea if the client forwarded your quote to a decision-maker, compared it to another vendor, or forgot about it entirely.",
      "Upgrading does not mean abandoning the speed that makes WhatsApp attractive. The goal is to keep the two-minute response time while delivering a document that looks like it came from a company ten times your size. Modern proposal tools let you input an event description — the same way you would type it in a chat — and generate a structured, branded proposal that you can share as a link or PDF. The client gets a professional document; you get read tracking and a clean record.",
      "The financial impact is tangible. AV freelancers who switch from informal quoting to structured proposals consistently report higher average deal sizes — not because they raise their prices, but because a professional proposal justifies the price. When a client sees a clean breakdown of equipment, labor, transport, and setup, they understand what they are paying for. When they see a chat message that says \"full AV setup — 2,500 euros,\" they have no context for whether that is fair, and they are more likely to negotiate down or shop around.",
      "The transition is easier than you think. You do not need to learn design software or spend hours on templates. Tools like CueQuote are built specifically for this use case: describe the event, review the generated equipment list, add your logo, and send. The first proposal takes five minutes. Every one after that takes two. Your clients see a polished professional; you spend the same time you would have spent typing a WhatsApp message.",
    ],
  },
  {
    slug: "5-mistakes-that-lose-av-contracts",
    title: "5 Mistakes That Lose AV Contracts",
    excerpt: "Common proposal pitfalls that cost AV companies deals — and how to avoid them.",
    category: "Business",
    date: "2026-02-25",
    readTime: "4 min read",
    content: [
      "Losing an AV contract stings, especially when you know your team could have delivered an outstanding event. While price is often blamed, the reality is that many lost deals come down to avoidable mistakes in the proposal and sales process. After speaking with dozens of event planners and procurement managers, five patterns emerge consistently as deal-breakers.",
      "Mistake one: quoting without qualifying. Sending a generic equipment list without understanding the client's actual priorities is the fastest way to lose. An event planner organizing a product launch cares about visual impact — LED walls, creative lighting, camera work. If your proposal leads with a detailed audio breakdown and barely mentions video, you have signaled that you did not listen. Always ask clarifying questions before quoting, even if the client sent a detailed brief. A five-minute phone call to confirm priorities can be the difference between winning and losing.",
      "Mistake two: slow response time. In competitive markets, the first credible proposal sets the benchmark. If your competitor sends a professional quote within four hours and yours arrives the next day, you are already at a disadvantage — even if your proposal is better. Event planners often shortlist the first two or three vendors who respond professionally. Speed does not mean sloppy; it means having systems in place to generate proposals quickly without sacrificing quality.",
      "Mistake three: hidden costs and vague line items. Nothing erodes trust faster than a proposal total that grows after the client says yes. If delivery, setup, teardown, and technician labor are not clearly itemized in your proposal, the client will feel ambushed when they appear on the invoice. Similarly, vague descriptions like \"AV package\" or \"miscellaneous equipment\" make clients nervous. Be specific: list every major item, its quantity, and its rate. Transparency builds confidence.",
      "Mistakes four and five are related: no follow-up and no differentiation. Sending a proposal and waiting is not a strategy — it is hope. Follow up within 48 hours to ask if the client has questions. If you can track when they view your proposal, use that insight to time your follow-up. As for differentiation, your proposal should include at least one element that competitors likely will not — a site visit summary, a diagram of the AV layout, a case study from a similar event, or a brief note explaining why you recommended specific equipment. The proposal is not just a price list; it is your first opportunity to demonstrate expertise and care.",
    ],
  },
];

/* ─── Static params ─────────────────────────────────────────────────────────── */

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

/* ─── Metadata ──────────────────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const cat = CATEGORY_COLORS[post.category] || CATEGORY_COLORS.Guides;
  const t = await getTranslations("blog");

  return (
    <>
      <Nav />

      <article style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 14,
              fontWeight: 500,
              color: "#6b7280",
              textDecoration: "none",
              marginBottom: 32,
            }}
          >
            <ArrowLeft size={16} /> {t("backToBlock")}
          </Link>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: cat.text,
                background: cat.bg,
                padding: "3px 10px",
                borderRadius: 12,
              }}
            >
              {post.category}
            </span>
            <span style={{ fontSize: 13, color: "#9ca3af" }}>
              {post.readTime}
            </span>
            <span style={{ fontSize: 13, color: "#9ca3af" }}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 800,
              fontSize: 40,
              color: "#08172E",
              lineHeight: 1.15,
              letterSpacing: -1,
              marginBottom: 32,
            }}
          >
            {post.title}
          </h1>

          {/* Excerpt / lead */}
          <p
            style={{
              fontSize: 18,
              color: "#4b5563",
              lineHeight: 1.7,
              marginBottom: 40,
              borderInlineStart: "3px solid #10b981",
              paddingInlineStart: 20,
            }}
          >
            {post.excerpt}
          </p>

          {/* Body */}
          {post.content.map((paragraph, i) => (
            <p
              key={i}
              style={{
                fontSize: 16,
                color: "#374151",
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              {paragraph}
            </p>
          ))}

          {/* Divider */}
          <div
            style={{
              borderTop: "1px solid #e5e7eb",
              marginTop: 48,
              paddingTop: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 14,
                fontWeight: 600,
                color: "#10b981",
                textDecoration: "none",
              }}
            >
              <ArrowLeft size={14} /> {t("allPosts")}
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
