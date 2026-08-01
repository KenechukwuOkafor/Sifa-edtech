# Information architecture — proposal

Status: **draft, awaiting approval.** No routes have been changed yet.

Maps the 13 sections mandated by `docs/site-development-guide.md` onto actual
pages, and reconciles them with the scaffold's existing routes.

## Principle

A reviewer must be able to answer all ten of the guide's questions **from the
homepage alone**, then verify depth on a dedicated page. So the homepage
carries the full narrative arc at summary depth; the interior pages carry
evidence. Nothing important lives *only* on an interior page.

## Proposed routes

| Route | Nav label | Guide sections | Status |
|---|---|---|---|
| `/` | Product | 1–6, 9, 10, 12 (summary depth) | exists, stub |
| `/how-it-works` | How It Works | 6 (full), 8 visuals | exists, stub |
| `/technology` | Technology | 4, 5, 7, 15 | **rename** from `/tech` |
| `/company` | Company | 9, 10, 11, 12, 13 | **expand** from `/about` |
| `/pricing` | Pricing | — (not in guide) | exists, stub — see open question |
| `/contact` | Contact | 12 | exists, form built |
| `/privacy` | (footer) | 14 | exists, stub |
| `/terms` | (footer) | 14 | exists, stub |

Two route changes: `/tech` → `/technology`, `/about` → `/company`. Both are
pre-launch with no inbound links, so no redirects needed.

## Homepage section order

Follows the guide's prescribed sequence:

1. **Hero** — headline (what Sifa does), subheadline (who it helps + problem),
   CTA "Join the waitlist" with secondary "See how it works"
2. **Problem** — §3: serious and money-related. Teacher preparation hours,
   scheme-of-work coverage gaps, inconsistency across streams, exam outcomes
3. **Solution** — one topic in, five artefacts out. Anchored by the lesson-pack
   mockup
4. **AI Technology** (summary) — §4: what data, what it generates, what
   techniques, why GPU/cloud → links to `/technology`
5. **Product Features** — §7: 4–6 features, each with a concrete benefit
6. **How It Works** — 3–4 steps → links to `/how-it-works`
7. **Why now** — §9: curriculum pressure, teacher workload, digital adoption
8. **Traction / MVP status** — §10: stage badge + whatever is true
9. **Product visuals** — §8: dashboard, pack sample, mobile
10. **Waitlist** — §12: the `LeadForm` already built, at `#waitlist`

## `/technology` — the highest-weight page

The guide calls §4 "one of the biggest approval factors" and §15 "one of the
best approval boosters". Sections:

1. **AI Technology** — the five things §4 demands: what data the AI uses
   (WAEC/NECO/NERDC schemes, syllabi, past papers), what it generates
   (five structured artefacts), techniques (retrieval over a curriculum corpus,
   structured generation, evaluation against objectives), why GPU/cloud, how it
   scales
2. **Architecture** — request path from topic to pack
3. **How we use AWS** — §15, phrased as planned where it is planned
4. **How we use NVIDIA** — §15, using the guide's *Data/ML SaaS* stack angle:
   LLM inference, vector search, GPU-accelerated inference
5. **Security and data protection** — §14

## `/company`

1. Story and mission
2. **Team** — §13, with technical members visibly marked
3. **Market opportunity** — §12: target users, launch markets, revenue model,
   growth plan. No TAM figure unless verifiable
4. **Roadmap** — §11, the six phases
5. **Traction** — §10, in full

Anchors: `#team`, `#market`, `#roadmap`, `#traction`, so the footer and
homepage can deep-link.

## Nav

Header: Product · How It Works · Technology · Company · Pricing · Contact,
plus the "Join the waitlist" CTA. Six items is the practical ceiling before
the desktop bar crowds.

Footer keeps the full set plus Privacy, Terms, company line, contact email and
socials — already built, needs the two renamed hrefs.

## Open questions

1. **Pricing.** The guide never asks for it, and §16 counts empty pages against
   you. If tiers are not decided, a stub is a liability. Options: (a) drop from
   nav until real, (b) publish real tiers, (c) replace with "Request pricing"
   routing into the contact form. **Recommend (a)** — remove from nav, keep the
   route unlinked, restore when pricing is set.
2. **Demo vs waitlist.** The guide's example CTAs include "Request Demo".
   Currently waitlist-only. A demo request implies something to show; worth
   deciding once the MVP is demonstrable.
3. **`/company` vs splitting.** Team + market + roadmap + traction on one page
   is long. The alternative is separate `/roadmap` and `/market` routes, which
   pushes the nav to eight. **Recommend one page with anchors.**
