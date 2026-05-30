import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

type Candidate = {
  id: number
  name: string
  office: string | null
  state: string | null
  party: string | null
  status: string | null
  bio: string | null
  congress_url: string | null
  opensecrets_url: string | null
  govtrack_url: string | null
  libertyscore_url: string | null
  trackaipac_url: string | null
  fec_url: string | null
}

type Record = {
  id: number
  kind: string
  summary: string
  detail: string | null
  source_name: string
  source_url: string
  record_date: string | null
  display_order: number
}

const KIND_LABEL: globalThis.Record<string, string> = {
  vote: 'Vote',
  trade: 'Trade',
  donation: 'Donor',
  position: 'Position',
  quote: 'On the record',
}

export default async function ScorecardDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: c } = await supabase
    .from('candidates')
    .select('*')
    .eq('id', id)
    .single()

  if (!c) notFound()
  const cand = c as Candidate

  const { data: recData } = await supabase
    .from('candidate_records')
    .select('id,kind,summary,detail,source_name,source_url,record_date,display_order')
    .eq('candidate_id', id)
    .order('display_order', { ascending: true })
  const records = (recData ?? []) as Record[]

  const externalLinks = [
    { label: 'Congress.gov', url: cand.congress_url },
    { label: 'GovTrack', url: cand.govtrack_url },
    { label: 'OpenSecrets (donors)', url: cand.opensecrets_url },
    { label: 'FEC filings', url: cand.fec_url },
    { label: 'LibertyScore', url: cand.libertyscore_url },
    { label: 'TrackAIPAC', url: cand.trackaipac_url },
  ].filter((l) => l.url)

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link href="/scorecards" className="back-link">← All scorecards</Link>
          <div className="score-detail-head">
            <span className={`party-dot lg ${cand.party === 'Republican' ? 'r' : cand.party === 'Democrat' ? 'd' : 'i'}`} />
            <div>
              <h1>{cand.name}</h1>
              <p className="score-meta">{cand.office}{cand.state ? ` · ${cand.state}` : ''}{cand.party ? ` · ${cand.party}` : ''}</p>
            </div>
          </div>
          {cand.bio && <p className="page-lede">{cand.bio}</p>}
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <div className="method-note">
            <strong>No grade here — on purpose.</strong> This is the public record, aggregated and linked.
            We don&rsquo;t assign a score until we publish an open methodology you can check.
          </div>

          <h2 className="rec-h">The record</h2>
          {records.length === 0 && (
            <p className="rec-empty">Sourced records for this official are being added. Check back soon.</p>
          )}
          <div className="rec-list">
            {records.map((r) => (
              <div className="rec-item" key={r.id}>
                <div className="rec-kind">{KIND_LABEL[r.kind] ?? r.kind}{r.record_date ? ` · ${r.record_date}` : ''}</div>
                <h4>{r.summary}</h4>
                {r.detail && <p>{r.detail}</p>}
                <a className="rec-source" href={r.source_url} target="_blank" rel="noopener noreferrer">
                  {r.source_name} ↗
                </a>
              </div>
            ))}
          </div>

          {externalLinks.length > 0 && (
            <>
              <h2 className="rec-h">Verify it yourself</h2>
              <div className="ext-links">
                {externalLinks.map((l) => (
                  <a key={l.label} href={l.url!} target="_blank" rel="noopener noreferrer" className="ext-link">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
