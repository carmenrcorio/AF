import Link from 'next/link'

export default function Nav() {
  return (
    <header>
      <nav>
        <Link href="/" className="brand">
          <svg className="seal" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <polygon points="50,18 53,27 62,27 55,33 57,42 50,37 43,42 45,33 38,27 47,27" fill="currentColor" />
            <text x="50" y="68" textAnchor="middle" fontFamily="Libre Caslon Display,serif" fontSize="9" letterSpacing="1" fill="currentColor">AF</text>
            <text x="50" y="80" textAnchor="middle" fontFamily="Public Sans,sans-serif" fontSize="4.4" letterSpacing="1.6" fill="currentColor">·THE ONLY WAY·</text>
          </svg>
          <span className="brand-txt">
            <span className="t1">America First</span>
            <span className="t2">THE ONLY WAY</span>
          </span>
        </Link>
        <div className="navlinks">
          <Link href="/problem">The Problem</Link>
          <Link href="/plan">The Plan</Link>
          <Link href="/issues">The Issues</Link>
          <Link href="/common-ground">Common Ground</Link>
          <Link href="/constitution">Constitution</Link>
        </div>
        <Link href="/#join" className="btn btn-red">Join the Movement</Link>
      </nav>
    </header>
  )
}
