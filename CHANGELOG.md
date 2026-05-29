# Changelog

All notable changes to **America First: The Only Way** are recorded here, from inception forward.
This file is the single source of truth for "what changed, when, and why." It is updated in the **same
commit** as the change it describes — no exceptions.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versioning follows [Semantic Versioning](https://semver.org/): `MAJOR.MINOR.PATCH`.

Entry types: **Added**, **Changed**, **Fixed**, **Removed**, **Security**, **Docs**, **Infra**.

---

## [Unreleased]

_Work in progress toward the next tagged release._

### Planned next
- Sourcing pass: verify and cite every statistic before it goes live.
- Full Constitution text (all Articles + Amendments with plain-language).
- Phone-verified signup + profile creation flow.
- Comments, amendment proposals, and one-citizen-one-vote voting.
- Candidate Accountability index with sourced external links.
- Moderation queue + rate limiting.

---

## [0.10.0] — 2026-05-29 — Even-handedness, wave 2 (Climate + Immigration)

### Added
- **"Both Sides Feed This"** receipts on two more issues:
  - **Climate** — fossil fuel money ($219M in 2024, ~88% to GOP) vs. Sen. Manchin chairing
    Energy while earning ~$500K/yr from his family coal company ("classic conflict of interest"
    per a govt-ethics watchdog). Framed honestly: the money is NOT 50/50, but the capture is real
    on both sides.
  - **Immigration** — Obama "deporter-in-chief" (~3M+ deportations, built the detention machine)
    + the for-profit detention system (~90% private/contracted) that pays out regardless of party.

### Verified this pass
- Confirmed the pre-existing Climate/Schools/Rights "By the Numbers" stats are accurately sourced
  (e.g. NAEP: 45% of 12th graders below Basic in math, the worst on record — confirmed via the
  National Assessment Governing Board).

### Notes
- Remaining issues for the even-handedness pass: Healthcare, Guns, Justice, Schools, Rights.
  The culture-war ones (Schools, Rights) will get receipts that reflect the *real* shared
  dynamic (the outrage industry profiting) rather than a forced policy symmetry.

---

## [0.9.0] — 2026-05-29 — Even-handedness, wave 1 (Government) + tax stats

### Added
- **"Both Sides Feed This"** reusable section on issue pages — per-issue even-handed receipts
  (Democrat + Republican examples, in context, sourced). Live first on **Government/Taxes**:
  the carried-interest loophole that Bush, Obama, Trump, and Biden all promised to close and
  none did (TCJA exemption + IRA carve-out for Sinema).
- **Government tax stats**: 88 profitable corporations paid $0 federal income tax (ITEP, 2025);
  effective corporate rate fell 16%→9% after the 2017 cut (GAO).
- `ISSUE_RECEIPTS` map in content; receipts wired into the issue template for all issues
  (renders only where data exists).

### Notes
- Remaining 7 issues' both-sides receipts + Climate/Schools/Rights stats are the next install-
  ments of this pass.

---

## [0.8.0] — 2026-05-29 — QA fixes + credibility cleanup

### Fixed
- **Amendments routes restored.** `/amendments`, `/amendments/propose`, and `/amendments/[id]`
  were 404ing because the page files never reached disk; all four files now committed. Every
  "Propose"/"See all amendments" button across the issue pages works again.
- **Missing `IssueAmendments` component** added (issue pages were failing to build).

### Changed
- **Candidate Accountability:** removed placeholder "Sample Representative" cards (fabricated
  grades undercut the sourced-receipts credibility) and replaced with an honest "being built —
  the right way" treatment that keeps the promise visible without fake data.

---

## [0.7.0] — 2026-05-28 — Two Parties, Same Demons

### Added
- **"Two Parties, Same Demons"** section on the Problem/Capture page: even-handed accountability
  showing both parties protect the rigged system, with every claim sourced.
- `BOTH_SIDES` receipts in the content module — each with side, name, claim, source, and link.

### Verification notes (why this is defensible)
- **Both parties beat the market in 2024** (Dems ~31%, Reps ~26% vs S&P ~25%) — Unusual Whales
  via The Hill. The "both sides" point is literally true, not rhetoric.
- **Mike Johnson (R):** quote kept in *accurate context* — he says he supports a ban "on balance"
  but won't bring it to a vote. Verified via The Hill + Snopes, which flagged that viral clips
  truncate him. We deliberately did NOT use the distorted meme version.
- **Nancy Pelosi (D):** verbatim 2021 "free-market economy" quote (CNN) + documented ~71% 2024
  family portfolio return (Fortune/Unusual Whales).

---

## [0.6.0] — 2026-05-28 — Sourcing pass (wave 1)

### Added
- **"By the Numbers"** sourced-statistics sections, each figure verified against a primary
  source and linking out to it. Live now on: the Problem/Capture page and five issues —
  Healthcare, Guns, Justice, Government, and Immigration.
- `STATS` and `CAPTURE_STATS` in the content module: every entry carries value, label, source
  name, source URL, and an as-of note.

### Changed
- Issue pages now render real cited stats where verified, and a clearer "sourcing in progress"
  note where not yet done (Climate, Schools, Rights, and the economy detail still pending).

### Notes — figures corrected against primary sources during verification
- Maternal mortality: used CDC 2024 actual (17.9, a slight decline) rather than the brainstorm's
  "~19 and rising."
- Wealth concentration: used Oxfam's precise 2025 figure (billionaire wealth +81% since 2020)
  rather than the vaguer "~40% since 2000."
- Congressional stock trading: confirmed still legal as of Q1 2026; no full ban passed.
- All figures sourced to CDC, Library of Congress/CRS, Pew, Johns Hopkins, Prison Policy
  Initiative, TRAC, Detention Watch Network, Brennan Center, and Oxfam.

---

## [0.5.0] — 2026-05-28 — The full Living Constitution

### Added
- Complete verbatim U.S. Constitution loaded into the database — Preamble, all 7 Articles
  (21 sections), and all 27 Amendments — transcribed from the U.S. National Archives official
  transcription, with the Archives credited as source on the page.
- **Plain-English explanation for every one of the 49 provisions** (not just the Bill of Rights
  as originally scoped — the whole document is explained).
- Redesigned data-driven `/constitution` page: provisions grouped (Preamble / Articles /
  Amendments), each tappable to reveal its plain-English meaning via the `Provision` component.
  Original text is always shown and never altered.

### Notes
- Schema already supports anchoring amendments to a specific provision (`amendments.provision_id`),
  so clause-level "propose an amendment to THIS" can be switched on next.

---

## [0.4.0] — 2026-05-28 — The amendment engine

### Added
- `/amendments` hub listing open proposals with live For/Against/Abstain tallies.
- `/amendments/propose` — deliberate submission flow: six **mandatory** fields (title, issue,
  the change, the problem, who it affects, the strongest objection) with minimum lengths and a
  read-it-back review step before submit. Submission gated to phone-verified citizens.
- `/amendments/[id]` detail page showing all six fields, with the strongest-objection field
  given visual weight, plus the voting widget.
- For / Against / Abstain voting (`VoteBox`), one vote per verified citizen, changeable anytime.
- Per-issue amendment preview on each issue page (`IssueAmendments`).

### Changed
- Schema: amendments gain change_text/problem/affects/objection/issue_slug/provision_id;
  votes now allow 0 (abstain); `amendment_tallies` rebuilt to count for/against/abstain.
  (Migration 0003.)
- Nav adds "Amendments"; homepage buttons point to the propose/hub flows.

### Notes
- provision_id is in place so amendments can anchor to specific Constitution clauses once the
  full text is loaded (next build).

---

## [0.3.0] — 2026-05-28 — Phone-verified signup

### Added
- `/join` — phone-OTP signup: phone → 6-digit code → verify → profile created. The first
  interactive feature and the foundation for comments, amendments, and voting.
- Migration `0002_phone_verified_trigger.sql`: `phone_verified` is set server-side from
  `auth.users` and cannot be faked by the client.

### Changed
- Nav "Join the Movement" now links to `/join`.

---

## [0.2.1] — 2026-05-28 — Depth & the backend goes live

### Added
- **"The Fuller Picture"** explainer on every issue page — a substantive paragraph that frames
  what\u2019s really going on before the problems/profiteers/fix, so readers grasp the issue and the
  proposed solution, not just headlines.

### Infra
- **Supabase project provisioned** (`america-first`, region us-east-1) and the **initial schema
  applied**: all tables, Row-Level Security policies, the vote-tally view, and the seeded Preamble
  are live in the production database.

---

## [0.2.0] — 2026-05-28 — The content build

Turned the landing page into a real, navigable site. Every nav link and button now leads
somewhere real.

### Added
- **Content pages**: `/problem`, `/plan`, `/common-ground`, `/issues`, and a page for each of
  the eight issues at `/issues/[slug]` (Government, Healthcare, Immigration, Climate, Guns,
  Justice, Schools, Rights). Each issue follows one honest structure: thesis → real problems →
  who profits → phased fix → principle.
- **Constitution page** (`/constitution`): the Preamble live with plain-language; framework ready
  for the full text.
- **Shared chrome**: `Nav` and `Footer` components moved into the root layout so every page is
  consistent.
- **Content module** (`lib/content.ts`): single source of truth for the written blueprint.

### Changed
- Homepage now pulls phases/issues from the content module and links to real routes instead of
  on-page anchors.

### Fixed
- Middleware no longer crashes the site when Supabase keys are absent (no-ops until configured),
  resolving the deployed `MIDDLEWARE_INVOCATION_FAILED` 500.

### Notes
- **Statistics are intentionally withheld** from issue pages until the sourcing pass, to honor the
  "every fact is sourced" promise. Issue pages show a clear "by the numbers — coming soon" note.
- Build verified: 17 routes prerendered.

---

## [0.1.0] — 2026-05-28 — Foundation

The first end-to-end skeleton: a real, building application plus the standards that govern it.

### Added
- **Homepage** (`app/page.tsx`): hero, the flagship *Capture* section, the three reform
  phases, the eight issues, an interactive Living Constitution demo (the Preamble), and the
  Candidate Accountability preview.
- **Design system** (`app/globals.css`): founding-document aesthetic — Libre Caslon display
  type, Public Sans (the U.S. government design-system typeface) for UI, Old Glory Red as a
  restrained accent, parchment + ink palette, tasteful stars-and-stripes texture.
- **Supabase integration**: browser client, server client, and session-refresh middleware
  (cookie-based auth, ready for phone verification).
- **Database schema** (`supabase/migrations/0001_init.sql`): `profiles`,
  `constitution_provisions`, `candidates`, `comments`, `amendments`, `votes`; a vote-tally
  view; and the Preamble seeded so the Constitution feature works on day one.

### Security
- **Row-Level Security enabled on every table** from the first migration. Public read on
  published content only; writes (comment/propose/vote) restricted to phone-verified members.
- **One-citizen-one-vote** enforced at the database level by a unique constraint on
  `(user_id, amendment_id)` — integrity cannot be bypassed by the client.
- Secrets kept out of the repo (`.gitignore` excludes `.env*.local`); `.env.example` ships
  placeholders only.

### Docs
- Established this changelog, the engineering standards (`docs/ENGINEERING.md`), and the
  security policy (`SECURITY.md`).

### Infra
- Continuous-integration pipeline (`.github/workflows/ci.yml`) that builds, type-checks, and
  audits dependencies on every pull request.
- Pull-request template enforcing the security and standards checklist on every change.

### Notes
- `next build` verified passing locally before handoff.
- Decisions to date: stack = Next.js (App Router) + Supabase + Vercel + GitHub; vote integrity
  via phone verification; movement name *America First: The Only Way*.

---

[Unreleased]: https://github.com/OWNER/AF/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/OWNER/AF/releases/tag/v0.1.0
