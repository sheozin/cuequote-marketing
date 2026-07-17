export type TutorialDifficulty = 'beginner' | 'intermediate' | 'advanced'
export type TutorialMode = 'av' | 'planner' | 'both'

export interface TutorialStep {
  title: string
  content: string
  tip?: string
}

export interface Tutorial {
  slug: string
  title: string
  description: string
  duration: string
  difficulty: TutorialDifficulty
  category: string
  mode: TutorialMode
  icon?: string
  videoUrl?: string
  whatYouLearn: string[]
  steps: TutorialStep[]
}

export type SupportedLang = 'en' | 'pl' | 'ar' | 'de' | 'fr'
