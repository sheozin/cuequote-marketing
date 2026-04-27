import { ImageResponse } from 'next/og'
import { OGCard } from '@/lib/og-shared'
import messages from '@/messages/en.json'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image({ params }: { params: { slug: string } }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blog = (messages as any).blog ?? {}
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
