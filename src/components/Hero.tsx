import { cta, workoutLog } from '../content.ts'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="eyebrow">Log entry · Fractional product &amp; technology lead</div>
          <h1 className="display hero__title">Your product needs a program.</h1>
          <div className="note hero__note">not another slide deck.</div>
          <p className="on-paper hero__lede">
            I'm Ashley. I coached on gym floors for 12 years, then ran product for 18 live fitness
            apps at Xponential. I step in as your product and technology lead, write the plan, and
            get your team shipping.
          </p>
          <div className="hero__actions">
            <a href={cta.href} className="btn btn--accent">
              {cta.label}
            </a>
            <a href="#prs" className="btn btn--outline">
              See the PR board
            </a>
          </div>
        </div>

        <div className="hero__cards">
          <FilmReviewCard />
          <WorkoutLogCard />
        </div>
      </div>
    </section>
  )
}

function FilmReviewCard() {
  return (
    <div className="card film">
      <div className="film__tape" aria-hidden="true" />
      <div className="card-header">
        <span>Film review · Onboarding flow</span>
        <span>[Sample]</span>
      </div>
      <div className="film__stage" aria-hidden="true">
        <div className="phone">
          <div className="phone__bar" />
          <div className="phone__block phone__block--hero" />
          <div className="phone__bar phone__bar--short" />
          <div className="phone__button" />
        </div>
        <div className="phone">
          <div className="phone__bar" />
          <div className="phone__block" />
          <div className="phone__block" />
          <div className="phone__block" />
          <div className="phone__block" />
          <div className="phone__button" />
        </div>
        <svg className="film__markup" viewBox="0 0 400 300" preserveAspectRatio="none">
          <ellipse cx="262" cy="150" rx="58" ry="64" transform="rotate(-8 262 150)" />
          <path d="M96 232 C 130 268, 190 262, 222 214" />
          <path d="M208 222 L223 213 L226 231" strokeLinejoin="round" />
        </svg>
        <div className="note film__callout film__callout--top">5 questions before any value?</div>
        <div className="note film__callout film__callout--bottom">they leave here</div>
      </div>
    </div>
  )
}

function WorkoutLogCard() {
  return (
    <div className="card log">
      <div className="card-header">
        <span>Week 1 · Day 1</span>
        <span>Client: [Your company]</span>
      </div>
      <div className="log__body">
        <div className="log__row log__row--head">
          <span>Movement</span>
          <span>Sets × reps</span>
        </div>
        {workoutLog.map((row) => (
          <div key={row.movement} className="log__row">
            <span>{row.movement}</span>
            <span>{row.sets}</span>
          </div>
        ))}
        <div className="note log__note">Notes: start lighter than you think. add load weekly.</div>
      </div>
    </div>
  )
}
