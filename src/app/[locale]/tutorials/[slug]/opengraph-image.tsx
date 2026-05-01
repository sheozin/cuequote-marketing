import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

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

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = TITLES[slug]
  const title = data?.t ?? slug.replace(/-/g, ' ')
  const desc = data?.d ?? ''

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #08172E 0%, #0f2d50 40%, #08172E 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff' }}>Cue</span>
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#10b981' }}>Quote</span>
          <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.4)', marginLeft: '16px', letterSpacing: '3px' }}>
            · TUTORIAL
          </span>
        </div>
        <div style={{ width: '60px', height: '4px', background: '#10b981', borderRadius: '2px', marginBottom: '30px' }} />
        <div style={{ fontSize: '52px', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '20px', maxWidth: '900px' }}>
          {title}
        </div>
        <div style={{ fontSize: '22px', color: 'rgba(255,255,255,0.55)', maxWidth: '750px', lineHeight: 1.5 }}>
          {desc}
        </div>
        <div style={{ position: 'absolute', bottom: '40px', left: '80px', fontSize: '16px', color: 'rgba(255,255,255,0.2)', letterSpacing: '2px' }}>
          cuequote.com/tutorials
        </div>
      </div>
    ),
    { ...size }
  )
}
