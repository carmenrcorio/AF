// ---------------------------------------------------------------------------
//  America First: The Only Way — site content
//  Source of truth for the written blueprint. Statistics are intentionally
//  omitted until verified in the sourcing pass (see SECURITY/footer promise).
// ---------------------------------------------------------------------------

export type Issue = {
  slug: string
  num: string
  kicker: string
  title: string
  thesis: string
  context: string
  principle: string
  problems: { h: string; d: string }[]
  profiteers: { h: string; d: string }[]
  fix: { p1: string[]; p2: string[]; p3: string[] }
}

export const ISSUES: Issue[] = [
  {
    slug: 'government',
    num: 'I',
    kicker: 'The Lion and the Ledger',
    title: 'Government, Taxes & the Common Good',
    thesis:
      'Half the country sees government as a bloated leech; the other half sees it as the only thing standing between them and corporate feudalism. Both miss the real problem — the rules are written by the people who profit from them.',
    principle: 'The state is a servant, not a god — and it is not for sale.',
    context:
      'The fight over government size misses the real game. The question was never big versus small — it’s who the rules are written for. Today the tax code rewards whoever can afford the accountants to exploit it, while ordinary earners get the standard deduction and a shrug. A leaner state and a stronger floor aren’t opposites: the waste and the capture protect each other, and ending one is how you fund the other.',
    problems: [
      { h: 'A code built for the few', d: 'The tax code is laced with carve-outs and loopholes for corporations and the wealthy, who can afford armies of accountants to use them.' },
      { h: 'Belt-tightening for some', d: 'Ordinary citizens are told to economize while the rich legally move their money offshore and out of reach.' },
      { h: 'Waste and capture at once', d: 'The state is both genuinely inefficient in places and quietly captured in others — and the two excuses cover for each other.' },
    ],
    profiteers: [
      { h: 'Lobbyists & tax lawyers', d: 'They write the loopholes, then sell their services to exploit them.' },
      { h: 'Multinationals', d: 'Profits routed to havens, jobs offshored, then more breaks lobbied for.' },
      { h: 'Politicians', d: 'Tax goodies traded for donations and post-office jobs.' },
    ],
    fix: {
      p1: ['Close the most egregious loopholes used only by the ultra-wealthy and big corporations', 'Ban abusive profit-shifting', 'A simple minimum tax so no large corporation pays effectively zero'],
      p2: ['Use the new revenue for a real floor: basic healthcare access, housing support, childcare', 'Keep government lean with sunset clauses and public waste dashboards'],
      p3: ['Strengthen conflict-of-interest rules between lawmakers and the industries they regulate', 'Money-in-politics limits so tax law is never auctioned'],
    },
  },
  {
    slug: 'healthcare',
    num: 'II',
    kicker: 'Mothers, Markets & the Womb',
    title: 'Healthcare & Mothers',
    thesis:
      'We romanticize motherhood and preach family values inside a system that is statistically dangerous for pregnant women, guarantees no paid leave, and turns babies and fertility into multi-billion-dollar markets.',
    principle: 'No coercion, no commodification, no abandonment.',
    context:
      'America preaches “family values” while running one of the most dangerous maternal-health systems in the developed world and guaranteeing no paid leave. The result is a cruel bind: pregnancy is made medically and financially risky almost by design, abortion is restricted in the very places offering mothers the least support, and a high-dollar adoption and fertility industry stands ready to treat the outcome as supply. Being genuinely pro-life has to mean protecting the child and carrying the burden alongside the mother — not one without the other.',
    problems: [
      { h: 'A maternal-health crisis', d: 'Being pregnant here is riskier than in any other wealthy nation, and the danger falls hardest on Black, Native, and rural women.' },
      { h: 'No real safety net', d: 'No guaranteed paid leave, patchy childcare, rising housing costs — having a child is made economically terrifying.' },
      { h: 'Restriction without support', d: 'Abortion is restricted in the very places where being a mother is made most economically and medically risky.' },
      { h: 'Bodies and babies as inventory', d: 'A high-dollar adoption and fertility complex can treat women and children as supply.' },
    ],
    profiteers: [
      { h: 'Hospital monopolies & PBMs', d: 'Consolidation and pricing games that dictate the cost of care.' },
      { h: 'The fertility/adoption market', d: 'Newborns and surrogacy priced like products; counseling tied to placement profits.' },
      { h: 'Insurers', d: 'Profit from delay and denial.' },
    ],
    fix: {
      p1: ['Protect emergency pregnancy care everywhere so doctors aren’t afraid to act', 'Invest in maternal health in the communities at highest risk', 'Ban deceptive adoption marketing; require honest IVF consent and clinic reporting'],
      p2: ['Build the Pro-Parent Floor — paid leave, universal prenatal and postpartum care, income and housing safeguards, childcare', 'Make that floor the precondition for any further restriction; women are never criminalized'],
      p3: ['A constitutional principle: do not weaponize the law against the vulnerable without sharing the burden'],
    },
  },
  {
    slug: 'immigration',
    num: 'III',
    kicker: 'Walls, Gates, and the Stranger',
    title: 'Immigration, Labor & Belonging',
    thesis:
      'We scream about the border while the same system quietly profits off migrant labor, private detention, and permanent limbo.',
    principle: 'Firm borders, clean hands.',
    context:
      'Both parties talk “rule of law” while a whole economy quietly runs on the opposite. Employers want the illegality, because a worker who can be deported is a worker who won’t report wage theft. Private detention profits per body per night and lobbies for more bodies. The chaos isn’t a failure of the system — for the people profiting, it is the system. Firm, fair borders and humane treatment aren’t opposites; the cartels and the bad-faith employers are the shared enemy of both.',
    problems: [
      { h: 'Detention as a way of life', d: 'Record detention populations, spread across hundreds of facilities, many run for profit.' },
      { h: 'The labor, not the person', d: 'Whole industries depend on low-wage undocumented work while refusing to see the workers as people.' },
      { h: 'Silence bought with fear', d: 'Employers use the threat of deportation to keep people quiet about wage theft and unsafe conditions.' },
    ],
    profiteers: [
      { h: 'Cartels & smugglers', d: 'Profit from dangerous crossings, kidnapping, and extortion.' },
      { h: 'Private detention & contractors', d: 'Paid per body per night; they lobby for harsher enforcement.' },
      { h: 'Bad-faith employers', d: 'Use immigration status as leverage to drive wages down.' },
    ],
    fix: {
      p1: ['Target traffickers, cartels, and exploitative employers first — not low-risk workers', 'Strictly limit detention and end per-head profit contracts', 'Surge immigration courts, judges, and legal aid so cases move in months'],
      p2: ['Realistic legal paths for work and family in sectors that genuinely need labor', 'Earned regularization for long-settled, non-violent people: fines, background checks, civics'],
      p3: ['Bar enforcement from targeting any race, religion, or political group', 'Ban border/detention officials from owning stakes in the contractors they oversee'],
    },
  },
  {
    slug: 'climate',
    num: 'IV',
    kicker: 'Fire, Flood, and the Furnace',
    title: 'Climate, Energy & Sacrifice Zones',
    thesis:
      'We argue about whether climate change is real while entire communities are quietly turned into sacrifice zones and billed for someone else’s profit.',
    principle: 'Steward creation without trampling the poor.',
    context:
      'The “is it real” debate is a distraction from the real injustice: a handful of companies understood the damage for decades, poor communities breathe the consequences, and working towns get handed the bill for a transition designed without them. That’s exactly why the fight gets framed as “jobs versus planet” — elites set it up that way. You can steward the air and water without sacrificing the people who live downwind of the refinery, but only if the plan puts those workers first instead of last.',
    problems: [
      { h: 'Who breathes what', d: 'Poorer, often minority regions carry the pollution burden and the disasters while wealthier areas reap the profits.' },
      { h: 'Jobs vs. planet, by design', d: 'Climate policy too often lands as higher bills and lost jobs, confirming the fear that the plan is to kill your town to save the world.' },
    ],
    profiteers: [
      { h: 'Fossil-fuel giants', d: 'Profit from extraction and lobby to delay any transition.' },
      { h: '“Green” profiteers', d: 'Grab subsidies for projects that don’t really benefit locals.' },
      { h: 'Utilities', d: 'Push infrastructure costs onto ratepayers while big customers get discounts.' },
    ],
    fix: {
      p1: ['Polluter-pays enforcement with mandatory cleanup funds', 'Triage the first wave of cleanup to the most polluted, poorest communities'],
      p2: ['A jobs-first transition: bring clean-tech manufacturing to regions dependent on fossil industries', 'Multi-year wage insurance and retraining, funded partly by windfall taxes on past profits'],
      p3: ['Bar utilities from dumping corporate and data-center costs onto residential bills', 'No region turned into a sacrifice zone without its informed consent and compensation'],
    },
  },
  {
    slug: 'guns',
    num: 'V',
    kicker: 'Steel and Blood',
    title: 'Guns, Fear & the Right to Defense',
    thesis:
      'One side sees guns as freedom and survival; the other sees death machines and chaos. The gun industry and political operatives profit from keeping everyone afraid.',
    principle: 'Armed but accountable.',
    context:
      'Two true things at once: the country is awash in guns and that causes real, daily harm — and the public panic often outruns the actual risk of any single mass event, because fear sells. Manufacturers profit from every ban scare; media and political operatives profit from every tragedy. A sober middle exists and most Americans live in it: protect the law-abiding owner’s right to defend their home, while making it genuinely harder for the dangerous and the trafficker to arm up.',
    problems: [
      { h: 'Real harm, honestly named', d: 'The country is saturated with guns and that causes undeniable harm, far beyond any peer nation per capita.' },
      { h: 'Fear distorts the debate', d: 'Mass-shooting panic is real even as public tragedies are rarer than people believe — and both extremes feed the same fear loop.' },
    ],
    profiteers: [
      { h: 'Manufacturers & lobbyists', d: 'Make money on every panic about bans and every panic about crime.' },
      { h: 'Media & political grifters', d: 'Raise money off every tragedy — to “ban everything” or to “buy more guns.”' },
    ],
    fix: {
      p1: ['Universal background checks for all sales', 'Crack down on straw purchasers and trafficking', 'Disarm people with adjudicated histories of violence, with due process'],
      p2: ['Protect common personal firearms while regulating high-capacity magazines and features tied to rapid mass casualties', 'Incentivize secure storage to cut child and theft-related shootings'],
      p3: ['Fund community violence-interruption and mental-health crisis response', 'Make honest public gun data transparent so people can see what works'],
    },
  },
  {
    slug: 'justice',
    num: 'VI',
    kicker: 'Chains in the Courts',
    title: 'Race, Policing & Systemic Injustice',
    thesis:
      'The law claims to be blind, but it does not land equally — and “justice” has too often become a revenue stream.',
    principle: 'Equal law, not pretend-equal law — judged by evidence, with no collective racial guilt.',
    context:
      'The system doesn’t have to be staffed by villains to land unequally — and the data says it lands very unequally. Worse, “justice” has been turned into a revenue model: towns balance budgets on fines, private vendors bill by the phone call, and politicians campaign on fear. We can say plainly that the system isn’t fair without branding every officer, or every member of any race, as the enemy. Judge by evidence — case by case, pattern by pattern.',
    problems: [
      { h: 'Unequal outcomes', d: 'Black and Native Americans are caged, searched, and sentenced at wildly disproportionate rates.' },
      { h: 'Justice as a budget line', d: 'Towns plug budget holes with fines and fees, squeezing the poorest communities hardest.' },
    ],
    profiteers: [
      { h: 'Private prisons & vendors', d: 'Profit from bodies in cells, phone calls, commissary, and electronic monitoring.' },
      { h: 'Municipalities', d: 'Fund themselves by ticketing the poor.' },
      { h: 'Fear-based politicians', d: 'Campaign on mugshots and cherry-picked cases.' },
    ],
    fix: {
      p1: ['Ban per-prisoner-profit contracts and abusive call/commissary fees', 'Restrict fines and fees as a source of government revenue'],
      p2: ['Public reporting of stops, searches, charges, and outcomes by race and place', 'Aggressive pattern-or-practice enforcement where data shows abuse', 'Sentencing reform and diversion for low-level, non-violent offenses'],
      p3: ['Strong reentry: housing, jobs, record-sealing where appropriate', 'Victim-focused restorative justice with community involvement'],
    },
  },
  {
    slug: 'schools',
    num: 'VII',
    kicker: 'Minds Under Siege',
    title: 'Schools, Curriculum & Our Children',
    thesis:
      'One side says schools must tell the full, ugly truth; the other says they’re indoctrination camps. Meanwhile kids become props in a war adults are enjoying far too much.',
    principle: 'Truthful, transparent, non-indoctrinating — parents respected, no child dehumanized.',
    context:
      'Children have become the trophy in a war adults enjoy far too much. One side wants the ugly truth told in full; the other calls the same lesson indoctrination — and while they fight, reading and math scores quietly slide and consultants sell programs to both. Parents deserve transparency and a real voice; kids deserve the truth about their country’s sins and its achievements, and the right not to be shamed or used as a prop for anyone’s politics.',
    problems: [
      { h: 'Whiplash in the classroom', d: 'Tens of thousands of book challenges; teachers accused of “grooming” by one side and “whitewashing” by the other.' },
      { h: 'The basics neglected', d: 'Politicians fight the culture war while reading and math outcomes quietly slide.' },
    ],
    profiteers: [
      { h: 'National activist groups', d: 'Use local school fights to fundraise and build clout.' },
      { h: 'Politicians', d: 'Run on “protecting your kids” or “defending truth” while never fixing outcomes.' },
      { h: 'Ed-tech & consultant grift', d: 'Sell DEI trainings or patriotic curricula in bulk.' },
    ],
    fix: {
      p1: ['Public online access to all curricula and reading lists', 'A clear parental-input process with professional educator review'],
      p2: ['Teach injustices honestly and the achievements of all groups; no inherited guilt', 'Reframe DEI as anti-bullying and equal access, not required ideological confessions'],
      p3: ['Some school choice within public funding and standards', 'Civics that teaches how to disagree in good faith and identify propaganda'],
    },
  },
  {
    slug: 'rights',
    num: 'VIII',
    kicker: 'Flesh, Spirit, and Identity',
    title: 'Rights, Identity & the Body',
    thesis:
      'One side screams “groomers,” the other screams “erasure,” while actual people quietly change jobs, states, and doctors just to stay safe.',
    principle: 'Dignity for all, compulsion for none.',
    context:
      'Strip away the slogans and you find ordinary people quietly rearranging their lives — changing states, jobs, and doctors — just to stay safe, while professional outrage merchants on both sides cash in on the war over them. A free country can hold two things at once: no one should be beaten, fired, or evicted for who they are, and no one should be forced by law to affirm beliefs they don’t hold. Dignity for all; compulsion for none.',
    problems: [
      { h: 'Lives in the crossfire', d: 'Real people make major life decisions — moving, changing jobs — because of hostile policies, while the rhetoric escalates.' },
      { h: 'Two non-negotiable extremes', d: 'Manufactured panic on one side, compelled ideological speech on the other, with little room for ordinary peace.' },
    ],
    profiteers: [
      { h: 'Culture-war politicians & media', d: 'Fundraise and get clicks by constantly escalating.' },
      { h: 'Activist orgs at both extremes', d: 'Sometimes prefer maximal conflict over workable local peace.' },
      { h: 'Rainbow capitalism', d: 'Flags on products in June; lobbying against worker protections the rest of the year.' },
    ],
    fix: {
      p1: ['Protect people from violence, harassment, and clear discrimination in housing, employment, and essential services', 'Protect religious groups from being forced to perform rituals they theologically cannot'],
      p2: ['Curriculum transparency and anti-bullying enforcement for every child', 'A high bar for medical care for minors: multidisciplinary evaluation, informed consent, oversight — no rushed, profit-driven models'],
      p3: ['No compelled speech under criminal penalty, and no gag laws forbidding honest discussion', 'The state protects the space to disagree without violence'],
    },
  },
]

export function getIssue(slug: string) {
  return ISSUES.find((i) => i.slug === slug)
}

// ---------------------------------------------------------------------------
//  THE PLAN
// ---------------------------------------------------------------------------
export const PRINCIPLES = [
  { h: 'Bound by the Constitution', d: 'Massive reform, but no one above the law: separation of powers, due process, no vendettas, and amendments — not decrees — for the biggest changes.' },
  { h: 'America First, defined', d: 'We stop sacrificing American workers and families to foreign lobbies, forever wars, and global corporations — while still treating every person with dignity.' },
  { h: 'Justice and mercy together', d: 'Relentless on corruption and the abuse of power; merciful to the small and the genuinely repentant. No favoritism, rich or poor, citizen or stranger.' },
]

export const PHASES = [
  {
    no: 'PHASE I', name: 'The Cleanse', yrs: 'Years 1–2 · Stop the bleeding',
    intro: 'An emergency anti-corruption wave: cut off the most obvious pipelines of money and influence, fast — but lawfully, with evidence and due process, never show trials.',
    items: ['Ban individual stock trading for Congress, the executive, and their families', 'Supercharged foreign-agent transparency and a hard foreign-money firewall', 'Real-time donor disclosure in a usable public database', 'End pay-to-play contracts and insider deals', 'Freeze new offensive wars without explicit, time-limited authorization', 'Re-prioritize immigration enforcement; end for-profit prisons and fines-as-revenue', 'Raise and index the minimum wage; make wage theft a serious federal crime'],
  },
  {
    no: 'PHASE II', name: 'The Rebuild', yrs: 'Years 3–6 · Lasting laws',
    intro: 'Build the systems that keep the country from rotting again — the structures that outlast any one leader.',
    items: ['Public campaign financing and radical dark-money transparency', 'Protect organizing and create portable benefits that follow workers', 'A real healthcare floor; continued antitrust on hospitals and insurers', 'Housing supply reform and anti-speculation tools', 'An accountability framework for high-impact AI; data portability and child-safety rules', 'Targeted student-debt relief and investment in trades and apprenticeships'],
  },
  {
    no: 'PHASE III', name: 'The Rewrite', yrs: 'Years 7–15 · The amendments',
    intro: 'From strong leadership to a new equilibrium — written into the Constitution so it can never be quietly undone.',
    items: ['An anti-corruption / money-in-politics amendment', 'Term limits for Congress', 'Age and competence limits for high office, with public health assessments', 'A permanent, independent anti-corruption commission with protected funding', 'Electoral guardrails: a baseline right to vote and fair districts'],
  },
]

// ---------------------------------------------------------------------------
//  THE PROBLEM
// ---------------------------------------------------------------------------
export const PROBLEM_CLUSTERS = [
  {
    h: 'Money in politics', d: 'The machinery that lets wealth buy law.',
    items: ['The lobbying industrial complex', 'The revolving door between regulators and industry', 'Dark-money PACs and a permanent fundraising class', 'Members of Congress trading individual stocks'],
  },
  {
    h: 'The extraction economy', d: 'Systems that bleed ordinary people across every sector.',
    items: ['Insurance and healthcare that profit from denial', 'Predatory banking and lending', 'Corporate landlords and hedge funds pricing families out of homes', 'Wage theft, union-busting, and non-competes', 'Surveillance capitalism and algorithmic addiction'],
  },
  {
    h: 'Power and its abuses', d: 'Where profit and policy fuse into harm.',
    items: ['The military-industrial complex and forever wars', 'Mass incarceration, private prisons, and fines as revenue', 'Environmental sacrifice zones in poor communities', 'Tax havens and an ever-widening concentration of wealth'],
  },
]

// ---------------------------------------------------------------------------
//  COMMON GROUND
// ---------------------------------------------------------------------------
export const COMMON_GROUND = {
  diagnosis: [
    { h: 'Two information universes', d: 'Left and right rarely trust the same sources and end up seeing completely different realities.' },
    { h: 'Moralized politics', d: 'Disagreement gets framed as evil — you’re not just wrong, you’re a monster, a traitor, a heretic.' },
    { h: 'Fear and humiliation', d: 'People are terrified of losing status, culture, rights, or their kids’ future, and fear makes compromise feel like surrender.' },
    { h: 'The outrage industry', d: 'Politicians, pundits, and platforms profit from keeping us angry. If we calm down, they lose their edge.' },
  ],
  practices: [
    { h: 'Curiosity before accusation', d: 'Ask what someone is afraid of or trying to protect before dunking on them.' },
    { h: 'Steel-man, don’t straw-man', d: 'Be able to state the other side’s view in a way they’d recognize as fair.' },
    { h: 'No gossiping the other side', d: 'If you wouldn’t say it to their face, don’t say it to your own side either.' },
    { h: 'Shared projects', d: 'People who rebuild a house after a storm together argue differently afterward.' },
    { h: 'Cross-tribe assemblies', d: 'Randomly selected citizens, briefed fairly, asked to propose recommendations on hard issues.' },
  ],
  reforms: [
    { h: 'Open primaries + ranked-choice voting', d: 'Stop rewarding whoever appeals to the angriest slice of each base.' },
    { h: 'Independent redistricting', d: 'End the safe seats that push representatives to the extremes.' },
    { h: 'Transparency about who profits from division', d: 'Show citizens who gets paid every time they’re told their neighbor is subhuman.' },
    { h: 'Civic education', d: 'Teach how to tell propaganda from reporting and how to argue in good faith.' },
  ],
}

// ---------------------------------------------------------------------------
//  CONSTITUTION (Preamble live; full text added in a dedicated pass)
// ---------------------------------------------------------------------------
export const PREAMBLE: { t: string; p: string }[] = [
  { t: 'We the People of the United States,', p: 'The American people themselves — not a king, not a government — are the source of this government’s authority.' },
  { t: 'in Order to form a more perfect Union,', p: 'To build a better, more unified country than the loose alliance the states had before.' },
  { t: 'establish Justice,', p: 'To make sure laws are applied fairly and equally to everyone.' },
  { t: 'insure domestic Tranquility,', p: 'To keep peace and order within the country’s borders.' },
  { t: 'provide for the common defence,', p: 'To organize a military capable of defending the nation.' },
  { t: 'promote the general Welfare,', p: 'To support the health, safety, and wellbeing of the people.' },
  { t: 'and secure the Blessings of Liberty to ourselves and our Posterity,', p: 'To protect freedom for ourselves now and for every generation that comes after us.' },
  { t: 'do ordain and establish this Constitution for the United States of America.', p: 'We formally create and put into effect this Constitution as the supreme law of the United States.' },
]

// ---------------------------------------------------------------------------
//  BY THE NUMBERS — verified figures with primary-source citations.
//  Each stat: value, label, source name, source URL, and the year/as-of note.
//  Only issues whose figures have been source-verified appear here; others
//  show the "sourcing in progress" note until their pass is complete.
// ---------------------------------------------------------------------------
export type Stat = { value: string; label: string; source: string; url: string; note?: string }

export const STATS: Record<string, Stat[]> = {
  healthcare: [
    { value: '17.9', label: 'U.S. maternal deaths per 100,000 live births (2024) — still among the highest of any wealthy nation', source: 'CDC / National Center for Health Statistics', url: 'https://www.cdc.gov/nchs/data/hestat/hestat113.htm', note: '2024, released March 2026' },
    { value: '44.8', label: 'Maternal deaths per 100,000 live births for Black women — roughly triple the rate for white women (14.2)', source: 'CDC / National Center for Health Statistics', url: 'https://www.cdc.gov/nchs/data/hestat/hestat113.htm', note: '2024' },
    { value: 'Only 1', label: 'The U.S. is the only OECD member country that guarantees no paid leave to new mothers in the private sector', source: 'Congressional Research Service (Library of Congress)', url: 'https://www.congress.gov/crs-product/R44835', note: 'as of 2024' },
  ],
  guns: [
    { value: '46,728', label: 'People who died from gun-related injuries in the U.S. in 2023 — among the highest annual totals on record', source: 'Pew Research Center analysis of CDC data', url: 'https://www.pewresearch.org/short-reads/2026/04/28/what-the-data-says-about-gun-deaths-in-the-us/', note: '2023, most recent complete CDC data' },
    { value: '~58%', label: 'Share of those gun deaths that were suicides — the majority of firearm deaths every year since 1995', source: 'Johns Hopkins Center for Gun Violence Solutions', url: 'https://publichealth.jhu.edu/2025/new-report-highlights-us-2023-gun-deaths-suicide-by-firearm-at-record-levels-for-third-straight-year', note: '2023' },
    { value: 'Leading', label: 'Firearms remain the leading cause of death for U.S. children and teens — the 4th straight year', source: 'Johns Hopkins Center for Gun Violence Solutions', url: 'https://publichealth.jhu.edu/2025/new-report-highlights-us-2023-gun-deaths-suicide-by-firearm-at-record-levels-for-third-straight-year', note: '2023' },
  ],
  justice: [
    { value: '13% vs 37%', label: 'Black Americans are about 13% of the U.S. population but roughly 37% of people in prison or jail', source: 'Prison Policy Initiative', url: 'https://www.prisonpolicy.org/research/racial_and_ethnic_disparities/', note: 'most recent national data' },
    { value: '6x', label: 'The national incarceration rate of Black Americans is about six times the rate of white Americans', source: 'Prison Policy Initiative', url: 'https://www.prisonpolicy.org/blog/2024/04/01/updated-charts/', note: '2022 data' },
    { value: '~2x', label: 'Native Americans are incarcerated at more than twice the rate of the population as a whole', source: 'Prison Policy Initiative', url: 'https://www.prisonpolicy.org/research/racial_and_ethnic_disparities/' },
  ],
  immigration: [
    { value: '~71%', label: 'Share of people in ICE detention with no criminal conviction — a civil, not criminal, system', source: 'TRAC, Syracuse University', url: 'https://tracreports.org/immigration/quickfacts/', note: 'as of April 2026' },
    { value: '~90%', label: 'Share of ICE detainees held in facilities operated by private prison companies or contracted jails', source: 'Detention Watch Network', url: 'https://www.detentionwatchnetwork.org/issues/detention-101', note: 'FY 2025' },
    { value: '60,000+', label: 'People held in ICE detention daily in early 2026 — up from roughly 38,000 a year earlier', source: 'TRAC, Syracuse University', url: 'https://tracreports.org/immigration/quickfacts/', note: 'April 2026' },
  ],
  government: [
    { value: 'Still legal', label: 'Members of Congress are still allowed to trade individual stocks; as of early 2026 no full ban has passed despite bipartisan bills', source: 'Roll Call', url: 'https://rollcall.com/2026/03/31/congress-stock-trading-ban-what-happened/', note: 'as of Q1 2026' },
    { value: '~1 in 5', label: 'Share of members of Congress who traded stocks in sectors tied to their own committees (2019–2021)', source: 'Brennan Center for Justice (citing NYT investigation)', url: 'https://www.brennancenter.org/our-work/research-reports/congressional-stock-trading-explained' },
    { value: '86%', label: 'Americans who support banning members of Congress from trading individual stocks', source: 'U.S. Senate (Moody–Gillibrand release)', url: 'https://www.gillibrand.senate.gov/?p=38452', note: 'Jan 2026' },
    { value: '88', label: 'Profitable large U.S. corporations that paid zero federal income tax in their most recent year, despite $105B+ in U.S. profits', source: 'Institute on Taxation and Economic Policy', url: 'https://itep.org/88-profitable-corporations-paid-zero-income-tax-in-2025/', note: '2025' },
    { value: '9%', label: 'Average effective federal tax rate paid by profitable large corporations in 2018 — down from 16% in 2014, after the statutory rate was cut from 35% to 21%', source: 'U.S. Government Accountability Office', url: 'https://www.gao.gov/products/gao-23-105384' },
  ],
  climate: [
    { value: '~74M', label: 'Americans — more than a fifth of the country — exposed to elevated industrial cancer risk from toxic air', source: 'ProPublica analysis of EPA data ("Poison in the Air")', url: 'https://www.propublica.org/article/toxmap-poison-in-the-air' },
    { value: '79%', label: 'Black Americans are 79% more likely than white Americans to live where industrial pollution is highest', source: 'The Climate Reality Project', url: 'https://www.climaterealityproject.org/sacrifice-zones' },
    { value: '2–9x', label: 'Lifetime cancer risk above EPA’s acceptable level for those nearest some "Cancer Alley" plants', source: 'ProPublica', url: 'https://www.propublica.org/article/how-black-communities-become-sacrifice-zones-for-industrial-air-pollution' },
  ],
  schools: [
    { value: '6,870', label: 'School book bans in the 2024–25 year alone — nearly 23,000 since 2021, a level without precedent', source: 'PEN America', url: 'https://pen.org/book-bans/', note: '2024–25' },
    { value: '~72%', label: 'Share of book challenges pushed by organized groups and officials — not individual parents (about 16%)', source: 'American Library Association', url: 'https://pen.org/book-bans/', note: '2024' },
    { value: '45%', label: 'Share of 12th graders scoring below NAEP Basic in math — the highest (worst) on record — while the culture war rages', source: 'NAEP, The Nation’s Report Card', url: 'https://www.nagb.gov/news-and-events/news-releases/2025/declines-in-8th-grade-science-and-12th-grade-math-and-reading.html', note: '2024' },
  ],
  rights: [
    { value: '44%', label: 'Transgender adults who say they’ve feared for their personal safety — vs 12% of gay/lesbian and 8% of bisexual adults', source: 'Pew Research Center', url: 'https://www.pewresearch.org/social-trends/2025/05/29/the-experiences-of-lgbtq-americans-today/', note: 'Jan 2025 survey' },
    { value: '~1 in 10', label: 'LGBTQ adults who say there is broad social acceptance for transgender people in the U.S. (vs ~6 in 10 for gay/lesbian people)', source: 'Pew Research Center', url: 'https://www.pewresearch.org/social-trends/2025/05/29/the-experiences-of-lgbtq-americans-today/', note: '2025' },
    { value: '42%', label: 'Transgender adults subjected to slurs or jokes about their identity — nearly double the rate for gay/lesbian adults', source: 'Pew Research Center', url: 'https://www.pewresearch.org/social-trends/2025/05/29/the-experiences-of-lgbtq-americans-today/', note: '2025' },
  ],
}

export const CAPTURE_STATS: Stat[] = [
  { value: 'Still legal', label: 'Members of Congress can still trade individual stocks while voting on the industries they oversee; no full ban has passed', source: 'Roll Call', url: 'https://rollcall.com/2026/03/31/congress-stock-trading-ban-what-happened/', note: 'as of Q1 2026' },
  { value: '~1 in 5', label: 'Members of Congress who traded stocks in sectors tied to their own committees (2019–2021)', source: 'Brennan Center for Justice (citing NYT)', url: 'https://www.brennancenter.org/our-work/research-reports/congressional-stock-trading-explained' },
  { value: '+81%', label: 'Growth in global billionaire wealth since 2020 — the fastest concentration of wealth on record', source: 'Oxfam, "Resisting the Rule of the Rich" (2025)', url: 'https://www.oxfam.org.uk/media/press-releases/billionaire-wealth-jumps-three-times-faster-in-2025-to-highest-peak-ever-sparking-dangerous-political-inequality-says-oxfam/' },
  { value: '~90%', label: 'Share of ICE detainees held in for-profit or contracted facilities — detention as a business model', source: 'Detention Watch Network', url: 'https://www.detentionwatchnetwork.org/issues/detention-101' },
]

// ---------------------------------------------------------------------------
//  TWO PARTIES, SAME DEMONS — even-handed accountability. Real quotes kept in
//  accurate context, each with a primary/secondary source.
// ---------------------------------------------------------------------------
export type Receipt = { side: string; who: string; claim: string; source: string; url: string; note?: string }

export const BOTH_SIDES: Receipt[] = [
  {
    side: 'Both',
    who: 'Congress, 2024',
    claim: 'Both parties’ portfolios beat the market in 2024 — Democrats up ~31%, Republicans up ~26%, versus the S&P 500’s ~25%. Neither side’s hands are clean.',
    source: 'Unusual Whales report, via The Hill',
    url: 'https://thehill.com/business/5072670-dozens-of-lawmakers-beat-stock-market-in-2024-report/',
    note: '2024',
  },
  {
    side: 'Republican',
    who: 'Speaker Mike Johnson (R)',
    claim: 'Says he supports a trading ban “on balance” — yet has declined to bring it to a vote and voices sympathy for letting members trade to support their families. Support in words, stall in action.',
    source: 'The Hill',
    url: 'https://thehill.com/homenews/house/5299936-johnson-congressional-stock-trading-ban/',
    note: 'May 2025',
  },
  {
    side: 'Democrat',
    who: 'Rep. Nancy Pelosi (D)',
    claim: 'Rejected a trading ban with “We are a free-market economy. They should be able to participate in that.” Her family’s disclosed trades returned ~71% in 2024, far beating the market.',
    source: 'CNN; Fortune (Unusual Whales)',
    url: 'https://www.cnn.com/2025/11/06/politics/stock-tracker-nancy-pelosi-investors',
    note: '2021 quote; 2024 returns',
  },
]

// ---------------------------------------------------------------------------
//  BOTH SIDES FEED THIS — per-issue even-handed receipts. One Democrat example,
//  one Republican example (and sometimes a "both") of perpetuating the problem,
//  each kept in accurate context with a primary/secondary source.
// ---------------------------------------------------------------------------
export const ISSUE_RECEIPTS: Record<string, Receipt[]> = {
  government: [
    { side: 'Both', who: 'Four presidents, one untouched loophole', claim: 'The carried-interest loophole lets investment managers pay the ~20% capital-gains rate instead of ordinary income rates up to 37%. Bush, Obama, Trump, and Biden all promised to close it. None did.', source: 'NOTUS', url: 'https://www.notus.org/money/trump-wall-street-tax-carried-interest-loophole-reconciliation' },
    { side: 'Republican', who: 'The 2017 Tax Cuts & Jobs Act', claim: 'Republicans claimed the TCJA would fix carried interest, but the three-year holding rule they wrote exempts virtually all private-equity deals (held 5–7 years). The loophole survived after heavy PE lobbying.', source: 'Americans for Financial Reform', url: 'https://ourfinancialsecurity.org/resources/close-the-carried-interest-loophole-that-is-a-tax-dodge-for-super-rich-private-equity-executives/' },
    { side: 'Democrat', who: 'The 2022 Inflation Reduction Act', claim: 'Democrats promised to close the loophole, then stripped the provision to win Sen. Sinema’s vote — after she took ~$2M from the securities and investment industry. “Hats off to the P/E lobby,” a former Goldman CEO mocked.', source: 'CNBC', url: 'https://www.cnbc.com/2022/08/09/how-wall-street-wooed-sen-kyrsten-sinema-and-preserved-its-multi-billion-dollar-carried-interest-tax-break.html' },
  ],
  climate: [
    { side: 'Republican', who: 'The oil & gas industry, 2024', claim: 'The fossil fuel industry spent about $219 million on the 2024 election — roughly 88% of candidate money to Republicans — then got the drilling and deregulation bills it paid for. A 2019 study found the money rewards lawmakers who already vote the industry’s way.', source: 'Yale Climate Connections', url: 'https://yaleclimateconnections.org/2025/01/the-fossil-fuel-industry-spent-219-million-to-elect-the-new-u-s-government/' },
    { side: 'Democrat', who: 'Sen. Joe Manchin (D)', claim: 'Manchin chaired the Senate Energy Committee while earning roughly $500K a year from his family coal company (stake worth $1–5M) and helped strip climate provisions from Democrats’ own bill. A government-ethics watchdog called it “a classic case study for a conflict of interest.”', source: 'Florida Phoenix / States Newsroom', url: 'https://floridaphoenix.com/2023/07/11/manchin-earned-476k-in-2022-from-family-coal-company-congressional-disclosures-show/' },
  ],
  immigration: [
    { side: 'Democrat', who: 'President Obama, “deporter-in-chief”', claim: 'Obama oversaw record deportations — roughly 3 million+ — and expanded the detention and enforcement machine that later administrations inherited. The infrastructure of mass detention was built across both parties, not one.', source: 'ACLU', url: 'https://www.aclu.org/news/immigrants-rights/deporter-chief' },
    { side: 'Both', who: 'The for-profit detention system', claim: 'About 90% of ICE detainees are held in private or contracted facilities — a system that pays out to the same prison corporations no matter which party holds power. Detention is a business, and both parties have kept it open.', source: 'Detention Watch Network', url: 'https://www.detentionwatchnetwork.org/issues/detention-101' },
  ],
}
