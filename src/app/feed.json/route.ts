import messages from '@/messages/en.json'
import { publishedPosts } from '@/lib/blog-posts'

// Read by the app's weekly newsletter. Outside [locale] on purpose, and the
// middleware matcher skips any path containing a dot, so /feed.json is never
// redirected to a locale prefix. Hourly, like the sitemap, so a post scheduled
// for a future date appears on its day without a deploy.
export const revalidate = 3600

type PostCopy = { title: string; excerpt: string }

export function GET() {
  const copy = messages.posts as Record<string, PostCopy>
  const posts = publishedPosts()
    .filter((p) => copy[p.slug])
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    .map((p) => ({
      slug: p.slug,
      title: copy[p.slug].title,
      excerpt: copy[p.slug].excerpt,
      category: p.category,
      date: p.date,
      url: `https://cuequote.com/blog/${p.slug}`,
    }))
  return Response.json({ posts })
}
