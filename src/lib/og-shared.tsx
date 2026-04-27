/**
 * Shared OG image layout used across all page types.
 * Renders a branded card with page-specific title, description, and section label.
 */

export interface OGCardProps {
  title: string
  description?: string
  section?: string       // "Blog" | "Tutorial" | "Pricing" etc.
  footer?: string        // URL footer
  badge?: string         // e.g. "8 Video Tutorials"
  emoji?: string         // decorative emoji
  prices?: { name: string; amount: string; popular?: boolean }[]
}

export function OGCard({ title, description, section, footer, badge, emoji, prices }: OGCardProps) {
  return (
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
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Emerald glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
          transform: 'translateY(-50%)',
        }}
      />

      {/* Badge */}
      {badge && (
        <div
          style={{
            display: 'flex',
            marginBottom: '16px',
          }}
        >
          <div
            style={{
              background: '#10b981',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 700,
              padding: '6px 16px',
              borderRadius: '20px',
            }}
          >
            {badge}
          </div>
        </div>
      )}

      {/* Emoji */}
      {emoji && (
        <div style={{ fontSize: '48px', marginBottom: '12px' }}>{emoji}</div>
      )}

      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff' }}>Cue</span>
        <span style={{ fontSize: '28px', fontWeight: 800, color: '#10b981' }}>Quote</span>
        {section && (
          <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.4)', marginLeft: '16px', letterSpacing: '3px', textTransform: 'uppercase' as const }}>
            · {section}
          </span>
        )}
      </div>

      {/* Accent line */}
      <div
        style={{
          width: '60px',
          height: '4px',
          background: 'linear-gradient(90deg, #10b981, #34d399)',
          borderRadius: '2px',
          marginBottom: '30px',
          marginTop: '16px',
        }}
      />

      {/* Title */}
      <div
        style={{
          fontSize: title.length > 40 ? '44px' : '56px',
          fontWeight: 800,
          color: '#ffffff',
          lineHeight: 1.15,
          marginBottom: '20px',
          maxWidth: '900px',
        }}
      >
        {title}
      </div>

      {/* Description */}
      {description && (
        <div
          style={{
            fontSize: '22px',
            color: 'rgba(255,255,255,0.55)',
            maxWidth: '750px',
            lineHeight: 1.5,
          }}
        >
          {description}
        </div>
      )}

      {/* Prices row */}
      {prices && (
        <div style={{ display: 'flex', gap: '16px', marginTop: '30px' }}>
          {prices.map((p) => (
            <div
              key={p.name}
              style={{
                background: p.popular ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.05)',
                border: p.popular ? '2px solid #10b981' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '12px 24px',
                textAlign: 'center' as const,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>{p.name}</div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'baseline' }}>
                <span style={{ fontSize: '18px', color: '#10b981', marginRight: '2px' }}>€</span>
                {p.amount}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '80px',
          fontSize: '16px',
          color: 'rgba(255,255,255,0.2)',
          letterSpacing: '2px',
        }}
      >
        {footer || 'cuequote.com'}
      </div>
    </div>
  )
}
