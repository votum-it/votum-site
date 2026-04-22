import './Footer.css'

const YEAR = new Date().getFullYear()

const COLUMNS = [
  {
    title: 'Services',
    links: [
      { label: 'Technology Strategy & Consulting',        href: '#services' },
      { label: 'Software Engineering', href: '#services' },
      { label: 'DevOps & Cloud',  href: '#services' },
      { label: 'Managed Services & Operations',  href: '#contact'  },
      { label: 'Quality Engineering & Test Automation',  href: '#contact'  },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About',    href: '#about'   },
      { label: 'Our work', href: '#cases'   },
      { label: 'Blog',     href: '#blog'    },
      { label: 'Careers',  href: '#careers' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Get in touch',      href: '#contact'             },
      { label: 'info@votum.com',    href: 'mailto:info@votum.com' },
      { label: 'Sofia office',         href: '#contact'             },
      // { label: 'Berlin office',     href: '#contact'             },
    ],
  },
]

/* Simple SVG social icons */
function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
function IconGitHub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}
function IconX() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
    </svg>
  )
}

/* Logo placeholder reused from Nav */
function LogoPlaceholder() {
  return (
    <div style={{
      height: '32px', padding: '0 10px',
      border: '1.5px dashed rgba(120,214,75,0.5)',
      borderRadius: '6px',
      display: 'flex', alignItems: 'center', gap: '7px',
      color: 'rgba(120,214,75,0.6)',
      fontSize: '9px', fontWeight: 700,
      letterSpacing: '0.1em', textTransform: 'uppercase',
    }}>
      <span style={{
        width: '16px', height: '16px',
        border: '1.5px dashed rgba(120,214,75,0.5)',
        borderRadius: '3px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '8px',
      }}>V</span>
      Your logo
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/logo_word.svg" alt="VOTUM" height="36" />
            {/* <div className="footer__logo-rule" /> */}
            {/* <span className="footer__logo-name">VOTUM</span> */}
            </div>
              <p className="footer__tagline">
                Engineered for impact. <br />
                We partner with ambitious companies to design, build, and scale software that actually works.
              </p>
          <div className="footer__socials">
            <a href="#linkedin" className="social-btn" aria-label="LinkedIn"><IconLinkedIn /></a>
            <a href="#github"   className="social-btn" aria-label="GitHub"><IconGitHub /></a>
            <a href="#x"        className="social-btn" aria-label="X / Twitter"><IconX /></a>
          </div>
        </div>

        {/* Link columns */}
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="footer__col-title">{col.title}</div>
            <ul className="footer__links">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <span>© {YEAR} VOTUM IT EOOD & Co KD | All rights reserved.</span>
        <div className="footer__bottom-right">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookie Settings</a>
        </div>
      </div>
    </footer>
  )
}
