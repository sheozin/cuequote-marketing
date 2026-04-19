'use client'

import { useState, useRef, useEffect } from 'react'

const LANGUAGES = [
  { code: 'en', flag: '🇬🇧', nativeName: 'English' },
  { code: 'pl', flag: '🇵🇱', nativeName: 'Polski' },
  { code: 'ar', flag: '🇸🇦', nativeName: 'العربية' },
  { code: 'de', flag: '🇩🇪', nativeName: 'Deutsch' },
  { code: 'fr', flag: '🇫🇷', nativeName: 'Français' },
]

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  const current = LANGUAGES.find(l => l.code === currentLocale) ?? LANGUAGES[0]

  const switchLocale = (code: string) => {
    document.cookie = `locale=${code};path=/;max-age=${365 * 24 * 60 * 60}`
    setOpen(false)
    window.location.reload()
  }

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Change language"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '6px 12px',
          borderRadius: 8,
          border: '1px solid #e5e7eb',
          background: 'transparent',
          cursor: 'pointer',
          fontSize: 13,
          fontWeight: 500,
          color: '#374151',
          transition: 'border-color 0.15s',
        }}
      >
        <span style={{ fontSize: 16, lineHeight: 1 }}>{current.flag}</span>
        <span>{current.nativeName}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          style={{
            marginInlineStart: 2,
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.15s',
          }}
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: '100%',
            insetInlineEnd: 0,
            marginBottom: 6,
            background: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: 12,
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            overflow: 'hidden',
            zIndex: 100,
            minWidth: 190,
          }}
        >
          <div
            style={{
              padding: '8px 14px',
              borderBottom: '1px solid #f3f4f6',
              fontSize: 10,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 1,
              color: '#9ca3af',
            }}
          >
            Language
          </div>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                width: '100%',
                padding: '10px 14px',
                border: 'none',
                background: currentLocale === lang.code ? '#f0fdf4' : 'transparent',
                cursor: 'pointer',
                fontSize: 14,
                color: currentLocale === lang.code ? '#10b981' : '#374151',
                fontWeight: currentLocale === lang.code ? 600 : 400,
                textAlign: 'start',
                transition: 'background 0.1s',
              }}
            >
              <span style={{ fontSize: 18, lineHeight: 1 }}>{lang.flag}</span>
              <span style={{ flex: 1 }}>{lang.nativeName}</span>
              {currentLocale === lang.code && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7L6 10L11 4"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
