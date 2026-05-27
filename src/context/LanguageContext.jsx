import { createContext, useState } from 'react'
import { translations } from '../i18n/translations'

export const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(
    () => localStorage.getItem('votum-lang') || 'en'
  )

  const setLang = (newLang) => {
    setLangState(newLang)
    localStorage.setItem('votum-lang', newLang)
  }

  const locale = { ...translations.en, ...translations[lang] }

  return (
    <LanguageContext.Provider value={{ lang, setLang, locale }}>
      {children}
    </LanguageContext.Provider>
  )
}
