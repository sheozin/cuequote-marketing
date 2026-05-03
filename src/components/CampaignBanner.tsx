'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { X, Clock } from 'lucide-react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://rurazinghbfskuoeikwi.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1cmF6aW5naGJmc2t1b2Vpa3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMTI2MDAsImV4cCI6MjA5MDc4ODYwMH0.lWiRDtQdkYFzs_R1Rnvb9jMcdDpo_a68yDY_dEbwseU'
)

interface ActiveCampaign {
  id: string
  title: string
  subtitle: string | null
  banner_text: string
  promo_code: string | null
  ends_at: string
  show_countdown: boolean
  banner_color: string
}

const LS_KEY = 'cuequote_mkt_campaign_dismissed'

function getCountdownParts(endDate: Date): { d: number; h: number; m: number; s: number } | null {
  const diff = endDate.getTime() - Date.now()
  if (diff <= 0) return null
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  }
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <div style={{
        background: 'rgba(0,0,0,0.25)',
        borderRadius: 6,
        padding: '4px 8px',
        minWidth: 36,
        textAlign: 'center',
        fontWeight: 800,
        fontSize: 16,
        fontVariantNumeric: 'tabular-nums',
        letterSpacing: -0.5,
      }}>
        {String(value).padStart(2, '0')}
      </div>
      <span style={{ fontSize: 9, opacity: 0.6, textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600 }}>{label}</span>
    </div>
  )
}

export default function CampaignBanner() {
  const [campaign, setCampaign] = useState<ActiveCampaign | null>(null)
  const [dismissed, setDismissed] = useState(false)
  const [parts, setParts] = useState<{ d: number; h: number; m: number; s: number } | null>(null)

  useEffect(() => {
    const dismissedId = typeof window !== 'undefined' ? localStorage.getItem(LS_KEY) : null
    supabase.rpc('get_active_campaign').then(({ data }) => {
      const camp = data?.[0]
      if (camp && camp.id !== dismissedId) {
        setCampaign(camp)
      }
    })
  }, [])

  useEffect(() => {
    if (!campaign?.show_countdown) return
    const endDate = new Date(campaign.ends_at)
    const update = () => setParts(getCountdownParts(endDate))
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [campaign])

  if (!campaign || dismissed) return null

  const handleDismiss = () => {
    setDismissed(true)
    localStorage.setItem(LS_KEY, campaign.id)
  }

  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${campaign.banner_color} 0%, ${campaign.banner_color}dd 50%, ${campaign.banner_color}bb 100%)`,
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
      className="relative text-white z-50"
    >
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '10px 48px 10px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        flexWrap: 'wrap',
      }}>
        <span style={{ fontSize: 14, fontWeight: 600 }}>{campaign.banner_text}</span>
        {campaign.promo_code && (
          <code style={{
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255,255,255,0.25)',
            padding: '5px 14px',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: 1.5,
          }}>
            {campaign.promo_code}
          </code>
        )}
        {campaign.show_countdown && parts && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 11, opacity: 0.7, fontWeight: 600, marginRight: 2 }}>Ends in</span>
            {parts.d > 0 && <CountdownBox value={parts.d} label="days" />}
            <CountdownBox value={parts.h} label="hrs" />
            <CountdownBox value={parts.m} label="min" />
            <CountdownBox value={parts.s} label="sec" />
          </div>
        )}
      </div>
      <button
        onClick={handleDismiss}
        style={{
          position: 'absolute',
          right: 12,
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'rgba(255,255,255,0.4)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 4,
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
        onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
      >
        <X size={16} />
      </button>
    </div>
  )
}
