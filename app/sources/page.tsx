import Link from 'next/link'

export const metadata = { title: 'Our Sources — America First' }

const METHOD = [
  { h: 'Primary first', d: 'Wherever possible we link the original source — the government dataset, the court filing, the company disclosure, the peer-reviewed study — not a hot take about it. Aggregators are a last resort, and we say when we use one.' },
  { h: 'Click and check', d: 'Every statistic and accusation on the site links out so you can read the source yourself in a new tab. We would rather you verify us than trust us.' },
  { h: 'Context kept intact', d: 'We do not strip the qualifier that weakens our point. If a source says “projected” or “preliminary,” so do we. If the data is contested, we note the dispute.' },
  { h: 'Corrected in the open', d: 'When a link breaks, a number updates, or we get something wrong, we fix it and log the change. Sourcing is maintenance, not a one-time stamp.' },
]

const TIERS = [
  {
    label: 'Government & official data',
    note: 'The record itself — nonpartisan, primary, checkable.',
    items: ['CDC / National Center for Health Statistics', 'U.S. Government Accountability Office', 'Congressional Research Service (Library of Congress)', 'Congress.gov & FEC filings', 'NAEP — The Nation’s Report Card', 'TRAC, Syracuse University'],
  },
  {
    label: 'Money-in-politics & accountability research',
    note: 'Nonpartisan watchdogs that track who funds whom.',
    items: ['OpenSecrets', 'Brennan Center for Justice', 'Issue One', 'Prison Policy Initiative', 'Institute on Taxation and Economic Policy', 'Detention Watch Network', 'Americans for Financial Reform'],
  },
  {
    label: 'Journalism',
    note: 'Established outlets across the spectrum; we cite the reporting, not the opinion section.',
    items: ['The Washington Post', 'CNN', 'CNBC', 'The Hill', 'Roll Call', 'NBC News', 'Texas Tribune', 'ProPublica', 'The 74', 'Sludge', 'NOTUS', 'Florida Phoenix / States Newsroom'],
  },
  {
    label: 'Research, polling & books',
    note: 'Survey data and scholarship for the harder claims.',
    items: ['Pew Research Center', 'Johns Hopkins Center for Gun Violence Solutions', 'Science Advances', 'Oxfam', 'EdBuild', 'PEN America', 'American Library Association', 'Yale Climate Connections', 'Berry & Sobieraj, “The Outrage Industry”'],
  },
]

export default function SourcesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link href="/" className="crumb">★ Home</Link>
          <p className="kicker">Every fact, visible to you</p>
          <h1>Our Sources.</h1>
          <p className="thesis">This site stakes its whole credibility on one promise: nothing here is asserted without a source you can open and check. This page explains how we source, and names the outlets and datasets the site actually rests on. If a claim ever fails the check, it does not belong here.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <div className="block">
            <div className="block-label">The Method</div>
            <h2>How we decide what goes on the page.</h2>
            <div className="grid-2">
              {METHOD.map((d) => (
                <div className="card" key={d.h}><h4>{d.h}</h4><p>{d.d}</p></div>
              ))}
            </div>
          </div>

          <div className="block">
            <div className="block-label">Who We Cite</div>
            <h2>The sources behind the site.</h2>
            <p className="intro">A representative list, grouped by kind. We lean deliberately on nonpartisan government data and accountability research, and cite reporting from across the spectrum so the case never depends on a single side&rsquo;s outlets.</p>
            {TIERS.map((t) => (
              <div className="src-tier" key={t.label}>
                <h4 className="src-tier-h">{t.label}</h4>
                <p className="src-tier-note">{t.note}</p>
                <div className="src-chips">
                  {t.items.map((i) => <span className="src-chip" key={i}>{i}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="principle-banner">
            <span className="lab">Found a problem?</span>
            A dead link, a number that has moved, a source that does not say what we claim — tell us and we will fix it. Holding us to this standard is exactly the kind of citizenship this movement is for.
          </div>
        </div>
      </section>

      <section className="page-foot-cta">
        <div className="wrap">
          <h3>The rules we hold ourselves to.</h3>
          <Link href="/charter" className="btn btn-red">Read: The Charter</Link>
        </div>
      </section>
    </>
  )
}
