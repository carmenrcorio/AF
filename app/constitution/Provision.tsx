'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Provision({
  label, original, plain, amendCount = 0,
}: { label: string; original: string; plain: string | null; amendCount?: number }) {
  const [open, setOpen] = useState(false)
  const has = !!plain
  return (
    <div className={`prov${open ? ' open' : ''}`}>
      <button className="prov-head" onClick={() => has && setOpen(!open)} aria-expanded={open}>
        <span className="prov-label">{label}</span>
        <span className="prov-head-right">
          {amendCount > 0 && (
            <span className="prov-amend-badge">{amendCount} open amendment{amendCount > 1 ? 's' : ''}</span>
          )}
          {has ? <span className="prov-toggle">{open ? 'Hide plain English' : 'Plain English'}</span>
               : <span className="prov-soon">explanation coming</span>}
        </span>
      </button>
      <p className="prov-original">{original}</p>
      {has && open && (
        <div className="prov-plain">
          <span className="tag">Plain English</span>
          <span>{plain}</span>
        </div>
      )}
      {amendCount > 0 && (
        <Link href="/amendments" className="prov-amend-link">★ See the {amendCount} proposed change{amendCount > 1 ? 's' : ''} to this provision →</Link>
      )}
    </div>
  )
}
