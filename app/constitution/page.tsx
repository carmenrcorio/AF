import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import Provision from './Provision'

export const metadata = { title: 'The Living Constitution — America First' }
export const dynamic = 'force-dynamic'

type Row = {
  id: number
  type: string
  label: string
  original_text: string
  plain_text: string | null
  display_order: number
}

const GROUP_ORDER = ['preamble', 'article', 'amendment', 'closing']
const GROUP_TITLE: Record<string, string> = {
  preamble: 'Preamble',
  article: 'The Articles',
  amendment: 'The Amendments',
  closing: 'Ratification',
}

export default async function ConstitutionPage() {
  let rows: Row[] = []
  let dbReady = true
  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from('constitution_provisions')
      .select('id,type,label,original_text,plain_text,display_order')
      .order('display_order', { ascending: true })
    rows = data ?? []
  } catch {
    dbReady = false
  }

  const groups = GROUP_ORDER
    .map((g) => ({ key: g, title: GROUP_TITLE[g], items: rows.filter((r) => r.type === g) }))
    .filter((g) => g.items.length > 0)

  const explained = rows.filter((r) => r.plain_text).length

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link href="/" className="crumb">★ Home</Link>
          <p className="kicker">The Living Constitution</p>
          <h1>The original — preserved. The meaning — made plain.</h1>
          <p className="thesis">The founding document, word for word, exactly as inscribed — so its legitimacy is never in question. Tap any section marked <em>Plain English</em> to reveal its meaning in modern language. We never change the original. We only illuminate it.</p>
        </div>
      </section>

      <section className="const-page">
        <div className="wrap">
          {!dbReady && (
            <div className="empty-state"><div className="auth-seal">★</div>
              <h3>Connecting…</h3><p>The Constitution will appear here once the backend connection is live on this deployment.</p></div>
          )}

          {groups.map((g) => (
            <div key={g.key} className="const-group">
              <h2 className="const-group-title">{g.title}</h2>
              {g.items.map((r) => (
                <Provision key={r.id} label={r.label} original={r.original_text} plain={r.plain_text} />
              ))}
            </div>
          ))}

          {dbReady && rows.length > 0 && (
            <p className="const-progress">
              ★ Plain-English explanations live for {explained} of {rows.length} provisions, and growing.
              The full original text is complete and exact, transcribed from the U.S. National Archives.
            </p>
          )}
        </div>
      </section>

      <section className="page-foot-cta">
        <div className="wrap">
          <h3>See an article worth changing?</h3>
          <Link href="/amendments/propose" className="btn btn-red">Propose an Amendment</Link>
        </div>
      </section>
    </>
  )
}
