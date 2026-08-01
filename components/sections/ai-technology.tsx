import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/sections/section";

/**
 * Guide §4 calls this "one of the biggest approval factors" and requires the
 * AI to read as central rather than bolted on. It gets the page's only dark
 * treatment before the closing sections, so it carries visual weight too.
 *
 * The three cards answer the guide's what-it-uses / what-it-generates /
 * how-it-works triplet.
 */

const POINTS = [
  {
    term: "What it uses",
    detail: "Topic, subject, class level, and your curriculum framework.",
  },
  {
    term: "What it generates",
    detail: "Lesson plan, slides, quiz, homework, and marking guide.",
  },
  {
    term: "How it works",
    detail: "LLM inference, structured generation, and curriculum mapping.",
  },
];

export function AiTechnology() {
  return (
    <Section tone="dark">
      <SectionHeading
        tone="dark"
        eyebrow="AI technology"
        title="AI built around how teachers actually plan."
        lede="Sifa's engine takes a topic, subject, and class level and produces classroom-ready teaching materials using large language model inference with structured generation. It maps content to your scheme of work, adjusts for ability level, and pairs every quiz with marking guidance — not generic AI text, but material a teacher can walk into class with."
      />

      <RevealGroup as="ul" className="mt-14 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-3">
        {POINTS.map(({ term, detail }) => (
          <RevealItem as="li" key={term} className="bg-primary-950 p-7 lg:p-8">
            <p className="font-display text-sm font-semibold tracking-wide text-accent-300 uppercase">
              {term}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-200">
              {detail}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.1}>
        <Link
          href="/tech"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent-300 underline-offset-4 transition-colors hover:text-accent-200 hover:underline"
        >
          How Sifa is built
          <ArrowRight className="size-4" />
        </Link>
      </Reveal>
    </Section>
  );
}
