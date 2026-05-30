import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export const metadata = { title: 'Scorecards — America First' }
export const dynamic = 'force-dynamic'

type Candidate = {
  id: number
  name: string
  office: string | null
  state: string | null
  party: string | null
  status: string | null
  bio: string | null
}

export default async function ScorecardsPage() {
  let rows: Candidate[] = []
  let dbReady = true
  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from('candidates')
      .select('id,name,office,state,party,status,bio')
      .order('name', { ascending: true })
    rows = data ?? []
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
            No grades we can&rsquo;t defend. Each profile gathers the public record — key votes, trades,
            donors, and positions — and links straight to the source so you can verify every line yourself.
          </p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <div className="method-note">
            <strong>How to read this:</strong> These are <em>aggregated public records</em>, not our opinion.
            We don&rsquo;t assign a rating yet — when we publish a scoring methodology, it will be open and
            sourced, and you&rsquo;ll be able to check our math. For now: just the facts, with links.
          </div>

          {rows.length === 0 && (
            <div className="empty-state">
              <div className="auth-seal">★</div>
              <h3>Profiles are being researched — the right way.</h3>
              <p>{dbReady
                ? 'The first sourced profiles are going up now. Every claim links to a primary source. Verified members will be able to help research their own districts.'
                : 'Profiles will appear here once the backend connection is live on this deployment.'}</p>
              <Link href="/join" className="btn btn-red">Help research your district</Link>
            </div>
          )}

          {rows.length > 0 && (
            <div className="score-grid">
              {rows.map((c) => (
                <Link href={`/scorecards/${c.id}`} className="score-card" key={c.id}>
                  <div className="score-top">
                    <span className={`party-dot ${c.party === 'Republican' ? 'r' : c.party === 'Democrat' ? 'd' : 'i'}`} />
                    <span className="score-office">{c.office}{c.state ? ` · ${c.state}` : ''}</span>
                  </div>
                  <h3>{c.name}</h3>
                  {c.bio && <p>{c.bio}</p>}
                  <span className="score-link">See the record →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
