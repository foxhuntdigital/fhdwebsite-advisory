import { skills } from '../content.ts'
import './Coach.css'

export default function Coach() {
  return (
    <section id="coach" className="section">
      <div className="container coach">
        <figure className="card coach__photo">
          {/* Replace with <img src=... alt="Ashley coaching" /> once the photo is ready. */}
          <div className="coach__placeholder">[Photo: Ashley coaching or at a whiteboard]</div>
          <figcaption className="note coach__caption">coach's notes</figcaption>
        </figure>

        <div className="coach__copy">
          <div className="eyebrow">Your coach</div>
          <h2 className="display section-title coach__title">I've done the reps.</h2>
          <p className="on-paper coach__lede">
            D1 athlete. Personal trainer for 12 years. EMT for 6. Then a decade building the
            software that members, trainers and franchise owners use every day.
          </p>
          <p className="on-paper coach__body">
            I design, I write specs, I read code, and I can stand in front of your board or 300
            franchisees and explain what we're building and why.
          </p>
          <ul className="coach__skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
