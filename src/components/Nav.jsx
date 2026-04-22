import { useEffect, useState } from 'react'
import './Nav.css'

/* ── Logo placeholder — swap with <img src="/logo.svg"> once ready ── */
function LogoPlaceholder() {
  return (
    <div className="logo-placeholder">
      <div className="logo-placeholder__icon">V</div>
      <span>Your logo</span>
    </div>
  )
}

const NAV_LINKS = [
  { label: 'Services',    href: '#services' },
  { label: 'How we work', href: '#how'      },
  { label: 'Our work',    href: '#work'     },
  { label: 'Contact',     href: '#contact'  },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      {/* <button
        className="nav__logo"
        onClick={handleLogoClick}
        aria-label="Back to top"
        type="button"
      >
        <img src="/logo_icon.svg" alt="VOTUM" height="36" />
        <div className="nav__logo-rule" />
        <span className="nav__logo-name">VOTUM</span>
      </button> */}

      <button
        className="nav__logo"
        onClick={handleLogoClick}
        aria-label="Back to top"
        type="button"
       >
        
  <img src="/logo_word.svg" alt="VOTUM" height="36" />
</button>

      <ul className="nav__links">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>

      <a href="mailto:info@votum.com" className="btn btn-primary nav__cta">
        Get in touch
      </a>
    </nav>
  )
}
