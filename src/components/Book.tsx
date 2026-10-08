import LeadForm from './LeadForm.tsx'
import './Book.css'

export default function Book() {
  return (
    <section id="book" className="book">
      <div className="container book__inner">
        <div className="book__copy">
          <h2 className="display book__title">Day one starts with an assessment.</h2>
          <p className="book__lede">
            30 minutes. Tell me where the product is stuck. I'll tell you what I'd look at first.
          </p>
        </div>
        <div className="book__form">
          <LeadForm source="homepage-book" />
        </div>
      </div>
    </section>
  )
}
