# Sifa — marketing website

Marketing site for **Sifa**, a B2B SaaS that turns a topic into a complete
lesson pack — lesson plan, slides, quiz, homework and marking guide — for
African primary and secondary schools, aligned to the WAEC / NECO / NERDC
scheme of work.

This repo is the marketing site only. No product application code lives here.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui ·
Framer Motion · Supabase · Resend · Vitest. Deploys to Vercel.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

The site runs without credentials — every page renders. Only the lead form
needs them; without them `/api/lead` returns a 503 with a clear message.

## Commands

| Command | Does |
|---|---|
| `npm run dev` | Dev server on :3000 |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Vitest |

## Structure

```
app/
  layout.tsx          Header / main / Footer, fonts, metadata
  globals.css         Design tokens (Tailwind v4 is CSS-first — no config file)
  page.tsx            Home
  how-it-works/ tech/ pricing/ about/ contact/ privacy/ terms/
  api/lead/route.ts   Lead capture endpoint
components/
  layout/             Header, Footer, Logo, PageShell
  lead-form.tsx       Waitlist + contact variants
  ui/                 shadcn primitives
lib/
  site.ts             Nav, footer and legal links — single source of truth
  leads.ts            Zod schema shared by client and server
  fonts.ts            Inter (body) + Sora (display)
  env.ts supabase.ts resend.ts   Server-only
supabase/schema.sql   `leads` table DDL
```

## Setting up the backend

1. Create a Supabase project and run `supabase/schema.sql` in its SQL editor.
2. Copy the project URL and **service role** key into `.env.local`.
3. Create a Resend API key, verify your sending domain, and set
   `RESEND_FROM_EMAIL` / `RESEND_TO_EMAIL`.

The service role key bypasses row level security and must stay server-side —
never prefix it with `NEXT_PUBLIC_`.

## Deploying

Push to a Vercel project and add the same variables from `.env.example` under
project settings. Set `NEXT_PUBLIC_SITE_URL` to the production origin so
metadata and OG URLs resolve.

## Current state

Foundation only. Every page is a stub rendering its heading — **no marketing
copy has been written yet**. See `CLAUDE.md` for conventions and
`.claude/notes/decisions.md` for why things are the way they are.
