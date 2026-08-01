import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section } from "@/components/sections/section";

/**
 * Guide §10 wants progress shown; §12 and §16 forbid inventing numbers.
 *
 * These three are product capabilities, not traction claims - what a pack
 * contains, how fast it generates, what it aligns to. No user counts, no pilot
 * numbers, no testimonials appear here until they are real.
 */

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

        <RevealGroup as="ul" className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
          <RevealItem
            as="li"
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <p className="font-display text-4xl font-semibold text-primary-800">
              5
            </p>
            <p className="mt-2 text-sm text-slate-600">materials per topic</p>
          </RevealItem>

          <RevealItem
            as="li"
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <p className="font-display text-3xl leading-snug font-semibold text-primary-800">
              Under 30 seconds
            </p>
            <p className="mt-2 text-sm text-slate-600">per lesson pack</p>
          </RevealItem>

          <RevealItem
            as="li"
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <p className="font-display text-xl leading-snug font-semibold text-primary-800">
              WAEC · NECO · NERDC
            </p>
            <p className="mt-2 text-sm text-slate-600">curriculum-aligned</p>
          </RevealItem>
        </RevealGroup>
      </div>
    </Section>
  );
}
