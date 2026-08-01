import Link from "next/link";
import {
  Activity,
  Boxes,
  Database,
  Globe,
  ListOrdered,
  Lock,
  Server,
  ShieldCheck,
  SquareStack,
  Users,
  type LucideIcon,
} from "lucide-react";

import { ArchitectureFlow } from "@/components/sections/tech/architecture-flow";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/sections/section";
import { Button } from "@/components/ui/button";

/* ---------------------------------------------------------------- 1. Intro */

export function TechIntro() {
  return (
    <Section tone="default" className="pb-12 lg:pb-16">
      <div className="max-w-prose">
        <Reveal trigger="mount">
          <p className="mb-4 text-sm font-semibold tracking-wide text-accent-600 uppercase">
            Technology
          </p>
          <h1 className="text-4xl leading-tight font-semibold text-balance text-primary-900 lg:text-5xl">
            The technology behind Sifa.
          </h1>
        </Reveal>
        <Reveal trigger="mount" delay={0.08}>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 lg:text-xl">
            Sifa turns a topic into a complete, curriculum-aligned lesson pack
            in seconds. Here&rsquo;s how it works under the hood — and how
            it&rsquo;s built to scale from a single classroom to a national
            network of schools.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------ 2. AI engine */

const ENGINE_POINTS = [
  {
    term: "Inputs",
    detail:
      "Topic, subject, class level, and curriculum framework (WAEC, NECO, NERDC).",
  },
  {
    term: "Outputs",
    detail:
      "Lesson plan, slides, quiz, homework, and marking guide, each in a consistent, class-ready structure.",
  },
  {
    term: "Technique",
    detail:
      "LLM inference, structured generation, and curriculum mapping that ties every output to your scheme of work.",
  },
];

/** The page's centrepiece, and its only dark section - as on the home page. */
export function AiEngine() {
  return (
    <Section tone="dark">
      <SectionHeading
        tone="dark"
        eyebrow="Core"
        title="The AI engine."
        lede="At Sifa's core is a generation engine that takes a teacher's input — topic, subject, and class level — and produces five aligned teaching materials. It uses large language model inference with structured generation: instead of free-form text, the engine produces each material in a defined structure a teacher can use directly in class."
      />

      <RevealGroup
        as="ul"
        className="mt-14 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-3"
      >
        {ENGINE_POINTS.map(({ term, detail }) => (
          <RevealItem as="li" key={term} className="bg-primary-950 p-7 lg:p-8">
            <p className="font-display text-sm font-semibold tracking-wide text-accent-300 uppercase">
              {term}
            </p>
            <p className="mt-4 leading-relaxed text-slate-200">{detail}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/* -------------------------------------------------- 3. Cloud infrastructure */

const INFRA: { icon: LucideIcon; term: string; detail: string }[] = [
  {
    icon: Server,
    term: "API layer",
    detail: "Handles generation requests and account management.",
  },
  {
    icon: Database,
    term: "Managed database",
    detail: "Stores schools, users, and generated materials securely.",
  },
  {
    icon: Boxes,
    term: "Object storage",
    detail: "Holds exported files and assets.",
  },
  {
    icon: ListOrdered,
    term: "Async generation queue",
    detail: "Heavier work runs in the background, keeping the app responsive.",
  },
  {
    icon: Globe,
    term: "Global CDN",
    detail:
      "Serves the app fast across regions and on low-bandwidth connections.",
  },
  {
    icon: Activity,
    term: "Monitoring",
    detail: "Tracks performance and reliability across the platform.",
  },
];

export function CloudInfrastructure() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="Infrastructure"
        title="Cloud infrastructure."
        lede="Sifa runs entirely on managed cloud infrastructure, so a school needs nothing more than a browser. Generation requests are handled by an API layer, queued for asynchronous processing so a teacher's browser never blocks, and returned as structured materials ready to edit and export."
      />

      <div className="mt-14">
        <p className="mb-6 text-sm font-semibold tracking-wide text-slate-500 uppercase">
          Request path
        </p>
        <ArchitectureFlow />
      </div>

      <RevealGroup
        as="ul"
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {INFRA.map(({ icon: Icon, term, detail }) => (
          <RevealItem as="li" key={term} className="flex gap-4">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-primary-700 ring-1 ring-slate-200">
              <Icon className="size-5" />
            </span>
            <div>
              <h3 className="font-semibold text-primary-900">{term}</h3>
              <p className="mt-1 leading-relaxed text-slate-600">{detail}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/* -------------------------------------------------------- 4. Built to scale */

export function BuiltToScale() {
  return (
    <Section tone="default">
      <Reveal className="rounded-2xl border border-primary-100 bg-primary-50 p-8 sm:p-12 lg:p-16">
        <div className="max-w-prose">
          <p className="mb-4 text-sm font-semibold tracking-wide text-accent-600 uppercase">
            Scale
          </p>
          <h2 className="text-3xl leading-tight font-semibold text-balance text-primary-900 sm:text-4xl">
            Built to scale.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            A single lesson pack is light. Thousands of teachers generating
            packs at the same time is not. Sifa is architected so generation
            scales horizontally, and as usage grows across school networks, the
            inference layer is designed to move onto GPU-accelerated
            infrastructure — for faster, higher-volume generation without
            raising the cost per lesson.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------ 5. Security */

const SECURITY: { icon: LucideIcon; term: string; detail: string }[] = [
  {
    icon: Lock,
    term: "Encryption",
    detail: "Data encrypted in transit and at rest.",
  },
  {
    icon: Users,
    term: "Access control",
    detail:
      "Role-based access, so teachers, admins, and school owners each see only what they should.",
  },
  {
    icon: ShieldCheck,
    term: "Data protection",
    detail:
      "Built to align with Nigeria's Data Protection Regulation (NDPR); we collect only what's needed to run the service.",
  },
  {
    icon: SquareStack,
    term: "Isolation",
    detail:
      "Each school's data is logically separated from every other school's.",
  },
];

export function Security() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="Trust"
        title="Security and data protection."
        lede="Schools trust Sifa with staff accounts and teaching materials, so protection is built in, not bolted on."
      />

      <RevealGroup as="ul" className="mt-14 grid gap-6 sm:grid-cols-2">
        {SECURITY.map(({ icon: Icon, term, detail }) => (
          <RevealItem
            as="li"
            key={term}
            className="rounded-xl border border-slate-200 bg-white p-7"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary-800 text-white">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-primary-900">
              {term}
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">{detail}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/* ------------------------------------------------------ 6. Stack at a glance */

const STACK = [
  { layer: "Web app", detail: "Modern React framework, server-rendered for speed." },
  { layer: "API and services", detail: "Cloud-hosted, horizontally scalable." },
  { layer: "Data", detail: "Managed database plus object storage." },
  {
    layer: "AI",
    detail: "Large language model inference with structured generation.",
  },
  {
    layer: "Delivery",
    detail: "Global CDN, optimised for low-bandwidth networks.",
  },
  {
    layer: "Scaling path",
    detail: "Designed to move to GPU-accelerated inference as volume grows.",
  },
];

export function StackAtAGlance() {
  return (
    <Section tone="default">
      <SectionHeading eyebrow="Summary" title="The stack, at a glance." />

      <RevealGroup
        as="ul"
        className="mt-12 overflow-hidden rounded-xl border border-slate-200"
        stagger={0.05}
      >
        {STACK.map(({ layer, detail }) => (
          <RevealItem
            as="li"
            key={layer}
            className="grid gap-1 border-b border-slate-200 bg-white px-6 py-5 last:border-b-0 sm:grid-cols-[14rem_1fr] sm:items-baseline sm:gap-6 sm:px-8"
          >
            <span className="font-display font-semibold text-primary-900">
              {layer}
            </span>
            <span className="leading-relaxed text-slate-600">{detail}</span>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/* ----------------------------------------------------------------- 7. CTA */

export function TechCta() {
  return (
    <Section tone="muted">
      <Reveal className="flex flex-col items-start gap-6 rounded-2xl border border-slate-200 bg-white p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <h2 className="text-2xl font-semibold text-balance text-primary-900">
          Want to see it in action?
        </h2>
        <Button
          asChild
          className="h-12 w-full shrink-0 bg-accent-500 px-7 text-base text-white hover:bg-accent-600 sm:w-auto"
        >
          <Link href="/contact">Request a demo</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
