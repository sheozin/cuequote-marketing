'use client'
import { useState } from 'react'

interface Props {
  categories: { key: string; label: string }[]
  allLabel: string
}

const CATEGORY_COLORS: Record<string, string> = {
  Guides: '#10b981',
  Industry: '#3b82f6',
  Technology: '#8b5cf6',
  Business: '#d97706',
}

export function BlogCategoryFilter({ categories, allLabel }: Props) {
  const [active, setActive] = useState('all')

  const handleClick = (cat: string) => {
    setActive(cat)
    const cards = document.querySelectorAll<HTMLElement>('[data-blog-card]')
    cards.forEach((card) => {
      const cardCat = card.getAttribute('data-category') || ''
      const matches = cat === 'all' || cardCat === cat
      card.style.display = matches ? '' : 'none'
    })
    // Also toggle the featured post
    const featured = document.querySelector<HTMLElement>('[data-blog-featured]')
    if (featured) {
      const featuredCat = featured.getAttribute('data-category') || ''
      const matches = cat === 'all' || featuredCat === cat
      featured.style.display = matches ? '' : 'block'
    }
    // Toggle the newsletter CTA
    const cta = document.querySelector<HTMLElement>('[data-blog-newsletter]')
    if (cta) {
      cta.style.display = cat === 'all' ? '' : 'none'
    }
  }

  const pillStyle = (isActive: boolean, cat?: string): React.CSSProperties => ({
    padding: '8px 20px',
    borderRadius: 100,
    fontSize: 14,
    fontWeight: 600,
    border: isActive ? 'none' : '1px solid #e5e7eb',
    background: isActive
      ? cat && CATEGORY_COLORS[cat]
        ? CATEGORY_COLORS[cat]
        : '#08172E'
      : '#fff',
    color: isActive ? '#fff' : '#6b7280',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
  })

  return (
    <div
      className="blog-filter-bar"
      style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <button
        onClick={() => handleClick('all')}
        style={pillStyle(active === 'all')}
      >
        {allLabel}
      </button>
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => handleClick(cat.key)}
          style={pillStyle(active === cat.key, cat.key)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
