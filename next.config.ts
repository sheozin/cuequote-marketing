import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Deprecated XSS auditor disabled — CSP below provides real XSS protection
  { key: "X-XSS-Protection", value: "0" },
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js requires unsafe-inline for its runtime scripts and styles
      `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ''}`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      // Supabase API + ipapi.co (geolocation in PageTracker) + YouTube embed
      "connect-src 'self' https://*.supabase.co https://ipapi.co",
      "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Host canonicalisation — must stay first. www served 200 alongside the apex, so
      // Google indexed both and split the ranking signals between them.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.cuequote.com" }],
        destination: "https://cuequote.com/:path*",
        permanent: true,
      },
      // /features is not a standalone page — features live as a section on the homepage.
      // Catch stale inbound links (external sites, old social shares, mistyped app-side
      // layout links) and send them to the homepage features anchor.
      { source: "/features", destination: "/#features", permanent: true },
      // Blog slug renames — old non-English slugs → new English slugs
      { source: "/blog/cout-evenement-entreprise-2026", destination: "/blog/corporate-event-cost-2026", permanent: true },
      { source: "/:locale/blog/cout-evenement-entreprise-2026", destination: "/:locale/blog/corporate-event-cost-2026", permanent: true },
      { source: "/blog/ile-kosztuje-organizacja-konferencji", destination: "/blog/conference-cost-realistic-budget", permanent: true },
      { source: "/:locale/blog/ile-kosztuje-organizacja-konferencji", destination: "/:locale/blog/conference-cost-realistic-budget", permanent: true },
      { source: "/blog/firmenevent-planen-ohne-erfahrung", destination: "/blog/plan-company-event-without-experience", permanent: true },
      { source: "/:locale/blog/firmenevent-planen-ohne-erfahrung", destination: "/:locale/blog/plan-company-event-without-experience", permanent: true },
      { source: "/blog/conference-planning-mistakes-arabic", destination: "/blog/conference-planning-mistakes", permanent: true },
      { source: "/:locale/blog/conference-planning-mistakes-arabic", destination: "/:locale/blog/conference-planning-mistakes", permanent: true },
      { source: "/blog/cahier-des-charges-audiovisuel", destination: "/blog/how-to-write-av-brief", permanent: true },
      { source: "/:locale/blog/cahier-des-charges-audiovisuel", destination: "/:locale/blog/how-to-write-av-brief", permanent: true },
      { source: "/blog/jak-wybrac-firme-eventowa", destination: "/blog/how-to-choose-event-company-checklist", permanent: true },
      { source: "/:locale/blog/jak-wybrac-firme-eventowa", destination: "/:locale/blog/how-to-choose-event-company-checklist", permanent: true },
      { source: "/blog/veranstaltungstechnik-kosten-uebersicht", destination: "/blog/event-av-cost-price-guide-2026", permanent: true },
      { source: "/:locale/blog/veranstaltungstechnik-kosten-uebersicht", destination: "/:locale/blog/event-av-cost-price-guide-2026", permanent: true },
      { source: "/blog/organiser-seminaire-entreprise-checklist", destination: "/blog/organize-company-seminar-checklist", permanent: true },
      { source: "/:locale/blog/organiser-seminaire-entreprise-checklist", destination: "/:locale/blog/organize-company-seminar-checklist", permanent: true },
      { source: "/blog/planowanie-eventu-firmowego-od-zera", destination: "/blog/plan-corporate-event-from-scratch", permanent: true },
      { source: "/:locale/blog/planowanie-eventu-firmowego-od-zera", destination: "/:locale/blog/plan-corporate-event-from-scratch", permanent: true },
      { source: "/blog/event-budget-vorlage-kostenlos", destination: "/blog/event-budget-template-free-2026", permanent: true },
      { source: "/:locale/blog/event-budget-vorlage-kostenlos", destination: "/:locale/blog/event-budget-template-free-2026", permanent: true },
      { source: "/blog/av-angebote-erstellen-deutschland", destination: "/blog/av-proposals-germany-guide", permanent: true },
      { source: "/:locale/blog/av-angebote-erstellen-deutschland", destination: "/:locale/blog/av-proposals-germany-guide", permanent: true },
      { source: "/blog/devis-audiovisuel-entreprises-france", destination: "/blog/av-proposals-france-guide", permanent: true },
      { source: "/:locale/blog/devis-audiovisuel-entreprises-france", destination: "/:locale/blog/av-proposals-france-guide", permanent: true },
      { source: "/blog/av-oferty-eventowe-polska", destination: "/blog/av-proposals-poland-guide", permanent: true },
      { source: "/:locale/blog/av-oferty-eventowe-polska", destination: "/:locale/blog/av-proposals-poland-guide", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
