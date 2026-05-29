'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

type Tally = { for_count: number; against_count: number; abstain_count: number; total_votes: number }
const VALUES: { v: number; label: string; cls: string }[] = [
  { v: 1, label: 'For', cls: 'vote-for' },
  { v: -1, label: 'Against', cls: 'vote-against' },
  { v: 0, label: 'Abstain', cls: 'vote-abstain' },
]

export default function VoteBox({ amendmentId, initial }: { amendmentId: number; initial: Tally }) {
  const [tally, setTally] = useState<Tally>(initial)
  const [myVote, setMyVote] = useState<number | null>(null)
  const [authed, setAuthed] = useState<boolean | null>(null)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    (async () => {
      const supabase = createClient()
      const { data: auth } = await supabase.auth.getUser()
      if (!auth.user) { setAuthed(false); return }
      setAuthed(true)
      const { data } = await supabase.from('votes').select('value').eq('amendment_id', amendmentId).eq('user_id', auth.user.id).maybeSingle()
      if (data) setMyVote(data.value)
    })()
  }, [amendmentId])

  async function cast(value: number) {
    setMsg('')
    const supabase = createClient()
    const { data: auth } = await supabase.auth.getUser()
    if (!auth.user) { setAuthed(false); return }
    const { error } = await supabase.from('votes').upsert(
      { amendment_id: amendmentId, user_id: auth.user.id, value },
      { onConflict: 'user_id,amendment_id' }
    )
    if (error) { setMsg(error.message); return }
    setMyVote(value)
    const { data: t } = await supabase.from('amendment_tallies').select('*').eq('amendment_id', amendmentId).maybeSingle()
    if (t) setTally(t as Tally)
  }

  return (
    <div className="votebox">
      <div className="vote-counts">
        <div className="vc"><span className="vc-n t-for">{tally.for_count}</span><span className="vc-l">For</span></div>
        <div className="vc"><span className="vc-n t-against">{tally.against_count}</span><span className="vc-l">Against</span></div>
        <div className="vc"><span className="vc-n t-abstain">{tally.abstain_count}</span><span className="vc-l">Abstain</span></div>
      </div>

      {authed === false ? (
        <div className="vote-gate">
          <p>Only phone-verified citizens can vote — one person, one voice.</p>
          <Link href="/join" className="btn btn-red">Verify to vote</Link>
        </div>
      ) : (
        <div className="vote-btns">
          {VALUES.map(({ v, label, cls }) => (
            <button key={v} className={`vbtn ${cls}${myVote === v ? ' active' : ''}`} onClick={() => cast(v)}>
              {label}{myVote === v ? ' ✓' : ''}
            </button>
          ))}
        </div>
      )}
      {myVote !== null && <p className="vote-note">Your vote is recorded. You can change it anytime.</p>}
      {msg && <p className="auth-err" style={{ marginTop: 12 }}>{msg}</p>}
    </div>
  )
}
