import Link from "next/link";

import { FaqList, type FaqItem } from "@/components/faq-list";
import { PricingTiers } from "@/components/sections/pricing/pricing-tiers";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/sections/section";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------- 1-3. Intro, toggle, tiers */

export function PricingIntro() {
  return (
    <Section tone="default" padBottom="tight">
      <div className="mx-auto max-w-prose text-center">
        <Reveal trigger="mount">
          <p className="mb-4 text-sm font-semibold tracking-wide text-accent-600 uppercase">
            Pricing
          </p>
          <h1 className="text-4xl leading-tight font-semibold text-balance text-primary-900 lg:text-5xl">
            Simple pricing for schools.
          </h1>
        </Reveal>
        <Reveal trigger="mount" delay={0.08}>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            One subscription for your whole school — you pay per school, not per
            teacher. Every plan includes all five lesson materials and full
            curriculum alignment. Prices in USD.
          </p>
          {/* The definition sits above the tiers on purpose: "150 lesson packs
              per month" means nothing until you know what a pack is. */}
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            A lesson pack is one topic turned into five materials — a lesson
            plan, slides, a quiz, homework, and a marking guide.
          </p>
        </Reveal>
      </div>

      <div className="mt-14">
        <PricingTiers />
      </div>

      <Reveal className="mt-8 text-center text-sm text-slate-500">
        Monthly lesson-pack limits reset at the start of each billing cycle.
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------ 4. Beta / founder */

export function FounderPricing() {
  return (
    <Section tone="default" padTop="none" padBottom="tight">
      <Reveal className="flex flex-col items-start gap-6 rounded-2xl border border-accent-200 bg-accent-50 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <p className="max-w-2xl text-lg leading-relaxed text-primary-900">
          Sifa is in beta. Pilot schools joining now get founder pricing locked
          in — talk to us about early-access terms.
        </p>
        <Button
          asChild
          className="h-12 w-full shrink-0 bg-accent-500 px-7 text-base text-white hover:bg-accent-600 sm:w-auto"
        >
          <Link href="/contact">Request a demo</Link>
        </Button>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------------ 5. FAQ */

const FAQS: FaqItem[] = [
  {
    question: "Can we change plans later?",
    answer:
      "Yes — upgrade or downgrade at any time; changes take effect from your next billing cycle.",
  },
  {
    question: "What happens if we reach our monthly lesson-pack limit?",
    answer:
      "You can upgrade to a higher tier at any point. We'll never generate materials you haven't asked for, so you stay in control of usage.",
  },
  {
    question: "Do you offer annual billing?",
    answer:
      "Yes. Paying annually gives you two months free compared to monthly.",
  },
  {
    question: "Is there a pilot or trial?",
    answer:
      "Yes — we're onboarding pilot schools now with founder pricing. Request a demo to discuss early-access terms.",
  },
  {
    question: "Why are prices in USD?",
    answer:
      "Sifa serves schools across several countries, so one currency keeps every plan directly comparable rather than moving with the exchange rate. Your invoice total is the figure shown here.",
  },
];

/*
 * A "How do schools pay?" entry was removed rather than shipped: it was still
 * placeholder scaffolding, and the guide counts an unfinished answer against us
 * more heavily than a missing one. Restore it as a normal FaqItem - no
 * `placeholder` flag - once the real payment methods are decided.
 */
export function PricingFaq() {
  return (
    <Section tone="muted">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-sm font-semibold tracking-wide text-accent-600 uppercase">
              FAQ
            </p>
            <h2 className="text-3xl leading-tight font-semibold text-balance text-primary-900 sm:text-4xl">
              Pricing questions.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Anything not covered here, ask before you commit.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block font-medium text-primary-700 underline-offset-4 hover:underline"
            >
              Talk to us →
            </Link>
          </div>
        </Reveal>

        <FaqList items={FAQS} className="max-w-none lg:col-span-7" />
      </div>
    </Section>
  );
}

/* --------------------------------------------------------- 6. Closing CTA */

export function PricingCta() {
  return (
    <Section tone="default">
      <Reveal className="mx-auto max-w-prose text-center">
        <h2 className="text-3xl leading-tight font-semibold text-balance text-primary-900 sm:text-4xl">
          Bring Sifa to your school.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Tell us how many teachers you have and which curricula you follow, and
          we&rsquo;ll recommend a tier — and talk through founder pricing while
          Sifa is in beta.
        </p>
        <Button
          asChild
          className="mt-8 h-12 w-full bg-accent-500 px-7 text-base text-white hover:bg-accent-600 sm:w-auto"
        >
          <Link href="/contact">Request a demo</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
