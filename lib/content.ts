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
      'The fight over government size misses the real game. The question was never big versus small — it\u2019s who the rules are written for. Today the tax code rewards whoever can afford the accountants to exploit it, while ordinary earners get the standard deduction and a shrug. A leaner state and a stronger floor aren\u2019t opposites: the waste and the capture protect each other, and ending one is how you fund the other.',
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
      'America preaches \u201Cfamily values\u201D while running one of the most dangerous maternal-health systems in the developed world and guaranteeing no paid leave. The result is a cruel bind: pregnancy is made medically and financially risky almost by design, abortion is restricted in the very places offering mothers the least support, and a high-dollar adoption and fertility industry stands ready to treat the outcome as supply. Being genuinely pro-life has to mean protecting the child and carrying the burden alongside the mother — not one without the other.',
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
      p1: ['Protect emergency pregnancy care everywhere so doctors aren\u2019t afraid to act', 'Invest in maternal health in the communities at highest risk', 'Ban deceptive adoption marketing; require honest IVF consent and clinic reporting'],
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
      'Both parties talk \u201Crule of law\u201D while a whole economy quietly runs on the opposite. Employers want the illegality, because a worker who can be deported is a worker who won\u2019t report wage theft. Private detention profits per body per night and lobbies for more bodies. The chaos isn\u2019t a failure of the system — for the people profiting, it is the system. Firm, fair borders and humane treatment aren\u2019t opposites; the cartels and the bad-faith employers are the shared enemy of both.',
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
      'We argue about whether climate change is real while entire communities are quietly turned into sacrifice zones and billed for someone else\u2019s profit.',
    principle: 'Steward creation without trampling the poor.',
    context:
      'The \u201Cis it real\u201D debate is a distraction from the real injustice: a handful of companies understood the damage for decades, poor communities breathe the consequences, and working towns get handed the bill for a transition designed without them. That\u2019s exactly why the fight gets framed as \u201Cjobs versus planet\u201D — elites set it up that way. You can steward the air and water without sacrificing the people who live downwind of the refinery, but only if the plan puts those workers first instead of last.',
    problems: [
      { h: 'Who breathes what', d: 'Poorer, often minority regions carry the pollution burden and the disasters while wealthier areas reap the profits.' },
      { h: 'Jobs vs. planet, by design', d: 'Climate policy too often lands as higher bills and lost jobs, confirming the fear that the plan is to kill your town to save the world.' },
    ],
    profiteers: [
      { h: 'Fossil-fuel giants', d: 'Profit from extraction and lobby to delay any transition.' },
      { h: '\u201CGreen\u201D profiteers', d: 'Grab subsidies for projects that don\u2019t really benefit locals.' },
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
      'Two true things at once: the country is awash in guns and that causes real, daily harm — and the public panic often outruns the actual risk of any single mass event, because fear sells. Manufacturers profit from every ban scare; media and political operatives profit from every tragedy. A sober middle exists and most Americans live in it: protect the law-abiding owner\u2019s right to defend their home, while making it genuinely harder for the dangerous and the trafficker to arm up.',
    problems: [
      { h: 'Real harm, honestly named', d: 'The country is saturated with guns and that causes undeniable harm, far beyond any peer nation per capita.' },
      { h: 'Fear distorts the debate', d: 'Mass-shooting panic is real even as public tragedies are rarer than people believe — and both extremes feed the same fear loop.' },
    ],
    profiteers: [
      { h: 'Manufacturers & lobbyists', d: 'Make money on every panic about bans and every panic about crime.' },
      { h: 'Media & political grifters', d: 'Raise money off every tragedy — to \u201Cban everything\u201D or to \u201Cbuy more guns.\u201D' },
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
      'The law claims to be blind, but it does not land equally — and \u201Cjustice\u201D has too often become a revenue stream.',
    principle: 'Equal law, not pretend-equal law — judged by evidence, with no collective racial guilt.',
    context:
      'The system doesn\u2019t have to be staffed by villains to land unequally — and the data says it lands very unequally. Worse, \u201Cjustice\u201D has been turned into a revenue model: towns balance budgets on fines, private vendors bill by the phone call, and politicians campaign on fear. We can say plainly that the system isn\u2019t fair without branding every officer, or every member of any race, as the enemy. Judge by evidence — case by case, pattern by pattern.',
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
      'One side says schools must tell the full, ugly truth; the other says they\u2019re indoctrination camps. Meanwhile kids become props in a war adults are enjoying far too much.',
    principle: 'Truthful, transparent, non-indoctrinating — parents respected, no child dehumanized.',
    context:
      'Children have become the trophy in a war adults enjoy far too much. One side wants the ugly truth told in full; the other calls the same lesson indoctrination — and while they fight, reading and math scores quietly slide and consultants sell programs to both. Parents deserve transparency and a real voice; kids deserve the truth about their country\u2019s sins and its achievements, and the right not to be shamed or used as a prop for anyone\u2019s politics.',
    problems: [
      { h: 'Whiplash in the classroom', d: 'Tens of thousands of book challenges; teachers accused of \u201Cgrooming\u201D by one side and \u201Cwhitewashing\u201D by the other.' },
      { h: 'The basics neglected', d: 'Politicians fight the culture war while reading and math outcomes quietly slide.' },
    ],
    profiteers: [
      { h: 'National activist groups', d: 'Use local school fights to fundraise and build clout.' },
      { h: 'Politicians', d: 'Run on \u201Cprotecting your kids\u201D or \u201Cdefending truth\u201D while never fixing outcomes.' },
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
      'One side screams \u201Cgroomers,\u201D the other screams \u201Cerasure,\u201D while actual people quietly change jobs, states, and doctors just to stay safe.',
    principle: 'Dignity for all, compulsion for none.',
    context:
      'Strip away the slogans and you find ordinary people quietly rearranging their lives — changing states, jobs, and doctors — just to stay safe, while professional outrage merchants on both sides cash in on the war over them. A free country can hold two things at once: no one should be beaten, fired, or evicted for who they are, and no one should be forced by law to affirm beliefs they don\u2019t hold. Dignity for all; compulsion for none.',
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
    { h: 'Moralized politics', d: 'Disagreement gets framed as evil — you\u2019re not just wrong, you\u2019re a monster, a traitor, a heretic.' },
    { h: 'Fear and humiliation', d: 'People are terrified of losing status, culture, rights, or their kids\u2019 future, and fear makes compromise feel like surrender.' },
    { h: 'The outrage industry', d: 'Politicians, pundits, and platforms profit from keeping us angry. If we calm down, they lose their edge.' },
  ],
  practices: [
    { h: 'Curiosity before accusation', d: 'Ask what someone is afraid of or trying to protect before dunking on them.' },
    { h: 'Steel-man, don\u2019t straw-man', d: 'Be able to state the other side\u2019s view in a way they\u2019d recognize as fair.' },
    { h: 'No gossiping the other side', d: 'If you wouldn\u2019t say it to their face, don\u2019t say it to your own side either.' },
    { h: 'Shared projects', d: 'People who rebuild a house after a storm together argue differently afterward.' },
    { h: 'Cross-tribe assemblies', d: 'Randomly selected citizens, briefed fairly, asked to propose recommendations on hard issues.' },
  ],
  reforms: [
    { h: 'Open primaries + ranked-choice voting', d: 'Stop rewarding whoever appeals to the angriest slice of each base.' },
    { h: 'Independent redistricting', d: 'End the safe seats that push representatives to the extremes.' },
    { h: 'Transparency about who profits from division', d: 'Show citizens who gets paid every time they\u2019re told their neighbor is subhuman.' },
    { h: 'Civic education', d: 'Teach how to tell propaganda from reporting and how to argue in good faith.' },
  ],
}

// ---------------------------------------------------------------------------
//  CONSTITUTION (Preamble live; full text added in a dedicated pass)
// ---------------------------------------------------------------------------
export const PREAMBLE: { t: string; p: string }[] = [
  { t: 'We the People of the United States,', p: 'The American people themselves — not a king, not a government — are the source of this government\u2019s authority.' },
  { t: 'in Order to form a more perfect Union,', p: 'To build a better, more unified country than the loose alliance the states had before.' },
  { t: 'establish Justice,', p: 'To make sure laws are applied fairly and equally to everyone.' },
  { t: 'insure domestic Tranquility,', p: 'To keep peace and order within the country\u2019s borders.' },
  { t: 'provide for the common defence,', p: 'To organize a military capable of defending the nation.' },
  { t: 'promote the general Welfare,', p: 'To support the health, safety, and wellbeing of the people.' },
  { t: 'and secure the Blessings of Liberty to ourselves and our Posterity,', p: 'To protect freedom for ourselves now and for every generation that comes after us.' },
  { t: 'do ordain and establish this Constitution for the United States of America.', p: 'We formally create and put into effect this Constitution as the supreme law of the United States.' },
]
