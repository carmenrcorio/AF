import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ISSUES, getIssue } from '@/lib/content'

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
            <div className="sourcing">
              <b>By the numbers — coming soon.</b> The supporting statistics for this issue are being verified against primary sources before they go live, so every figure on this page links back to where it came from. That&rsquo;s our promise: nothing stated as fact that you can&rsquo;t check yourself.
            </div>
          </div>
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
