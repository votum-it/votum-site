import { useState } from 'react'
import './Cases.css'

const heroCase = {
category: 'Data Migration & Cloud Architecture',
  title: 'Data Archival and Migration for a Leading Insurance Group',
  cardBody: 'A major European insurance group needed to decommission critical legacy platforms while preserving years of historical data, attachments, and audit trails — without vendor lock-in. The migration required careful orchestration across multiple business units with zero downtime during the transition. Our solution ensured complete data integrity, searchability, and compliance with regulatory requirements. Users gained immediate access to modernized systems with improved performance and reduced operational costs.',
  summary: 'Migrated and archived enterprise ALM and PPM data from legacy OpenText SaaS to a cost-efficient, audit-ready AWS platform.',
  challenge: 'A major European insurance group was decommissioning their OpenText ALM and PPM platforms but faced a critical requirement: large volumes of historical Oracle database records, extensive attachments, and strict audit and compliance obligations meant the data had to remain fully accessible, secure, and audit-ready — without staying tied to legacy vendor infrastructure.',
  solution: 'We designed and implemented a scalable, cloud-native archival solution on AWS. The Oracle database was migrated to PostgreSQL on AWS RDS, ensuring full data integrity and schema optimization. All attachments and documents were extracted and structured to preserve their relationships with the underlying data. We also built a custom lightweight access tool — purpose-built for audit and compliance use cases — allowing easy querying of archived records and seamless retrieval of related files. The entire solution was built on AWS managed services for durability, security, and low operational overhead.',
  outcome: '100% data preservation from OpenText ALM and PPM, a successful Oracle-to-PostgreSQL migration, and full audit readiness with fast access to historical records. The client eliminated their dependency on legacy SaaS platforms, reduced operational costs, and gained a modern, future-proof archive aligned with their long-term IT strategy.',
  tags: ['AWS', 'PostgreSQL', 'Oracle Migration', 'OpenText ALM/PPM', 'Data Archival'],
  stats: [
    { value: '100%', label: 'data preserved' },
    { value: 'Zero', label: 'vendor lock-in' },
    { value: 'Audit', label: 'ready' },
  ],
  visual: 'platform',
}

const supportingCases = [
  {
    category: 'Asset Management Platform',
    title: 'Modern Digital Advisory Platform for a Leading Asset Manager',
    cardBody: 'A leading asset management enterprise faced limitations with a legacy system — poor usability, limited scalability, and workflows that slowed down their consultants.',
    summary: 'Modernized manual workflows into an integrated digital platform.',
    challenge: 'A leading asset management firm was held back by a legacy platform that couldn\'t scale. Outdated workflows, poor UX, and siloed collaboration were slowing down their specialist investment consultants and limiting operational efficiency.',
    solution: 'We designed and built a modern, enterprise-grade web platform from scratch — covering planning, design, development, testing, and full rollout. The solution features a scalable microservices backend, a React frontend, secure authentication, and containerized deployment.',
    outcome: 'End-to-end processes fully digitized — including planning, service mediation, activity tracking, and automated invoicing. Manual workflows replaced entirely, enabling efficient and scalable collaboration across the organization.',
    tags: ['React', 'Java / Spring Boot', 'Keycloak', 'Docker', 'Kubernetes'],
    stats: [
      { value: 'React', label: 'frontend' },
      { value: 'Java', label: 'microservices' },
      { value: 'K8s', label: 'deployment' },
    ],
    visual: 'product',
  },
  {
    category: 'DevOps Platform',
    title: 'Production-Ready Kubernetes Platform for Scalable Application Delivery',
    cardBody: 'To support modern delivery demands, a client needed a robust on-premise DevOps platform built to enterprise security and infrastructure standards.',
    summary: 'Enabled secure, controlled application delivery with on-premise infrastructure.',
    challenge: 'To meet growing application delivery demands, a client needed a robust, fully on-premise DevOps platform — one that could support modern deployment practices while meeting strict enterprise security and infrastructure requirements.',
    solution: 'We designed and implemented a complete on-premise Kubernetes platform from scratch — with dedicated clusters for development and production, integrated core services (ingress, storage, backups, monitoring), and CI/CD pipelines via Jenkins with built-in security scanning.',
    outcome: 'A production-ready infrastructure enabling secure, scalable, and consistent application delivery — with full control over deployment processes and a measurable improvement in release reliability.',
    tags: ['Kubernetes', 'Jenkins', 'CI/CD', 'On-Premise Infrastructure', 'DevSecOps'],
    stats: [
      { value: 'On-prem', label: 'platform' },
      { value: 'CI/CD', label: 'pipelines' },
      { value: 'Secure', label: 'delivery' },
    ],
    visual: 'platform',
  },
]

const featureCase = {
  category: 'Managed Services & Operations',
  title: 'End-to-End Software Delivery Transformation & Operations for a Global Automotive Leader',
  cardBody: 'From platform transformation to 24/7 managed operations—ensuring reliability, scalability, and continuous improvement.',
  summary: 'Ensuring reliable operations and continuous improvement under defined SLAs.',
  challenge: 'A leading automotive manufacturer struggled with fragmented tools, limited visibility, and inconsistent processes across global teams. Following a large-scale transformation, they required a trusted long-term partner to operate, maintain, and continuously improve their centralized software delivery and testing platform at enterprise scale.',
  solution: 'We defined and executed a transformation strategy to unify software delivery and testing, designing a centralized platform based on OpenText ALM & UFT and migrating legacy systems into a single ecosystem. Building on this foundation, we provide end-to-end managed services for a platform supporting over 1,000 users worldwide. Our scope includes system maintenance, L1–L2 user support, incident management, and continuous platform enhancements—all under clearly defined SLAs.',
  outcome: 'A standardized and scalable environment with full lifecycle visibility, combined with stable operations exceeding 98% availability. The client benefits from significantly reduced internal workload, continuous improvement, and a high-performing platform that ensures long-term scalability and consistent global operations.',
  tags: ['OpenText ALM/UFT', 'Managed Services', 'SLA Management', 'L1–L2 Support'],
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
  title: 'Scalable Test Automation Framework for an Automotive Enterprise',
  cardBody: 'A leading automotive manufacturer relied heavily on manual testing — resulting in slow releases, limited scalability, and growing delivery risk.',
  summary: 'Integrated testing directly into the release lifecycle with automation.',
  challenge: 'A leading automotive manufacturer was over-reliant on manual UI and functional testing. Slow release cycles, limited scalability, and growing system complexity were creating real risk — and the testing function couldn\'t keep pace with delivery demands.',
  solution: 'We designed and implemented a comprehensive test automation framework from scratch using world-class, industry-standard test automation platform, defined standardized testing processes, and integrated automated testing directly into the development and release lifecycle.',
  outcome: 'Significantly reduced manual testing effort, faster and more reliable release cycles, and improved test coverage across teams — enabling scalable, high-quality software delivery at enterprise pace.',
  tags: ['Test Automation', 'QA Strategy', 'Release Management', 'Process Standardization'],
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
            <h3>The Challenge</h3>
            <p>{item.challenge}</p>
          </section>

          <section className="case-modal__section case-modal__section--solution">
            <h3>What We Did</h3>
            <p>{item.solution}</p>
          </section>

          <section className="case-modal__section case-modal__section--outcome">
            <h3>The Result</h3>
            <p>{item.outcome}</p>
          </section>

          {item.tags && (
            <div className="case-modal__tags">
              {item.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          )}
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