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
    eyebrow: 'Phase 01 — Discovery',
    title: 'We start by understanding your business, not your backlog.',
    body: 'Before writing a single line of code, we map your goals, constraints, and risks. This phase produces an architecture document and project scope that everyone can commit to.',
    checks: [
      'Fixed-scope proposal with no surprises',
      'Stakeholder workshops & requirements gathering',
      'Technical audit of existing systems',
      'Risk assessment and dependency mapping',
        ],
  },
  {
    visual: <PhasePipeline />,
    reverse: true,
    eyebrow: 'Phase 02 — Build',
    title: 'Clean code, rigorous testing, zero shortcuts.',
    body: "Our engineering standards are non-negotiable. Every feature is spec'd, reviewed by a senior engineer, and covered by automated tests before it ships — so your team inherits code they can actually understand and maintain.",
    checks: [
      '2-week sprint cycles with live demos',
      '95%+ test coverage requirement',
      'Senior engineer review on every PR',
      'Continuous integration & deployment',
    ],
  },
  {
    visual: <PhaseHeartbeat />,
    reverse: false,
    eyebrow: 'Phase 03 — Launch & Beyond',
    title: 'We don\'t disappear after go-live.',
    body: 'Deployment is just the beginning. We set up monitoring, run load tests, and hand over full knowledge to your team — then stay on as your long-term technical partner.',
    checks: [
      'Zero-downtime production deployments',
      'Full observability stack setup',
      'Structured knowledge transfer sessions',
      'Optional long-term SLA & retainer',
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
        <p>We don't take shortcuts. Every project follows a proven process designed to eliminate risk and ship work your team can stand behind.</p>
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
