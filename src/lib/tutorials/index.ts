import type { SupportedLang, Tutorial } from './types'
import { TUTORIALS_EN } from './en'
import { TUTORIALS_PL } from './pl'
import { TUTORIALS_AR } from './ar'
import { TUTORIALS_DE } from './de'
import { TUTORIALS_FR } from './fr'

export type { Tutorial, TutorialDifficulty, TutorialStep, SupportedLang } from './types'

// Slug order is driven by English — slugs are URL paths and must match across languages.
const TUTORIALS_BY_LANG: Record<SupportedLang, Tutorial[]> = {
  en: TUTORIALS_EN,
  pl: TUTORIALS_PL,
  ar: TUTORIALS_AR,
  de: TUTORIALS_DE,
  fr: TUTORIALS_FR,
}

function normalizeLang(lang: string | undefined): SupportedLang {
  if (!lang) return 'en'
  const base = lang.toLowerCase().split('-')[0]
  if (base === 'pl' || base === 'ar' || base === 'de' || base === 'fr') return base
  return 'en'
}

export function getTutorials(lang: string | undefined): Tutorial[] {
  return TUTORIALS_BY_LANG[normalizeLang(lang)]
}

export function getTutorialBySlug(slug: string, lang: string | undefined): Tutorial | undefined {
  return getTutorials(lang).find((t) => t.slug === slug)
}

export function getTutorialNeighbors(
  slug: string,
  lang: string | undefined,
): { prev: Tutorial | null; next: Tutorial | null } {
  const list = getTutorials(lang)
  const idx = list.findIndex((t) => t.slug === slug)
  if (idx === -1) return { prev: null, next: null }
  return {
    prev: idx > 0 ? list[idx - 1] : null,
    next: idx < list.length - 1 ? list[idx + 1] : null,
  }
}

export function getTutorialCategories(lang: string | undefined): string[] {
  return Array.from(new Set(getTutorials(lang).map((t) => t.category)))
}

/**
 * All slugs across the tutorials (from the English source of truth).
 * Used by generateStaticParams so every slug is pre-rendered regardless of locale.
 */
export function getAllSlugs(): string[] {
  return TUTORIALS_EN.map((t) => t.slug)
}
