import { createContext, useContext } from 'react'
import type { TranslationKey } from './translations'
import type { LocalizedText, Lang } from '../types'

export interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: TranslationKey) => string
  pick: (text: LocalizedText | string | undefined) => string
  tCat: (key: string) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
