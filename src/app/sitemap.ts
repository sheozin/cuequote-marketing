import type { MetadataRoute } from 'next'
import { POSTS } from '../lib/blog-posts'
import { getAllSlugs } from '../lib/tutorials'
import { locales, defaultLocale } from '../i18n/config'

function localizedUrl(base: string, path: string, locale: string): string {
  if (locale === defaultLocale) return `${base}${path}`
  return `${base}/${locale}${path}`
}

function alternatesForPath(base: string, path: string) {
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
    { path: '/contact', changeFrequency: 'yearly' as const, priority: 0.5 },
    { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/docs', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/tutorials', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/changelog', changeFrequency: 'weekly' as const, priority: 0.5 },
  ]

  const entries: MetadataRoute.Sitemap = []

  // Static pages — one entry per locale
  for (const page of staticPages) {
    for (const locale of locales) {
      entries.push({
        url: localizedUrl(base, page.path || '/', locale),
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: alternatesForPath(base, page.path || '/'),
      })
    }
  }

  // Tutorial pages
  for (const slug of getAllSlugs()) {
    for (const locale of locales) {
      entries.push({
        url: localizedUrl(base, `/tutorials/${slug}`, locale),
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
        alternates: alternatesForPath(base, `/tutorials/${slug}`),
      })
    }
  }

  // Blog posts
  for (const p of POSTS) {
    for (const locale of locales) {
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
