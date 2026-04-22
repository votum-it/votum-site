import { useState } from 'react'
import './Cases.css'

const heroCase = {
  category: 'Technology Strategy & Consulting',
  title: 'Transforming Software Delivery & Testing for a Global Automotive Leader',
  cardBody: 'Unified software delivery platform across global teams.',
  summary: 'Unified fragmented tools into a centralized, scalable delivery ecosystem.',
  challenge: 'Fragmented tools, lack of visibility, and inconsistent processes across distributed teams led to inefficiencies and high operational complexity.',
  solution: 'We defined and executed a transformation strategy to unify software delivery and testing, implementing a centralized platform based on OpenText ALM & UFT and consolidating legacy systems.',
  body: 'A leading automotive manufacturer struggled with fragmented tools, lack of visibility, and inconsistent processes across global teams. We defined and executed a transformation strategy to unify software delivery and testing, designing a centralized platform based on OpenText ALM & UFT and migrating legacy systems into a single ecosystem.',
  outcome: '1,000+ users on a unified global platform <br /> 100% tool consolidation into a single system <br /> End-to-end visibility across the full lifecycle',
  stats: [
    { value: 'Global', label: 'rollout' },
    { value: 'Unified', label: 'platform' },
    { value: 'End-to-End', label: 'visibility' },
  ],
  visual: 'transformation',
}

const supportingCases = [
  {
    category: 'Asset Management Platform',
    title: 'Digital Advisory Platform for Asset Management',
    cardBody: 'Modern platform for investment consultants with real-time collaboration.',
    summary: 'Modernized manual workflows into an integrated digital platform.',
    challenge: 'Investment consultants relied on disconnected spreadsheets and manual processes for planning, service mediation, activity tracking, and invoicing, creating inefficiencies and collaboration gaps.',
    solution: 'Built a modern React and Java microservices platform enabling real-time collaboration across planning, service mediation, activity tracking, and invoicing with Kubernetes deployment.',
    outcome: 'Replaced manual workflows with scalable, automated processes and improved collaboration across the organization.',
    stats: [
      { value: 'React', label: 'frontend' },
      { value: 'Java', label: 'microservices' },
      { value: 'K8s', label: 'deployment' },
    ],
    visual: 'product',
  },
  {
    category: 'DevOps Platform',
    title: 'Production-Ready Kubernetes Platform',
    cardBody: 'On-premise Kubernetes environment with integrated CI/CD.',
    summary: 'Enabled secure, controlled application delivery with on-premise infrastructure.',
    challenge: 'The organization needed production infrastructure within their data center with integrated CI/CD, automated backups, security scanning, and comprehensive monitoring while maintaining full control.',
    solution: 'Designed and deployed a complete on-premise DevOps platform with dedicated Kubernetes environments, integrated CI/CD pipelines, automated backups, security scanning, and monitoring dashboards.',
    outcome: 'Enabled secure, consistent application delivery with full infrastructure control.',
    stats: [
      { value: 'On-prem', label: 'platform' },
      { value: 'CI/CD', label: 'pipelines' },
      { value: 'Secure', label: 'delivery' },
    ],
    visual: 'platform',
  },
]

const featureCase = {
  category: 'Managed Services',
  title: 'Managed Delivery Platform for Automotive Enterprise',
  cardBody: '24/7 managed platform serving 1,000+ users worldwide.',
  summary: 'Ensuring reliable operations and continuous improvement under defined SLAs.',
  challenge: 'The organization needed to operate a complex delivery platform used by over 1,000 users globally while continuously improving it—requiring 24/7 availability, proactive monitoring, and regular updates.',
  solution: 'Established a managed services operation with dedicated teams providing 24/7 monitoring, incident response, automated backups, security patches, and continuous platform improvements aligned to SLAs.',
  outcome: 'Reliable operations, reduced internal workload, and continuous platform improvement under defined SLAs.',
  stats: [
    { value: '1,000+', label: 'users' },
    { value: '98%+', label: 'availability' },
    { value: '24/7', label: 'continuity' },
  ],
  image: '/metrics-dashboard.png',
  visual: 'operations',
}

const finalCase = {
  category: 'Test Automation',
  title: 'Scalable Test Automation Framework',
  cardBody: 'Standardized automation framework reducing manual testing effort.',
  summary: 'Integrated testing directly into the release lifecycle with automation.',
  challenge: 'Teams spent substantial time on manual testing, creating bottlenecks in the release cycle and limiting coverage. Test execution was inconsistent across environments and teams.',
  solution: 'Built a standardized, scalable test automation framework integrated into the CI/CD pipeline, enabling consistent, repeatable testing across all environments and supporting higher test coverage.',
  outcome: 'Faster, more reliable releases with higher test coverage across teams.',
  stats: [
    { value: 'Less', label: 'manual effort' },
    { value: 'Higher', label: 'coverage' },
    { value: 'Faster', label: 'releases' },
  ],
  visual: 'testing',
}

function CaseVisual({ type, featured = false }) {
  return (
    <div className={`case-visual case-visual--${type}${featured ? ' case-visual--featured' : ''}`} aria-hidden="true">
      {type === 'transformation' && (
        <div className="viz viz--transformation">
          <div className="viz-node viz-node--left viz-node--1" />
          <div className="viz-node viz-node--left viz-node--2" />
          <div className="viz-node viz-node--left viz-node--3" />
          <div className="viz-node viz-node--center" />
          <div className="viz-node viz-node--right viz-node--4" />
          <div className="viz-node viz-node--right viz-node--5" />
          <div className="viz-line viz-line--1" />
          <div className="viz-line viz-line--2" />
          <div className="viz-line viz-line--3" />
          <div className="viz-line viz-line--4" />
          <div className="viz-line viz-line--5" />
        </div>
      )}

      {type === 'product' && (
        <div className="viz viz--product">
          <div className="viz-panel viz-panel--main">
            <div className="viz-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="viz-bar viz-bar--accent" />
            <div className="viz-bar viz-bar--w80" />
            <div className="viz-bar viz-bar--w65" />
            <div className="viz-bar viz-bar--w48" />
          </div>
          <div className="viz-card viz-card--floating viz-card--a" />
          <div className="viz-card viz-card--floating viz-card--b" />
        </div>
      )}

      {type === 'platform' && (
        <div className="viz viz--platform">
          <div className="viz-cluster">
            <div className="viz-box viz-box--lg" />
            <div className="viz-box viz-box--sm" />
            <div className="viz-box viz-box--sm" />
            <div className="viz-box viz-box--lg" />
          </div>
          <div className="viz-pipeline">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      )}

      {type === 'operations' && (
        <div className="viz viz--operations">
          <div className="viz-monitor">
            <div className="viz-monitor__label">uptime</div>
            <div className="viz-monitor__chart">
              <div className="viz-monitor__line" />
            </div>
          </div>
          <div className="viz-status-row">
            <div className="viz-status" />
            <div className="viz-status" />
            <div className="viz-status" />
          </div>
        </div>
      )}

      {type === 'testing' && (
        <div className="viz viz--testing">
          <div className="viz-step viz-step--done" />
          <div className="viz-step viz-step--done" />
          <div className="viz-step viz-step--active" />
          <div className="viz-step" />
        </div>
      )}
    </div>
  )
}

function CaseCard({ item, variant = 'supporting', layout = 'visual', onClick }) {
  const featured = variant === 'hero' || variant === 'feature'

  return (
    <article
      className={`case-card case-card--${variant} case-card--${layout} case-card--clickable`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.()
        }
      }}
    >
      {layout === 'visual' && (
        <div className="case-card__media">
          {item.image ? (
            <img src={item.image} alt={item.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          ) : (
            <CaseVisual type={item.visual} featured={featured} />
          )}
        </div>
      )}

      <div className="case-card__content">
        <span className="case-card__eyebrow">{item.category}</span>
        <h3 className="case-card__title">{item.title}</h3>
        <p className="case-card__body">{item.cardBody}</p>
        <div className="case-card__stats">
          {item.stats.map((stat) => (
            <div className="case-stat" key={`${stat.value}-${stat.label}`}>
              <span>{stat.value}</span>
              {stat.label}
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

function CaseModal({ item, onClose }) {
  if (!item) return null

  return (
    <div className="case-modal-overlay" onClick={onClose}>
      <div className="case-modal" onClick={(e) => e.stopPropagation()}>
        <button className="case-modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="case-modal__header">
          <span className="case-modal__eyebrow">{item.category}</span>
          <h2 className="case-modal__title">{item.title}</h2>
          <p className="case-modal__summary">{item.summary}</p>
        </div>

        <div className="case-modal__content">
          <section className="case-modal__section case-modal__section--challenge">
            <h3>Challenge</h3>
            <p>{item.challenge}</p>
          </section>

          <section className="case-modal__section case-modal__section--solution">
            <h3>Solution</h3>
            <p>{item.solution}</p>
          </section>

          <section className="case-modal__section case-modal__section--outcome">
            <h3>Outcome</h3>
            <p>{item.outcome}</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default function Cases() {
  const [selectedCase, setSelectedCase] = useState(null)

  return (
    <>
      <section id="work" className="cases-section">
        <div className="section-header">
          <span className="eyebrow">Our work</span>
          <h2>Results that speak</h2>
          <p>
            A selection of projects where precision engineering made a measurable difference.
          </p>
        </div>

        <div className="cases-layout">
          <div className="cases-row cases-row--feature-first">
            <CaseCard item={featureCase} variant="feature" layout="clean" onClick={() => setSelectedCase(featureCase)} />
          </div>

          <div className="cases-row cases-row--hero-first">
            <CaseCard item={heroCase} variant="hero" layout="clean" onClick={() => setSelectedCase(heroCase)} />
            <CaseCard
              item={supportingCases[0]}
              variant="supporting"
              layout="clean"
              onClick={() => setSelectedCase(supportingCases[0])}
            />
          </div>

          <div className="cases-row cases-row--equal">
            <CaseCard
              item={supportingCases[1]}
              variant="supporting"
              layout="clean"
              onClick={() => setSelectedCase(supportingCases[1])}
            />
            <CaseCard item={finalCase} variant="supporting" layout="clean" onClick={() => setSelectedCase(finalCase)} />
          </div>
        </div>
      </section>

      <CaseModal item={selectedCase} onClose={() => setSelectedCase(null)} />
    </>
  )
}