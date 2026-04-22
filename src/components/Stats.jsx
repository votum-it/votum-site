import useReveal from '../hooks/useReveal'
import './Stats.css'

const STATS = [
  { num: '45+', label: 'Projects delivered',   color: 'green' },
  { num: '18+ yrs', label: 'Industry experience', color: 'teal'  },
  { num: '80%',  label: 'Client retention',  color: 'green' },
  { num: '20+',  label: 'Expert engineers',      color: ''      },
]

export default function Stats() {
  const ref = useReveal()

  return (
    <div className="stats-section" ref={ref}>
      <div className="stats-grid reveal">
        {STATS.map(({ num, label, color }) => (
          <div className="stat" key={label}>
            <div className={`stat__num${color ? ` stat__num--${color}` : ''}`}>
              {num}
            </div>
            <div className="stat__label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
