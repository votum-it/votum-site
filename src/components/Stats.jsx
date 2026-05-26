import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/useLanguage'
import './Stats.css'

export default function Stats() {
  const ref = useReveal()
  const { locale } = useLanguage()
  const stats = locale.stats

  return (
    <div className="stats-section" ref={ref}>
      <div className="stats-grid reveal">
        {stats.map(({ num, label, color }) => (
          <div className={`stat${color ? ` stat--${color}` : ''}`} key={label}>
            <div className="stat__num">{num}</div>
            <div className="stat__label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
