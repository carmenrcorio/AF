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
