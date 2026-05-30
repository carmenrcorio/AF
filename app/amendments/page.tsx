import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { ISSUES } from '@/lib/content'

export const metadata = { title: 'Amendments — America First' }
export const dynamic = 'force-dynamic'

type Row = {
  id: number
  title: string
  issue_slug: string | null
  problem: string | null
  created_at: string
}
type Tally = { amendment_id: number; for_count: number; against_count: number; abstain_count: number; total_votes: number }

function issueTitle(slug: string | null) {
  return ISSUES.find((i) => i.slug === slug)?.title ?? 'General'
}

export default async function AmendmentsPage() {
  let rows: Row[] = []
  let tallies: Record<number, Tally> = {}
  let dbReady = true

  try {
    const supabase = await createClient()
    const { data: a } = await supabase
      .from('amendments')
      .select('id,title,issue_slug,problem,created_at')
      .eq('status', 'open')
      .order('created_at', { ascending: false })
    rows = a ?? []
    const { data: t } = await supabase.from('amendment_tallies').select('*')
    for (const row of (t as Tally[] | null) ?? []) tallies[row.amendment_id] = row
  } catch {
    dbReady = false
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link href="/" className="crumb">★ Home</Link>
          <p className="kicker">The law, written in the open</p>
          <h1>Amendments.</h1>
          <p className="thesis">Real proposals from verified citizens — each one reasoned through, each one open to a vote. For, against, or abstain: every voice counts once. This is the part we&rsquo;ve never really done as a country.</p>
          <div style={{ marginTop: 28 }}>
            <Link href="/amendments/propose" className="btn btn-red">Propose an amendment</Link>
          </div>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          {rows.length === 0 && (
            <div className="empty-state">
              <div className="auth-seal">★</div>
              <h3>No amendments yet — be the first.</h3>
              <p>{dbReady
                ? 'The table is empty. The first proposal sets the tone: think it through, make it count.'
                : 'Amendments will appear here once the backend connection is live on this deployment.'}</p>
              <Link href="/amendments/propose" className="btn btn-red">Propose the first one</Link>
            </div>
          )}

          {rows.map((r) => {
            const t = tallies[r.id]
            return (
              <Link href={`/amendments/${r.id}`} className="amend-card" key={r.id}>
                <div className="amend-tag">{issueTitle(r.issue_slug)}</div>
                <h3>{r.title}</h3>
                {r.problem && <p className="amend-prob">{r.problem}</p>}
                <div className="amend-tally">
                  <span className="t-for">For {t?.for_count ?? 0}</span>
                  <span className="t-against">Against {t?.against_count ?? 0}</span>
                  <span className="t-abstain">Abstain {t?.abstain_count ?? 0}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
