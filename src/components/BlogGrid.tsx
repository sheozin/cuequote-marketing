'use client'

import { useState, useMemo } from 'react'
import { Link } from '@/i18n/navigation'
import { ArrowRight, ChevronDown } from 'lucide-react'
import SubscribeForm from './SubscribeForm'

interface Post {
  slug: string
  category: string
  date: string
  title: string
  excerpt: string
  readTime: string
}

interface Category {
  key: string
  label: string
  count: number
}

interface Props {
  posts: Post[]
  categories: Category[]
  locale: string
  labels: {
    allPosts: string
    readMore: string
    loadMore: string
    showingOf: string
    noPostsFound: string
    subscribeTitle: string
    subscribeSubtitle: string
  }
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Guides: { bg: '#ecfdf5', text: '#10b981', border: '#10b981' },
  Industry: { bg: '#eff6ff', text: '#3b82f6', border: '#3b82f6' },
  Technology: { bg: '#f5f3ff', text: '#8b5cf6', border: '#8b5cf6' },
  Business: { bg: '#fef3c7', text: '#d97706', border: '#d97706' },
  'Product Updates': { bg: '#fce7f3', text: '#ec4899', border: '#ec4899' },
}

const POSTS_PER_PAGE = 9
const NEWSLETTER_INDEX = 6

export function BlogGrid({ posts, categories, locale, labels }: Props) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE)

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return posts
    return posts.filter((p) => p.category === activeCategory)
  }, [posts, activeCategory])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setVisibleCount(POSTS_PER_PAGE)
  }

  return (
    <>
      {/* Category filter pills */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', marginBottom: 32 }}>
        <button
          onClick={() => handleCategoryChange('all')}
          style={pillStyle(activeCategory === 'all')}
        >
          {labels.allPosts}
          <span style={countBadge(activeCategory === 'all')}>{posts.length}</span>
        </button>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => handleCategoryChange(cat.key)}
            style={pillStyle(activeCategory === cat.key, cat.key)}
          >
            {cat.label}
            <span style={countBadge(activeCategory === cat.key, cat.key)}>{cat.count}</span>
          </button>
        ))}
      </div>

      {/* Post count */}
      <p style={{ fontSize: 14, color: '#9ca3af', marginBottom: 24 }}>
        {labels.showingOf
          .replace('{shown}', String(visible.length))
          .replace('{total}', String(filtered.length))}
      </p>

      {filtered.length === 0 ? (
        <div style={{
          padding: '64px 24px', textAlign: 'center', color: '#9ca3af',
          fontSize: 16, background: '#f9fafb', borderRadius: 16, border: '1px dashed #e5e7eb',
        }}>
          {labels.noPostsFound}
        </div>
      ) : (
        <>
          {/* Post grid */}
          <div className="blog-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
          }}>
            {visible.map((post, index) => {
              const cat = CATEGORY_COLORS[post.category] || CATEGORY_COLORS.Guides

              return (
                <React.Fragment key={post.slug}>
                  {/* Newsletter CTA after 6th post */}
                  {index === NEWSLETTER_INDEX && activeCategory === 'all' && (
                    <div
                      className="blog-newsletter-cta"
                      style={{
                        gridColumn: '1 / -1', borderRadius: 20, padding: '48px 40px',
                        background: 'linear-gradient(135deg, #08172E 0%, #0f2744 100%)',
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        justifyContent: 'center', textAlign: 'center', gap: 8,
                      }}
                    >
                      <h3 style={{
                        fontFamily: 'var(--font-dm-sans)', fontWeight: 800, fontSize: 24,
                        color: '#fff', letterSpacing: -0.5, marginBottom: 4,
                      }}>
                        {labels.subscribeTitle}
                      </h3>
                      <p style={{ fontSize: 15, color: '#94a3b8', marginBottom: 16, maxWidth: 440, lineHeight: 1.5 }}>
                        {labels.subscribeSubtitle}
                      </p>
                      <SubscribeForm />
                    </div>
                  )}

                  <Link
                    href={`/blog/${post.slug}`}
                    className="blog-card-link"
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                  >
                    <article
                      className="blog-card"
                      style={{
                        border: '1px solid #e5e7eb', borderRadius: 16, padding: '28px 24px',
                        display: 'flex', flexDirection: 'column', gap: 12,
                        transition: 'box-shadow 0.25s ease, transform 0.2s ease',
                        cursor: 'pointer', height: '100%', background: '#fff', position: 'relative',
                      }}
                    >
                      <div style={{
                        position: 'absolute', top: 0, left: 24, right: 24,
                        height: 3, borderRadius: '0 0 4px 4px', background: cat.border, opacity: 0.6,
                      }} />

                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 4 }}>
                        <span style={{
                          fontSize: 11, fontWeight: 700, color: cat.text,
                          background: cat.bg, padding: '3px 10px', borderRadius: 100, letterSpacing: 0.3,
                        }}>
                          {post.category}
                        </span>
                        <span style={{ fontSize: 12, color: '#b0b8c4' }}>{post.readTime}</span>
                      </div>

                      <h2 style={{
                        fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 18,
                        color: '#08172E', lineHeight: 1.35,
                        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                      }}>
                        {post.title}
                      </h2>

                      <p style={{
                        fontSize: 14, color: '#6b7280', lineHeight: 1.65, flex: 1,
                        display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                      }}>
                        {post.excerpt}
                      </p>

                      <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        paddingTop: 12, borderTop: '1px solid #f3f4f6', marginTop: 'auto',
                      }}>
                        <span style={{ fontSize: 13, color: '#9ca3af' }}>
                          {new Date(post.date).toLocaleDateString(locale, { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="blog-card-arrow" style={{
                          display: 'inline-flex', alignItems: 'center', gap: 4,
                          fontSize: 13, fontWeight: 600, color: cat.text, transition: 'gap 0.2s ease',
                        }}>
                          {labels.readMore} <ArrowRight size={13} />
                        </span>
                      </div>
                    </article>
                  </Link>
                </React.Fragment>
              )
            })}
          </div>

          {/* Load More button */}
          {hasMore && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
              <button
                onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 36px', borderRadius: 12, fontSize: 15, fontWeight: 600,
                  color: '#08172E', background: '#fff', border: '2px solid #e5e7eb',
                  cursor: 'pointer', transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#10b981'
                  e.currentTarget.style.color = '#10b981'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb'
                  e.currentTarget.style.color = '#08172E'
                }}
              >
                {labels.loadMore}
                <ChevronDown size={18} />
              </button>
            </div>
          )}
        </>
      )}
    </>
  )
}

// ── Style helpers ──

function pillStyle(isActive: boolean, cat?: string): React.CSSProperties {
  const color = cat ? CATEGORY_COLORS[cat]?.text : undefined
  return {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '8px 18px', borderRadius: 100, fontSize: 14, fontWeight: 600,
    border: isActive ? 'none' : '1px solid #e5e7eb',
    background: isActive ? (color || '#08172E') : '#fff',
    color: isActive ? '#fff' : '#6b7280',
    cursor: 'pointer', transition: 'all 0.2s ease', whiteSpace: 'nowrap',
  }
}

function countBadge(isActive: boolean, cat?: string): React.CSSProperties {
  return {
    fontSize: 11, fontWeight: 700, padding: '1px 7px', borderRadius: 100,
    background: isActive ? 'rgba(255,255,255,0.25)' : '#f3f4f6',
    color: isActive ? '#fff' : '#9ca3af',
  }
}

import React from 'react'
