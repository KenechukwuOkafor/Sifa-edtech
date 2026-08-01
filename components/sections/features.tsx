import {
  Layers,
  PencilLine,
  ScrollText,
  SlidersHorizontal,
  SquareCheckBig,
  Users,
} from "lucide-react";

import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/sections/section";

/**
 * Deliberately unnumbered: the five materials and the qualities around them
 * are a set, not a sequence. Numbering here would imply an order that does not
 * exist. How It Works and the roadmap are sequences, and are numbered.
 */

const FEATURES = [
  {
    icon: Layers,
    title: "Complete lesson packs",
    detail: "Five aligned materials from a single topic.",
  },
  {
    icon: ScrollText,
    title: "Curriculum-aligned",
    detail: "Mapped to WAEC, NECO, and NERDC scheme of work.",
  },
  {
    icon: SquareCheckBig,
    title: "Marking guides built in",
    detail: "Every quiz ships with marking guidance.",
  },
  {
    icon: SlidersHorizontal,
    title: "Differentiated by level",
    detail: "Content adjusts to your class's ability.",
  },
  {
    icon: PencilLine,
    title: "Fully editable",
    detail: "Teachers refine everything before class.",
  },
  {
    icon: Users,
    title: "School-wide consistency",
    detail: "Every classroom held to the same standard.",
  },
];

export function Features() {
  return (
    <Section tone="default">
      <SectionHeading
        eyebrow="Features"
        title="What every lesson pack includes."
      />

      <RevealGroup
        as="ul"
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {FEATURES.map(({ icon: Icon, title, detail }) => (
          <RevealItem
            as="li"
            key={title}
            className="rounded-xl border border-slate-200 bg-white p-7 transition-colors hover:border-primary-200"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary-800 text-white">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-primary-900">
              {title}
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">{detail}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
