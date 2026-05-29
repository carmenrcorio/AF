'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PREAMBLE } from '@/lib/content'

export default function ConstitutionPage() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link href="/" className="crumb">★ Home</Link>
          <p className="kicker">The Living Constitution</p>
          <h1>The original — preserved. The meaning — made plain.</h1>
          <p className="thesis">Read the founding document exactly as written, word for word, so there&rsquo;s never a question of its legitimacy. Tap any phrase to reveal its meaning in modern, plain English. The original is never altered — only illuminated.</p>
        </div>
      </section>

      <section className="const-page">
        <div className="wrap">
          <div className="const-doc">
            <div className="doc-label">Preamble</div>
            <div className="preamble">
              {PREAMBLE.map((w, i) => (
                <span key={i} className={`pw${active === i ? ' active' : ''}`} onClick={() => setActive(i)}>
                  {w.t}{' '}
                </span>
              ))}
            </div>
            <div className="plain">
              <span className="tag">Plain English</span>
              <span>{active === null ? 'Tap any underlined phrase above to see what it means in today\u2019s language.' : PREAMBLE[active].p}</span>
            </div>

            <div className="coming">
              <b>The full text is being added next.</b> Every Article, Section, and Amendment will appear here verbatim, each paired with a plain-English explanation you can reveal the same way. We&rsquo;re entering and reviewing it carefully — the legitimacy of the document depends on getting every word exactly right.
            </div>
          </div>
        </div>
      </section>

      <section className="page-foot-cta">
        <div className="wrap">
          <h3>Have an idea for an amendment?</h3>
          <Link href="/#join" className="btn btn-red">Propose One</Link>
        </div>
      </section>
    </>
  )
}
