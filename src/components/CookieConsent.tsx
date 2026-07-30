'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import PageTracker from './PageTracker'
import SmartPopup from './SmartPopup'

const CONSENT_KEY = 'cq_analytics_consent'

type Consent = 'accepted' | 'declined' | null

export default function CookieConsent() {
  const t = useTranslations('consent')
  const [consent, setConsent] = useState<Consent>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored === 'accepted' || stored === 'declined') {
      setConsent(stored)
    }
    setLoaded(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setConsent('accepted')
  }

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setConsent('declined')
  }

  return (
    <>
      {/* SmartPopup always runs — it's a site feature, not tracking */}
      <SmartPopup />

      {/* PageTracker always loads — basic page views are first-party analytics.
          When user declines, PageTracker skips the external geolocation API call
          but still records page path, device, browser, and locale. */}
      <PageTracker />

      {/* Banner — only show if no choice made yet */}
      {loaded && consent === null && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            background: '#fff',
            borderTop: '1px solid #e5e7eb',
            boxShadow: '0 -4px 24px rgba(0,0,0,0.08)',
            padding: '16px 24px',
            animation: 'slideUp 0.3s ease-out',
          }}
        >
          <div
            style={{
              maxWidth: 1120,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <p style={{ fontSize: 14, color: '#4b5563', margin: 0, maxWidth: 640, lineHeight: 1.5 }}>
              {t('message')}{' '}
              <Link
                href="/privacy"
                style={{ color: '#10b981', textDecoration: 'underline', fontWeight: 500 }}
              >
                {t('learnMore')}
              </Link>
            </p>

            <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
              <button
                onClick={handleDecline}
                style={{
                  padding: '8px 20px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#6b7280',
                  background: '#f3f4f6',
                  border: '1px solid #e5e7eb',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
              >
                {t('decline')}
              </button>
              <button
                onClick={handleAccept}
                style={{
                  padding: '8px 20px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#fff',
                  background: '#10b981',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
              >
                {t('accept')}
              </button>
            </div>
          </div>

          <style>{`
            @keyframes slideUp {
              from { transform: translateY(100%); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </>
  )
}
