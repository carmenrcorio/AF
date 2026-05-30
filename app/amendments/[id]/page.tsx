import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { ISSUES } from '@/lib/content'
import VoteBox from './VoteBox'

export const dynamic = 'force-dynamic'

type Amendment = {
  id: number
  title: string
  issue_slug: string | null
  change_text: string | null
  problem: string | null
  affects: string | null
  objection: string | null
  provision_id: number | null
  created_at: string
}

type Provision = { id: number; label: string; original_text: string; plain_text: string | null }

export default async function AmendmentDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const numId = Number(id)
  if (!Number.isFinite(numId)) notFound()

  let a: Amendment | null = null
  let provision: Provision | null = null
  let tally = { for_count: 0, against_count: 0, abstain_count: 0, total_votes: 0 }

  try {
    const supabase = await createClient()
    const { data } = await supabase.from('amendments').select('*').eq('id', numId).maybeSingle()
    a = data as Amendment | null
    const { data: t } = await supabase.from('amendment_tallies').select('*').eq('amendment_id', numId).maybeSingle()
    if (t) tally = t as typeof tally
    if (a?.provision_id) {
      const { data: pv } = await supabase
        .from('constitution_provisions')
        .select('id,label,original_text,plain_text')
        .eq('id', a.provision_id)
        .maybeSingle()
      provision = pv as Provision | null
    }
  } catch {
    notFound()
  }

  if (!a) notFound()
  const issue = ISSUES.find((i) => i.slug === a!.issue_slug)

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link href="/amendments" className="crumb">★ Amendments</Link>
          {issue && <p className="kicker">{issue.title}</p>}
          <h1>{a.title}</h1>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <VoteBox amendmentId={a.id} initial={tally} />

          {provision && (
            <div className="anchor-prov">
              <div className="block-label">Amends this provision</div>
              <Link href="/constitution" className="anchor-prov-label">{provision.label} ↗</Link>
              <p className="anchor-prov-text">{provision.original_text}</p>
              {provision.plain_text && (
                <p className="anchor-prov-plain"><span className="tag">Plain English</span> {provision.plain_text}</p>
              )}
            </div>
          )}

          <div className="amend-detail">
            <div className="ad-block"><div className="block-label">The Change</div><p>{a.change_text}</p></div>
            <div className="ad-block"><div className="block-label">The Problem It Solves</div><p>{a.problem}</p></div>
            <div className="ad-block"><div className="block-label">Who It Affects</div><p>{a.affects}</p></div>
            <div className="ad-block ad-objection"><div className="block-label">The Strongest Objection</div><p>{a.objection}</p></div>
          </div>

          {issue && (
            <div className="page-foot-cta" style={{ marginTop: 40, borderRadius: 0 }}>
              <h3>More on this issue</h3>
              <Link href={`/issues/${issue.slug}`} className="btn btn-red">Read: {issue.title}</Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
