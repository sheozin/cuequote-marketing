import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'CueQuote — AI-Powered AV Proposals in Seconds'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #08172E 0%, #064E3B 50%, #059669 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #10B981, #34D399)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
              fontSize: 40,
              fontWeight: 800,
              color: '#08172E',
            }}
          >
            CQ
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-2px',
            }}
          >
            CueQuote
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: '#A7F3D0',
            fontWeight: 500,
            letterSpacing: '2px',
            textTransform: 'uppercase' as const,
            marginBottom: 40,
          }}
        >
          AV Proposal Automation
        </div>

        {/* Divider */}
        <div
          style={{
            width: 120,
            height: 3,
            background: 'linear-gradient(90deg, transparent, #34D399, transparent)',
            marginBottom: 40,
          }}
        />

        {/* Description */}
        <div
          style={{
            fontSize: 22,
            color: '#D1FAE5',
            maxWidth: 700,
            textAlign: 'center' as const,
            lineHeight: 1.5,
            opacity: 0.9,
          }}
        >
          Turn event descriptions into professional AV equipment proposals in under 2 minutes.
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 18,
            color: '#6EE7B7',
            opacity: 0.7,
            letterSpacing: '1px',
          }}
        >
          cuequote.com
        </div>
      </div>
    ),
    { ...size }
  )
}
