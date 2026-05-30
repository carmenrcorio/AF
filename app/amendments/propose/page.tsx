'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { ISSUES } from '@/lib/content'

const MIN = { title: 12, change_text: 60, problem: 60, affects: 40, objection: 40 }

type Form = {
  title: string
  issue_slug: string
  change_text: string
  problem: string
  affects: string
  objection: string
  change_kind: string
  provision_id: string
}

type Provision = { id: number; type: string; label: string }

const EMPTY: Form = { title: '', issue_slug: '', change_text: '', problem: '', affects: '', objection: '', change_kind: 'amend', provision_id: '' }

export default function ProposePage() {
  const [f, setF] = useState<Form>(EMPTY)
  const [stage, setStage] = useState<'edit' | 'review' | 'done' | 'gated'>('edit')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)
  const [provisions, setProvisions] = useState<Provision[]>([])

  useEffect(() => {
    const supabase = createClient()
    supabase
      .from('constitution_provisions')
      .select('id,type,label')
      .in('type', ['article', 'amendment'])
      .order('display_order', { ascending: true })
      .then(({ data }) => { if (data) setProvisions(data as Provision[]) })
  }, [])

  function set<K extends keyof Form>(k: K, v: string) {
    setF((prev) => ({ ...prev, [k]: v }))
  }

  function problems(): string[] {
    const out: string[] = []
    if (f.title.trim().length < MIN.title) out.push(`Title needs at least ${MIN.title} characters.`)
    if (!f.issue_slug) out.push('Choose the issue this amendment addresses.')
    if (f.change_text.trim().length < MIN.change_text) out.push(`"The change" needs at least ${MIN.change_text} characters.`)
    if (f.problem.trim().length < MIN.problem) out.push(`"The problem it solves" needs at least ${MIN.problem} characters.`)
    if (f.affects.trim().length < MIN.affects) out.push(`"Who it affects" needs at least ${MIN.affects} characters.`)
    if (f.objection.trim().length < MIN.objection) out.push(`"The strongest objection" needs at least ${MIN.objection} characters.`)
    return out
  }

  function toReview() {
    const p = problems()
    if (p.length) { setErr(p[0]); return }
    setErr('')
    setStage('review')
  }

  async function submit() {
    setLoading(true)
    setErr('')
    const supabase = createClient()
    const { data: auth } = await supabase.auth.getUser()
    if (!auth.user) { setLoading(false); setStage('gated'); return }
    const { error } = await supabase.from('amendments').insert({
      user_id: auth.user.id,
      title: f.title.trim(),
      issue_slug: f.issue_slug,
      change_text: f.change_text.trim(),
      problem: f.problem.trim(),
      affects: f.affects.trim(),
      objection: f.objection.trim(),
      body: f.change_text.trim(),
      status: 'open',
      provision_id: f.change_kind === 'amend' && f.provision_id ? Number(f.provision_id) : null,
    })
    setLoading(false)
    if (error) { setErr(error.message); setStage('edit'); return }
    setStage('done')
  }

  const issueTitle = ISSUES.find((i) => i.slug === f.issue_slug)?.title

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link href="/amendments" className="crumb">★ Amendments</Link>
          <p className="kicker">Write it like it matters</p>
          <h1>Propose an amendment.</h1>
          <p className="thesis">This is the part we&rsquo;ve never really done as a country: think hard about the law before we demand it. Every field below is required — not to slow you down, but to make sure what you propose is something you&rsquo;ve actually reasoned through. Half-formed ideas don&rsquo;t become law here.</p>
        </div>
      </section>

      <section className="join-page">
        <div className="wrap" style={{ maxWidth: 720 }}>
          {stage === 'edit' && (
            <div className="auth-card">
              <h2 className="auth-title">Your proposal</h2>
              <p className="auth-sub">Be specific and intentional. You&rsquo;ll review everything before it&rsquo;s submitted.</p>

              <label className="fld">
                <span>Title — name the change in one sentence</span>
                <input value={f.title} onChange={(e) => set('title', e.target.value)} placeholder="e.g. Ban individual stock trading by members of Congress" />
              </label>

              <label className="fld">
                <span>What it addresses</span>
                <select value={f.issue_slug} onChange={(e) => set('issue_slug', e.target.value)}>
                  <option value="">— choose an issue —</option>
                  {ISSUES.map((i) => <option key={i.slug} value={i.slug}>{i.title}</option>)}
                </select>
              </label>

              <label className="fld">
                <span>Does this change the Constitution?</span>
                <select value={f.change_kind} onChange={(e) => set('change_kind', e.target.value)}>
                  <option value="amend">Yes — it amends an existing provision</option>
                  <option value="new">Yes — it adds a brand-new article/amendment</option>
                  <option value="statute">No — it&rsquo;s a law/policy, not a constitutional change</option>
                </select>
                <small className="fld-hint">Anchoring to a specific clause makes your proposal concrete — and shows exactly what text would change.</small>
              </label>

              {f.change_kind === 'amend' && (
                <label className="fld">
                  <span>Which provision does it amend?</span>
                  <select value={f.provision_id} onChange={(e) => set('provision_id', e.target.value)}>
                    <option value="">— choose a provision —</option>
                    {provisions.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
                  </select>
                </label>
              )}

              <label className="fld">
                <span>The change — write it as you&rsquo;d want it to read in law</span>
                <textarea value={f.change_text} onChange={(e) => set('change_text', e.target.value)} rows={4} placeholder="The actual rule or text you are proposing." />
              </label>

              <label className="fld">
                <span>The problem it solves — what&rsquo;s broken that this fixes</span>
                <textarea value={f.problem} onChange={(e) => set('problem', e.target.value)} rows={3} placeholder="Describe the specific problem this addresses." />
              </label>

              <label className="fld">
                <span>Who it affects, and how</span>
                <textarea value={f.affects} onChange={(e) => set('affects', e.target.value)} rows={3} placeholder="Who is impacted, and what changes for them in practice." />
              </label>

              <label className="fld">
                <span>The strongest objection — argue against your own idea</span>
                <textarea value={f.objection} onChange={(e) => set('objection', e.target.value)} rows={3} placeholder="State the best case someone could make against this. If you can't, you haven't finished thinking it through." />
                <small className="fld-hint">This is the hardest field on purpose. A good citizen can name the case against their own proposal.</small>
              </label>

              {err && <p className="auth-err">{err}</p>}
              <button className="btn btn-red auth-btn" onClick={toReview}>Review my proposal →</button>
            </div>
          )}

          {stage === 'review' && (
            <div className="auth-card">
              <h2 className="auth-title">Read it back.</h2>
              <p className="auth-sub">This is what the movement will see and vote on. Make sure it says what you mean.</p>
              <div className="review">
                <div className="rv-row"><span className="rv-k">Amendment</span><p className="rv-v rv-title">{f.title}</p></div>
                <div className="rv-row"><span className="rv-k">Addresses</span><p className="rv-v">{issueTitle}</p></div>
                <div className="rv-row"><span className="rv-k">Constitutional</span><p className="rv-v">{
                  f.change_kind === 'amend'
                    ? `Amends ${provisions.find((p) => String(p.id) === f.provision_id)?.label ?? '(no provision selected)'}`
                    : f.change_kind === 'new'
                    ? 'Adds a new article/amendment'
                    : 'Statute / policy — not a constitutional change'
                }</p></div>
                <div className="rv-row"><span className="rv-k">The change</span><p className="rv-v">{f.change_text}</p></div>
                <div className="rv-row"><span className="rv-k">The problem</span><p className="rv-v">{f.problem}</p></div>
                <div className="rv-row"><span className="rv-k">Who it affects</span><p className="rv-v">{f.affects}</p></div>
                <div className="rv-row"><span className="rv-k">Strongest objection</span><p className="rv-v">{f.objection}</p></div>
              </div>
              {err && <p className="auth-err">{err}</p>}
              <button className="btn btn-red auth-btn" onClick={submit} disabled={loading}>{loading ? 'Submitting…' : 'Submit to the movement'}</button>
              <button className="auth-link" onClick={() => setStage('edit')}>← Keep editing</button>
            </div>
          )}

          {stage === 'gated' && (
            <div className="auth-card">
              <div className="auth-seal">★</div>
              <h2 className="auth-title">Verify to propose.</h2>
              <p className="auth-sub">Your proposal is ready — but to keep this honest, only phone-verified citizens can submit. It takes a minute.</p>
              <Link href="/join" className="btn btn-red auth-btn">Verify my account</Link>
            </div>
          )}

          {stage === 'done' && (
            <div className="auth-card">
              <div className="auth-seal">★</div>
              <h2 className="auth-title">It&rsquo;s on the table.</h2>
              <p className="auth-sub">Your amendment is now live for the movement to read and vote on. This is how it&rsquo;s supposed to work — citizens writing the law, in the open.</p>
              <Link href="/amendments" className="btn btn-red auth-btn">See all amendments</Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
