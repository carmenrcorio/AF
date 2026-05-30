import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-crown">
          <div className="stardot">★</div>
          <div className="tag">A movement, not a party.</div>
        </div>
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="display">America First</div>
            <p>A crowdsourced, constitution-respecting movement to end corruption and return power to the American people.</p>
          </div>
          <div className="col">
            <h5>The Movement</h5>
            <Link href="/problem">The Problem</Link>
            <Link href="/plan">The Plan</Link>
            <Link href="/issues">The Issues</Link>
            <Link href="/common-ground">Common Ground</Link>
          </div>
          <div className="col">
            <h5>Take Part</h5>
            <Link href="/amendments/propose">Propose an Amendment</Link>
            <Link href="/amendments">Vote on Amendments</Link>
            <Link href="/join">Join the Movement</Link>
          </div>
          <div className="col">
            <h5>Trust</h5>
            <Link href="/constitution">The Constitution</Link>
            <Link href="/sources">Our Sources</Link>
            <Link href="/charter">Charter &amp; Principles</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 America First: The Only Way.</span>
          <span className="truth">★ Every fact on this site is sourced and visible to you.</span>
        </div>
      </div>
    </footer>
  )
}
