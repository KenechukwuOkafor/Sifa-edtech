import Link from "next/link";
import {
  Banknote,
  Building2,
  CalendarDays,
  Globe,
  MapPin,
  Rocket,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import { team } from "@/lib/content/team";

/* ---------------------------------------------------------------- 1. Intro */

/**
 * The reviewer-facing half of the hero. A school buyer reads the story; someone
 * assessing whether this is a real company wants these four lines, and should
 * not have to hunt for them.
 *
 * The stage line must track the home page and the traction section below. If
 * the pilot count changes, it changes in all three places.
 */
const COMPANY: { icon: LucideIcon; term: string; detail: string }[] = [
  { icon: MapPin, term: "Based in", detail: "Lagos, Nigeria" },
  { icon: CalendarDays, term: "Founded", detail: "2025" },
  { icon: Rocket, term: "Stage", detail: "Beta, with two pilot schools" },
  { icon: Users, term: "Team", detail: "Two — product and engineering" },
];

export function AboutIntro() {
  return (
    <Section tone="default" padBottom="tight">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal trigger="mount">
            <p className="mb-4 text-sm font-semibold tracking-wide text-accent-600 uppercase">
              About
            </p>
            {/* Deliberately not a restatement of the closing line below it.
                This states the belief; "Sifa exists to give it back" states
                what we do about it. Keep those two doing different jobs. */}
            <h1 className="text-4xl leading-tight font-semibold text-balance text-primary-900 lg:text-5xl">
              Teachers should be teaching.
            </h1>
          </Reveal>
          <Reveal trigger="mount" delay={0.08}>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
              <p>
                Sifa started from one observation: teachers spend more time
                assembling materials than they spend teaching with them. A
                lesson plan, slides, a quiz, homework and a marking guide — for
                a single topic, across a full timetable, every week of term. It
                happens after school, at home, at weekends, and it rarely gets
                reused because it lives on one teacher&rsquo;s laptop in one
                teacher&rsquo;s format.
              </p>
              <p>
                That time has somewhere better to go — to the second explanation
                a student needs, to marking that changes the next lesson, to the
                parts of teaching a machine cannot do.
              </p>
              <p className="font-medium text-primary-900">
                Sifa exists to give it back.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal trigger="mount" delay={0.16} className="lg:col-span-5">
          <div className="rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-200 sm:p-8">
            <p className="font-display text-lg font-semibold text-primary-900">
              Sifa Technologies Ltd
            </p>
            <ul className="mt-7 space-y-6">
              {COMPANY.map(({ icon: Icon, term, detail }) => (
                <li key={term} className="flex gap-4">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary-700 ring-1 ring-slate-200">
                    <Icon className="size-4.5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                      {term}
                    </p>
                    <p className="mt-1 leading-relaxed text-primary-900">
                      {detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- 2. Approach */

export function Approach() {
  return (
    <Section tone="dark">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="mb-4 text-sm font-semibold tracking-wide text-accent-300 uppercase">
            Our approach
          </p>
          <h2 className="text-3xl leading-tight font-semibold text-balance text-white sm:text-4xl">
            Built here, for the curricula taught here.
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-slate-300">
            Plenty of AI writing tools can produce a lesson plan. Very few
            produce one a Nigerian teacher can walk into class with, because
            they are not built against the scheme of work that teacher is
            actually assessed on.{" "}
            <span className="text-white">
              Sifa generates against WAEC, NECO, NERDC, BECE, IGCSE and
              Cambridge
            </span>{" "}
            — and the teacher stays the expert, reviewing and adjusting every
            pack before it reaches a classroom.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ 3. Team */

/**
 * Guide §13 requires a visible technical team member, hence the marker on the
 * CTO - it is the thing a reviewer looks for, so do not remove it.
 *
 * People, photos and handles come from lib/content/team.ts, shared with /team
 * and the home page. This is the compact listing: initials and the one-line
 * `scope`, with the large-photo treatment reserved for /team.
 */
export function Team() {
  return (
    <Section id="team" tone="default">
      <SectionHeading
        eyebrow="Team"
        title="Who is building Sifa."
        lede="A small team, working directly with the institutions using the product."
      />

      <RevealGroup as="ul" className="mt-14 grid gap-6 sm:grid-cols-2">
        {team.map(({ name, role, initials, scope, technical }) => (
          <RevealItem
            as="li"
            key={name}
            className="rounded-xl border border-slate-200 bg-white p-7"
          >
            <span
              aria-hidden="true"
              className="inline-flex size-14 items-center justify-center rounded-full bg-primary-800 font-display text-lg font-semibold text-white"
            >
              {initials}
            </span>
            <h3 className="mt-5 text-lg font-semibold text-primary-900">
              {name}
            </h3>
            <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-slate-600">
              {role}
              {technical ? (
                <span className="rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap text-accent-700">
                  Technical
                </span>
              ) : null}
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">{scope}</p>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-10">
        <Link
          href="/team"
          className="font-medium text-primary-700 underline-offset-4 hover:underline"
        >
          Meet the team →
        </Link>
      </Reveal>
    </Section>
  );
}

/* ---------------------------------------------------------------- 4. Market */

/**
 * Guide §12. Deliberately carries no market-size figure: an unsourced TAM is
 * the fastest way to lose a reviewer. Add one only with a citable source.
 */
const MARKET: { icon: LucideIcon; term: string; detail: string }[] = [
  {
    icon: Building2,
    term: "Who we serve",
    detail:
      "Primary and secondary schools. Principals, proprietors and heads of department buy Sifa; their teachers use it every week.",
  },
  {
    // Globe rather than MapPin: the hero panel above already uses MapPin.
    icon: Globe,
    term: "Where we are starting",
    detail:
      "Nigeria first, against the exam boards schools here already teach to — then the neighbouring markets that share them.",
  },
  {
    icon: Banknote,
    term: "How we earn",
    detail:
      "A subscription per school, not per teacher, across three tiers with an annual option. Predictable for a school budget.",
  },
  {
    icon: TrendingUp,
    term: "How we grow",
    detail:
      "School by school, then through the groups and multi-campus networks that already run several schools under one office.",
  },
];

export function Market() {
  return (
    <Section id="market" tone="muted">
      <SectionHeading
        eyebrow="Market"
        title="The opportunity."
        lede="Every school runs the same preparation problem, every week of every term. It is not a niche, and it is not seasonal."
      />

      <RevealGroup as="ul" className="mt-14 grid gap-6 sm:grid-cols-2">
        {MARKET.map(({ icon: Icon, term, detail }) => (
          <RevealItem as="li" key={term} className="flex gap-5">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary-700 ring-1 ring-slate-200">
              <Icon className="size-5" />
            </span>
            <div>
              <h3 className="font-semibold text-primary-900">{term}</h3>
              <p className="mt-1.5 leading-relaxed text-slate-600">{detail}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/* -------------------------------------------------------------- 5. Traction */

/**
 * Figures must match the home page's product-status section exactly. They are
 * real and conservative - two pilot schools, and "50+" against an actual 50-70.
 * Never round up, and change both places together.
 */
const NUMBERS = [
  { value: "2", label: "pilot schools generating packs today" },
  {
    value: "50+",
    spoken: "More than 50",
    label: "lesson packs generated in beta",
  },
];

export function AboutTraction() {
  return (
    <Section id="traction" tone="default">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="mb-4 text-sm font-semibold tracking-wide text-accent-600 uppercase">
            Traction
          </p>
          <h2 className="text-3xl leading-tight font-semibold text-balance text-primary-900 sm:text-4xl">
            Where we are today.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Sifa is in beta. Two schools generate lesson packs with it today,
            and we are onboarding further pilot schools across Nigeria. We would
            rather report small real numbers than large hopeful ones.
          </p>
        </Reveal>

        <RevealGroup as="ul" className="grid grid-cols-2 gap-4 lg:col-span-7">
          {NUMBERS.map(({ value, spoken, label }) => (
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

          {/* Links rather than repeats: the full Now / Next / Later roadmap is
              on the home page, and duplicating it here would leave two copies
              to keep in sync. */}
          <RevealItem
            as="li"
            className="col-span-2 rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
          >
            <p className="text-sm text-slate-600">
              Lesson pack generation is live. Curriculum import, a school admin
              dashboard, low-bandwidth mode and scaled inference are planned.
            </p>
            <Link
              href="/#roadmap"
              className="mt-3 inline-block font-medium text-primary-700 underline-offset-4 hover:underline"
            >
              See the full roadmap →
            </Link>
          </RevealItem>
        </RevealGroup>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ 6. CTA */

export function AboutCta() {
  return (
    <Section tone="muted">
      <Reveal className="mx-auto max-w-prose text-center">
        <h2 className="text-3xl leading-tight font-semibold text-balance text-primary-900 sm:text-4xl">
          Come and build this with us.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          We are onboarding pilot schools now, and the schools that join at this
          stage shape what Sifa becomes.
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
