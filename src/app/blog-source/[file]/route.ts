import messages from '@/messages/en.json'
import { publishedPosts } from '@/lib/blog-posts'

// GET /blog-source/<slug>.json: one published post's current English text. The app
// reads it to pick up what to rewrite and to confirm a refresh went live, so it is
// rendered per request rather than cached. Outside [locale], and the middleware
// matcher skips any path containing a dot, so it is never locale-redirected.
export const dynamic = 'force-dynamic'

const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/

type PostCopy = { title: string; excerpt: string; readTime: string; content: string[] }

function notFound() {
  return Response.json({ error: 'not found' }, { status: 404 })
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params
  if (!file.endsWith('.json')) return notFound()
  const slug = file.slice(0, -'.json'.length)
  if (slug.length > 80 || !SLUG_RE.test(slug)) return notFound()

  const post = publishedPosts().find((p) => p.slug === slug)
  const copy = (messages.posts as Record<string, PostCopy>)[slug]
  if (!post || !copy) return notFound()

  return Response.json({
    slug,
    category: post.category,
    date: post.date,
    title: copy.title,
    excerpt: copy.excerpt,
    readTime: copy.readTime,
    content: copy.content,
  })
}
