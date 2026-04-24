import { useState, useEffect } from 'react'
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
    details: [
      'We help organizations navigate complex technology decisions at critical junctures. Our approach combines deep technical expertise with business acumen to develop clear, actionable technology roadmaps.',  
      'We conduct thorough architecture reviews, evaluate build-vs-buy scenarios with detailed cost-benefit analysis, assess vendor options objectively, and align your technical strategy with business objectives.',
      'We work directly with C-suite and engineering leadership to identify technical debt, modernization priorities, and competitive advantages through technology. Our goal is to reduce risk, accelerate decision-making, and position your organization for sustainable growth without expensive missteps.',
    ],
    tags: [
      { label: 'Architecture Assessment',     variant: 'green' },
      { label: 'Vendor Evaluation', variant: 'green' },
      { label: 'Risk Reduction',  variant: 'green'  },
      { label: 'Roadmap Planning', variant: 'green' },
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
    details: [
      'We deliver custom software solutions built from the ground up with production excellence in mind. Whether you\'re launching a new product, modernizing legacy systems, or scaling an existing application, we architect and build systems designed for growth.', 
      'Our engineering practice emphasizes clean code, comprehensive testing, automated deployment pipelines, and documentation that enables your team to maintain and evolve the product.' ,
      'We pair senior engineers with your team, transferring knowledge and ensuring your in-house capabilities are strengthened. We focus on solving your actual business problems, not over-engineering solutions.', 
      'Every line of code is designed to be maintainable, testable, and scalable — eliminating technical debt before it starts.',
    ],
    tags: [
      { label: 'Custom Development',   variant: 'teal' },
      { label: 'Code Quality', variant: 'teal' },
      { label: 'Scalability',   variant: 'teal' },
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
    details: [
      'Infrastructure is the backbone of modern software delivery, and it shouldn\'t be a bottleneck. We design and manage cloud architectures that enable your team to deploy with confidence and operate reliably at scale.', 
      'Our services include CI/CD pipeline design and implementation, containerization strategies using Docker and Kubernetes, multi-cloud and hybrid cloud architecture, infrastructure-as-code practices, automated monitoring and alerting, disaster recovery and business continuity planning, and cost optimization across cloud platforms.', 
      'We handle the operational burden — infrastructure provisioning, scaling, security patching, and incident response — so your engineers focus on product development. Whether you\'re migrating from on-premises infrastructure or optimizing existing cloud environments, we reduce operational friction and enable rapid, safe deployments.',
    ],
    tags: [
      { label: 'CI/CD Pipelines',        variant: 'green' },
      { label: 'Infrastructure-as-Code',     variant: 'green' },
      { label: 'Containerization', variant: 'green' },
      { label: 'Cloud Architecture',      variant: 'green' },
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
        <polyline points="6 9 9 12 12 9 15 12 18 9"/>
      </svg>
    ),
    title: 'Managed Services & Operations',
    body: 'We don\'t just build and hand off. We stay on to monitor, maintain, and continuously improve your systems — so your team focuses on features, not firefighting.',
    details: [
      'Production systems require continuous care. We provide comprehensive managed services to keep your applications running smoothly and improving over time.',
      'This includes 24/7 system monitoring and alerting, proactive incident response and root cause analysis, performance optimization and tuning, security patching and vulnerability management, regular health audits and recommendations, capacity planning and scaling decisions, and documentation updates.', 
      'Rather than reactive troubleshooting, we take a proactive approach — identifying issues before they impact users, optimizing systems based on real usage patterns, and continuously improving reliability.', 
      'Your team focuses on building new features while we ensure infrastructure stability, performance, and security. We provide regular reports on system health, incident summaries, and optimization recommendations so you stay informed without the operational overhead.',
    ],
    tags: [
      { label: 'Incident Management',    variant: 'teal' },
      { label: '24/7 Monitoring', variant: 'teal' },
      { label: 'Optimization',        variant: 'teal' },
      { label: 'Proactive Maintenance',        variant: 'teal' },
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
    details: [
      'Shipping with confidence requires more than manual testing. We establish quality engineering practices that catch issues early and scale with your product.', 
      'Our approach includes test strategy development aligned with your product roadmap, automated unit and integration testing frameworks, end-to-end test automation for critical user flows, performance and load testing to identify bottlenecks, security testing and vulnerability scanning, continuous integration test execution, and quality metrics dashboards.', 
      'We implement testing at every layer — from unit tests during development to production monitoring and synthetic testing. We work with your team to establish quality gates that enforce standards without slowing deployment velocity.', 
      'This means fewer production incidents, faster feedback loops, and the confidence to ship features quickly. Our goal is to make quality invisible — testing so thorough and automated that it becomes part of your normal development rhythm, not a bottleneck.',
    ],
    tags: [
      { label: 'Test Automation',       variant: 'green' },
      { label: 'Quality Strategy',  variant: 'green' },
      { label: 'Performance Testing',    variant: 'green' },
      { label: 'Quality Gates', variant: 'green' },
    ],
  },
]

const DELAY = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4', 'reveal-delay-5']

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const ref = useReveal()

  return (
    <>
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
            <button type="button" className="service-card__link" onClick={() => setSelectedService(svc)}>
              Learn more →
            </button>
          </div>
        ))}
      </div>
      <ServiceModal item={selectedService} onClose={() => setSelectedService(null)} />
    </section>
  </>
  )
}

function ServiceModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [item, onClose])

  if (!item) return null

  // Map service titles to their modal titles
  const modalTitles = {
    'Technology Strategy & Consulting': 'Make confident technology decisions',
    'Software Engineering': 'Custom software built for excellence',
    'DevOps & Cloud': 'Infrastructure that scales with you',
    'Managed Services & Operations': 'Always-on operations and support',
    'Quality Engineering & Test Automation': 'Ship with confidence',
  }

  return (
    <div className="service-modal-overlay" onClick={onClose}>
      <div className="service-modal" onClick={(event) => event.stopPropagation()}>
        <button className="service-modal__close" onClick={onClose} aria-label="Close details">
          ✕
        </button>
        <div className="service-modal__header">
          <span className="service-modal__eyebrow">{item.title}</span>
          <h2 className="service-modal__title">{modalTitles[item.title]}</h2>
        </div>
        <div className="service-modal__content">
          {item.details?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
