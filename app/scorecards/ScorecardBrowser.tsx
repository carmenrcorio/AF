'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'

export type Candidate = {
  id: number
  name: string
  office: string | null
  chamber: string | null
  state: string | null
  party: string | null
  bio: string | null
  record_count: number
}

function Card({ c }: { c: Candidate }) {
  return (
    <Link href={`/scorecards/${c.id}`} className="score-card" key={c.id}>
      <div className="score-top">
        <span className={`party-dot ${c.party === 'Republican' ? 'r' : c.party === 'Democrat' ? 'd' : 'i'}`} />
        <span className="score-office">{c.office}{c.state ? ` · ${c.state}` : ''}</span>
        {c.record_count > 0 && <span className="rec-pill">{c.record_count} sourced</span>}
      </div>
      <h3>{c.name}</h3>
      <span className="score-link">See the record →</span>
    </Link>
  )
}

export default function ScorecardBrowser({ candidates }: { candidates: Candidate[] }) {
  const [q, setQ] = useState('')
  const [chamber, setChamber] = useState('all')
  const [party, setParty] = useState('all')

  const states = useMemo(
    () => Array.from(new Set(candidates.map((c) => c.state).filter(Boolean))).sort() as string[],
    [candidates]
  )
  const [state, setState] = useState('all')

  const featured = useMemo(() => candidates.filter((c) => c.record_count > 0), [candidates])

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return candidates.filter((c) => {
      if (chamber !== 'all' && c.chamber !== chamber) return false
      if (party !== 'all' && c.party !== party) return false
      if (state !== 'all' && c.state !== state) return false
      if (needle && !c.name.toLowerCase().includes(needle)) return false
      return true
    })
  }, [candidates, q, chamber, party, state])

  return (
    <>
      {featured.length > 0 && (
        <div className="featured-block">
          <h2 className="rec-h">Profiles with sourced records</h2>
          <p className="intro">These have a documented public record on the site — votes, trades, positions, each linked to its source. The full roster is below.</p>
          <div className="score-grid">
            {featured.map((c) => <Card c={c} key={c.id} />)}
          </div>
        </div>
      )}

      <div className="score-filters">
        <input
          className="score-search"
          placeholder="Search by name…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select value={chamber} onChange={(e) => setChamber(e.target.value)}>
          <option value="all">Both chambers</option>
          <option value="Senate">Senate</option>
          <option value="House">House</option>
        </select>
        <select value={party} onChange={(e) => setParty(e.target.value)}>
          <option value="all">All parties</option>
          <option value="Democrat">Democrat</option>
          <option value="Republican">Republican</option>
          <option value="Independent">Independent</option>
        </select>
        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="all">All states</option>
          {states.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <p className="score-count">{filtered.length} {filtered.length === 1 ? 'member' : 'members'}</p>

      <div className="score-grid">
        {filtered.map((c) => <Card c={c} key={c.id} />)}
      </div>

      {filtered.length === 0 && (
        <p className="rec-empty">No members match those filters. Try widening your search.</p>
      )}
    </>
  )
}
