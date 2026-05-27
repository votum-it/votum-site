import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import LangSwitcher from './LangSwitcher'
import './Nav.css'

const SECTION_IDS = ['services', 'how', 'work', 'contact']

export default function Nav({ onContact }) {
  const { lang, setLang, locale } = useLanguage()
  const t = locale.nav
  const location = useLocation()
  const navigate = useNavigate()
  const isHome   = location.pathname === '/'
  const [scrolled,      setScrolled]      = useState(false)
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      if (menuOpen) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  useEffect(() => {
    const handle = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!isHome) { setActiveSection(''); return }

    const els = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const visible = {}

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible[entry.target.id] = entry.intersectionRatio
        })
        const best = Object.entries(visible).sort((a, b) => b[1] - a[1])[0]
        if (best && best[1] > 0) setActiveSection(best[0])
      },
      {
        threshold: [0.1, 0.3, 0.5],
        rootMargin: '-10% 0px -50% 0px',
      }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [isHome])

  const SECTION_LINKS = [
    { label: t.services,  hash: 'services', id: 'services' },
    { label: t.howWeWork, hash: 'how',      id: 'how'      },
    { label: t.work,      hash: 'work',     id: 'work'     },
  ]

  const goToSection = (hash) => {
    setMenuOpen(false)
    if (isHome) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${hash}`)
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 60)
    }
  }

  const handleLogoClick = () => {
    setMenuOpen(false)
    setActiveSection('')
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <button
          className="nav__logo"
          onClick={handleLogoClick}
          aria-label="Back to top"
          type="button"
        >
          <img src="/logo_word.svg" alt="VOTUM" height="36" />
        </button>

        <ul className="nav__links">
          {SECTION_LINKS.map(({ label, hash, id }) => (
            <li key={hash}>
              <a
                href={`/#${hash}`}
                onClick={(e) => { e.preventDefault(); goToSection(hash) }}
                className={isHome && activeSection === id ? 'nav__link--active' : ''}
                aria-current={isHome && activeSection === id ? 'true' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'nav__link--active' : '')}
            >
              {t.about}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? 'nav__link--active' : '')}
            >
              {t.blog}
            </NavLink>
          </li>
        </ul>

        <LangSwitcher lang={lang} setLang={setLang} />

        <button
          type="button"
          className="btn btn-primary nav__cta"
          onClick={onContact}
        >
          {t.cta} →
        </button>

        <button
          className={`nav__hamburger${menuOpen ? ' nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <div className="nav__mobile-menu">
          {SECTION_LINKS.map(({ label, hash, id }) => (
            <a
              key={hash}
              href={`/#${hash}`}
              onClick={(e) => { e.preventDefault(); goToSection(hash) }}
              className={isHome && activeSection === id ? 'nav__link--active' : ''}
            >
              {label}
            </a>
          ))}
          <Link to="/about" onClick={() => setMenuOpen(false)}>{t.about}</Link>
          <Link to="/blog"  onClick={() => setMenuOpen(false)}>{t.blog}</Link>
          <button
            type="button"
            className="btn btn-primary nav__mobile-cta"
            onClick={() => { setMenuOpen(false); onContact() }}
          >
            {t.cta} →
          </button>
          <LangSwitcher lang={lang} setLang={setLang} />
        </div>
      )}
    </>
  )
}
