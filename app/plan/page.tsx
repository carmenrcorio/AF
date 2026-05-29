import Link from 'next/link'
import { PRINCIPLES, PHASES } from '@/lib/content'

export const metadata = { title: 'The Plan — America First' }

export default function PlanPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link href="/" className="crumb">★ Home</Link>
          <p className="kicker">A program for a once-in-a-generation reformer</p>
          <h1>The Plan: Cleanse, Rebuild, Rewrite.</h1>
          <p className="thesis">Massive change, fully inside the law. No vendettas, no show trials — separation of powers, due process, and the Constitution at every step. Three phases, fifteen years.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <div className="block">
            <div className="block-label">What the reformer is bound by</div>
            <h2>Core principles.</h2>
            <p className="intro">Power without limits is just a new corruption. These are the anchors the whole program is held to.</p>
            <div className="grid-3">
              {PRINCIPLES.map((p) => (
                <div className="card" key={p.h}>
                  <h4>{p.h}</h4>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="block">
            <div className="block-label">The Three Phases</div>
            <h2>From stopping the bleeding to rewriting the rules.</h2>
            {PHASES.map((ph) => (
              <div className="phase-detail" key={ph.no}>
                <div className="ph-no">{ph.no}</div>
                <h3>{ph.name}</h3>
                <div className="yrs">{ph.yrs}</div>
                <p className="intro">{ph.intro}</p>
                <ul>
                  {ph.items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="principle-banner">
            <span className="lab">The Banner Over All Of It</span>
            We stop selling our people out to foreign states, war industries, and global corporations — and we don&rsquo;t let outsiders or oligarchs write our laws.
          </div>
        </div>
      </section>

      <section className="page-foot-cta">
        <div className="wrap">
          <h3>See how the Plan meets each issue.</h3>
          <Link href="/issues" className="btn btn-red">Explore the Issues</Link>
        </div>
      </section>
    </>
  )
}
