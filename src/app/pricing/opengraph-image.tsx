import { ImageResponse } from 'next/og'
import { OGCard } from '@/lib/og-shared'

export const runtime = 'edge'
export const alt = 'CueQuote Pricing — Plans That Grow With You'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <OGCard
        title="Plans That Grow With You"
        description="Start free. Upgrade when you need more. No contracts."
        section="Pricing"
        footer="cuequote.com/pricing"
        prices={[
          { name: 'Free', amount: '0' },
          { name: 'Starter', amount: '29', popular: true },
          { name: 'Pro', amount: '79' },
          { name: 'Business', amount: '179' },
        ]}
      />
    ),
    { ...size }
  )
}
