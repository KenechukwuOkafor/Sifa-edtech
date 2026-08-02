import Image from "next/image";
import Link from "next/link";
import {
  ClipboardList,
  FileQuestion,
  House,
  Presentation,
  SquareCheckBig,
  type LucideIcon,
} from "lucide-react";

import { FaqList, type FaqItem } from "@/components/faq-list";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------- 1. Intro */

export function HowItWorksIntro() {
  return (
    <Section tone="default" padBottom="tight">
      <div className="max-w-prose">
        <Reveal trigger="mount">
          <p className="mb-4 text-sm font-semibold tracking-wide text-accent-600 uppercase">
            How it works
          </p>
          <h1 className="text-4xl leading-tight font-semibold text-balance text-primary-900 lg:text-5xl">
            How Sifa works.
          </h1>
        </Reveal>
        <Reveal trigger="mount" delay={0.08}>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 lg:text-xl">
            From a topic to a full, class-ready lesson pack in three steps — no
            template to wrestle with, no blank page to start from.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- 2-4. Steps */

/**
 * The three steps, alternating text/visual sides.
 *
 * Visuals are hand-drawn SVG mockups in /public/mockups, not screenshots. They
 * all show the same sample lesson pack - Photosynthesis, Basic Science, JSS 2 -
 * so the three steps read as one continuous flow. Keep that topic consistent
 * across the three files, and across the body copy in STEPS below, if you edit
 * either. Replace with real captures once the product is demonstrable.
 */

type Step = {
  label: string;
  heading: string;
  body: React.ReactNode;
  image: { src: string; alt: string; width: number; height: number };
  /** Portrait artwork needs a narrower frame than the landscape mockups. */
  portrait?: boolean;
};

const STEPS: Step[] = [
  {
    label: "Step 1",
    heading: "Enter the topic.",
    body: (
      <>
        Your teacher types in a topic, subject, and class level — for example,
        &ldquo;Photosynthesis, Basic Science, JSS2.&rdquo; That&rsquo;s the whole
        input. No setup and no template hunting; Sifa takes it from there.
      </>
    ),
    image: {
      src: "/mockups/dashboard.svg",
      alt: "The Sifa dashboard, listing generated lesson packs by topic, subject and class",
      width: 960,
      height: 600,
    },
  },
  {
    label: "Step 2",
    heading: "Sifa generates the pack.",
    body: (
      <>
        Sifa&rsquo;s AI engine builds five aligned materials in a single pass — a
        lesson plan, ready-to-teach slides, a quiz, homework, and a marking guide
        — mapped to the scheme of work you follow, from WAEC, NECO and NERDC to
        BECE, IGCSE and Cambridge. It takes under 30 seconds.
      </>
    ),
    image: {
      src: "/mockups/lesson-pack.svg",
      alt: "A generated lesson pack showing all five materials and the curriculum objectives they cover",
      width: 960,
      height: 600,
    },
  },
  {
    label: "Step 3",
    heading: "Edit, download, and teach.",
    body: (
      <>
        Every material is editable — refine it right inside Sifa before you
        download, or export first and adjust in your own tools. Packs download as
        Word (.docx), PowerPoint (.pptx), PDF, and Google Docs, so they fit
        straight into how your teachers already work. Then it&rsquo;s ready for
        the classroom.
      </>
    ),
    image: {
      src: "/mockups/mobile.svg",
      alt: "Sifa on a phone, showing a finished pack ready to edit and download",
      width: 400,
      height: 720,
    },
    portrait: true,
  },
];

export function Steps() {
  return (
    // Top padding is tightened because the intro directly above already
    // supplies a section step; the default on both left a visible void.
    <Section tone="default" padTop="tight">
      <div className="space-y-20 lg:space-y-28">
        {STEPS.map((step, index) => {
          const flipped = index % 2 === 1;
          return (
            <div
              key={step.label}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal
                direction={flipped ? "right" : "left"}
                className={cn(flipped && "lg:order-2")}
              >
                <p className="text-sm font-semibold tracking-wide text-accent-600 uppercase">
                  {step.label}
                </p>
                <h2 className="mt-3 text-3xl leading-tight font-semibold text-balance text-primary-900 sm:text-4xl">
                  {step.heading}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </Reveal>

              <Reveal
                direction={flipped ? "left" : "right"}
                delay={0.08}
                className={cn(flipped && "lg:order-1")}
              >
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm",
                    step.portrait && "mx-auto max-w-xs",
                  )}
                >
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    width={step.image.width}
                    height={step.image.height}
                    className="h-auto w-full rounded-lg"
                    sizes="(min-width: 1024px) 42rem, 100vw"
                  />
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------- 5. What's in a pack */

const PACK: { icon: LucideIcon; term: string; detail: string }[] = [
  {
    icon: ClipboardList,
    term: "Lesson plan",
    detail: "Structured and objective-led, ready to follow.",
  },
  {
    icon: Presentation,
    term: "Slides",
    detail: "Ready to present, with no design work.",
  },
  {
    icon: FileQuestion,
    term: "Quiz",
    detail: "Questions matched to the topic and class level.",
  },
  {
    icon: House,
    term: "Homework",
    detail: "Reinforcement aligned to the lesson.",
  },
  {
    icon: SquareCheckBig,
    term: "Marking guide",
    detail: "Answers and guidance for fast, consistent grading.",
  },
];

export function WhatsInEveryPack() {
  return (
    <Section tone="muted">
      <SectionHeading eyebrow="The pack" title="What's in every pack." />

      <RevealGroup
        as="ul"
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
      >
        {PACK.map(({ icon: Icon, term, detail }) => (
          <RevealItem
            as="li"
            key={term}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-4 font-display font-semibold text-primary-900">
              {term}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              {detail}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/* ------------------------------------------------- 6. What it means for you */

/**
 * The buyer-facing note. The closing sentence marks admin tooling and the
 * shared library as forthcoming - they are roadmap phases 3 and 4, and nothing
 * on this page may depict them as shipped.
 */
export function ForYourSchool() {
  return (
    <Section tone="dark">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="mb-4 text-sm font-semibold tracking-wide text-accent-300 uppercase">
            For your school
          </p>
          <h2 className="text-3xl leading-tight font-semibold text-balance text-white sm:text-4xl">
            What this means for your school.
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-slate-300">
            Every teacher works from the same curriculum-aligned foundation, so
            quality stays consistent from classroom to classroom — and prep that
            used to eat evenings takes minutes. There&rsquo;s nothing to
            configure: teachers start generating from day one.{" "}
            <span className="text-white">
              School-wide admin tools and a shared material library are on the
              way.
            </span>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ 7. FAQ */

/**
 * Ordered the way a school actually decides: is this for us, can we trust it,
 * will it work here, what will it cost us in effort, can we see it first.
 *
 * Two of these are deliberately uncomfortable questions. An FAQ made only of
 * softballs reads as evasive to a buyer, and the honest answers here are good
 * ones - so do not quietly soften them.
 */
const FAQS: FaqItem[] = [
  {
    question: "Which curricula and exams does Sifa cover?",
    answer:
      "Topics across WAEC, NECO, BECE, IGCSE and Cambridge. Each pack is built against the syllabus for the exam your school prepares for, rather than a generic template.",
  },
  {
    question: "What if Sifa gets something wrong?",
    answer:
      "Sifa writes the first draft; the teacher stays the expert. Every material is editable, and each pack lists the curriculum objectives it covers, so a teacher can check the fit at a glance rather than reading it all through. Reviewing before class is part of the workflow — the same judgement any teacher already applies to a textbook or a past paper.",
  },
  {
    question: "Does it work if our internet is unreliable?",
    answer:
      "Generating a pack needs a connection; reading one does not. Once a pack has been generated a teacher can open it offline, and packs download as Word, PowerPoint, PDF and Google Docs — so a lesson prepared at home on Sunday is still there in a classroom with no signal on Monday.",
  },
  {
    question: "Do teachers need training?",
    answer:
      "No. If a teacher can type a topic, they can use Sifa. There is no course to schedule and no setup step between a new teacher and their first pack — usually the thing that stalls a school-wide rollout.",
  },
  {
    question: "Can we see it with our own subjects first?",
    answer:
      "Yes — that is what the demo is for. Tell us the subjects and class levels you teach and we will walk through packs built from your scheme of work, so you are judging Sifa on your curriculum rather than ours.",
  },
];

/**
 * Heading left, questions right - the same 5/7 split as ForYourSchool above.
 *
 * Deliberately not a two-column grid of questions: sibling accordions share
 * grid rows, so opening one leaves a gap beside its neighbour, and an odd
 * number of questions orphans a cell.
 */
export function HowItWorksFaq() {
  return (
    <Section tone="muted">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-sm font-semibold tracking-wide text-accent-600 uppercase">
              FAQ
            </p>
            <h2 className="text-3xl leading-tight font-semibold text-balance text-primary-900 sm:text-4xl">
              What schools ask.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              If your question isn&rsquo;t answered here, ask us directly.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block font-medium text-primary-700 underline-offset-4 hover:underline"
            >
              Talk to us →
            </Link>
          </div>
        </Reveal>

        <FaqList items={FAQS} className="max-w-none lg:col-span-7" />
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------- 8. CTA */

/**
 * Third of the three page-closing CTAs. All three share one shape - centred,
 * max-w-prose, heading + one supporting line + a button that goes full width on
 * mobile - and each supporting line takes a different angle so the pages do not
 * end identically: this one the workflow, /tech the hardest topic, /pricing the
 * tier recommendation.
 */
export function HowItWorksCta() {
  return (
    <Section tone="default">
      <Reveal className="mx-auto max-w-prose text-center">
        <h2 className="text-3xl leading-tight font-semibold text-balance text-primary-900 sm:text-4xl">
          See it with your own subjects.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          We&rsquo;ll walk your teachers through the same three steps, using a
          topic from your own scheme of work.
        </p>
        <Button
          asChild
          className="mt-8 h-12 w-full bg-accent-500 px-7 text-base text-white hover:bg-accent-600 sm:w-auto"
        >
          <Link href="/contact">Request a demo</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
