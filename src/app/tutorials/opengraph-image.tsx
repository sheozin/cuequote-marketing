import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'CueQuote Tutorials'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px', background: 'linear-gradient(135deg, #08172E 0%, #0f2d50 40%, #08172E 100%)', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ display: 'flex', marginBottom: '16px' }}><div style={{ background: '#10b981', color: '#fff', fontSize: '14px', fontWeight: 700, padding: '6px 16px', borderRadius: '20px' }}>8 Video Tutorials</div></div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff' }}>Cue</span>
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#10b981' }}>Quote</span>
          <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.4)', marginLeft: '16px', letterSpacing: '3px' }}>· LEARN</span>
        </div>
        <div style={{ width: '60px', height: '4px', background: '#10b981', borderRadius: '2px', marginBottom: '30px' }} />
        <div style={{ fontSize: '52px', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '20px' }}>Master CueQuote in Minutes</div>
        <div style={{ fontSize: '22px', color: 'rgba(255,255,255,0.55)', maxWidth: '750px', lineHeight: 1.5 }}>Step-by-step tutorials from signup to sending your first AI-generated proposal.</div>
        <div style={{ position: 'absolute', bottom: '40px', left: '80px', fontSize: '16px', color: 'rgba(255,255,255,0.2)', letterSpacing: '2px' }}>cuequote.com/tutorials</div>
      </div>
    ),
    { ...size }
  )
}
