import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

type Row = { id: number; title: string }

export default async function IssueAmendments({ slug }: { slug: string }) {
  let rows: Row[] = []
  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from('amendments')
      .select('id,title')
      .eq('status', 'open')
      .eq('issue_slug', slug)
      .order('created_at', { ascending: false })
      .limit(4)
    rows = data ?? []
  } catch {
    rows = []
  }

  return (
    <div className="block">
      <div className="block-label">Proposed Amendments</div>
      <h2>What citizens are proposing here.</h2>
      {rows.length === 0 ? (
        <p className="intro">No amendments on this issue yet. If you&rsquo;ve thought one through, put it on the table.</p>
      ) : (
        <div className="iss-amend-list">
          {rows.map((r) => (
            <Link href={`/amendments/${r.id}`} className="iss-amend" key={r.id}>
              <span className="ia-star">★</span>
              <span className="ia-title">{r.title}</span>
              <span className="ia-go">View &amp; vote →</span>
            </Link>
          ))}
        </div>
      )}
      <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Link href="/amendments/propose" className="btn btn-red">Propose an amendment</Link>
        <Link href="/amendments" className="btn btn-ghost" style={{ color: 'var(--ink)', borderColor: 'var(--gold)' }}>See all amendments</Link>
      </div>
    </div>
  )
}
