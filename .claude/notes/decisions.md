# Decisions

Running log of choices that are not obvious from the code, and why.
Newest last. Keep entries short.

## 2026-08-01 — Foundation scaffold

**Tailwind v4, not v3.** The original spec asked for tokens "in the Tailwind
config". v4 removed `tailwind.config.ts` in favour of CSS-first `@theme`
blocks. Pinning v3 to get a JS config would mean fighting current
`create-next-app` and shadcn/ui defaults. Chose v4; tokens live in
`app/globals.css`. Approved by Kene.

**Next 16, not 15.** `create-next-app@latest` now ships Next 16.2.12 / React
19.2.4. Not a deliberate pick — just what current tooling produces.

**Sora as the display face.** Considered Fraunces (editorial serif, warmer,
more distinctive) and Plus Jakarta Sans (safest, least distinctive). Sora reads
credible and modern without drifting playful, which suits a B2B buyer.

**Neutrals are Tailwind's `slate-*`, not a redefined `neutral-*`.** Overriding
a built-in palette name is a footgun for anyone who joins later. Cost: the
design system has two brand ramps plus a stock ramp rather than three custom
ones.

**One `LeadForm` with two variants, not two components.** Waitlist and contact
differ only in which fields are required. Backed by a Zod discriminated union
and one `leads` table with a `type` column.

**Insert first, notify second.** Resend failures are logged and swallowed. A
dropped notification email is recoverable from the database; a signup lost to a
transient email error is not.

**Env read lazily, not validated at import.** The site must build and render on
CI/Vercel without Supabase or Resend credentials present. Only `/api/lead`
needs them, and it returns 503 with a clear message when they are missing.

**Tests cover `lib/leads.ts` only.** At foundation stage it is the one module
with real branching. Page stubs and layout chrome have nothing worth asserting
yet.

**3 npm audit "high" vulnerabilities are unactionable.** They are in Next 16's
own bundled `postcss` and `sharp`; npm's only offered fix is downgrading to
next@9.3.3. Re-check when Next ships patched deps.
