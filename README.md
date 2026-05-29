# America First: The Only Way

A crowdsourced, constitution-respecting movement platform — Next.js (App Router) + Supabase + Vercel.

## What's in this scaffold
- **Homepage** (`app/page.tsx`) — the approved landing page: hero, The Capture (corporate + foreign), the three phases, the eight issues, the Living Constitution demo, and Candidate Accountability.
- **Supabase wired in** (`lib/supabase/*`, `middleware.ts`) — cookie-based auth ready for phone verification.
- **Database schema** (`supabase/migrations/0001_init.sql`) — profiles, the Living Constitution, candidates, comments, amendments, votes, Row-Level Security, a vote-tally view, and the Preamble seeded.

## 1 — Push to the AF repo
```bash
cd af
git init
git add .
git commit -m "Initial scaffold: homepage, Supabase, schema"
git branch -M main
git remote add origin https://github.com/<your-username>/AF.git
git push -u origin main
```

## 2 — Connect Supabase
1. Create a project at supabase.com (or let the build step provision it).
2. Run the schema: open the SQL Editor and paste `supabase/migrations/0001_init.sql`.
3. Copy `.env.example` to `.env.local` and fill in your project URL and publishable key (Project → Connect).
4. Enable **Phone** auth under Authentication → Providers.

## 3 — Deploy on Vercel
1. In Vercel, **Import** the AF GitHub repo.
2. Add the two environment variables from `.env.local`.
3. Deploy. Every push to `main` now auto-deploys, and each branch gets a preview URL.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
```

## Next build steps
- Full Constitution page (all articles + amendments with plain-language).
- Phone-verified signup + profiles.
- Comments, amendment proposals, and voting (one verified citizen, one vote).
- Candidate Accountability index with sourced external links.
- Moderation tooling.
