import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/sections/section";

/**
 * Numbered, because this genuinely is a sequence - the order is information a
 * teacher needs. Contrast with Features, which is a set and stays unnumbered.
 */

const STEPS = [
  "Enter the topic and class level.",
  "Sifa generates the full pack.",
  "Edit, download, and teach.",
];

export function HowItWorksTeaser() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="How it works"
        title="From topic to taught in three steps."
      />

      <RevealGroup as="ol" className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-6">
        {STEPS.map((step, index) => (
          <RevealItem as="li" key={step} className="relative">
            {/* Connector between steps, desktop only. */}
            {index < STEPS.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute top-6 left-[calc(3rem+1rem)] hidden h-px w-[calc(100%-3rem)] bg-slate-300 sm:block"
              />
            ) : null}
            <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-full border border-primary-200 bg-white font-display text-lg font-semibold text-primary-800">
              {index + 1}
            </span>
            <p className="mt-5 text-lg leading-relaxed font-medium text-primary-900">
              {step}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.1}>
        <Link
          href="/how-it-works"
          className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-primary-800 underline-offset-4 transition-colors hover:text-accent-600 hover:underline"
        >
          See the full workflow
          <ArrowRight className="size-4" />
        </Link>
      </Reveal>
    </Section>
  );
}
