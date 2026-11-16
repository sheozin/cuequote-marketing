'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@supabase/supabase-js'
import { X } from 'lucide-react'
import { useLocale } from 'next-intl'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
)

const LS_KEY = 'cuequote_mkt_banner_dismissed'
const LS_VISITS = 'cuequote_mkt_visit_count'

interface LiveStats {
  proposals_this_week: number
  proposals_total: number
  companies_total: number
  countries: number
}

interface BarMessage {
  id: string
  text: string
  cta: string
  ctaUrl: string
  bg: string
  showPulse?: boolean
}

export default function CampaignBanner() {
  const locale = useLocale()
  const [dismissed, setDismissed] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [messages, setMessages] = useState<BarMessage[]>([])

  useEffect(() => {
    const dismissedTs = localStorage.getItem(LS_KEY)
    // Re-show after 24 hours
    if (dismissedTs && Date.now() - parseInt(dismissedTs) < 86400000) {
      setDismissed(true)
      return
    }

    // Live stats only. No promo codes on the site (owner, 15 Nov 2026), so the
    // popup campaign is no longer read here.
    supabase.rpc('get_public_stats').then(({ data }) => {
      const stats = data as LiveStats | null
      const signupUrl = 'https://app.cuequote.com/signup'

      const proposalsWeek = stats?.proposals_this_week || 0
      const companiesTotal = stats?.companies_total || 0
      const countriesCount = stats?.countries || 0

      const bars: BarMessage[] = []

      // 1. Live Activity Counter
      if (proposalsWeek > 0) {
        const texts: Record<string, string> = {
          en: `${proposalsWeek} proposals and production plans created this week by event professionals`,
          pl: `${proposalsWeek} ofert i planów produkcji stworzonych w tym tygodniu przez profesjonalistów eventowych`,
          ar: `${proposalsWeek} عرض وخطة إنتاج تم إنشاؤها هذا الأسبوع من محترفي الفعاليات`,
          de: `${proposalsWeek} Angebote und Produktionspläne diese Woche von Event-Profis erstellt`,
          fr: `${proposalsWeek} devis et plans de production créés cette semaine par des pros de l'événementiel`,
        }
        const ctas: Record<string, string> = {
          en: 'Create yours free →', pl: 'Stwórz swój za darmo →', ar: 'أنشئ عرضك مجانا ←',
          de: 'Erstellen Sie Ihres kostenlos →', fr: 'Créez le vôtre gratuitement →',
        }
        bars.push({
          id: 'activity',
          text: texts[locale] || texts.en,
          cta: ctas[locale] || ctas.en,
          ctaUrl: signupUrl + '?utm_source=website&utm_medium=topbar&utm_campaign=activity',
          bg: '#08172E',
          showPulse: true,
        })
      }

      // 2. Social Proof
      if (companiesTotal > 0) {
        const texts: Record<string, string> = {
          en: `Trusted by ${companiesTotal}+ event professionals: AV companies, planners & producers across ${countriesCount} countries`,
          pl: `Zaufanie ${companiesTotal}+ profesjonalistów eventowych: firmy AV, organizatorzy i producenci w ${countriesCount} krajach`,
          ar: `موثوق من ${companiesTotal}+ محترف فعاليات: شركات AV ومنظمين ومنتجين في ${countriesCount} دولة`,
          de: `Vertraut von ${companiesTotal}+ Event-Profis: AV-Firmen, Planer & Produzenten in ${countriesCount} Ländern`,
          fr: `Adopté par ${companiesTotal}+ pros de l'événementiel : sociétés AV, planificateurs & producteurs dans ${countriesCount} pays`,
        }
        const ctas: Record<string, string> = {
          en: 'Join them free →', pl: 'Dołącz do nich →', ar: 'انضم إليهم ←',
          de: 'Jetzt beitreten →', fr: 'Rejoignez-les →',
        }
        bars.push({
          id: 'social',
          text: texts[locale] || texts.en,
          cta: ctas[locale] || ctas.en,
          ctaUrl: signupUrl + '?utm_source=website&utm_medium=topbar&utm_campaign=social_proof',
          bg: '#059669',
        })
      }

      // Alternate the two stat bars across visits. Either may be absent.
      const visitCount = parseInt(localStorage.getItem(LS_VISITS) || '0') + 1
      localStorage.setItem(LS_VISITS, String(visitCount))
      const pickId = visitCount % 2 === 1 ? 'social' : 'activity'

      setSelectedId(pickId)
      setMessages(bars)
    })
  }, [locale])

  const handleDismiss = useCallback(() => {
    setDismissed(true)
    localStorage.setItem(LS_KEY, String(Date.now()))
  }, [])

  if (dismissed || messages.length === 0 || !selectedId) return null

  const msg = messages.find(m => m.id === selectedId) || messages[0]

  return (
    <div
      style={{
        background: msg.bg.includes('gradient') ? msg.bg : `linear-gradient(135deg, ${msg.bg} 0%, ${msg.bg}dd 50%, ${msg.bg}bb 100%)`,
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
        gap: 12,
        flexWrap: 'wrap',
      }}>
        {/* Pulse dot for activity bar */}
        {msg.showPulse && (
          <span style={{
            width: 8, height: 8, borderRadius: '50%', background: '#34D399',
            animation: 'pulse 2s infinite', flexShrink: 0,
          }} />
        )}

        {/* Message text */}
        <a
          href={msg.ctaUrl}
          style={{ fontSize: 13, fontWeight: 600, color: '#fff', textDecoration: 'none' }}
        >
          {msg.text}
        </a>

        {/* CTA button */}
        <a
          href={msg.ctaUrl}
          style={{
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff',
            padding: '4px 14px',
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 700,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        >
          {msg.cta}
        </a>

      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        style={{
          position: 'absolute',
          right: 12,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: 'rgba(255,255,255,0.5)',
          cursor: 'pointer',
          padding: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Dismiss"
      >
        <X size={16} />
      </button>

      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </div>
  )
}
