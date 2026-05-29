-- ===========================================================================
--  America First: The Only Way — initial schema
--  Apply via Supabase migrations or paste into the SQL Editor.
-- ===========================================================================

-- ---------- PROFILES ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  phone_verified boolean default false,
  age_band text,                       -- 'under_30' | '30_50' | 'over_50'
  state text,
  role text default 'member' check (role in ('member','moderator','admin')),
  created_at timestamptz default now()
);

-- ---------- LIVING CONSTITUTION ----------
create table if not exists public.constitution_provisions (
  id bigint generated always as identity primary key,
  type text not null,                  -- preamble | article | section | clause | amendment
  label text not null,                 -- e.g. 'Article I, Section 8, Clause 3'
  original_text text not null,         -- verbatim, never altered
  plain_text text,                     -- modern plain-English meaning
  parent_id bigint references public.constitution_provisions(id) on delete cascade,
  display_order int not null default 0
);

-- ---------- CANDIDATE ACCOUNTABILITY ----------
create table if not exists public.candidates (
  id bigint generated always as identity primary key,
  name text not null,
  office text,
  district text,
  party text,
  status text default 'incumbent',     -- incumbent | candidate | open
  af_score int,                        -- 0..100, our own scorecard against the Plan
  bio text,
  libertyscore_url text,               -- deep link out to LibertyScore
  trackaipac_url text,                 -- deep link out to TrackAIPAC
  fec_url text,                        -- deep link out to FEC filings
  created_at timestamptz default now()
);

-- ---------- COMMENTS (per chapter/section) ----------
create table if not exists public.comments (
  id bigint generated always as identity primary key,
  user_id uuid not null references public.profiles(id) on delete cascade,
  content_ref text not null,           -- which chapter/section/provision
  body text not null,
  parent_id bigint references public.comments(id) on delete cascade,
  status text default 'visible' check (status in ('visible','flagged','removed')),
  created_at timestamptz default now()
);

-- ---------- PROPOSED AMENDMENTS ----------
create table if not exists public.amendments (
  id bigint generated always as identity primary key,
  user_id uuid not null references public.profiles(id) on delete cascade,
  content_ref text,
  title text not null,
  body text not null,
  rationale text,
  status text default 'open' check (status in ('draft','open','under_review','passed','rejected')),
  created_at timestamptz default now()
);

-- ---------- VOTES (one per verified citizen per amendment) ----------
create table if not exists public.votes (
  id bigint generated always as identity primary key,
  user_id uuid not null references public.profiles(id) on delete cascade,
  amendment_id bigint not null references public.amendments(id) on delete cascade,
  value smallint not null check (value in (-1, 1)),
  created_at timestamptz default now(),
  unique (user_id, amendment_id)
);

-- ===========================================================================
--  ROW LEVEL SECURITY
-- ===========================================================================
alter table public.profiles enable row level security;
alter table public.constitution_provisions enable row level security;
alter table public.candidates enable row level security;
alter table public.comments enable row level security;
alter table public.amendments enable row level security;
alter table public.votes enable row level security;

-- Public read access for published content
create policy "read constitution"  on public.constitution_provisions for select using (true);
create policy "read candidates"     on public.candidates             for select using (true);
create policy "read profiles"       on public.profiles               for select using (true);
create policy "read amendments"     on public.amendments             for select using (true);
create policy "read vote tallies"   on public.votes                  for select using (true);
create policy "read visible comments" on public.comments             for select using (status = 'visible');

-- Profiles: each user manages only their own row
create policy "insert own profile" on public.profiles for insert with check (auth.uid() = id);
create policy "update own profile" on public.profiles for update using (auth.uid() = id);

-- Helper: only phone-verified members may create content / vote
-- Comments
create policy "create own comment" on public.comments for insert
  with check (
    auth.uid() = user_id
    and exists (select 1 from public.profiles p where p.id = auth.uid() and p.phone_verified)
  );
create policy "update own comment" on public.comments for update using (auth.uid() = user_id);

-- Amendments
create policy "create own amendment" on public.amendments for insert
  with check (
    auth.uid() = user_id
    and exists (select 1 from public.profiles p where p.id = auth.uid() and p.phone_verified)
  );
create policy "update own amendment" on public.amendments for update using (auth.uid() = user_id);

-- Votes (uniqueness enforces one vote per person per amendment)
create policy "cast own vote" on public.votes for insert
  with check (
    auth.uid() = user_id
    and exists (select 1 from public.profiles p where p.id = auth.uid() and p.phone_verified)
  );
create policy "change own vote" on public.votes for update using (auth.uid() = user_id);
create policy "remove own vote" on public.votes for delete using (auth.uid() = user_id);

-- ===========================================================================
--  VOTE TALLY VIEW
-- ===========================================================================
create or replace view public.amendment_tallies as
  select
    a.id as amendment_id,
    a.title,
    coalesce(sum(case when v.value =  1 then 1 else 0 end), 0) as up,
    coalesce(sum(case when v.value = -1 then 1 else 0 end), 0) as down,
    coalesce(sum(v.value), 0) as score
  from public.amendments a
  left join public.votes v on v.amendment_id = a.id
  group by a.id, a.title;

-- ===========================================================================
--  SEED: the Preamble (so the Living Constitution page works on day one)
-- ===========================================================================
insert into public.constitution_provisions (type, label, original_text, plain_text, display_order)
values (
  'preamble',
  'Preamble',
  'We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.',
  'The American people themselves create this government in order to build a stronger and more united country, apply justice fairly, keep the peace at home, defend the nation, support everyone''s wellbeing, and protect freedom for ourselves and for every generation to come.',
  1
);
