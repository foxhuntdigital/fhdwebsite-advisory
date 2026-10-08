import { plans, serviceSites } from '../content.ts'
import { ArrowIcon } from './Icons.tsx'
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
              {/* Prices hidden for now. Uncomment to show them again (values live in content.ts).
              <div className="plan__price">{plan.price}</div>
              */}
            </article>
          ))}
        </div>

        <div className="services__also">
          <h3 className="eyebrow on-paper services__also-title">
            Also from Fox Hunt, for studios and local businesses
          </h3>
          <div className="services__sites">
            {serviceSites.map((service) => (
              <a key={service.href} href={service.href} className="card service-site">
                <div className="plan__cadence">{service.summary}</div>
                <h4 className="display service-site__name">{service.name}</h4>
                <p>{service.description}</p>
                <span className="service-site__cta">
                  Visit {service.name} <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
