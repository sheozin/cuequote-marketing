import { notFound } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import {
  getAllSlugs,
  getTutorialBySlug,
  getTutorialNeighbors,
} from '@/lib/tutorials'
import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'

export async function generateStaticParams() {
  // Slugs are identical across languages (English URL paths). Return the EN list.
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const locale = await getLocale()
  const tutorial = getTutorialBySlug(slug, locale)
  if (!tutorial) return { title: 'Tutorial' }
  return {
    title: `${tutorial.title} — CueQuote Tutorials`,
    description: tutorial.description,
    alternates: { canonical: `/tutorials/${slug}` },
  }
}

const DIFFICULTY_COLORS: Record<string, { bg: string; text: string }> = {
  beginner: { bg: '#ecfdf5', text: '#10b981' },
  intermediate: { bg: '#eff6ff', text: '#3b82f6' },
  advanced: { bg: '#f5f3ff', text: '#8b5cf6' },
}

export default async function TutorialPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const t = await getTranslations('tutorialDetail')
  const locale = await getLocale()
  const { slug } = await params
  const tutorial = getTutorialBySlug(slug, locale)
  if (!tutorial) notFound()

  const { next: nextTutorial } = getTutorialNeighbors(slug, locale)
  const diff = DIFFICULTY_COLORS[tutorial.difficulty]

  const difficultyLabel = t(tutorial.difficulty as 'beginner' | 'intermediate' | 'advanced')

  return (
    <>
      <Nav />
      <article style={{ padding: '80px 24px 60px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {/* Back link */}
          <Link href="/tutorials" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 14, color: '#10b981', textDecoration: 'none', marginBottom: 32, fontWeight: 500,
          }}>
            &larr; {t('backToTutorials')}
          </Link>

          {/* Header */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
              <span style={{
                fontSize: 12, fontWeight: 600, color: diff.text,
                background: diff.bg, padding: '4px 12px', borderRadius: 12,
              }}>
                {difficultyLabel}
              </span>
              <span style={{ fontSize: 13, color: '#9ca3af' }}>{tutorial.duration}</span>
              <span style={{ fontSize: 13, color: '#d1d5db' }}>&bull;</span>
              <span style={{ fontSize: 13, color: '#9ca3af' }}>{tutorial.category}</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-dm-sans)', fontWeight: 800, fontSize: 'clamp(28px, 5vw, 38px)',
              color: '#08172E', lineHeight: 1.2, marginBottom: 16, letterSpacing: -0.5,
            }}>
              {tutorial.title}
            </h1>

            <p style={{ fontSize: 18, color: '#6b7280', lineHeight: 1.6 }}>
              {tutorial.description}
            </p>
          </div>

          {/* Video */}
          {tutorial.videoUrl && (
            <div style={{
              position: 'relative', paddingBottom: '56.25%', height: 0,
              borderRadius: 16, overflow: 'hidden', marginBottom: 40,
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              background: '#000',
            }}>
              {tutorial.videoUrl.includes('youtube.com') ? (
                <iframe
                  src={tutorial.videoUrl}
                  title={tutorial.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                />
              ) : (
                <video
                  controls
                  preload="metadata"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain' }}
                >
                  <source src={tutorial.videoUrl} type="video/mp4" />
                </video>
              )}
            </div>
          )}

          {/* What you'll learn */}
          <div style={{
            background: '#f0fdf4', border: '1px solid #d1fae5', borderRadius: 16,
            padding: 28, marginBottom: 48,
          }}>
            <h3 style={{
              fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 16,
              color: '#08172E', marginBottom: 16,
            }}>
              {t('whatYouLearn')}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {tutorial.whatYouLearn.map((item, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  marginBottom: 10, fontSize: 15, color: '#374151',
                }}>
                  <span style={{ color: '#10b981', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div style={{ marginBottom: 48 }}>
            {tutorial.steps.map((step, i) => (
              <div key={i} style={{ marginBottom: 40, display: 'flex', gap: 16 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: '#10b981', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, fontWeight: 700, flexShrink: 0,
                }}>
                  {i + 1}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 20,
                    color: '#08172E', marginBottom: 12, lineHeight: 1.3,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.75, marginBottom: step.tip ? 16 : 0 }}>
                    {step.content}
                  </p>
                  {step.tip && (
                    <div style={{
                      display: 'flex', gap: 12, padding: 16,
                      background: '#ecfdf5', borderRadius: 12,
                      borderLeft: '3px solid #10b981',
                    }}>
                      <span style={{ fontSize: 16, flexShrink: 0 }}>&#128161;</span>
                      <p style={{ fontSize: 14, color: '#065f46', lineHeight: 1.6, margin: 0 }}>
                        <strong>{t('proTip')}</strong> {step.tip}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Next tutorial */}
          {nextTutorial && (
            <Link href={`/tutorials/${nextTutorial.slug}`} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb',
              borderRadius: 16, textDecoration: 'none', marginTop: 48,
            }}>
              <div>
                <span style={{ fontSize: 12, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600 }}>
                  {t('nextTutorial')}
                </span>
                <h4 style={{
                  fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 18,
                  color: '#08172E', marginTop: 4,
                }}>
                  {nextTutorial.title}
                </h4>
              </div>
              <span style={{ color: '#10b981', fontSize: 20 }}>&rarr;</span>
            </Link>
          )}

          {/* Back to all */}
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/tutorials" style={{ fontSize: 14, color: '#10b981', textDecoration: 'none', fontWeight: 500 }}>
              &larr; {t('allTutorials')}
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
