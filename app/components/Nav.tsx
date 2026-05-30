'use client'

import Link from 'next/link'
import { useState } from 'react'

const LINKS = [
  { href: '/problem', label: 'The Problem' },
  { href: '/plan', label: 'The Plan' },
  { href: '/issues', label: 'The Issues' },
  { href: '/common-ground', label: 'Common Ground' },
  { href: '/constitution', label: 'Constitution' },
  { href: '/amendments', label: 'Amendments' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav>
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <svg className="seal" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="50" cy="50" r="43" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6" />
            <g>
              <path d="M50 24 L70 31 V52 C70 64 61 71 50 76 C39 71 30 64 30 52 V31 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <path d="M50 24 L70 31 V40 H50 Z" fill="currentColor" opacity="0.9" />
              <line x1="30" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
              <line x1="31" y1="46" x2="69" y2="46" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
              <line x1="33" y1="52" x2="67" y2="52" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
              <line x1="35" y1="58" x2="65" y2="58" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
              <line x1="39" y1="64" x2="61" y2="64" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
            </g>
            <g fill="currentColor">
              <ellipse cx="50" cy="29" rx="2.4" ry="4" />
              <circle cx="50" cy="23.5" r="2" />
              <path d="M50 27 C44 22 38 21 32 23 C39 24 43 27 49 30 Z" />
              <path d="M50 27 C56 22 62 21 68 23 C61 24 57 27 51 30 Z" />
            </g>
            <text x="50" y="86" textAnchor="middle" fontFamily="Libre Caslon Display,serif" fontSize="5.4" letterSpacing="0.6" fill="currentColor" fontStyle="italic">We the People</text>
          </svg>
          <span className="brand-txt">
            <span className="t1">America First</span>
            <span className="t2">THE ONLY WAY</span>
          </span>
        </Link>

        <div className="navlinks">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </div>

        <Link href="/join" className="btn btn-red nav-join">Join the Movement</Link>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`nt-bar ${open ? 'x1' : ''}`} />
          <span className={`nt-bar ${open ? 'x2' : ''}`} />
          <span className={`nt-bar ${open ? 'x3' : ''}`} />
        </button>
      </nav>

      <div className={`mobile-drawer ${open ? 'is-open' : ''}`}>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link href="/join" className="btn btn-red drawer-join" onClick={() => setOpen(false)}>Join the Movement</Link>
      </div>
    </header>
  )
}
