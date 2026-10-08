import { programBlocks } from '../content.ts'
import { ProgramIcon } from './Icons.tsx'
import './Program.css'

export default function Program() {
  return (
    <section id="program" className="section">
      <div className="container">
        <div className="eyebrow">How an engagement runs</div>
        <h2 className="display section-title">The program</h2>
        <p className="on-paper program__intro">
          Three blocks, like any good training plan. You always know which block you're in and
          what done looks like.
        </p>
        <div className="program__blocks">
          {programBlocks.map((block) => (
            <article key={block.title} className="card program__block">
              <ProgramIcon name={block.icon} />
              <div className="program__label">{block.label}</div>
              <h3 className="display program__title">{block.title}</h3>
              <p>{block.body}</p>
              <div className="program__deliverable">{block.deliverable}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
