import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, guides, and insights for AV professionals — from proposal writing to equipment pricing and industry trends.",
};

const POSTS = [
  {
    slug: "how-to-write-av-proposal-that-wins",
    title: "How to Write an AV Proposal That Wins",
    excerpt: "A step-by-step guide to crafting AV proposals that close deals — from scoping equipment to presenting pricing that clients trust.",
    category: "Guides",
    date: "2026-03-10",
    readTime: "7 min read",
  },
  {
    slug: "true-cost-of-manual-av-quoting",
    title: "The True Cost of Manual AV Quoting",
    excerpt: "How much time and revenue are AV companies losing to spreadsheet-based quoting? We break down the hidden costs.",
    category: "Industry",
    date: "2026-03-08",
    readTime: "5 min read",
  },
  {
    slug: "ai-in-event-production-real-vs-hype",
    title: "AI in Event Production: What's Real vs. Hype",
    excerpt: "Separating genuine AI applications in live events from marketing fluff. Where AI actually helps AV professionals today.",
    category: "Technology",
    date: "2026-03-05",
    readTime: "6 min read",
  },
  {
    slug: "av-equipment-pricing-guide",
    title: "AV Equipment Pricing: A Guide for Event Professionals",
    excerpt: "Understanding rental rates, markup strategies, and pricing psychology for AV equipment proposals.",
    category: "Guides",
    date: "2026-03-02",
    readTime: "8 min read",
  },
  {
    slug: "from-whatsapp-quotes-to-professional-proposals",
    title: "From WhatsApp Quotes to Professional Proposals",
    excerpt: "Many AV freelancers still quote via messaging apps. Here's why upgrading your proposal game wins more business.",
    category: "Business",
    date: "2026-02-28",
    readTime: "5 min read",
  },
  {
    slug: "5-mistakes-that-lose-av-contracts",
    title: "5 Mistakes That Lose AV Contracts",
    excerpt: "Common proposal pitfalls that cost AV companies deals — and how to avoid them.",
    category: "Business",
    date: "2026-02-25",
    readTime: "4 min read",
  },
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Guides: { bg: "#ecfdf5", text: "#10b981" },
  Industry: { bg: "#eff6ff", text: "#3b82f6" },
  Technology: { bg: "#f5f3ff", text: "#8b5cf6" },
  Business: { bg: "#fef3c7", text: "#d97706" },
};

export default function BlogPage() {
  return (
    <>
      <Nav />

      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{
            display: "inline-block", fontSize: 12, fontWeight: 600, color: "#10b981",
            background: "#ecfdf5", padding: "4px 12px", borderRadius: 20, marginBottom: 24,
          }}>
            Blog
          </div>

          <h1 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 44, color: "#08172E", marginBottom: 16, lineHeight: 1.15, letterSpacing: -1 }}>
            Insights for AV professionals
          </h1>
          <p style={{ fontSize: 17, color: "#6b7280", marginBottom: 48, maxWidth: 560 }}>
            Tips, guides, and industry perspectives to help you win more proposals and grow your AV business.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
            {POSTS.map((post) => {
              const cat = CATEGORY_COLORS[post.category] || CATEGORY_COLORS.Guides;
              return (
                <article
                  key={post.slug}
                  style={{
                    border: "1px solid #e5e7eb", borderRadius: 16, padding: 32,
                    display: "flex", flexDirection: "column", gap: 16,
                    transition: "box-shadow 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{
                      fontSize: 12, fontWeight: 600, color: cat.text,
                      background: cat.bg, padding: "3px 10px", borderRadius: 12,
                    }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: 13, color: "#9ca3af" }}>{post.readTime}</span>
                  </div>

                  <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 20, color: "#08172E", lineHeight: 1.3 }}>
                    {post.title}
                  </h2>

                  <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.6, flex: 1 }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 13, color: "#9ca3af" }}>
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 4,
                        fontSize: 14, fontWeight: 600, color: "#10b981", textDecoration: "none",
                      }}
                    >
                      Read more <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
