import { ImageResponse } from 'next/og'
import messages from '@/messages/en.json'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blog = (messages as any).blog ?? {}
  const post = blog[slug] ?? {}
  const title = post.title ?? slug.replace(/-/g, ' ')
  const desc = post.excerpt ?? ''

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
            · BLOG
          </span>
        </div>
        <div style={{ width: '60px', height: '4px', background: '#10b981', borderRadius: '2px', marginBottom: '30px' }} />
        <div style={{ fontSize: title.length > 50 ? '40px' : '52px', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '20px', maxWidth: '900px' }}>
          {title}
        </div>
        <div style={{ fontSize: '22px', color: 'rgba(255,255,255,0.55)', maxWidth: '750px', lineHeight: 1.5 }}>
          {desc}
        </div>
        <div style={{ position: 'absolute', bottom: '40px', left: '80px', fontSize: '16px', color: 'rgba(255,255,255,0.2)', letterSpacing: '2px' }}>
          cuequote.com/blog
        </div>
      </div>
    ),
    { ...size }
  )
}
