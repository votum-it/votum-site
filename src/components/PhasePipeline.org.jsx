import './PhaseVisuals.css'

function Arrow({ active = false }) {
  return (
    <div className={`phase-pipeline__arrow${active ? ' phase-pipeline__arrow--active' : ''}`} aria-hidden="true">
      <svg width="16" height="10" viewBox="0 0 16 10">
        <path
          d="M0 5h13M9 1l4 4-4 4"
          stroke={active ? 'var(--green-400)' : 'rgba(255,255,255,0.28)'}
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default function PhasePipeline() {
  return (
    <div className="phase-visual phase-pipeline" aria-hidden="true">
      <div className="phase-visual__inner">
        <span className="phase-visual__eyebrow">Phase 02 — Build</span>
        <div className="phase-visual__title">The Pipeline</div>

        <div className="phase-pipeline__flow">
          <div className="phase-pipeline__stage">
            <div className="phase-pipeline__box">Spec</div>
          </div>

          <Arrow />

          <div className="phase-pipeline__stage">
            <div className="phase-pipeline__box">Implement</div>
          </div>

          <Arrow active />

          <div className="phase-pipeline__stage">
            <div className="phase-pipeline__box phase-pipeline__box--active">
              {/* <div className="phase-pipeline__badge">95% coverage</div> */}
              <div>Test</div>
              <div className="phase-pipeline__coverage">
                <div className="phase-pipeline__coverage-fill" />
              </div>
            </div>
          </div>

          <Arrow active />

          <div className="phase-pipeline__stage">
            <div className="phase-pipeline__box phase-pipeline__box--muted">
              <div>Review</div>
              <div className="phase-pipeline__sub">Senior engineer</div>
            </div>
          </div>

          <Arrow />

          <div className="phase-pipeline__stage">
            <div className="phase-pipeline__box">Deploy</div>
          </div>
        </div>

        <div className="phase-pipeline__footer">
          <div className="phase-pipeline__stat">
            <span>2 weeks</span>
            sprint cycle
          </div>
          <div className="phase-pipeline__stat">
            <span>98%+</span>
            test coverage
          </div>
          <div className="phase-pipeline__stat">
            <span>CI/CD</span>
            every PR
          </div>
        </div>
      </div>
    </div>
  )
}