import useReveal from '../hooks/useReveal'
import './Services.css'

const SERVICES = [
  {
    variant: 'green',
    icon: (
      // <svg viewBox="0 0 24 24" fill="none" stroke="#78d64b" strokeWidth="1.8" strokeLinecap="round">
        // <circle cx="12" cy="12" r="3"/>
        // <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      //  </svg>//
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#78d64b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    ),
    title: 'Technology Strategy & Consulting',
    body: 'Make the right technology decisions before they become expensive ones. We work with your leadership to define clear roadmaps, evaluate build-vs-buy tradeoffs, and align your architecture with your long-term business goals.',
    tags: [
      { label: 'Tech Audit',     variant: 'green' },
      { label: 'Architecture Review', variant: 'green' },
      { label: 'Vendor Selection',  variant: 'green'  },
      { label: 'Due Diligence', variant: 'green' },
    ],
  },
  {
    variant: 'teal',
    icon: (
      //<svg viewBox="0 0 24 24" fill="none" stroke="#6ad6a1" strokeWidth="1.8" strokeLinecap="round">
        //<polyline points="16 18 22 12 16 6"/>
        //<polyline points="8 6 2 12 8 18"/>
      //</svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#6ad6a1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="4 17 10 11 4 5"/>
        <line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
    ),
    title: 'Software Engineering',
    body: 'From product concept to production-ready code. We build scalable, maintainable applications designed to grow with your business — not become tomorrow\'s technical debt.',
    tags: [
      { label: 'React',   variant: 'teal' },
      { label: 'Node.js', variant: 'teal' },
      { label: 'TypeScript',   variant: 'teal' },
      { label: 'GraphQL',  variant: 'teal' },
    ],
  },
  {
    variant: 'green',
    icon: (
      // <svg viewBox="0 0 24 24" fill="none" stroke="#78d64b" strokeWidth="1.8" strokeLinecap="round">
        // <rect x="2" y="3" width="20" height="14" rx="2"/>
        // <path d="M2 17h20"/>
        // <path d="M6 21h12"/>
        // <circle cx="12" cy="9" r="2"/>
      // </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#78d64b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4z"/>
        <path d="M12 12c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4z"/>
      </svg>
    ),
    title: 'DevOps & Cloud',
    body: 'Infrastructure that doesn\'t slow your team down. We design and operate CI/CD pipelines, containerized environments, and cloud-native platforms built for speed, reliability, and scale.',
    tags: [
      { label: 'AWS',        variant: 'green' },
      { label: 'Terraform',     variant: 'green' },
      { label: 'Kubernetes', variant: 'green' },
      { label: 'GitHub Actions',      variant: 'green' },
    ],
  },
  {
    variant: 'teal',
    icon: (
      // <svg viewBox="0 0 24 24" fill="none" stroke="#6ad6a1" strokeWidth="1.8" strokeLinecap="round">
        // <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        // <circle cx="9" cy="7" r="4"/>
        // <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        // <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      // </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#6ad6a1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
  <     polyline points="6 9 9 12 12 9 15 12 18 9"/>
      </svg>
    ),
    title: 'Managed Services & Operations',
    body: 'We don\'t just build and hand off. We stay on to monitor, maintain, and continuously improve your systems — so your team focuses on features, not firefighting.',
    tags: [
      { label: 'Incident Management',    variant: 'teal' },
      { label: '24/7 Monitoring', variant: 'teal' },
      { label: 'Performance Tuning',        variant: 'teal' },
    ],
  },
  {
    variant: 'green',
    icon: (
      // <svg viewBox="0 0 24 24" fill="none" stroke="#78d64b" strokeWidth="1.8" strokeLinecap="round">
        // <polyline points="20 6 9 17 4 12"/>
        // <path d="M3 12v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6"/>
      // </svg>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#78d64b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <polyline points="8.5 11 10.5 13 14 9"/>
    </svg>
    ),
    title: 'Quality Engineering & Test Automation',
    body: 'Comprehensive testing strategies ensuring reliability at every layer. We build automated test suites, implement quality gates, and establish processes that catch issues before they reach production.',
    tags: [
      { label: 'Playwright',       variant: 'green' },
      { label: 'Jest',  variant: 'green' },
      { label: 'Performance Testing',    variant: 'green' },
      { label: 'Test Strategy', variant: 'green' },
    ],
  },
]

const DELAY = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4', 'reveal-delay-5']

export default function Services() {
  const ref = useReveal()

  return (
    <section id="services" className="section" ref={ref}>
      <div className="section-header reveal">
        <span className="eyebrow">What we do</span>
        <h2>End-to-end engineering</h2>
        <p>We cover every layer of the engineering lifecycle, so you don't have to coordinate five different vendors.</p>
      </div>

      <div className="services-grid">
        {SERVICES.map((svc, i) => (
          <div
            key={svc.title}
            className={`service-card service-card--${svc.variant} reveal ${DELAY[i]}`}
          >
            <div className="service-card__icon">{svc.icon}</div>
            <div className="service-card__title">{svc.title}</div>
            <div className="service-card__body">{svc.body}</div>
            <div className="service-card__tags">
              {svc.tags.map((t) => (
                <span key={t.label} className={`tag tag--${t.variant}`}>{t.label}</span>
              ))}
            </div>
             <span className="service-card__link">Learn more →</span>
          </div>
        ))}
      </div>

      
    </section>
  )
}
