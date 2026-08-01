@AGENTS.md

# Sifa — marketing website

## What Sifa is

B2B SaaS for African primary and secondary schools. A teacher enters a topic;
Sifa generates a complete **lesson pack**: lesson plan, slides, quiz, homework,
and marking guide — aligned to the **WAEC / NECO / NERDC** scheme of work.

This repo is the **marketing website only**. No product application code lives
here. Audience is school decision-makers (principals, proprietors, HODs,
curriculum leads), not individual consumers.

Tone for any copy: clean, professional, trustworthy. B2B edtech, not playful.

## The site development guide is binding

`docs/site-development-guide.md` is a reviewer-facing credibility standard
(the kind used for cloud/GPU credit programmes). **We are mirroring it.**
`docs/site-requirements.md` is the working checklist derived from it.

Read both before writing any page. The site must earn this sentence:

> "We are a real incorporated startup building an AI-powered product, with a
> technical team, a clear market, a working website, a serious use case."

Non-negotiables from that guide:

- **AI must be central**, with a dedicated *AI Technology* section explaining
  what data it uses, what it generates, what techniques, and why GPU/cloud.
- A **Technology & Infrastructure** section covering AWS and NVIDIA, phrased as
  *"we plan to use"* wherever that is the truth.
- **Market Opportunity**, **Traction / MVP status**, **Roadmap**, and **Team**
  sections all exist. A visible technical team member is required.
- **Never invent stats, traction, testimonials, partners, or team members.**
  The guide forbids fake numbers outright; unproven figures must be labelled
  "target" or "beta goal". Anything requiring real-world fact is blocked on
  Kene, not to be filled with plausible text.
- Avoid consulting/agency language. Sifa builds a product.

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript, strict |
| Styling | Tailwind CSS **v4** |
| Components | shadcn/ui (`radix-nova` preset, Radix base) |
| Animation | Framer Motion |
| Email | Resend |
| Database | Supabase (Postgres) |
| Tests | Vitest |
| Deploy | Vercel |

## Tailwind v4 — no config file

**There is no `tailwind.config.ts`.** Tailwind v4 is CSS-first: every design
token lives in `@theme` blocks in `app/globals.css`, and Tailwind generates
utilities from them. Do not create a JS/TS Tailwind config — it will be ignored.

## Design system

Defined in `app/globals.css`.

- **`primary-*`** — deep indigo, brand anchor `#312E81` at the **800** step.
  Headings, nav, footer, primary buttons.
- **`accent-*`** — warm amber/coral, anchor `#F08423` at **500**. CTAs and
  highlights only. It is the loudest thing on the page; use it sparingly.
- **Neutrals** — Tailwind's built-in **`slate-*`**. Deliberately *not*
  redefined, so `slate-500` means what any Tailwind dev expects.
- **Fonts** — `font-sans` = Inter (body), `font-display` = Sora (headings).
  Loaded via `next/font/google` in `lib/fonts.ts`, self-hosted at build time.
  `h1`–`h4` get `font-display` automatically from the base layer.
- **Spacing** — numeric utilities (`py-18`, `py-30`) are generated dynamically
  by v4 and need no declaration. Named semantic steps: `gutter` (1.5rem),
  `section` (5rem), `section-lg` (7.5rem), `section-xl` (10rem).
- **Widths** — `max-w-content` (72rem) for page width, `max-w-prose` (42rem)
  for text columns.

### One naming subtlety

shadcn's semantic `--accent` token is its *hover/active surface*, not a CTA
colour. It is mapped to `accent-50` (a light warm wash) so hovers read
on-brand. For an actual CTA fill use `bg-accent-500`, never `bg-accent`.
Likewise `bg-primary` (shadcn semantic) is mapped to `primary-800`, so the two
agree.

## Layout

`app/layout.tsx` renders `Header` → `main#main` → `Footer` → `Toaster`, plus a
skip-to-content link. Interior pages wrap content in `PageShell`, which applies
the page width, section rhythm, and `<h1>`.

Nav, footer, and legal links come from **`lib/site.ts`** — a single source of
truth. Add or reorder links there, not in the components.

## Lead capture

One component, two variants: `<LeadForm variant="waitlist" | "contact" />`.

Flow: client form → `POST /api/lead` → Zod validate → insert into Supabase
`leads` → best-effort Resend notification.

Rules that matter:

- **The service-role key is server-only.** `lib/supabase.ts`, `lib/resend.ts`,
  and `lib/env.ts` all import `server-only`. Never import them from a client
  component, and never prefix that key with `NEXT_PUBLIC_`.
- **`lib/leads.ts` is shared** between client and server, so it must stay free
  of server-only imports. The Zod discriminated union lives there.
- **Env is read lazily**, not at module load, so the site builds on a machine
  with no credentials. A missing var returns 503 from the route, not a crash.
- **A failed Resend send does not fail the request** — the lead row is already
  committed, and losing an email beats losing the signup.
- **Duplicate waitlist emails return `ok: true`**, enforced by a partial unique
  index (`type = 'waitlist'`). Contact enquiries may repeat.
- **Honeypot**: the `company_website` field is hidden from users. Any value
  means a bot — the API returns success and stores nothing.

Table DDL is in `supabase/schema.sql`. RLS is on with **no policies**, so all
writes must go through the service-role key in the route handler.

## Commands

```bash
npm run dev        # dev server
npm run build      # production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
npm test           # vitest run
```

Run `npm run lint && npm run typecheck && npm test && npm run build` before
calling work done. Lint is strict — `react-hooks/set-state-in-effect` is an
error, not a warning.

## Current state

Foundation only. Every page is a stub rendering its heading — **no marketing
copy has been written yet, deliberately.** Do not invent product claims,
pricing, testimonials, or customer names. Ask before writing copy.

The current nav (Product / How It Works / Tech / Pricing / About / Contact)
predates the site development guide and **does not yet cover** its required
sections — AI Technology, Market Opportunity, Traction, Roadmap, Team. The
information architecture needs reworking before copy is written; see
`docs/site-requirements.md`.

Placeholders awaiting real values: logo (wordmark text in
`components/layout/logo.tsx`), social URLs and contact email in `lib/site.ts`,
and every credential in `.env.local`.
