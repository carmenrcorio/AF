import Link from 'next/link'

export const metadata = { title: 'Charter & Principles — America First' }

const NONNEGOTIABLES = [
  { h: 'The dignity of every person', d: 'Every human being has worth — rich or poor, citizen or stranger. No policy on this site treats people as disposable, and no reform is worth pursuing by trampling the vulnerable to get there.' },
  { h: 'Honesty over advantage', d: 'We would rather lose an argument than win it by distortion. We do not exaggerate, cherry-pick, or strip context to score points — because a movement built on spin collapses the moment it is checked.' },
  { h: 'Accountability for everyone', d: 'We name names on every side. If a failure is real, it goes on the page no matter which party, donor, or industry it implicates. We refuse to protect our own.' },
  { h: 'The Constitution as the floor', d: 'Reform happens inside the rule of law — separation of powers, due process, free speech, equal protection. Big changes go through the amendment process, not around it. We illuminate the founding document; we never pretend to rewrite it by force.' },
  { h: 'No movement is a savior', d: 'Not a party, not a leader, not this site. We are a tool for citizens to organize and verify — not an object of loyalty. The day this movement asks you to stop thinking for yourself is the day it has failed.' },
]

const HOWWEWORK = [
  { h: 'Every claim is sourced', d: 'Every statistic and accusation links to a primary or credible source you can open and check yourself. If we cannot source it, it does not go up. Where a source complicates a claim, we say so rather than hide it.' },
  { h: 'Two parties, same demons', d: 'We do not manufacture false symmetry — but where corruption runs through both parties, we show both. The fight is not left vs. right; it is the people who profit from a rigged system vs. everyone who pays for it.' },
  { h: 'The framing is the citizens’', d: 'The political convictions here belong to the people who build and join this movement. Our job is to make sure those convictions rest on facts that hold up — to polish raw conviction into something defensible, never to launder a falsehood.' },
  { h: 'We assign no rating we can’t defend', d: 'Our candidate profiles aggregate the public record and link to it — they do not invent grades. When we publish a scoring methodology, it will be open and checkable. No fabricated numbers, ever.' },
  { h: 'Verified citizens, one vote each', d: 'Proposing and voting on amendments requires phone verification — one real person, one voice — to keep the movement honest and resistant to manipulation. Your data is protected and never sold.' },
  { h: 'Built in the open', d: 'The reasoning, the sources, and the changes are all visible. When we get something wrong, we fix it in public and log the correction.' },
]

export default function CharterPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link href="/" className="crumb">★ Home</Link>
          <p className="kicker">What we stand on</p>
          <h1>The Charter.</h1>
          <p className="thesis">A movement is only as trustworthy as the rules it holds itself to. These are ours — the lines we will not cross to win, and the standards every page on this site is built to meet. If we ever break them, hold us to it.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <div className="block">
            <div className="block-label">Non-Negotiable</div>
            <h2>What we will not bend on.</h2>
            <p className="intro">These come before any policy, party, or tactic. They are the reason the rest of the site exists.</p>
            <div className="grid-2">
              {NONNEGOTIABLES.map((d) => (
                <div className="card" key={d.h}><h4>{d.h}</h4><p>{d.d}</p></div>
              ))}
            </div>
          </div>

          <div className="block">
            <div className="block-label">How We Work</div>
            <h2>The standards behind every page.</h2>
            <p className="intro">Principles are easy to claim. These are the working rules we actually build to — the ones you can check us against.</p>
            <div className="grid-2">
              {HOWWEWORK.map((d) => (
                <div className="card profit" key={d.h}><h4>{d.h}</h4><p>{d.d}</p></div>
              ))}
            </div>
          </div>

          <div className="principle-banner">
            <span className="lab">The Test</span>
            If any claim on this site cannot survive an honest fact-check, it does not belong here — no matter how much we wish it were true. That is the whole difference between a movement and a mob.
          </div>
        </div>
      </section>

      <section className="page-foot-cta">
        <div className="wrap">
          <h3>See how we hold to it.</h3>
          <Link href="/sources" className="btn btn-red">Read: Our Sources</Link>
        </div>
      </section>
    </>
  )
}
