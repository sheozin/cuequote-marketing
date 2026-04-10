export const locales = ['en', 'pl', 'ar', 'de', 'fr'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'
export const rtlLocales: Locale[] = ['ar']
