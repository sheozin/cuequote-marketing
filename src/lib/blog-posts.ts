export interface BlogPostSummary {
  slug: string;
  category: string;
  date: string;
}

export const POSTS: BlogPostSummary[] = [
  // Newest first — published every 2 days within the current month
  {
    slug: "client-portal-av-proposals",
    category: "Business",
    date: "2026-05-05",
  },
  {
    slug: "e-signatures-av-proposals",
    category: "Guides",
    date: "2026-05-03",
  },
  {
    slug: "proposal-analytics-client-engagement",
    category: "Business",
    date: "2026-05-01",
  },
  {
    slug: "av-invoice-from-proposal",
    category: "Guides",
    date: "2026-04-29",
  },
  {
    slug: "proposal-tracking-know-when-clients-view",
    category: "Business",
    date: "2026-04-27",
  },
  {
    slug: "av-rental-pricing-per-day-vs-per-event",
    category: "Guides",
    date: "2026-04-25",
  },
  {
    slug: "multi-language-av-proposals",
    category: "Business",
    date: "2026-04-23",
  },
  {
    slug: "av-proposal-template-guide",
    category: "Guides",
    date: "2026-04-21",
  },
  {
    slug: "ai-av-proposal-generator-how-it-works",
    category: "Technology",
    date: "2026-04-19",
  },
  {
    slug: "how-to-write-av-proposal-that-wins",
    category: "Guides",
    date: "2026-03-10",
  },
  {
    slug: "true-cost-of-manual-av-quoting",
    category: "Industry",
    date: "2026-03-08",
  },
  {
    slug: "ai-in-event-production-real-vs-hype",
    category: "Technology",
    date: "2026-03-05",
  },
  {
    slug: "av-equipment-pricing-guide",
    category: "Guides",
    date: "2026-03-02",
  },
  {
    slug: "from-whatsapp-quotes-to-professional-proposals",
    category: "Business",
    date: "2026-02-28",
  },
  {
    slug: "5-mistakes-that-lose-av-contracts",
    category: "Business",
    date: "2026-02-25",
  },
];
