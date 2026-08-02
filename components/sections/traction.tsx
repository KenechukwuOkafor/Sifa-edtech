import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section } from "@/components/sections/section";

/**
 * Guide §10 wants progress shown; §12 and §16 forbid inventing numbers.
 *
 * Every figure here is real and stated conservatively: two pilot schools, and
 * "50+" against an actual 50-70 packs generated. Move these only when the
 * underlying numbers move, and never round up - a reviewer who finds one
 * inflated number stops believing the rest of the site.
 *
 * These replaced "5 materials" and "<30s", which are capabilities rather than
 * traction and are already stated on the Solution section, /how-it-works and
 * /pricing. A status section that restates known features tells a reviewer
 * nothing.
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
    value: "2",
    label: "pilot schools generating packs today",
  },
  {
    value: "50+",
    spoken: "More than 50",
    label: "lesson packs generated in beta",
  },
];

const CURRICULA = ["WAEC", "NECO", "NERDC", "BECE", "IGCSE", "Cambridge"];

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

          {/* Not "Live in beta." - the roadmap's Phase 1 badge already uses
              that exact phrase a section below. */}
          <h2 className="text-3xl leading-tight font-semibold text-balance text-primary-900 sm:text-4xl">
            In beta, in real classrooms.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Two schools are generating lesson packs with Sifa today, and
            we&rsquo;re onboarding further pilot schools across Nigeria. The
            numbers are deliberately small — we&rsquo;re proving the product
            with real teachers before we scale.
          </p>
        </Reveal>

        {/* Two columns from the smallest screen up: full-width stat tiles left
            a single short number stranded beside a lot of empty card, and made
            the section needlessly tall on a phone. */}
        <RevealGroup as="ul" className="grid grid-cols-2 gap-4 lg:col-span-7">
          {STATS.map(({ value, spoken, label }) => (
            <RevealItem
              as="li"
              key={label}
              className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
            >
              <p className="font-display text-4xl leading-none font-semibold tracking-tight text-primary-800 tabular-nums sm:text-5xl">
                {spoken ? (
                  <>
                    <span aria-hidden="true">{value}</span>
                    <span className="sr-only">{spoken}</span>
                  </>
                ) : (
                  value
                )}
              </p>
              <p className="mt-3 text-sm leading-snug text-slate-600">{label}</p>
            </RevealItem>
          ))}

          <RevealItem
            as="li"
            className="col-span-2 rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
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
