import Link from 'next/link'
import { PROBLEM_CLUSTERS, CAPTURE_STATS, BOTH_SIDES } from '@/lib/content'

export const metadata = { title: 'The Problem — America First' }

export default function ProblemPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link href="/" className="crumb">★ Home</Link>
          <p className="kicker">The Root of It All</p>
          <h1>We don&rsquo;t have a government of the people anymore. We have one that&rsquo;s been bought.</h1>
          <p className="thesis">Before we can fix healthcare, wages, housing, or the border, we have to answer one question: who actually owns the government? Right now the answer isn&rsquo;t us — it&rsquo;s corporations at home and powers abroad, and both parties depend on keeping it that way.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <div className="block">
            <div className="block-label">The Two Owners</div>
            <h2>Bought at home, bought from abroad.</h2>
            <p className="intro">The capture runs on two tracks at once. Naming them is the first step to cutting them off.</p>
            <div className="grid-2">
              <div className="card">
                <h4>Corporate Capture</h4>
                <p>Industry doesn&rsquo;t just lobby the government — it staffs it, funds it, and writes its rules through the lobbying complex, the revolving door, dark money, insider stock trading, and buybacks that reward shareholders while wages stall.</p>
              </div>
              <div className="card profit">
                <h4>Foreign Capture</h4>
                <p>Foreign states and foreign-funded interests pay to bend American policy: foreign-aligned lobbies inside the Capitol, money laundered through shell nonprofits, forever wars that serve foreign patrons, and enforcement laws that already exist but go unused.</p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="block-label">The Wider Inventory</div>
            <h2>The systems that bleed us.</h2>
            <p className="intro">Capture at the top enables extraction everywhere below it. These are the engines — and every one of them has a fix in the Plan.</p>
            {PROBLEM_CLUSTERS.map((c) => (
              <div key={c.h} style={{ marginBottom: 18 }}>
                <div className="card">
                  <h4>{c.h}</h4>
                  <p style={{ marginBottom: 14 }}>{c.d}</p>
                  <div className="grid-3">
                    {c.items.map((it) => (
                      <div className="card" key={it} style={{ background: 'var(--parchment)' }}>
                        <p style={{ color: 'var(--ink)' }}>{it}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="block">
            <div className="block-label">By the Numbers</div>
            <h2>The receipts.</h2>
            <div className="stat-grid">
              {CAPTURE_STATS.map((st, i) => (
                <div className="stat" key={i}>
                  <div className="stat-value">{st.value}</div>
                  <div className="stat-label">{st.label}</div>
                  <a className="stat-source" href={st.url} target="_blank" rel="noopener noreferrer">{st.source}{st.note ? ` · ${st.note}` : ''} ↗</a>
                </div>
              ))}
            </div>
            <p className="stat-promise">★ Every figure links to its primary source.</p>
          </div>

          <div className="block">
            <div className="block-label">Two Parties, Same Demons</div>
            <h2>This isn&rsquo;t a left or right problem.</h2>
            <p className="intro">The people who profit from the rigged system sit in both parties — and both protect it. We name names on all sides, and we source every word. The enemy isn&rsquo;t the other tribe; it&rsquo;s the machine both tribes feed.</p>
            <div className="receipts">
              {BOTH_SIDES.map((r, i) => (
                <div className={`receipt side-${r.side.toLowerCase()}`} key={i}>
                  <div className="receipt-head">
                    <span className="receipt-side">{r.side}</span>
                    <span className="receipt-who">{r.who}</span>
                  </div>
                  <p className="receipt-claim">{r.claim}</p>
                  <a className="stat-source" href={r.url} target="_blank" rel="noopener noreferrer">{r.source}{r.note ? ` · ${r.note}` : ''} ↗</a>
                </div>
              ))}
            </div>
            <p className="stat-promise">★ Quotes are kept in full context and every claim links to its source. We refuse to win by distortion.</p>
          </div>

          <div className="principle-banner">
            <span className="lab">The Bottom Line</span>
            Every institution that chants &ldquo;America First&rdquo; while feeding off the people it claims to protect is the problem we exist to end.
          </div>
        </div>
      </section>

      <section className="page-foot-cta">
        <div className="wrap">
          <h3>Now see how we cut it off.</h3>
          <Link href="/plan" className="btn btn-red">Read the Plan</Link>
        </div>
      </section>
    </>
  )
}
