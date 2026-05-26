// ── New LangSwitcher component (replaces LangToggle) ────────────
// src/components/LangSwitcher.jsx

import { useState, useEffect, useRef } from 'react'

const LANGS = ['en', 'de', 'bg']

function CheckIcon() {
  return (
    <svg className="lang-switcher__option-check"
         width="14" height="14" viewBox="0 0 14 14" fill="none"
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
         strokeLinejoin="round">
      <path d="M2 7l4 4 6-7" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg className="lang-switcher__globe" viewBox="0 0 14 14" fill="none"
         stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
         strokeLinejoin="round">
      <circle cx="7" cy="7" r="5.5" />
      <path d="M1.5 7h11M7 1.5c1.6 1.7 2.5 3.6 2.5 5.5S8.6 11 7 12.5C5.4 10.8 4.5 8.9 4.5 7S5.4 3.2 7 1.5z" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg className="lang-switcher__chevron" viewBox="0 0 10 10" fill="none"
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
         strokeLinejoin="round">
      <path d="M2 4l3 3 3-3" />
    </svg>
  )
}

export default function LangSwitcher({ lang, setLang }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        className="lang-switcher__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${lang.toUpperCase()}`}
        onClick={() => setOpen(!open)}
      >
        <GlobeIcon />
        <span>{lang.toUpperCase()}</span>
        <ChevronIcon />
      </button>

      {open && (
        <div className="lang-switcher__dropdown" role="listbox">
          {LANGS.map((code) => (
            <button
              key={code}
              className={`lang-switcher__option${lang === code ? ' lang-switcher__option--active' : ''}`}
              role="option"
              aria-selected={lang === code}
              onClick={() => { setLang(code); setOpen(false) }}
            >
              {code.toUpperCase()}
              <CheckIcon />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}