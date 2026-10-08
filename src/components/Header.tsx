import { cta, nav, site } from '../content.ts'
import './Header.css'

export default function Header() {
  return (
    <header className="header" id="top">
      <div className="container header__inner">
        <a href="#top" className="header__brand">
          <span className="display header__name">{site.name}</span>
          <span className="header__tagline">{site.tagline}</span>
        </a>
        <nav className="header__nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href={cta.href} className="btn btn--ink header__cta">
            {cta.label}
          </a>
        </nav>
      </div>
    </header>
  )
}
