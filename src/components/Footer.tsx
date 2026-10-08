import { site } from '../content.ts'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          {site.legalName} · {site.location}
        </span>
        <span>{site.email}</span>
      </div>
    </footer>
  )
}
