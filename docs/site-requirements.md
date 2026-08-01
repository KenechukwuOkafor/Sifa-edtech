# Sifa site requirements — derived from the development guide

Source: `docs/site-development-guide.md` (extracted from
"Site development guide(2).docx", supplied 2026-08-01). That file is the
authority; this one is the working checklist we build against.

The guide is written for a **reviewer** assessing whether a startup is real —
the kind of review behind cloud/GPU credit programmes. Every requirement below
exists to answer one question: *is this an incorporated startup building a real
AI product, or a template?*

## The sentence the whole site must earn

> "We are a real incorporated startup building an AI-powered product, with a
> technical team, a clear market, a working website, a serious use case."

## Required page sections (guide §"Simple page structure")

In this order:

1. **Hero** — headline, subheadline, CTA
2. **Problem** — what is broken in the industry
3. **Solution** — how Sifa solves it
4. **AI Technology** — what the AI actually does
5. **Product Features** — 4–6 strong features
6. **How It Works** — step-by-step user flow
7. **Technology & Infrastructure** — AWS / NVIDIA / cloud / AI stack
8. **Market Opportunity** — target users, countries, revenue model
9. **Traction / MVP Status** — beta, pilots, waitlist
10. **Roadmap** — what is being built next
11. **Team** — founder, developers
12. **Contact / Demo / Waitlist** — form and email
13. **Footer** — privacy, terms, company name, socials

## Ten questions the site must answer clearly

- What does the startup do?
- Who is it for?
- What serious problem does it solve?
- Why is AI necessary?
- What data does the AI use?
- How will AWS infrastructure be used?
- How will NVIDIA technology help?
- What stage is the product in?
- Who is building it?
- How can a reviewer contact or test it?

## Hard requirements checklist

| # | Requirement | Status |
|---|---|---|
| 1 | Real domain (not github.io) | ⬜ pending — Vercel + custom domain |
| 1 | Clear logo and brand name | 🟡 wordmark placeholder in `components/layout/logo.tsx` |
| 1 | Live site, not "coming soon" | ⬜ pending copy |
| 1 | Professional UI, mobile responsive, fast | ✅ foundation done |
| 1 | Contact email (`hello@domain`) | 🟡 `hello@sifa.africa` set, not yet live |
| 1 | Company line ("Built by X Ltd") | 🟡 placeholder `Sifa Technologies Ltd.` — needs real entity |
| 1 | Founder/team section | ⬜ needs real people |
| 1 | Privacy policy | 🟡 route exists, no content |
| 1 | Terms of use | 🟡 route exists, no content |
| 1 | Demo/waitlist button | ✅ built |
| 2 | Homepage explains Sifa in 5 seconds | ⬜ copy |
| 3 | Problem is serious and money-related | ⬜ copy |
| 4 | AI is central, with a dedicated **AI Technology** section | ⬜ page needed |
| 5 | **Technology & Infrastructure** section (AWS + NVIDIA) | ⬜ `/tech` to be expanded |
| 6 | One specific user, never "for everyone" | ⬜ copy |
| 7 | 3–5 measurable benefits, labelled "target"/"beta goal" if unproven | ⬜ copy |
| 8 | Product screenshots / demo visuals | ⬜ **needs real assets** |
| 9 | "Why now?" section | ⬜ copy |
| 10 | Traction, even if early | ⬜ needs real facts |
| 11 | Roadmap (phased table) | ⬜ page/section needed |
| 12 | Market opportunity — users, countries, revenue model | ⬜ page/section needed |
| 13 | Team credibility, incl. at least one visible developer + LinkedIn | ⬜ needs real people |
| 14 | Trust & compliance — privacy, terms, data protection, security | ⬜ content |
| 15 | "How we use AWS" and "How we use NVIDIA" sections | ⬜ page/section needed |

## Guide §4 — what the AI Technology section must explain

- What data the AI uses
- What the AI predicts / generates / detects
- What models or techniques are involved
- Why GPU / cloud infrastructure is needed
- How cloud infrastructure helps the product scale

For Sifa the honest answer is LLM-driven generation grounded in curriculum
documents (WAEC / NECO / NERDC schemes of work) — retrieval over a corpus of
syllabus and past-paper material, then structured generation of the five pack
artefacts. Stack angle per the guide's table: **Data/ML SaaS** and
**Design/code AI** rows — LLM inference, vector search, GPU-accelerated
inference.

## Mistakes to avoid (guide §16)

Empty pages · "coming soon" with no explanation · no contact info · no team ·
no AI explanation · no technical architecture · no market focus · **fake
stats** · broken links · poor mobile design · free GitHub domain · crypto
positioning · consulting/agency language ("we build websites for clients")
rather than product language.

## Honesty constraints

The guide is explicit that numbers must not be invented — §12 forbids
placeholder TAM figures, §7 says label unproven figures as "target" or "beta
goal", §5 phrases infrastructure as "we **plan to** use". We follow that
literally:

- Aspirational infrastructure is written as planned, never as deployed.
- No traction number, pilot, testimonial, or partner is published until it is
  real and verifiable.
- Team entries require actual people with real LinkedIn URLs.

Anything on this page marked ⬜ that depends on real-world facts (team,
traction, company registration, screenshots) is **blocked on input from Kene**,
not something to fill in with plausible text.
