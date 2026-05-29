'use client'

import { useState } from 'react'

export default function Provision({
  label, original, plain,
}: { label: string; original: string; plain: string | null }) {
  const [open, setOpen] = useState(false)
  const has = !!plain
  return (
    <div className={`prov${open ? ' open' : ''}`}>
      <button className="prov-head" onClick={() => has && setOpen(!open)} aria-expanded={open}>
        <span className="prov-label">{label}</span>
        {has ? <span className="prov-toggle">{open ? 'Hide plain English' : 'Plain English'}</span>
             : <span className="prov-soon">explanation coming</span>}
      </button>
      <p className="prov-original">{original}</p>
      {has && open && (
        <div className="prov-plain">
          <span className="tag">Plain English</span>
          <span>{plain}</span>
        </div>
      )}
    </div>
  )
}
