'use client'
import { useState } from 'react'

interface Props {
  categories: string[]
  allLabel: string
  filterLabel: string
  totalCount: number
}

export function TutorialFilter({ categories, allLabel, filterLabel, totalCount }: Props) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeMode, setActiveMode] = useState('all')

  // Filter tutorial cards via DOM (server-rendered cards have data attributes)
  const applyFilter = (cat: string, mode: string) => {
    const cards = document.querySelectorAll<HTMLElement>('[data-tutorial-card]')
    cards.forEach((card) => {
      const cardCat = card.getAttribute('data-category') || ''
      const cardMode = card.getAttribute('data-mode') || 'both'
      const matchesCat = cat === 'all' || cardCat === cat
      const matchesMode = mode === 'all' || cardMode === mode || cardMode === 'both'
      card.style.display = matchesCat && matchesMode ? '' : 'none'
    })
  }

  const handleCategory = (cat: string) => {
    setActiveCategory(cat)
    applyFilter(cat, activeMode)
  }

  const handleMode = (mode: string) => {
    const next = activeMode === mode ? 'all' : mode
    setActiveMode(next)
    applyFilter(activeCategory, next)
  }

  const chipClass = (active: boolean) =>
    `cursor-pointer border-none text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
      active ? 'bg-[#08172E] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 32px' }}>
      <div style={{
        background: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: 16,
        padding: 16,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 8,
      }}>
        <span style={{ fontSize: 12, color: '#6b7280', fontWeight: 500, paddingLeft: 8, marginRight: 4 }}>
          {filterLabel}
        </span>
        <button onClick={() => handleCategory('all')} className={chipClass(activeCategory === 'all')}>
          {allLabel} ({totalCount})
        </button>
        {categories.map((cat) => (
          <button key={cat} onClick={() => handleCategory(cat)} className={chipClass(activeCategory === cat)}>
            {cat}
          </button>
        ))}
        <span style={{ width: 1, height: 20, background: '#e5e7eb', margin: '0 4px' }} />
        <button onClick={() => handleMode('av')} className={chipClass(activeMode === 'av')}>
          AV
        </button>
        <button onClick={() => handleMode('planner')} className={chipClass(activeMode === 'planner')}>
          Planner
        </button>
      </div>
    </div>
  )
}
