import { useEffect, useRef } from 'react'
import './PhaseVisuals.css'

export default function PhaseMap() {
  const canvasRef = useRef(null)
  const svgRef = useRef(null)

  const goalsRef = useRef(null)
  const constraintsRef = useRef(null)
  const risksRef = useRef(null)
  const scopeRef = useRef(null)
  const archRef = useRef(null)
  const projRef = useRef(null)

  useEffect(() => {
    const drawMapLines = () => {
      const canvas = canvasRef.current
      const svg = svgRef.current

      if (!canvas || !svg) return

      const rect = canvas.getBoundingClientRect()

      const getPos = (el) => {
        const r = el.getBoundingClientRect()
        return {
          x: r.left - rect.left + r.width / 2,
          y: r.top - rect.top + r.height / 2,
          w: r.width,
          h: r.height,
        }
      }

      const pos = {
        goals: getPos(goalsRef.current),
        constraints: getPos(constraintsRef.current),
        risks: getPos(risksRef.current),
        scope: getPos(scopeRef.current),
        arch: getPos(archRef.current),
        proj: getPos(projRef.current),
      }

      svg.innerHTML = `
        <defs>
          <marker id="phase-map-arrow-dim" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="rgba(255,255,255,0.16)" />
          </marker>
          <marker id="phase-map-arrow-green" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="rgba(120,214,75,1)" />
          </marker>
        </defs>
      `

      const line = (x1, y1, x2, y2, green = false, dashed = false) => {
        const el = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        el.setAttribute('x1', x1)
        el.setAttribute('y1', y1)
        el.setAttribute('x2', x2)
        el.setAttribute('y2', y2)
        el.setAttribute('stroke', green ? 'rgba(120,214,75,0.95)' : 'rgba(255,255,255,0.16)')
        el.setAttribute('stroke-width', green ? '1.5' : '1')
        el.setAttribute('marker-end', green ? 'url(#phase-map-arrow-green)' : 'url(#phase-map-arrow-dim)')
        if (dashed) el.setAttribute('stroke-dasharray', '5 4')
        svg.appendChild(el)
      }

      line(
        pos.goals.x + pos.goals.w / 2,
        pos.goals.y,
        pos.scope.x - pos.scope.w / 2,
        pos.scope.y - 10
      )

      line(
        pos.constraints.x + pos.constraints.w / 2,
        pos.constraints.y,
        pos.scope.x - pos.scope.w / 2,
        pos.scope.y,
        true,
        true
      )

      line(
        pos.risks.x + pos.risks.w / 2,
        pos.risks.y,
        pos.scope.x - pos.scope.w / 2,
        pos.scope.y + 10
      )

      line(
        pos.scope.x + pos.scope.w / 2,
        pos.scope.y - 10,
        pos.arch.x - pos.arch.w / 2,
        pos.arch.y
      )

      line(
        pos.scope.x + pos.scope.w / 2,
        pos.scope.y + 10,
        pos.proj.x - pos.proj.w / 2,
        pos.proj.y
      )
    }

    drawMapLines()
    window.addEventListener('resize', drawMapLines)

    return () => {
      window.removeEventListener('resize', drawMapLines)
    }
  }, [])

  return (
    <div className="phase-visual phase-map" aria-hidden="true">
      <div className="phase-visual__inner">
        <span className="phase-visual__eyebrow">Phase 01 — Discovery</span>
        <div className="phase-visual__title">The Map</div>

        <div className="phase-map__canvas" ref={canvasRef}>
          <svg className="phase-map__svg" ref={svgRef} />

          <div ref={goalsRef} className="phase-map__node phase-map__node--input phase-map__node--goals">
            Goals
          </div>

          <div ref={constraintsRef} className="phase-map__node phase-map__node--input phase-map__node--constraints">
            Constraints
          </div>

          <div ref={risksRef} className="phase-map__node phase-map__node--input phase-map__node--risks">
            Risks
          </div>

          <div ref={scopeRef} className="phase-map__node phase-map__node--center">
            Scope
          </div>

          <div ref={archRef} className="phase-map__node phase-map__node--output phase-map__node--arch">
            Architecture Doc
          </div>

          <div ref={projRef} className="phase-map__node phase-map__node--output phase-map__node--proj">
            Project Scope
          </div>
        </div>

        <div className="phase-map__footer">Architecture document produced</div>
      </div>
    </div>
  )
}