import Link from 'next/link'
import { ISSUES } from '@/lib/content'

export const metadata = { title: 'The Issues — America First' }

export default function IssuesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link href="/" className="crumb">★ Home</Link>
          <p className="kicker">Eight battlegrounds, one honest standard</p>
          <h1>The Issues.</h1>
          <p className="thesis">Every issue is written the same way: the real problem, who profits from it, and a phased fix. No tribe gets a pass, and every fact will be sourced for you to check.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <div className="issue-index">
            {ISSUES.map((iss) => (
              <Link href={`/issues/${iss.slug}`} className="ii" key={iss.slug}>
                <div className="ii-num">{iss.num}.</div>
                <div className="ii-kick">{iss.kicker}</div>
                <h3>{iss.title}</h3>
                <p>{iss.principle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
