-- Sifa marketing site: lead capture.
-- Run in the Supabase SQL editor, or via `supabase db push` if using the CLI.

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  type        text not null check (type in ('waitlist', 'contact')),
  name        text not null,
  email       text not null,
  school      text,
  role        text,
  message     text,
  source      text
);

-- One waitlist entry per address; re-submissions are treated as a no-op by the
-- API route. Contact enquiries are intentionally exempt - the same person may
-- legitimately write in more than once.
create unique index if not exists leads_waitlist_email_key
  on public.leads (email)
  where type = 'waitlist';

create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- RLS on with no policies: anon and authenticated roles get nothing. Writes
-- happen exclusively through the service-role key in /api/lead, which bypasses
-- RLS. Add a policy only if the browser ever needs direct read access.
alter table public.leads enable row level security;
