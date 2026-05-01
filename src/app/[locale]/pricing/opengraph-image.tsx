import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'CueQuote Pricing'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px', background: 'linear-gradient(135deg, #08172E 0%, #0f2d50 40%, #08172E 100%)', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff' }}>Cue</span>
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#10b981' }}>Quote</span>
          <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.4)', marginLeft: '16px', letterSpacing: '3px' }}>· PRICING</span>
        </div>
        <div style={{ width: '60px', height: '4px', background: '#10b981', borderRadius: '2px', marginBottom: '30px' }} />
        <div style={{ fontSize: '52px', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '20px' }}>Plans That Grow With You</div>
        <div style={{ fontSize: '22px', color: 'rgba(255,255,255,0.55)', marginBottom: '30px' }}>Start free. Upgrade when you need more.</div>
        <div style={{ display: 'flex', gap: '16px' }}>
          {[{n:'Free',p:'0'},{n:'Starter',p:'29',pop:true},{n:'Pro',p:'79'},{n:'Business',p:'179'}].map(x => (
            <div key={x.n} style={{ background: x.pop ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.05)', border: x.pop ? '2px solid #10b981' : '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>{x.n}</div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#fff', display: 'flex' }}><span style={{ fontSize: '18px', color: '#10b981' }}>€</span>{x.p}</div>
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: '40px', left: '80px', fontSize: '16px', color: 'rgba(255,255,255,0.2)', letterSpacing: '2px' }}>cuequote.com/pricing</div>
      </div>
    ),
    { ...size }
  )
}
