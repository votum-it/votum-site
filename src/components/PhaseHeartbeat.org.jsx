import { useEffect, useRef } from 'react'
import './PhaseVisuals.css'

export default function PhaseHeartbeat() {
  const svgRef = useRef(null)
  const labelRef = useRef(null)
  const areaPathRef = useRef(null)

  useEffect(() => {
    const positionLabel = () => {
      const svg = svgRef.current
      const label = labelRef.current
      if (!svg || !label) return

      const width = svg.getBoundingClientRect().width
      const pct = 310 / 600
      label.style.left = `${pct * width}px`
    }

    positionLabel()
    window.addEventListener('resize', positionLabel)

    return () => {
      window.removeEventListener('resize', positionLabel)
    }
  }, [])

  useEffect(() => {
    const area = areaPathRef.current
    if (!area) return

    const timer = setTimeout(() => {
      area.style.transition = 'opacity 1s ease 1.3s'
      area.style.opacity = '1'
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="phase-visual phase-heartbeat" aria-hidden="true">
      <div className="phase-visual__inner">
        <span className="phase-visual__eyebrow">Phase 03 — Launch & Beyond</span>
        <div className="phase-visual__title">The Heartbeat</div>

        <div className="phase-heartbeat__wrap">
          <div className="phase-heartbeat__header">
            <span>uptime · last 30 days</span>
            <div className="phase-heartbeat__live">
              <div className="phase-heartbeat__live-dot" />
              Live
            </div>
          </div>

          <div className="phase-heartbeat__chart">
            <div className="phase-heartbeat__label" ref={labelRef}>
              deploy v2.4
            </div>

            <svg
              className="phase-heartbeat__svg"
              ref={svgRef}
              viewBox="0 0 600 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="heartbeat-area-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--green-400)" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="var(--green-400)" stopOpacity="0.01" />
                </linearGradient>
              </defs>

              <line x1="0" y1="25" x2="600" y2="25" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
              <line x1="0" y1="50" x2="600" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
              <line x1="0" y1="75" x2="600" y2="75" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />

              <line
                x1="310"
                y1="0"
                x2="310"
                y2="100"
                stroke="rgba(106,214,161,0.35)"
                strokeWidth="1"
                strokeDasharray="4 3"
              />

              <path
                ref={areaPathRef}
                opacity="0"
                fill="url(#heartbeat-area-grad)"
                d="M0,38 C60,38 120,38 180,38 C240,38 280,38 305,38 C308,44 310,50 313,36 C316,28 318,38 340,38 C400,38 460,38 520,38 C560,38 580,38 600,38 L600,100 L0,100 Z"
              />

              <path
                className="phase-heartbeat__line"
                d="M0,38 C60,38 120,38 180,38 C240,38 280,38 305,38 C308,44 310,50 313,36 C316,28 318,38 340,38 C400,38 460,38 520,38 C560,38 580,38 600,38"
                fill="none"
                stroke="var(--green-400)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <text
                x="8"
                y="35"
                fontSize="8"
                fill="var(--navy-400)"
                fontFamily="var(--font-mono)"
              >
                100%
              </text>
            </svg>
          </div>

          <div className="phase-heartbeat__status">
            <div className="phase-heartbeat__item">
              <div className="phase-heartbeat__status-dot" />
              <div className="phase-heartbeat__status-text">{`Monitoring\nactive`}</div>
              <div className="phase-heartbeat__status-value">↑ 99.98%</div>
            </div>

            <div className="phase-heartbeat__item">
              <div className="phase-heartbeat__status-dot" />
              <div className="phase-heartbeat__status-text">{`Observability\nstack`}</div>
              <div className="phase-heartbeat__status-value">Online</div>
            </div>

            <div className="phase-heartbeat__item">
              <div className="phase-heartbeat__status-dot" />
              <div className="phase-heartbeat__status-text">{`SLA\nretainer`}</div>
              <div className="phase-heartbeat__status-value">Active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}