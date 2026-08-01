import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section } from "@/components/sections/section";

/**
 * Guide §10 wants progress shown; §12 and §16 forbid inventing numbers.
 *
 * These are product capabilities, not traction claims - what a pack contains
 * and how fast it generates. No user counts, pilot numbers, or testimonials
 * appear here until they are real.
 *
 * Composition note: only genuinely comparable figures go in the stat row. The
 * curriculum boards are an attribute, not a measurement, so they get their own
 * full-width card rather than being forced into a third stat tile where the
 * eye expects another number.
 */

const STATS = [
  {
    /** Rendered visually; `spoken` replaces it for screen readers when the
     *  visual form is an abbreviation. */
    value: "5",
    label: "materials per topic",
  },
  {
    value: "<30s",
    spoken: "Under 30 seconds",
    label: "per lesson pack",
  },
];

const CURRICULA = ["WAEC", "NECO", "NERDC", "IGCSE", "Cambridge"];

export function Traction() {
  return (
    <Section tone="muted">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="mb-4 flex items-center gap-2.5 text-sm font-semibold tracking-wide text-accent-600 uppercase">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-500" />
            </span>
            Product status
          </p>

          <h2 className="text-3xl leading-tight font-semibold text-balance text-primary-900 sm:text-4xl">
            Live in beta.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Sifa is a working product today, generating real lesson packs for
            early users. We&rsquo;re now onboarding pilot schools across
            Nigeria.
          </p>
        </Reveal>

        <RevealGroup as="ul" className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {STATS.map(({ value, spoken, label }) => (
            <RevealItem
              as="li"
              key={label}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <p className="font-display text-5xl leading-none font-semibold tracking-tight text-primary-800 tabular-nums">
                {spoken ? (
                  <>
                    <span aria-hidden="true">{value}</span>
                    <span className="sr-only">{spoken}</span>
                  </>
                ) : (
                  value
                )}
              </p>
              <p className="mt-3 text-sm text-slate-600">{label}</p>
            </RevealItem>
          ))}

          <RevealItem
            as="li"
            className="rounded-xl border border-slate-200 bg-white p-6 sm:col-span-2"
          >
            <p className="text-sm text-slate-600">Curriculum aligned</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {CURRICULA.map((board) => (
                <li
                  key={board}
                  className="rounded-full border border-primary-100 bg-primary-50 px-3.5 py-1.5 font-display text-sm font-semibold text-primary-800"
                >
                  {board}
                </li>
              ))}
            </ul>
          </RevealItem>
        </RevealGroup>
      </div>
    </Section>
  );
}
