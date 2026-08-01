import {
  Download,
  FileStack,
  ListOrdered,
  Server,
  Sparkles,
  Type,
  type LucideIcon,
} from "lucide-react";

import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/**
 * Request path, in the same visual language as the home page's solution
 * diagram: thin slate rules, a rail of dots, and white cards.
 *
 * The layout flips orientation rather than duplicating markup - a vertical
 * timeline below lg (legible on a phone) and a horizontal rail at lg, where
 * six cells actually fit. The inference step carries the accent dot, matching
 * the junction dot on the home page.
 */

type Step = {
  label: string;
  note: string;
  icon: LucideIcon;
  /** Marks the generation step - the one the whole page is about. */
  accent?: boolean;
};

const STEPS: Step[] = [
  { label: "Input", note: "Topic, subject, class level", icon: Type },
  { label: "API", note: "Request and auth", icon: Server },
  { label: "Queue", note: "Async processing", icon: ListOrdered },
  { label: "Inference", note: "Structured generation", icon: Sparkles, accent: true },
  { label: "Materials", note: "Five aligned outputs", icon: FileStack },
  { label: "Storage", note: "Edit and export", icon: Download },
];

export function ArchitectureFlow() {
  return (
    <div className="relative">
      {/*
        The rail is one continuous line rather than a segment per cell -
        per-cell lines break at every grid gap and read as a dashed rule.
        With six equal columns the first and last dot centres sit at 1/12 and
        11/12 of the width, so the line spans exactly dot to dot.
      */}
      <span
        aria-hidden="true"
        className="absolute top-1.5 right-[8.333%] left-[8.333%] hidden h-px bg-slate-200 lg:block"
      />

      <RevealGroup
        as="ol"
        className="grid gap-0 lg:grid-cols-6 lg:gap-x-2"
        stagger={0.06}
      >
      {STEPS.map(({ label, note, icon: Icon, accent }, index) => {
        const last = index === STEPS.length - 1;

        return (
          <RevealItem
            as="li"
            key={label}
            className="flex gap-4 lg:flex-col lg:gap-0"
          >
            {/* Rail: vertical below lg, horizontal at lg. */}
            <div
              aria-hidden="true"
              className="relative w-4 shrink-0 self-stretch lg:mb-4 lg:h-3 lg:w-auto lg:self-auto"
            >
              {/* Vertical connector to the next step (mobile). */}
              {/* Extends past the rail by the card's bottom margin, otherwise
                  the connector stops short and the chain looks broken. The
                  next dot's ring covers the join. */}
              {!last ? (
                <span className="absolute -bottom-4 top-2 left-1/2 w-px -translate-x-1/2 bg-slate-200 lg:hidden" />
              ) : null}

              {/* Dot. Ringed in the section colour so the rail reads as
                  passing behind it rather than through it. */}
              <span
                className={cn(
                  "absolute top-2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-slate-50 lg:top-1/2",
                  accent ? "bg-accent-500" : "bg-primary-300",
                )}
              />
            </div>

            <div
              className={cn(
                "mb-4 flex-1 rounded-xl border bg-white p-4 lg:mb-0",
                accent
                  ? "border-accent-200 shadow-xs"
                  : "border-slate-200",
              )}
            >
              <span
                className={cn(
                  "inline-flex size-8 items-center justify-center rounded-lg",
                  accent
                    ? "bg-accent-50 text-accent-600"
                    : "bg-primary-50 text-primary-700",
                )}
              >
                <Icon className="size-4" />
              </span>
              <p className="mt-3 font-display text-sm font-semibold text-primary-900">
                {label}
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                {note}
              </p>
            </div>
          </RevealItem>
        );
      })}
      </RevealGroup>
    </div>
  );
}
