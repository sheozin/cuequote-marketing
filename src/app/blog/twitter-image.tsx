import { ImageResponse } from 'next/og'
import { OGCard } from '@/lib/og-shared'

export const runtime = 'edge'
export const alt = 'CueQuote Blog — AV Production Insights'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <OGCard
        title="AV Production Insights"
        description="Tips, guides, and industry knowledge for AV professionals who want to quote faster and win more deals."
        section="Blog"
        footer="cuequote.com/blog"
      />
    ),
    { ...size }
  )
}
