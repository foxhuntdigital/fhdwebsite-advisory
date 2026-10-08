import { useEffect, useId, useRef, useState } from 'react'
import { cta, nav, serviceSites, serviceSitesMenuLabel, site } from '../content.ts'
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
          <ServicesMenu />
          <a href={cta.href} className="btn btn--ink header__cta">
            {cta.label}
          </a>
        </nav>
      </div>
    </header>
  )
}

// Disclosure menu linking out to the small business service sites.
function ServicesMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelId = useId()

  useEffect(() => {
    if (!open) return

    function onPointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false)
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div
      ref={menuRef}
      className="services-menu"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className="services-menu__toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {serviceSitesMenuLabel}
        <svg
          className="services-menu__chevron"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      <div id={panelId} className="card services-menu__panel" hidden={!open}>
        <div className="services-menu__eyebrow">Also from Fox Hunt</div>
        <ul>
          {serviceSites.map((service) => (
            <li key={service.href}>
              <a href={service.href} className="services-menu__link">
                <span className="display services-menu__name">{service.name}</span>
                <span className="services-menu__summary">{service.summary}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
