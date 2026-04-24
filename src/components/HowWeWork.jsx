import useReveal from '../hooks/useReveal'
import PhaseMap from './PhaseMap'
import PhasePipeline from './PhasePipeline'
import PhaseHeartbeat from './PhaseHeartbeat'
import './HowWeWork.css'

/* ── Inline visual components ─────────────────────────── */

/* ── Main component ───────────────────────────────────── */
// Note: the content in this section is pretty much placeholder copy at this stage, just to get the layout and styles in place. We'll want to rewrite it to be more specific about our process and value prop once we have that nailed down. 
const PHASES = [
  {
    visual: <PhaseMap />,
    reverse: false,
    eyebrow: 'Phase 01 — Discovery & Strategy',
    title: 'We start by understanding your business, not your backlog.',
    body: 'Before any solution is designed or built, we define your technology strategy, align stakeholders, and assess your current landscape. The result is a clear architecture and delivery roadmap everyone can commit to.',
    checks: [
      'Fixed scope. No surprises',
      'Stakeholder workshops & requirements gathering',
      'Technology strategy & architecture definition',
      'Technical audit of systems and cloud landscape',
      'Risk assessment and dependency mapping',
        ],
  },
  {
    visual: <PhasePipeline />,
    reverse: true,
    eyebrow: 'Phase 02 — Build & Delivery',
    title: 'Engineering excellence across development, quality, and delivery.',
    body: "Every solution is built, tested, and deployed using modern engineering, DevOps, and quality practices—ensuring your team inherits systems that are reliable, scalable, and maintainable.",
    checks: [
      '2-week sprint cycles with live demos',
      '95%+ automated test coverage',
      'Built-in quality engineering & test automation',
      'CI/CD and infrastructure automation by default',
      'Cloud-native and DevOps best practices',
    ],
  },
  {
    visual: <PhaseHeartbeat />,
    reverse: false,
    eyebrow: 'Phase 03 — Launch & Operations',
    title: 'We don\'t disappear after go-live.',
    body: 'We ensure your systems run reliably at scale through observability, proactive operations, and continuous optimization—acting as your long-term technology partner.',
    checks: [
      'Zero-downtime production deployments',
      'Full observability and monitoring',
      'Cloud and DevOps operations at scale',
      'Managed services with L1–L3 support',
      'Optional SLA and long-term support',
    ],
    cta: { label: 'Get in touch →', href: '#contact', variant: 'btn-primary' },
  },
]

export default function HowWeWork() {
  const ref = useReveal()

  return (
    <section id="how" className="how-section" ref={ref}>
      <div className="section-header reveal">
        <span className="eyebrow">How we work</span>
        <h2>A process designed around no surprises.</h2>
        <p>We don't take shortcuts. Every engagement follows a proven process designed to eliminate risk, align technology with business goals, and deliver solutions your team can stand behind.</p>
      </div>

      {PHASES.map((phase) => (
        <div
          key={phase.eyebrow}
          className={`feature-strip reveal${phase.reverse ? ' feature-strip--reverse' : ''}`}
        >
          <div className="feature-strip__visual">{phase.visual}</div>
          <div className="feature-strip__content">
            <span className="feature-strip__eyebrow">{phase.eyebrow}</span>
            <h3 className="feature-strip__title">{phase.title}</h3>
            <p className="feature-strip__body">{phase.body}</p>
            <ul className="feature-strip__checks">
              {phase.checks.map((c) => (
                <li key={c}>
                  <span className="check-icon" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
            {phase.cta && (
              <a href={phase.cta.href} className={`btn ${phase.cta.variant}`}>
                {phase.cta.label}
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}
