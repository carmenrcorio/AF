import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ISSUES, getIssue, STATS, ISSUE_RECEIPTS } from '@/lib/content'
import IssueAmendments from '@/app/components/IssueAmendments'

export function generateStaticParams() {
  return ISSUES.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const issue = getIssue(slug)
  return { title: issue ? `${issue.title} — America First` : 'America First' }
}

export default async function IssuePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const issue = getIssue(slug)
  if (!issue) notFound()

  const stats = STATS[slug] ?? []
  const receipts = ISSUE_RECEIPTS[slug] ?? []
  const idx = ISSUES.findIndex((i) => i.slug === slug)
  const next = ISSUES[(idx + 1) % ISSUES.length]

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link href="/issues" className="crumb">★ The Issues</Link>
          <p className="kicker">{issue.num}. {issue.kicker}</p>
          <h1>{issue.title}</h1>
          <p className="thesis">{issue.thesis}</p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <div className="principle-banner" style={{ marginBottom: 56 }}>
            <span className="lab">Our Principle</span>
            {issue.principle}
          </div>

          <div className="block">
            <div className="block-label">The Fuller Picture</div>
            <p className="context-lead">{issue.context}</p>
          </div>

          <div className="block">
            <div className="block-label">The Real Problem</div>
            <h2>What&rsquo;s actually broken.</h2>
            <div className="grid-2">
              {issue.problems.map((p) => (
                <div className="card" key={p.h}>
                  <h4>{p.h}</h4>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="block">
            <div className="block-label">Follow the Money</div>
            <h2>Who profits from keeping it this way.</h2>
            <div className="grid-3">
              {issue.profiteers.map((p) => (
                <div className="card profit" key={p.h}>
                  <h4>{p.h}</h4>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="block">
            <div className="block-label">The Fix</div>
            <h2>A phased plan, inside the law.</h2>
            <div className="fix-grid">
              <div className="fix-col">
                <div className="ph">PHASE I</div><div className="nm">The Cleanse</div>
                <ul>{issue.fix.p1.map((x, i) => <li key={i}>{x}</li>)}</ul>
              </div>
              <div className="fix-col">
                <div className="ph">PHASE II</div><div className="nm">The Rebuild</div>
                <ul>{issue.fix.p2.map((x, i) => <li key={i}>{x}</li>)}</ul>
              </div>
              <div className="fix-col">
                <div className="ph">PHASE III</div><div className="nm">The Rewrite</div>
                <ul>{issue.fix.p3.map((x, i) => <li key={i}>{x}</li>)}</ul>
              </div>
            </div>
            {stats.length > 0 ? (
              <div className="bythenumbers">
                <div className="block-label" style={{ marginTop: 8 }}>By the Numbers</div>
                <div className="stat-grid">
                  {stats.map((st, i) => (
                    <div className="stat" key={i}>
                      <div className="stat-value">{st.value}</div>
                      <div className="stat-label">{st.label}</div>
                      <a className="stat-source" href={st.url} target="_blank" rel="noopener noreferrer">
                        {st.source}{st.note ? ` · ${st.note}` : ''} ↗
                      </a>
                    </div>
                  ))}
                </div>
                <p className="stat-promise">★ Every figure links to its primary source. If a number changes, we change it here.</p>
              </div>
            ) : (
              <div className="sourcing">
                <b>By the numbers — sourcing in progress.</b> The statistics for this issue are being verified against primary sources before they go live, so every figure links back to where it came from. Nothing is stated as fact that you can&rsquo;t check yourself.
              </div>
            )}
          </div>
          {receipts.length > 0 && (
            <div className="block">
              <div className="block-label">Both Sides Feed This</div>
              <h2>Neither party’s hands are clean.</h2>
              <p className="intro">The machine isn’t left or right — it’s the people in both parties who profit from leaving it broken. Here’s the proof, in context, with sources.</p>
              <div className="receipts">
                {receipts.map((r, i) => (
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
            </div>
          )}

          <IssueAmendments slug={issue.slug} />
        </div>
      </section>

      <section className="page-foot-cta">
        <div className="wrap">
          <h3>Next: {next.title}</h3>
          <Link href={`/issues/${next.slug}`} className="btn btn-red">Continue →</Link>
        </div>
      </section>
    </>
  )
}
