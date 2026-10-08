import { plans, serviceSites } from '../content.ts'
import './Services.css'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="eyebrow">Ways to train</div>
        <h2 className="display section-title services__title">Pick your plan</h2>

        <div className="services__plans">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className={`card plan${plan.featured ? ' plan--featured' : ''}`}
            >
              <div className="plan__cadence">{plan.cadence}</div>
              <h3 className="display plan__title">{plan.title}</h3>
              <p>{plan.body}</p>
              <div className="plan__price">{plan.price}</div>
            </article>
          ))}
        </div>

        <div className="services__also">
          <span className="eyebrow on-paper">Also from Fox Hunt, for studios and local businesses</span>
          {serviceSites.map((service) =>
            service.href ? (
              <a
                key={service.label}
                href={service.href}
                target="_blank"
                rel="noopener"
                className="on-paper services__link"
              >
                {service.label}
              </a>
            ) : (
              <span key={service.label} className="on-paper services__link">
                {service.label}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
