import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { PlaceholderValue } from "@/components/placeholder-value";
import { PricingTiers } from "@/components/sections/pricing/pricing-tiers";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/sections/section";
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
            One subscription for your whole school. Every plan includes all five
            lesson materials, curriculum alignment, and unlimited teachers
            within your tier. Prices in USD.
          </p>
        </Reveal>
      </div>

      <div className="mt-14">
        <PricingTiers />
      </div>
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

/* ------------------------------------------------------- 5. Lesson pack note */

export function LessonPackNote() {
  return (
    <Section tone="default" padTop="none">
      <Reveal className="mx-auto max-w-prose border-t border-slate-200 pt-10 text-center">
        <p className="leading-relaxed text-slate-600">
          A lesson pack is one topic turned into five materials: a lesson plan,
          slides, a quiz, homework, and a marking guide. Monthly limits reset at
          the start of each billing cycle.
        </p>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------------ 6. FAQ */

type Faq = {
  question: string;
  answer: string;
  /** Rendered as an unmistakable placeholder rather than plain copy. */
  placeholder?: boolean;
  note?: string;
};

const FAQS: Faq[] = [
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
    question: "How do schools pay?",
    answer:
      "Fill in real payment methods — e.g. card / bank transfer / local payment. Remove this question if not yet set.",
    placeholder: true,
    note: "Confirm your real payment methods before publishing, or delete this entry.",
  },
];

export function PricingFaq() {
  return (
    <Section tone="muted">
      <SectionHeading eyebrow="FAQ" title="Pricing questions." />

      <RevealGroup as="ul" className="mt-12 max-w-3xl space-y-3" stagger={0.05}>
        {FAQS.map((faq) => (
          <RevealItem as="li" key={faq.question}>
            {/* <details> keeps this keyboard accessible and working without JS. */}
            <details className="group rounded-xl border border-slate-200 bg-white open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-medium text-primary-900 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-3">
                  {faq.question}
                  {faq.placeholder ? (
                    <span className="rounded-full border border-dashed border-amber-500/70 bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-800">
                      Needs your input
                    </span>
                  ) : null}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="size-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-5">
                {faq.placeholder ? (
                  <>
                    <PlaceholderValue className="text-sm leading-relaxed">
                      {faq.answer}
                    </PlaceholderValue>
                    {faq.note ? (
                      <p className="mt-3 text-sm text-slate-500">{faq.note}</p>
                    ) : null}
                  </>
                ) : (
                  <p className="leading-relaxed text-slate-600">{faq.answer}</p>
                )}
              </div>
            </details>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/* --------------------------------------------------------- 7. Closing CTA */

export function PricingCta() {
  return (
    <Section tone="default">
      <Reveal className="mx-auto max-w-prose text-center">
        <h2 className="text-3xl leading-tight font-semibold text-balance text-primary-900 sm:text-4xl">
          Bring Sifa to your school.
        </h2>
        <Button
          asChild
          className="mt-8 h-12 bg-accent-500 px-7 text-base text-white hover:bg-accent-600"
        >
          <Link href="/contact">Request a demo</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
