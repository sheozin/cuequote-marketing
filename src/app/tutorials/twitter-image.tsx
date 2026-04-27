import { ImageResponse } from 'next/og'
import { OGCard } from '@/lib/og-shared'

export const runtime = 'edge'
export const alt = 'CueQuote Tutorials — Master CueQuote in Minutes'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <OGCard
        title="Master CueQuote in Minutes"
        description="Step-by-step tutorials covering everything from signup to sending your first AI-generated proposal."
        section="Learn"
        badge="8 Video Tutorials"
        footer="cuequote.com/tutorials"
      />
    ),
    { ...size }
  )
}
