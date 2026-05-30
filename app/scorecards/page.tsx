import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import ScorecardBrowser, { type Candidate } from './ScorecardBrowser'

export const metadata = { title: 'Scorecards — America First' }
export const dynamic = 'force-dynamic'

export default async function ScorecardsPage() {
  let candidates: Candidate[] = []
  let dbReady = true
  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from('candidates')
      .select('id,name,office,chamber,state,party,bio')
      .order('name', { ascending: true })

    const { data: recs } = await supabase
      .from('candidate_records')
      .select('candidate_id')
    const counts: Record<number, number> = {}
    for (const r of recs ?? []) {
      const cid = (r as { candidate_id: number }).candidate_id
      counts[cid] = (counts[cid] ?? 0) + 1
    }

    candidates = (data ?? []).map((c) => ({
      ...(c as Omit<Candidate, 'record_count'>),
      record_count: counts[(c as { id: number }).id] ?? 0,
    }))
  } catch {
    dbReady = false
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="overline overline-block">Candidate Accountability</span>
          <h1>The receipts on the people in power.</h1>
          <p className="page-lede">
            Every member of Congress, in one place. We don&rsquo;t assign grades we can&rsquo;t defend —
            each profile gathers the public record and links straight to the source, so you can verify
            every line yourself.
          </p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <div className="method-note">
            <strong>How to read this:</strong> These are <em>aggregated public records and official links</em>,
            not our opinion. Most profiles currently link out to each member&rsquo;s voting record, donors, and
            filings; a growing set add sourced summaries on top. When we publish a scoring methodology, it will
            be open and checkable — no fabricated grades.
          </div>

          {candidates.length === 0 && (
            <div className="empty-state">
              <div className="auth-seal">★</div>
              <h3>The roster is being loaded.</h3>
              <p>{dbReady
                ? 'Member profiles are being imported now. Every profile links to the official public record.'
                : 'Profiles will appear here once the backend connection is live on this deployment.'}</p>
              <Link href="/join" className="btn btn-red">Help research your district</Link>
            </div>
          )}

          {candidates.length > 0 && <ScorecardBrowser candidates={candidates} />}
        </div>
      </section>
    </>
  )
}
