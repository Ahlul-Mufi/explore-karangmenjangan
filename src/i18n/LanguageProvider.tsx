import { useState, useCallback, useEffect, type ReactNode } from 'react'
import { messages } from './translations'
import { LanguageContext } from './LanguageContext'
import type { Lang } from '../types'

const STORAGE_KEY = 'kawika-lang'

function isLang(value: string | null): value is Lang {
  return value === 'id' || value === 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'id'
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return isLang(stored) ? stored : 'id'
  })

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = useCallback(
    (key: keyof typeof messages['id']) => messages[lang][key],
    [lang]
  )

  const pick = useCallback(
    (text: { id: string; en: string } | string | undefined) => {
      if (!text) return ''
      if (typeof text === 'string') return text
      return text[lang] || text.id || text.en || ''
    },
    [lang]
  )

  const tCat = useCallback(
    (key: string) => (messages[lang] as Record<string, string>)[key] ?? key,
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, pick, tCat }}>
      {children}
    </LanguageContext.Provider>
  )
}
