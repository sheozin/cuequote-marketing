import { ImageResponse } from 'next/og'
import { OGCard } from '@/lib/og-shared'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Inline lookup — avoids importing the full tutorials module at edge
const TITLES: Record<string, { t: string; d: string }> = {
  'getting-started': { t: 'Getting Started', d: 'Create your CueQuote account and send your first AI-powered AV proposal in under 10 minutes.' },
  'ai-proposal-generation': { t: 'AI Proposal Generation', d: 'Describe your event and let AI build the perfect equipment scope with accurate pricing.' },
  'customizing-pdf-templates': { t: 'Customizing PDF Templates', d: 'Switch between 4 professional PDF styles and apply your brand color.' },
  'managing-equipment-catalog': { t: 'Managing Your Equipment Catalog', d: 'Build your equipment database so the AI generates accurate proposals with your real prices.' },
  'client-management': { t: 'Client Management', d: 'Add and organize your clients so proposals are automatically personalized.' },
  'terms-details-editor': { t: 'Terms & Details Editor', d: 'Customize inclusions, exclusions, payment terms, and T&C for each proposal.' },
  'sharing-tracking-proposals': { t: 'Sharing & Tracking Proposals', d: 'Send proposals to clients and track when they view, accept, or decline.' },
  'billing-subscription': { t: 'Billing & Subscription', d: 'Choose the right plan for your team and manage your subscription.' },
}

export default function Image({ params }: { params: { slug: string } }) {
  const data = TITLES[params.slug]
  return new ImageResponse(
    (
      <OGCard
        title={data?.t ?? params.slug.replace(/-/g, ' ')}
        description={data?.d}
        section="Tutorial"
        footer="cuequote.com/tutorials"
      />
    ),
    { ...size }
  )
}
