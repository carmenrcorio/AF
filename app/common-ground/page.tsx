import Link from 'next/link'
import { COMMON_GROUND } from '@/lib/content'

export const metadata = { title: 'Common Ground — America First' }

export default function CommonGroundPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link href="/" className="crumb">★ Home</Link>
          <p className="kicker">Healing a divided people</p>
          <h1>We can&rsquo;t fix a country we&rsquo;re too busy hating each other to govern.</h1>
          <p className="thesis">The U.S. isn&rsquo;t only corrupt at the top — it&rsquo;s fractured at the bottom, and outrage is a business model. None of the structural reforms stick until we stop tearing each other apart. The main beneficiaries of the war between us are the very institutions we&rsquo;re trying to end.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <div className="block">
            <div className="block-label">Diagnose It Honestly</div>
            <h2>Why we&rsquo;re at each other&rsquo;s throats.</h2>
            <div className="grid-2">
              {COMMON_GROUND.diagnosis.map((d) => (
                <div className="card" key={d.h}><h4>{d.h}</h4><p>{d.d}</p></div>
              ))}
            </div>
          </div>

          <div className="block">
            <div className="block-label">Rules of Engagement</div>
            <h2>How ordinary people fight differently.</h2>
            <p className="intro">We can&rsquo;t legislate hearts — but we can model and reward better norms.</p>
            <div className="grid-2">
              {COMMON_GROUND.practices.map((d) => (
                <div className="card" key={d.h}><h4>{d.h}</h4><p>{d.d}</p></div>
              ))}
            </div>
          </div>

          <div className="block">
            <div className="block-label">Change the Game Board</div>
            <h2>Structural reforms that lower the temperature.</h2>
            <p className="intro">The system itself pushes people toward the extremes. These changes pull them back toward the broad middle.</p>
            <div className="grid-2">
              {COMMON_GROUND.reforms.map((d) => (
                <div className="card profit" key={d.h}><h4>{d.h}</h4><p>{d.d}</p></div>
              ))}
            </div>
          </div>

          <div className="principle-banner">
            <span className="lab">Compromise, Not Surrender</span>
            We won&rsquo;t compromise on the dignity of the poor or the refusal to worship the state or the market. But if we agree the system is rigged, we owe it to our children to sit at the same table and fix it.
          </div>
        </div>
      </section>

      <section className="page-foot-cta">
        <div className="wrap">
          <h3>Ready to help write it?</h3>
          <Link href="/#join" className="btn btn-red">Join the Movement</Link>
        </div>
      </section>
    </>
  )
}
