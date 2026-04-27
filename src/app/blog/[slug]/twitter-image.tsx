import { ImageResponse } from 'next/og'
import { OGCard } from '@/lib/og-shared'
import { POSTS } from '@/lib/blog-posts'
import messages from '@/messages/en.json'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }))
}

export default function Image({ params }: { params: { slug: string } }) {
  const blog = (messages as Record<string, Record<string, Record<string, string>>>).blog ?? {}
  const post = blog[params.slug] ?? {}
  return new ImageResponse(
    (
      <OGCard
        title={post.title ?? params.slug.replace(/-/g, ' ')}
        description={post.excerpt}
        section="Blog"
        footer="cuequote.com/blog"
      />
    ),
    { ...size }
  )
}
