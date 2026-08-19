import type { MetadataRoute } from 'next'
import { publishedPosts } from '../lib/blog-posts'

// The sitemap is otherwise baked at build time, so a post scheduled for a future date
// would not appear in it until the next deploy. Rebuild it hourly instead.
export const revalidate = 3600
import { getAllSlugs } from '../lib/tutorials'
import { locales, defaultLocale } from '../i18n/config'

// ── SITEMAP LOCALE STRATEGY ──
// Phase 1 (current): Only EN + PL in sitemap to build indexing trust with Google.
// 77 pages were "crawled but not indexed" because Google saw 5 translations as duplicates.
// Once EN + PL pages are indexed (check Google Search Console), re-add other locales:
//   Phase 2: Add DE (after EN/PL indexed ~50%+)
//   Phase 3: Add FR + AR (after DE indexed)
// To re-enable: change sitemapLocales below to include more locales.
// 'ar' joined 2026-08-19: its long-tail is indexable again (see
// lib/seo-indexing.ts), and an indexable page that is never submitted is a page
// Google finds late or not at all. These two lists must move together.
const sitemapLocales = ['en', 'pl', 'ar'] as const

function localizedUrl(base: string, path: string, locale: string): string {
  if (locale === defaultLocale) return `${base}${path}`
  return `${base}/${locale}${path}`
}

function alternatesForPath(base: string, path: string) {
  // Alternates still reference ALL locales (hreflang tells Google about all versions)
  const languages: Record<string, string> = {}
  for (const locale of locales) {
    languages[locale] = localizedUrl(base, path, locale)
  }
  return { languages }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://cuequote.com'

  const staticPages = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1 },
    { path: '/pricing', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/blog', changeFrequency: 'weekly' as const, priority: 0.7 },
    { path: '/for-av-companies', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/for-event-planners', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/av-cost-calculator', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/contact', changeFrequency: 'yearly' as const, priority: 0.5 },
    { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/docs', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/docs/api', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/docs/widget', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/docs/mcp', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/docs/webhooks', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/tutorials', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/changelog', changeFrequency: 'weekly' as const, priority: 0.5 },
  ]

  const entries: MetadataRoute.Sitemap = []

  // Static pages — one entry per sitemap locale
  const siteLastUpdated = new Date('2026-07-24')
  for (const page of staticPages) {
    for (const locale of sitemapLocales) {
      entries.push({
        url: localizedUrl(base, page.path || '/', locale),
        lastModified: siteLastUpdated,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: alternatesForPath(base, page.path || '/'),
      })
    }
  }

  // English-only pages.
  //
  // Comparison pages are written once, in English, because 92 non-English pages
  // produced one click in six months. They carry no alternates and appear once,
  // so the sitemap says the same thing the page's canonical and robots do.
  const englishOnlyPages = [
    { path: '/compare/rentman-alternative', changeFrequency: 'monthly' as const, priority: 0.7 },
  ]
  for (const page of englishOnlyPages) {
    entries.push({
      url: localizedUrl(base, page.path, 'en'),
      lastModified: siteLastUpdated,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })
  }

  // Tutorial pages
  for (const slug of getAllSlugs()) {
    for (const locale of sitemapLocales) {
      entries.push({
        url: localizedUrl(base, `/tutorials/${slug}`, locale),
        lastModified: siteLastUpdated,
        changeFrequency: 'monthly',
        priority: 0.5,
        alternates: alternatesForPath(base, `/tutorials/${slug}`),
      })
    }
  }

  // Blog posts
  for (const p of publishedPosts()) {
    for (const locale of sitemapLocales) {
      entries.push({
        url: localizedUrl(base, `/blog/${p.slug}`, locale),
        lastModified: new Date(p.date),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: alternatesForPath(base, `/blog/${p.slug}`),
      })
    }
  }

  return entries
}
