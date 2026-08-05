'use client'
import { useState } from 'react'

export function PricingToggle({ avLabel, plannerLabel }: { avLabel: string; plannerLabel: string }) {
  const [mode, setMode] = useState<'av' | 'planner'>('av')

  // Toggle visibility of sibling grids via DOM
  const handleSwitch = (newMode: 'av' | 'planner') => {
    setMode(newMode)
    document.getElementById('pricing-av')?.style.setProperty('display', newMode === 'av' ? 'grid' : 'none')
    document.getElementById('pricing-planner')?.style.setProperty('display', newMode === 'planner' ? 'grid' : 'none')
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', gap: 4,
      background: '#f1f5f9', borderRadius: 12, padding: 4,
      maxWidth: 360, margin: '0 auto 40px',
    }}>
      <button
        onClick={() => handleSwitch('av')}
        style={{
          padding: '10px 24px', borderRadius: 10, fontSize: 13, fontWeight: 600,
          border: 'none', cursor: 'pointer', transition: 'all 0.2s',
          background: mode === 'av' ? '#08172E' : 'transparent',
          color: mode === 'av' ? '#fff' : '#4b5563',
        }}
      >
        {avLabel}
      </button>
      <button
        onClick={() => handleSwitch('planner')}
        style={{
          padding: '10px 24px', borderRadius: 10, fontSize: 13, fontWeight: 600,
          border: 'none', cursor: 'pointer', transition: 'all 0.2s',
          background: mode === 'planner' ? '#10b981' : 'transparent',
          color: mode === 'planner' ? '#fff' : '#4b5563',
        }}
      >
        {plannerLabel}
      </button>
    </div>
  )
}
