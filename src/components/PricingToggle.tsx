'use client'
import { useState } from 'react'

interface PricingToggleProps {
  avLabel: string
  plannerLabel: string
  children: (mode: 'av' | 'planner') => React.ReactNode
}

export function PricingToggle({ avLabel, plannerLabel, children }: PricingToggleProps) {
  const [mode, setMode] = useState<'av' | 'planner'>('av')

  return (
    <>
      <div style={{
        display: 'flex', justifyContent: 'center', gap: 4,
        background: '#f1f5f9', borderRadius: 12, padding: 4,
        maxWidth: 360, margin: '0 auto 40px',
      }}>
        <button
          onClick={() => setMode('av')}
          style={{
            padding: '10px 24px', borderRadius: 10, fontSize: 13, fontWeight: 600,
            border: 'none', cursor: 'pointer', transition: 'all 0.2s',
            background: mode === 'av' ? '#08172E' : 'transparent',
            color: mode === 'av' ? '#fff' : '#64748b',
          }}
        >
          {avLabel}
        </button>
        <button
          onClick={() => setMode('planner')}
          style={{
            padding: '10px 24px', borderRadius: 10, fontSize: 13, fontWeight: 600,
            border: 'none', cursor: 'pointer', transition: 'all 0.2s',
            background: mode === 'planner' ? '#10b981' : 'transparent',
            color: mode === 'planner' ? '#fff' : '#64748b',
          }}
        >
          {plannerLabel}
        </button>
      </div>
      {children(mode)}
    </>
  )
}
