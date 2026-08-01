import {
  ClipboardList,
  FileQuestion,
  House,
  Presentation,
  SquareCheckBig,
} from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/sections/section";

/**
 * The page's signature: one topic in, five artefacts out.
 *
 * This is the single most characteristic fact about Sifa, so it gets a real
 * diagram rather than another card grid — an input row, a branch, and the five
 * outputs it produces. The same five appear as chips in the hero, so the page
 * states the promise and then shows it.
 */

const OUTPUTS = [
  { label: "Lesson plan", icon: ClipboardList, note: "Objectives and structure" },
  { label: "Slides", icon: Presentation, note: "Ready to teach" },
  { label: "Quiz", icon: FileQuestion, note: "Differentiated" },
  { label: "Homework", icon: House, note: "Set and assign" },
  { label: "Marking guide", icon: SquareCheckBig, note: "Answers and criteria" },
];

export function Solution() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="The solution"
        title="One topic in. A full teaching pack out."
        lede="Your teacher types a topic and class level. Sifa generates a structured lesson plan, ready-to-teach slides, a differentiated quiz, homework, and a marking guide — all aligned to your curriculum and scheme of work, all editable before use. What used to take an evening takes minutes."
      />

      <div className="mt-14 lg:mt-16">
        {/* Input */}
        <Reveal className="mx-auto max-w-xl">
          <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
            <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3">
              <span className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                Topic
              </span>
              <span className="font-medium text-primary-900">
                Photosynthesis
              </span>
              <span className="ml-auto rounded-md bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700">
                JSS 2 · Basic Science
              </span>
            </div>
          </div>
        </Reveal>

        {/*
          Branch: one stem fanning into five. The fan only renders at lg, where
          the grid below is actually five columns - the ticks sit at 10/30/50/
          70/90%, which is each card's centre to within a few pixels. At smaller
          widths the grid wraps, so a plain stem is drawn instead.
        */}
        <div aria-hidden="true" className="relative h-12 lg:h-20">
          {/* Stem down from the topic card. */}
          <div className="absolute top-0 left-1/2 h-6 w-px -translate-x-1/2 bg-slate-300 lg:h-10" />
          {/* Junction dot. */}
          <div className="absolute top-6 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500 ring-4 ring-slate-50 lg:top-10" />
          {/* Cross-rule spanning first tick to last. */}
          <div className="absolute top-10 right-[10%] left-[10%] hidden h-px bg-slate-300 lg:block" />
          {/* Drops to each card. */}
          <div className="absolute inset-x-0 top-10 hidden grid-cols-5 lg:grid">
            {OUTPUTS.map((output) => (
              <div key={output.label} className="flex justify-center">
                <div className="h-10 w-px bg-slate-300" />
              </div>
            ))}
          </div>
        </div>

        {/* The five outputs */}
        <RevealGroup
          as="ul"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        >
          {OUTPUTS.map(({ label, icon: Icon, note }) => (
            <RevealItem
              as="li"
              key={label}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-shadow hover:shadow-md"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary-50 text-primary-700 transition-colors group-hover:bg-accent-50 group-hover:text-accent-600">
                <Icon className="size-5" />
              </span>
              <p className="mt-4 font-display font-semibold text-primary-900">
                {label}
              </p>
              <p className="mt-1 text-sm text-slate-500">{note}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
