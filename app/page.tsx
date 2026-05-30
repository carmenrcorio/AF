'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PREAMBLE, ISSUES, PHASES } from '@/lib/content'

export default function Home() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="glowred" />
        <div className="glowgold" />
        <svg className="stars" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <g fill="#D9C18C" opacity="0.6">
            <circle cx="120" cy="80" r="1.3" /><circle cx="340" cy="140" r="1" /><circle cx="560" cy="60" r="1.4" />
            <circle cx="800" cy="120" r="1" /><circle cx="980" cy="70" r="1.3" /><circle cx="1080" cy="200" r="1" />
            <circle cx="220" cy="240" r="1" /><circle cx="60" cy="340" r="1.2" /><circle cx="1140" cy="380" r="1" />
            <circle cx="900" cy="320" r="1.1" /><circle cx="440" cy="300" r="0.9" /><circle cx="700" cy="420" r="1" />
          </g>
        </svg>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="overline rv d1">A Crowdsourced Movement to Reclaim the Republic</span>
              <h1 className="rv d2">Clean house.<br />Rebuild the <span className="red">republic.</span><br />Return power to <em>the people.</em></h1>
              <p className="lede rv d3">The system is rigged — and both parties profit from keeping it that way. <b>America First: The Only Way</b> is a constitution-respecting, citizen-built plan to end the corruption, hold every official accountable, and put working Americans ahead of lobbies, donors, and global corporations.</p>
              <div className="cta-row rv d4">
                <Link href="/plan" className="btn btn-red">Read the Plan</Link>
                <Link href="/amendments/propose" className="btn btn-ghost">Propose an Amendment</Link>
              </div>
            </div>
            <div className="pledge-card rv d5">
              <span className="overline">The Pledge</span>
              <p>&ldquo;We stop selling our people out to foreign states, war industries, and global corporations. We still do justice and love mercy — but we don&rsquo;t let outsiders or oligarchs write our laws.&rdquo;</p>
              <div className="sig">— The Founding Charter</div>
            </div>
          </div>
          <div className="ticker rv d5">
            <div className="it"><div className="num">3</div><div className="lab">Phases of Reform</div></div>
            <div className="it"><div className="num">8</div><div className="lab">Issues, One Standard</div></div>
            <div className="it"><div className="num">100%</div><div className="lab">Sourced &amp; Verifiable</div></div>
            <div className="it"><div className="num">1:1</div><div className="lab">One Citizen · One Vote</div></div>
          </div>
        </div>
      </section>

      {/* THE CAPTURE */}
      <section className="capture" id="problem">
        <div className="wrap">
          <div className="capture-lead">
            <div className="divider-seal"><span /><span className="star">★</span><span /></div>
            <span className="overline overline-block">The Root of It All</span>
            <blockquote>We don&rsquo;t have a government <span className="red">of the people</span> anymore.<br />We have one that&rsquo;s been <span className="red">bought.</span></blockquote>
            <p>This is the source of every other problem on this site. Before we can fix healthcare, wages, housing, or the border, we have to answer one question: <b>who actually owns the government?</b> Right now the answer isn&rsquo;t us — it&rsquo;s corporations at home and powers abroad, and both parties depend on keeping it that way.</p>
          </div>
          <div className="pillars">
            <div className="pillar">
              <div className="pl-tag">Bought at Home</div>
              <h3>Corporate Capture</h3>
              <div className="pl-sub">Industry doesn&rsquo;t just lobby the government — it staffs it, funds it, and writes its rules.</div>
              <ul>
                <li><b>The lobbying complex</b> Billions spent every year so the regulated end up writing their own regulations.</li>
                <li><b>The revolving door</b> Officials police an industry, leave to be paid by it, then return to govern it again.</li>
                <li><b>Dark money</b> &ldquo;Independent&rdquo; groups flood elections with cash no voter can ever trace.</li>
                <li><b>Insider stock trading</b> Members of Congress still trade on information the public never gets to see.</li>
                <li><b>Buybacks over workers</b> Record profits routed to shareholders and CEO pay while wages stall for decades.</li>
              </ul>
            </div>
            <div className="pillar">
              <div className="pl-tag">Bought from Abroad</div>
              <h3>Foreign Capture</h3>
              <div className="pl-sub">Foreign states and foreign-funded interests pay to bend American policy toward their agenda — not ours.</div>
              <ul>
                <li><b>Foreign-aligned lobbies</b> Organizations whose real mission is advancing another country&rsquo;s interests inside our Capitol.</li>
                <li><b>Money through the back door</b> Foreign cash routed through shell nonprofits and into U.S. elections.</li>
                <li><b>Forever wars</b> Conflicts and arms deals that enrich contractors and serve foreign patrons over American families.</li>
                <li><b>Aid that boomerangs</b> &ldquo;Foreign aid&rdquo; that must be spent right back on the donor nation&rsquo;s industries and weapons.</li>
                <li><b>Toothless enforcement</b> The laws against foreign influence already exist — they&rsquo;re just barely enforced.</li>
              </ul>
            </div>
          </div>
          <div className="capture-fix">
            <p>Phase I cuts <span className="g">both pipelines at once</span> — supercharged foreign-agent transparency, a hard foreign-money firewall, a ban on insider stock trading, and real-time donor disclosure.</p>
            <Link href="/plan" className="btn btn-red">See How We Cut It Off</Link>
          </div>
        </div>
      </section>

      {/* PHASES */}
      <section className="phases" id="plan">
        <div className="wrap">
          <div className="sec-head">
            <span className="overline">The Plan</span>
            <h2>A program for a once-in-a-generation reformer.</h2>
            <p>Massive change, fully inside the law. No vendettas, no show trials — separation of powers, due process, and the Constitution at every step. Three phases, fifteen years.</p>
          </div>
          <div className="phase-grid">
            {PHASES.map((ph) => (
              <div className="phase" key={ph.no}>
                <div className="ph-no">{ph.no}</div>
                <h3>{ph.name}</h3>
                <div className="yrs">{ph.yrs}</div>
                <ul>
                  {ph.items.slice(0, 4).map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <Link href="/plan" className="btn btn-red">Read the Full Plan</Link>
          </div>
        </div>
      </section>

      {/* ISSUES */}
      <section className="issues" id="issues">
        <div className="wrap">
          <div className="sec-head">
            <span className="overline">The Issues</span>
            <h2>Eight battlegrounds. One honest standard.</h2>
            <p>Each issue, written the same way: the real problem, who profits from it, and a phased fix — with every fact sourced. No tribe gets a pass.</p>
          </div>
          <div className="issue-grid">
            {ISSUES.map((iss) => (
              <Link className="issue" href={`/issues/${iss.slug}`} key={iss.slug}>
                <div className="ic">{iss.num}.</div>
                <h4>{iss.title}</h4>
                <p>{iss.principle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONSTITUTION */}
      <section className="const" id="constitution">
        <div className="wrap">
          <div className="const-grid">
            <div>
              <span className="overline">The Living Constitution</span>
              <h2 className="const-title">The original — preserved. The meaning — made plain.</h2>
              <p className="const-copy">Read the founding document exactly as written, word for word. Tap any clause to reveal its meaning in modern, plain English — so there&rsquo;s never a question of what it says, or what it means.</p>
              <p className="const-try">→ Try it: tap the highlighted phrases.</p>
              <Link href="/constitution" className="btn btn-red const-cta">Open the Full Constitution</Link>
            </div>
            <div className="const-demo">
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
                <span>{active === null ? 'Tap any underlined phrase above to see what it means in today’s language.' : PREAMBLE[active].p}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CANDIDATES */}
      <section className="cand" id="candidates">
        <div className="wrap">
          <div className="sec-head">
            <span className="overline">Candidate Accountability</span>
            <h2>Know the right people. Support them — wherever you live.</h2>
            <p>An honest scorecard for every representative and candidate. We grade them against the Plan, show who funds them, and link straight to the records — so cleaning house starts with knowing who&rsquo;s in the house.</p>
          </div>
          <div className="cand-soon">
            <div className="cand-soon-seal">★</div>
            <h3>The scorecard is being built — the right way.</h3>
            <p>We&rsquo;re not posting a single rating until it&rsquo;s real and sourced. Every profile will grade officials against the Plan and link straight to the records — <b>LibertyScore</b>, <b>TrackAIPAC</b>, and public <b>FEC filings</b> — so you can verify every claim yourself. No placeholders, no fabricated grades. That&rsquo;s the whole point of this movement.</p>
            <p className="cand-soon-note">Want to help research your district? Verified members will be able to contribute. Join below.</p>
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section className="join" id="join">
        <div className="wrap">
          <span className="overline join-overline">One Citizen, One Voice</span>
          <h2>This won&rsquo;t be written by donors.<br />It&rsquo;ll be written by us.</h2>
          <p>Verify with your phone, propose amendments, and vote on the ones that should become law. A movement for a new generation of Americans who are done being sold out — and ready to build something better.</p>
          <div className="cta-row">
            <Link href="/join" className="btn btn-cream">Create Your Account</Link>
            <Link href="/amendments" className="join-textlink">See open amendments →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
