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

function formatCountdown(endDate: Date): string {
  const diff = endDate.getTime() - Date.now()
  if (diff <= 0) return ''
  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff % 86400000) / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)
  if (d > 0) return `${d}d ${h}h ${m}m`
  if (h > 0) return `${h}h ${m}m ${s}s`
  return `${m}m ${s}s`
}

export default function CampaignBanner() {
  const [campaign, setCampaign] = useState<ActiveCampaign | null>(null)
  const [dismissed, setDismissed] = useState(false)
  const [countdown, setCountdown] = useState('')

  useEffect(() => {
    const dismissedId = typeof window !== 'undefined' ? localStorage.getItem(LS_KEY) : null
    supabase.rpc('get_active_campaign').then(({ data }) => {
      const camp = data?.[0]
      if (camp && camp.show_countdown !== false && camp.id !== dismissedId) {
        setCampaign(camp)
      }
    })
  }, [])

  useEffect(() => {
    if (!campaign?.show_countdown) return
    const endDate = new Date(campaign.ends_at)
    const update = () => setCountdown(formatCountdown(endDate))
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
      style={{ background: campaign.banner_color }}
      className="relative text-white text-center py-3 px-12 text-sm font-medium z-50"
    >
      <span>{campaign.banner_text}</span>
      {campaign.promo_code && (
        <code className="ml-2 bg-white/20 px-2.5 py-1 rounded text-xs font-bold tracking-wider">
          {campaign.promo_code}
        </code>
      )}
      {campaign.show_countdown && countdown && (
        <span className="ml-3 inline-flex items-center gap-1 text-xs opacity-80">
          <Clock size={12} /> Ends in {countdown}
        </span>
      )}
      <button
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  )
}
