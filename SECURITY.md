# Security Policy

Security is the first requirement of this project, not a later phase. This platform holds
**personally identifiable information** (phone numbers) and **sensitive data** (political views,
voting behavior). A breach here is not a leaked to-do list — it is people's political identity.
We design as if that is always true.

> **Governing principle:** Secure by default, defense in depth, least privilege. Every feature
> must answer "what can go wrong, and what stops it?" before it merges.

---

## 1. Secrets & key management

- **No secret ever enters the repository.** `.env*.local` is git-ignored; only `.env.example`
  (placeholders) is committed. CI scans for committed secrets.
- **Two Supabase key tiers, never confused:**
  - `sb_publishable_…` — safe for the browser. Used by the client. **RLS still governs it.**
  - `sb_secret_…` / `service_role` — **bypasses RLS. Server-only. Never shipped to the client,
    never in `NEXT_PUBLIC_*`, never logged.** Used only in trusted server code for admin tasks.
- Environment variables live in Vercel (per environment: Production / Preview / Development) and
  in local `.env.local`. They are rotated on any suspected exposure and on personnel changes.
- The Supabase MCP / admin tooling is **project-scoped and read-only** for day-to-day work.

## 2. Authentication

- **Phone-verification (OTP)** via Supabase Auth is the identity anchor (one real phone → one
  account → one vote).
- **SMS/OTP abuse is a real, expensive attack** (toll-fraud / "SMS pumping"). Mitigations:
  - CAPTCHA (Turnstile/hCaptcha) gating OTP requests.
  - Strict per-phone and per-IP rate limits on OTP send/verify.
  - Geo/number-type screening; flag VOIP and disposable numbers for vote integrity.
- **Sessions** use HTTP-only, `Secure`, `SameSite` cookies (handled by `@supabase/ssr`). No
  tokens in `localStorage`. Sessions refresh server-side via `middleware.ts`.
- Admin and moderator accounts require additional MFA before launch.

## 3. Authorization

- **Row-Level Security on every table — always.** A table without an RLS policy is a bug that
  fails review. New tables ship with policies in the same migration.
- **Least privilege roles:** `member` < `moderator` < `admin`, enforced in RLS, not just the UI.
- **Never trust the client.** All authorization is re-checked server-side / in the database.
  Hiding a button is not access control.

## 4. Data protection & privacy (PII)

- **Data minimization:** collect only what a feature needs. Phone numbers are stored by Supabase
  Auth; we do not duplicate them into application tables.
- **Sensitive by classification:** political opinions, votes, and phone numbers are treated as
  sensitive. Access is logged and limited.
- **Encryption:** in transit (TLS everywhere) and at rest (Supabase-managed).
- **Retention & deletion:** users can delete their account and associated content; deletion
  cascades (`on delete cascade`). A published privacy policy and a clear data-retention schedule
  are launch blockers (CCPA/GDPR-aligned even if not strictly required, because it is the right
  posture for a movement built on trust).

## 5. Input handling

- **Output is escaped by default** (React). Any place that renders user-supplied HTML must run a
  vetted sanitizer (e.g. DOMPurify) — no raw `dangerouslySetInnerHTML` without review.
- **All input is validated** at the boundary with a schema (e.g. Zod) before it reaches the
  database; length limits and allow-lists over deny-lists.
- **No string-built SQL.** All queries go through the Supabase client / parameterized calls.

## 6. Abuse, moderation & vote integrity

- **Rate limiting** on every write path (comments, proposals, votes, OTP) — per user and per IP.
- **Vote integrity** is database-enforced (unique `(user_id, amendment_id)`), gated on
  `phone_verified`, and monitored for coordinated/anomalous patterns.
- **Moderation pipeline:** report → queue → review; new-account pre-moderation; automated
  toxicity/spam screening assists human moderators. Moderation actions are audit-logged.

## 7. Application & network hardening

- **Security headers** set in `next.config`: HSTS, `X-Content-Type-Options`, `X-Frame-Options`/
  frame-ancestors, `Referrer-Policy`, and a **Content-Security-Policy** (locked-down script
  sources; the font origins allow-listed).
- **CORS** restricted to our own origins.
- **Dependencies:** committed lockfile, automated updates (Dependabot), and `npm audit` in CI;
  high/critical advisories are triaged before merge.

## 8. Auditing, monitoring & response

- **Audit log** for security-relevant events: auth events, role changes, vote changes,
  moderation actions, admin access.
- **Monitoring:** error tracking (e.g. Sentry), uptime checks, and alerting on auth-failure and
  rate-limit spikes.
- **Backups & DR:** Supabase point-in-time recovery enabled; restore procedure tested, not
  assumed.

## 9. Reporting a vulnerability

Report suspected vulnerabilities privately to **security@<domain>** (to be configured at launch).
Do not open a public issue for a security report. We aim to acknowledge within 72 hours.
Good-faith research is welcomed; please do not access data that is not yours.

---

_This policy is enforced through the pull-request checklist and CI. Changes to it are logged in
the CHANGELOG under **Security**._
