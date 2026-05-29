# Engineering Standards

These standards are mandatory for every change. They exist so the project stays **secure,
consistent, and ready to scale** as the team and the traffic grow. CI enforces the parts that can
be automated; code review enforces the rest. If a rule blocks you, change the rule in a PR — don't
route around it.

---

## 1. Principles

1. **Secure by default.** See `SECURITY.md`. Security is not a feature; it is a constraint on
   every feature.
2. **Boring, proven technology.** Favor the well-trodden path over the clever one.
3. **Small, reviewable changes.** One concern per pull request.
4. **The database is the source of truth for rules** (RLS), not the UI.
5. **Everything is written down.** Decisions go in ADRs; changes go in the CHANGELOG.

## 2. Tech stack (pinned)

| Layer        | Choice                                  |
|--------------|------------------------------------------|
| Runtime      | Node.js 20 LTS                           |
| Framework    | Next.js 15 (App Router)                  |
| Language     | TypeScript (`strict: true`)              |
| UI           | React 19                                 |
| Backend/DB   | Supabase (Postgres, Auth, RLS, Realtime) |
| Hosting      | Vercel                                   |
| Source/CI    | GitHub + GitHub Actions                  |

Version bumps to a major dependency require an ADR.

## 3. Repository & branching

- **`main` is always deployable and is protected.** No direct pushes. Merges require a passing
  CI run and at least one review.
- **Branch naming:** `type/short-description` — e.g. `feat/phone-auth`, `fix/vote-tally`,
  `chore/ci`, `docs/security`.
- **Trunk-based:** short-lived branches, merged quickly. Long-running branches rot.
- Every branch gets an automatic **Vercel preview deploy** for review.

## 4. Commits & pull requests

- **Conventional Commits:** `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, `perf:`,
  `security:`. The prefix drives the CHANGELOG and (eventually) versioning.
- Every PR uses the template (`.github/pull_request_template.md`) and **updates the CHANGELOG in
  the same PR**.
- A PR is not done until the **Definition of Done** (§12) is met.

## 5. Code standards

- **TypeScript strict**, no implicit `any`, no unchecked `// @ts-ignore`.
- **Formatting & linting:** Prettier + ESLint (`eslint-config-next`) run in CI; no lint errors
  merge. _(Wiring scheduled in the next infra task; build-time type checking is already gating.)_
- **Structure:** `app/` routes & pages, `lib/` shared logic (e.g. `lib/supabase`), `components/`
  reusable UI, `docs/` documentation, `supabase/migrations/` schema.
- **Naming:** components `PascalCase`, functions/vars `camelCase`, files for components
  `PascalCase.tsx`, others `kebab-case`.
- **Server vs client:** default to Server Components; mark client components `'use client'` only
  when they need interactivity/state. Never import server-only secrets into a client component.

## 6. Database & migrations

- **Schema changes happen only through migrations** in `supabase/migrations/`, numbered and
  descriptive (`0002_add_reports.sql`). **Never edit production schema by hand.**
- **RLS is required on every new table, in the same migration.** A table without policies fails
  review.
- Migrations are **reviewed like code** and applied to a preview/branch database before
  production.

## 7. Testing

| Type         | Tool (target)        | Scope                                            |
|--------------|----------------------|--------------------------------------------------|
| Unit         | Vitest               | pure functions, components                       |
| Integration  | Vitest + test DB     | data access, server actions                      |
| **RLS tests**| SQL/pgTAP            | prove policies allow/deny correctly — **required for every policy** |
| E2E          | Playwright           | signup → vote, critical user journeys            |

Target ≥ 80% coverage on `lib/` and all RLS policies. Security-relevant logic is not "done"
without a test that proves the deny case.

## 8. CI/CD (what gates a merge)

`.github/workflows/ci.yml` runs on every PR and must pass:
1. Install (clean, from lockfile).
2. **Build** (`next build`) — this also type-checks.
3. **Dependency audit** (`npm audit`) — high/critical advisories are triaged.
4. _(Adding next:)_ lint, unit/RLS tests.

Deployment is via Vercel's GitHub integration: previews per branch, production on merge to
`main`.

## 9. Environments & configuration

- Three environments: **Development** (local), **Preview** (per-branch), **Production**.
- All configuration is via environment variables — none hard-coded. See `.env.example`.
- Production secrets are never used locally; preview uses a separate Supabase branch/database.

## 10. Performance & accessibility

- **Performance budget:** Largest Contentful Paint < 2.5s, CLS < 0.1 on a mid-range mobile
  device. Lighthouse performance ≥ 90 on the homepage.
- **Accessibility:** WCAG 2.2 AA. Semantic HTML, keyboard-navigable, sufficient contrast,
  labeled controls. The movement is for everyone — the site must be usable by everyone.

## 11. Observability

- Error tracking (Sentry or equivalent) in production.
- Structured logs for server actions; **never log PII or secrets.**
- Uptime monitoring + alerting on error-rate, auth-failure, and rate-limit spikes.

## 12. Scaling to enterprise (designed in now)

- **Stateless app tier:** Next.js on Vercel scales horizontally; no server-side session state
  beyond cookies.
- **Database for scale:** use the Supabase **connection pooler** for serverless; index foreign
  keys and hot query paths (votes, comments by `content_ref`); plan to **partition `votes`** and
  archive old amendments as volume grows; add **read replicas** when read load demands it.
- **Caching:** CDN/edge caching and Next.js ISR for public content (the manifesto, the
  Constitution) so reads don't hit the database; realtime only where it matters (live tallies).
- **Abuse load is a scaling problem too:** rate limiting and moderation must scale with users
  (see `SECURITY.md`).
- **No lock-in traps:** business logic stays in our code and in portable SQL, so the platform can
  grow without a rewrite.

## 13. Documentation

- **ADRs** (`docs/adr/NNNN-title.md`) for any significant or hard-to-reverse decision: context,
  options, decision, consequences.
- The **CHANGELOG** is updated with every change.
- Code comments explain **why**, not what.

## 14. Definition of Done

A change is done when:
- [ ] It meets these standards and `SECURITY.md`.
- [ ] CI is green (build, type-check, audit; tests where applicable).
- [ ] Tests cover the new logic, including the security deny-case.
- [ ] New tables/columns have RLS and a migration.
- [ ] No secrets, no PII in logs, no `NEXT_PUBLIC_` secret leakage.
- [ ] The CHANGELOG is updated in the same PR.
- [ ] It was reviewed and approved.
