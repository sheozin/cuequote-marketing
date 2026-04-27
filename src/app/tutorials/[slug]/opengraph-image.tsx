import { ImageResponse } from 'next/og'
import { OGCard } from '@/lib/og-shared'
import { getTutorials } from '@/lib/tutorials'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'


export default function Image({ params }: { params: { slug: string } }) {
  const tutorial = getTutorials('en').find((t) => t.slug === params.slug)
  return new ImageResponse(
    (
      <OGCard
        title={tutorial?.title ?? 'Tutorial'}
        description={tutorial?.description}
        section="Tutorial"
        footer="cuequote.com/tutorials"
      />
    ),
    { ...size }
  )
}
