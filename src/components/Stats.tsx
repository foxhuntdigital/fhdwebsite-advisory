import { stats } from '../content.ts'
import './Stats.css'

export default function Stats() {
  return (
    <section className="stats" aria-label="Track record">
      <div className="container stats__grid">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="display stats__value">{stat.value}</div>
            <div className="stats__label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
