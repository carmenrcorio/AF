import Link from 'next/link'

export default function Nav() {
  return (
    <header>
      <nav>
        <Link href="/" className="brand">
          <svg className="seal" viewBox="0 0 100 100" aria-hidden="true">
            {/* outer ring */}
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="50" cy="50" r="43" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6" />
            {/* shield / flag canton */}
            <g>
              {/* shield body */}
              <path d="M50 24 L70 31 V52 C70 64 61 71 50 76 C39 71 30 64 30 52 V31 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
              {/* canton (stars field) */}
              <path d="M50 24 L70 31 V40 H50 Z" fill="currentColor" opacity="0.9" />
              {/* stripes */}
              <line x1="30" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
              <line x1="31" y1="46" x2="69" y2="46" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
              <line x1="33" y1="52" x2="67" y2="52" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
              <line x1="35" y1="58" x2="65" y2="58" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
              <line x1="39" y1="64" x2="61" y2="64" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
            </g>
            {/* eagle silhouette over the shield top */}
            <g fill="currentColor">
              {/* body */}
              <ellipse cx="50" cy="29" rx="2.4" ry="4" />
              {/* head */}
              <circle cx="50" cy="23.5" r="2" />
              {/* spread wings */}
              <path d="M50 27 C44 22 38 21 32 23 C39 24 43 27 49 30 Z" />
              <path d="M50 27 C56 22 62 21 68 23 C61 24 57 27 51 30 Z" />
            </g>
            {/* We the People — small gold arc text at base */}
            <text x="50" y="86" textAnchor="middle" fontFamily="Libre Caslon Display,serif" fontSize="5.4" letterSpacing="0.6" fill="currentColor" fontStyle="italic">We the People</text>
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
          <Link href="/amendments">Amendments</Link>
        </div>
        <Link href="/join" className="btn btn-red">Join the Movement</Link>
      </nav>
    </header>
  )
}
