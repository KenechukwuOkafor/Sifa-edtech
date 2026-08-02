import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/sections/section";
import { cn } from "@/lib/utils";

/**
 * Guide §11. Grouped by horizon rather than dated: Now / Next / Later shows
 * sequencing without committing to quarters we cannot yet promise.
 *
 * Only the Now band is live. Everything in Next and Later is explicitly
 * planned, so nothing here can be read as shipped - keep it that way when
 * adding phases, and move an item into Now only when it is genuinely in use.
 *
 * Two details are load-bearing for consistency with the rest of the site:
 * - Phase 4 must not imply offline is unavailable today. The /how-it-works FAQ
 *   already says a generated pack can be read offline; this phase is the wider
 *   low-bandwidth work beyond that.
 * - Phase 5 states cost per lesson as an aim, matching /tech. It is not an
 *   outcome claim - we have no production volume to back one.
 */

type Horizon = {
  id: string;
  label: string;
  note: string;
  /** Phase number of this band's first item; numbering runs 1-6 unbroken. */
  start: number;
  rule: string;
  labelColor: string;
  items: { title: string; detail: string }[];
};

const HORIZONS: Horizon[] = [
  {
    id: "now",
    label: "Now",
    note: "Live in beta",
    start: 1,
    rule: "bg-accent-500",
    labelColor: "text-accent-600",
    items: [
      {
        title: "Lesson pack generation",
        detail:
          "One topic in, five class-ready materials out — the product the two pilot schools above are using today.",
      },
    ],
  },
  {
    id: "next",
    label: "Next",
    note: "In build",
    start: 2,
    rule: "bg-primary-300",
    labelColor: "text-primary-800",
    items: [
      {
        title: "Curriculum library and scheme-of-work import",
        detail:
          "Upload your school's scheme of work once, and every pack a teacher generates is built against it rather than a general syllabus.",
      },
      {
        title: "School admin dashboard",
        detail:
          "Heads of department see what has been generated across the school, by whom, and against which topics.",
      },
    ],
  },
  {
    id: "later",
    label: "Later",
    note: "Planned",
    start: 4,
    rule: "bg-slate-200",
    labelColor: "text-slate-500",
    items: [
      {
        title: "Low-bandwidth mode",
        detail:
          "A lighter app for weak connections, going beyond today's offline access to packs that have already been generated.",
      },
      {
        title: "Scaled inference for school networks",
        detail:
          "GPU-accelerated generation once volume justifies it, aiming to hold cost per lesson flat as schools scale.",
      },
      {
        title: "Expansion across West and East Africa",
        detail:
          "Beyond Nigeria, beginning where exam curricula already overlap the boards Sifa supports.",
      },
    ],
  },
];

export function RoadmapSection() {
  return (
    // /about links here rather than duplicating the roadmap.
    <Section id="roadmap" tone="default">
      <div className="max-w-prose">
        <Reveal>
          <p className="mb-4 text-sm font-semibold tracking-wide text-accent-600 uppercase">
            Roadmap
          </p>
          <h2 className="text-3xl leading-tight font-semibold text-balance text-primary-900 sm:text-4xl">
            Where Sifa is headed.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Phase 1 is live with pilot schools today. Everything after it is
            planned, not shipped — grouped by horizon rather than dated, because
            at this stage we would rather be accurate than precise.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 space-y-14">
        {HORIZONS.map((horizon) => (
          <Reveal
            key={horizon.id}
            className="grid gap-6 lg:grid-cols-12 lg:gap-16"
          >
            <div className="lg:col-span-3">
              <span
                aria-hidden="true"
                className={cn("block h-0.5 rounded-full", horizon.rule)}
              />
              <p
                className={cn(
                  "mt-5 font-display text-lg font-semibold",
                  horizon.labelColor,
                )}
              >
                {horizon.label}
              </p>
              <p className="mt-1 text-sm text-slate-500">{horizon.note}</p>
            </div>

            {/* Numbering continues across the three bands, so "Phase 4" still
                means the fourth thing we plan to build. */}
            <ol start={horizon.start} className="space-y-8 lg:col-span-9">
              {horizon.items.map(({ title, detail }, index) => (
                <li key={title}>
                  <p className="font-display text-sm font-semibold text-slate-400">
                    Phase {horizon.start + index}
                  </p>
                  <h3 className="mt-1 text-lg leading-snug font-semibold text-primary-900">
                    {title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    {detail}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
