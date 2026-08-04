import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

const CHIPS = [
  "Lesson plans",
  "Slides",
  "Quizzes",
  "Homework",
  "Marking guides",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Soft indigo wash behind the headline, fading to white before the fold. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_36rem_at_50%_-24%,var(--color-primary-100),transparent_70%)]"
      />

      {/* Bottom padding is deliberately lighter than a full section step - the
          Problem section below supplies its own, and doubling them left a hole. */}
      <div className="relative mx-auto max-w-content px-gutter pt-16 pb-16 lg:pt-24 lg:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal trigger="mount">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-primary-700 shadow-sm backdrop-blur">
              <span className="size-1.5 rounded-full bg-accent-500" />
              Beta · Built for African institutions of learning
            </span>
          </Reveal>

          <Reveal trigger="mount" delay={0.05}>
            <h1 className="mt-7 text-4xl leading-[1.08] font-semibold text-balance text-primary-900 sm:text-5xl lg:text-6xl">
              Every lesson, planned in seconds — across your whole institution.
            </h1>
          </Reveal>

          <Reveal trigger="mount" delay={0.1}>
            {/* Does not list the five materials - the chips below already do,
                and repeating them cost the space the curriculum list needed.
                Keep an explicit AI reference here: it is the only one above
                the fold, and the site guide wants AI central. */}
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 lg:text-xl">
              Your teachers type a topic; Sifa&rsquo;s AI builds the complete
              teaching pack — aligned to your scheme of work, whether you follow
              WAEC, NECO, NERDC, BECE, IGCSE or Cambridge. The same standard in
              every classroom, without the evenings lost to prep.
            </p>
          </Reveal>

          <Reveal trigger="mount" delay={0.15}>
            {/* Primary action is the demo request, site-wide. "Get started" is
                the low-friction fallback into the sign-up form and stays
                visually lighter. */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 w-full bg-accent-500 px-7 text-base text-white hover:bg-accent-600 sm:w-auto"
              >
                <Link href="/contact">
                  Request a demo
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 w-full border-primary-200 px-7 text-base text-primary-800 hover:bg-primary-50 sm:w-auto"
              >
                <Link href="#get-started">Get started</Link>
              </Button>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Or{" "}
              <Link
                href="/how-it-works"
                className="font-medium text-primary-700 underline-offset-4 hover:underline"
              >
                see how it works
              </Link>{" "}
              first.
            </p>
          </Reveal>

          <RevealGroup
            trigger="mount"
            as="ul"
            className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
          >
            {CHIPS.map((chip) => (
              <RevealItem as="li" key={chip}>
                <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-xs">
                  {chip}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
