export interface BlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const POSTS: BlogPostSummary[] = [
  {
    slug: "how-to-write-av-proposal-that-wins",
    title: "How to Write an AV Proposal That Wins",
    excerpt:
      "A step-by-step guide to crafting AV proposals that close deals — from scoping equipment to presenting pricing that clients trust.",
    category: "Guides",
    date: "2026-03-10",
    readTime: "7 min read",
  },
  {
    slug: "true-cost-of-manual-av-quoting",
    title: "The True Cost of Manual AV Quoting",
    excerpt:
      "How much time and revenue are AV companies losing to spreadsheet-based quoting? We break down the hidden costs.",
    category: "Industry",
    date: "2026-03-08",
    readTime: "5 min read",
  },
  {
    slug: "ai-in-event-production-real-vs-hype",
    title: "AI in Event Production: What's Real vs. Hype",
    excerpt:
      "Separating genuine AI applications in live events from marketing fluff. Where AI actually helps AV professionals today.",
    category: "Technology",
    date: "2026-03-05",
    readTime: "6 min read",
  },
  {
    slug: "av-equipment-pricing-guide",
    title: "AV Equipment Pricing: A Guide for Event Professionals",
    excerpt:
      "Understanding rental rates, markup strategies, and pricing psychology for AV equipment proposals.",
    category: "Guides",
    date: "2026-03-02",
    readTime: "8 min read",
  },
  {
    slug: "from-whatsapp-quotes-to-professional-proposals",
    title: "From WhatsApp Quotes to Professional Proposals",
    excerpt:
      "Many AV freelancers still quote via messaging apps. Here's why upgrading your proposal game wins more business.",
    category: "Business",
    date: "2026-02-28",
    readTime: "5 min read",
  },
  {
    slug: "5-mistakes-that-lose-av-contracts",
    title: "5 Mistakes That Lose AV Contracts",
    excerpt:
      "Common proposal pitfalls that cost AV companies deals — and how to avoid them.",
    category: "Business",
    date: "2026-02-25",
    readTime: "4 min read",
  },
];
