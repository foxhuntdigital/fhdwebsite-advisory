import { prs } from '../content.ts'
import { PrBoardIcon } from './Icons.tsx'
import './PrBoard.css'

export default function PrBoard() {
  return (
    <section id="prs" className="section">
      <div className="container">
        <div className="prs__heading">
          <div>
            <div className="eyebrow">Personal records</div>
            <h2 className="display section-title">PR board</h2>
          </div>
          <div className="note prs__note">logged, not claimed.</div>
        </div>

        <div className="card prs__board">
          <div className="prs__row prs__row--head" aria-hidden="true">
            <span>Film</span>
            <span>Where</span>
            <span>The lift</span>
            <span>The record</span>
          </div>
          {prs.map((pr) => (
            <article key={pr.company} className="prs__row">
              <div className="prs__icon">
                <PrBoardIcon name={pr.icon} />
              </div>
              <div>
                <h3 className="prs__company">{pr.company}</h3>
                <div className="prs__role">{pr.role}</div>
              </div>
              <p>{pr.lift}</p>
              <div className="display prs__record">{pr.record}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
