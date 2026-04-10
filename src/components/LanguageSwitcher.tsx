'use client'

import { useTransition } from 'react'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'pl', label: 'PL' },
  { code: 'ar', label: 'AR' },
  { code: 'de', label: 'DE' },
  { code: 'fr', label: 'FR' },
] as const

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const [isPending, startTransition] = useTransition()

  const switchLocale = (locale: string) => {
    startTransition(() => {
      document.cookie = `locale=${locale};path=/;max-age=${365 * 24 * 60 * 60}`
      window.location.reload()
    })
  }

  return (
    <div style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => switchLocale(code)}
          disabled={isPending}
          style={{
            padding: '4px 8px',
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 600,
            border: 'none',
            cursor: isPending ? 'wait' : 'pointer',
            background: currentLocale === code ? '#10b981' : 'transparent',
            color: currentLocale === code ? '#fff' : '#6b7280',
            transition: 'all 0.2s',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
