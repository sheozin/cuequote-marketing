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

interface PopupCampaign {
  seats_taken: number
  target_seats: number
  seats_remaining: number
  promo_code: string | null
  discount_pct: number | null
  signup_url: string
  phase: string
}

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
  const [popupData, setPopupData] = useState<PopupCampaign | null>(null)

  useEffect(() => {
    const dismissedTs = localStorage.getItem(LS_KEY)
    // Re-show after 24 hours
    if (dismissedTs && Date.now() - parseInt(dismissedTs) < 86400000) {
      setDismissed(true)
      return
    }

    // Fetch popup campaign data + live stats
    Promise.all([
      supabase.rpc('get_active_popup_campaign').then(({ data }) => {
        const d = Array.isArray(data) ? data[0] : data
        return d ?? null
      }),
      supabase.rpc('get_public_stats').then(({ data }) => data as LiveStats | null),
    ]).then(([popup, stats]) => {
      setPopupData(popup)
      const signupUrl = popup?.signup_url || 'https://app.cuequote.com/signup'
      const promoCode = popup?.promo_code || 'LAUNCH20'
      const discountPct = popup?.discount_pct || 20

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
          en: `Trusted by ${companiesTotal}+ event professionals — AV companies, planners & producers across ${countriesCount} countries`,
          pl: `Zaufanie ${companiesTotal}+ profesjonalistów eventowych — firmy AV, organizatorzy i producenci w ${countriesCount} krajach`,
          ar: `موثوق من ${companiesTotal}+ محترف فعاليات — شركات AV ومنظمين ومنتجين في ${countriesCount} دولة`,
          de: `Vertraut von ${companiesTotal}+ Event-Profis — AV-Firmen, Planer & Produzenten in ${countriesCount} Ländern`,
          fr: `Adopté par ${companiesTotal}+ pros de l'événementiel — sociétés AV, planificateurs & producteurs dans ${countriesCount} pays`,
        }
        const ctas: Record<string, string> = {
          en: 'Join them — Free →', pl: 'Dołącz do nich →', ar: 'انضم إليهم ←',
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

      // 3. Promo Discount
      if (promoCode) {
        const texts: Record<string, string> = {
          en: `Launch Special — ${discountPct}% off all plans for 3 months · Code:`,
          pl: `Oferta startowa — ${discountPct}% zniżki na 3 miesiące · Kod:`,
          ar: `عرض الإطلاق — خصم ${discountPct}% لمدة 3 أشهر · الرمز:`,
          de: `Start-Angebot — ${discountPct}% Rabatt für 3 Monate · Code:`,
          fr: `Offre de lancement — ${discountPct}% de réduction pendant 3 mois · Code :`,
        }
        const ctas: Record<string, string> = {
          en: 'Claim offer →', pl: 'Odbierz →', ar: 'احصل على العرض ←',
          de: 'Angebot sichern →', fr: 'Réclamez →',
        }
        bars.push({
          id: 'promo',
          text: texts[locale] || texts.en,
          cta: ctas[locale] || ctas.en,
          ctaUrl: signupUrl + `?code=${promoCode}&utm_source=website&utm_medium=topbar&utm_campaign=promo`,
          bg: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
        })
      }

      // 4. ROI Hook
      {
        const texts: Record<string, string> = {
          en: 'Proposals and production plans take ~4 hours manually. CueQuote does it in 2 minutes. That\'s 208 hours/year back.',
          pl: 'Oferty i plany produkcji zajmują ~4 godziny. CueQuote robi to w 2 minuty. To 208 godzin/rok.',
          ar: 'العروض وخطط الإنتاج تستغرق ~4 ساعات يدويا. CueQuote ينجزها في دقيقتين. 208 ساعة/سنة.',
          de: 'Angebote und Produktionspläne dauern ~4 Std. CueQuote in 2 Min. Das sind 208 Std./Jahr.',
          fr: 'Devis et plans de production prennent ~4h. CueQuote le fait en 2 min. Soit 208h/an.',
        }
        const ctas: Record<string, string> = {
          en: 'Get those hours back →', pl: 'Odzyskaj te godziny →', ar: 'استرجع هذه الساعات ←',
          de: 'Holen Sie sich die Zeit zurück →', fr: 'Récupérez ces heures →',
        }
        bars.push({
          id: 'roi',
          text: texts[locale] || texts.en,
          cta: ctas[locale] || ctas.en,
          ctaUrl: signupUrl + '?utm_source=website&utm_medium=topbar&utm_campaign=roi',
          bg: '#08172E',
        })
      }

      // 5. Interactive Calculator
      {
        const texts: Record<string, string> = {
          en: '5 proposals/month × 4 hrs each = 20 hours on quoting instead of producing events. Automate it.',
          pl: '5 ofert/miesiąc × 4 godz. = 20 godzin na wyceny zamiast produkcji eventów. Zautomatyzuj to.',
          ar: '5 عروض/شهر × 4 ساعات = 20 ساعة في التسعير بدلا من إنتاج الفعاليات. أتمته.',
          de: '5 Angebote/Monat × 4 Std. = 20 Std. für Kalkulation statt Eventproduktion. Automatisieren.',
          fr: '5 devis/mois × 4h = 20h à chiffrer au lieu de produire des événements. Automatisez.',
        }
        const ctas: Record<string, string> = {
          en: 'Try free — 2 min setup →', pl: 'Wypróbuj za darmo →', ar: 'جرب مجانا ←',
          de: 'Kostenlos testen →', fr: 'Essayez gratuitement →',
        }
        bars.push({
          id: 'calculator',
          text: texts[locale] || texts.en,
          cta: ctas[locale] || ctas.en,
          ctaUrl: signupUrl + '?utm_source=website&utm_medium=topbar&utm_campaign=calculator',
          bg: 'linear-gradient(135deg, #0f2d50, #08172E)',
        })
      }

      // 6. Competitor Switch
      {
        const texts: Record<string, string> = {
          en: 'Still quoting events from spreadsheets? Event professionals using CueQuote close deals 3× faster.',
          pl: 'Nadal wyceniasz eventy w arkuszach? Profesjonaliści z CueQuote zamykają deale 3× szybciej.',
          ar: 'لا تزال تسعر الفعاليات من جداول البيانات؟ المحترفون الذين يستخدمون CueQuote يغلقون الصفقات أسرع 3 مرات.',
          de: 'Kalkulieren Sie Events noch in Tabellen? Event-Profis mit CueQuote schliessen Deals 3× schneller.',
          fr: 'Vous chiffrez encore vos événements sur tableur ? Les pros avec CueQuote concluent 3× plus vite.',
        }
        const ctas: Record<string, string> = {
          en: 'Switch in 2 minutes →', pl: 'Przejdź w 2 minuty →', ar: 'انتقل في دقيقتين ←',
          de: 'In 2 Minuten wechseln →', fr: 'Basculez en 2 min →',
        }
        bars.push({
          id: 'switch',
          text: texts[locale] || texts.en,
          cta: ctas[locale] || ctas.en,
          ctaUrl: signupUrl + '?utm_source=website&utm_medium=topbar&utm_campaign=switch',
          bg: '#991B1B',
        })
      }

      // Smart bar selection based on visitor context
      const visitCount = parseInt(localStorage.getItem(LS_VISITS) || '0') + 1
      localStorage.setItem(LS_VISITS, String(visitCount))

      const params = new URLSearchParams(window.location.search)
      const utmCampaign = (params.get('utm_campaign') || '').toLowerCase()
      const utmSource = (params.get('utm_source') || '').toLowerCase()
      const path = window.location.pathname.toLowerCase()
      const referrer = (document.referrer || '').toLowerCase()

      // Detect visitor intent
      const isAvIntent = path.includes('for-av-compan') || utmCampaign.includes('av') || referrer.includes('av')
      const isPlannerIntent = path.includes('for-event-plan') || utmCampaign.includes('planner') || utmCampaign.includes('event') || referrer.includes('planner')
      const isFromLinkedIn = utmSource.includes('linkedin') || referrer.includes('linkedin')
      const isFromGoogle = utmSource.includes('google') || referrer.includes('google')

      let pickId: string

      // UTM/path override — show relevant bar for the audience
      if (isAvIntent) {
        pickId = visitCount <= 1 ? 'switch' : 'activity'
      } else if (isPlannerIntent) {
        pickId = visitCount <= 1 ? 'roi' : 'social'
      } else if (isFromLinkedIn) {
        pickId = visitCount <= 2 ? 'social' : 'promo'
      } else if (isFromGoogle) {
        pickId = visitCount <= 1 ? 'roi' : 'switch'
      } else {
        // Default journey: ROI → Social → Promo → Switch → Activity → Calculator
        const journey = ['roi', 'social', 'promo', 'switch', 'activity', 'calculator']
        pickId = journey[Math.min(visitCount - 1, journey.length - 1)]
      }

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
          {/* Inline promo code for promo bar */}
          {msg.id === 'promo' && popupData?.promo_code && (
            <code style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '2px 10px',
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 1.5,
              marginLeft: 6,
            }}>
              {popupData.promo_code}
            </code>
          )}
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
