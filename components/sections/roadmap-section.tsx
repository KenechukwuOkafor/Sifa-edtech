import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/sections/section";
import { cn } from "@/lib/utils";

/**
 * Guide §11. Numbered because a roadmap is a typed timeline - the order is the
 * information. Phase 1 is marked live; the rest are explicitly upcoming, so
 * nothing here reads as a shipped claim.
 */

const PHASES = [
  { phase: 1, title: "Lesson pack generation", status: "Live in beta" },
  { phase: 2, title: "Curriculum library + scheme-of-work import" },
  { phase: 3, title: "School admin dashboard" },
  { phase: 4, title: "Low-bandwidth / offline mode" },
  { phase: 5, title: "Scaled inference for school networks" },
  { phase: 6, title: "Expansion across West & East Africa" },
];

export function RoadmapSection() {
  return (
    <Section tone="default">
      <SectionHeading eyebrow="Roadmap" title="Where Sifa is headed." />

      <RevealGroup
        as="ol"
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8"
      >
        {PHASES.map(({ phase, title, status }) => {
          const live = Boolean(status);
          return (
            <RevealItem as="li" key={phase} className="relative pt-6">
              {/* Timeline rule sits above each item; the marker breaks it. */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-0 right-0 left-0 h-0.5 rounded-full",
                  live ? "bg-accent-500" : "bg-slate-200",
                )}
              />
              <div className="flex items-baseline gap-3">
                <span
                  className={cn(
                    "font-display text-sm font-semibold",
                    live ? "text-accent-600" : "text-slate-400",
                  )}
                >
                  Phase {phase}
                </span>
                {live ? (
                  <span className="rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-semibold text-accent-700">
                    {status}
                  </span>
                ) : null}
              </div>
              <h3
                className={cn(
                  "mt-2 text-lg leading-snug font-semibold",
                  live ? "text-primary-900" : "text-primary-800",
                )}
              >
                {title}
              </h3>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
