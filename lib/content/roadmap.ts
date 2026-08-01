import type { Placeholder } from "@/lib/content/placeholder";

/**
 * Guide §11: a phased roadmap in Stage / Milestone form.
 *
 * Roadmap entries are statements of intent, not claims of fact, so these are
 * written as real plans rather than bracketed stand-ins. They still carry the
 * placeholder flag because the sequencing is mine, not Kene's - confirm or
 * reorder, then drop the flags.
 */

export type RoadmapPhase = Placeholder & {
  phase: string;
  milestone: string;
  detail: string;
  status: "in-progress" | "next" | "planned";
};

export const roadmap: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    milestone: "Lesson pack generation MVP",
    detail:
      "Topic in, five artefacts out: lesson plan, slides, quiz, homework and marking guide.",
    status: "in-progress",
    placeholder: true,
  },
  {
    phase: "Phase 2",
    milestone: "Curriculum alignment engine",
    detail:
      "Retrieval over WAEC, NECO and NERDC scheme-of-work documents so every pack cites the objectives it covers.",
    status: "next",
    placeholder: true,
  },
  {
    phase: "Phase 3",
    milestone: "Beta with pilot schools",
    detail:
      "Structured feedback from heads of department on pack accuracy, depth and classroom fit.",
    status: "planned",
    placeholder: true,
  },
  {
    phase: "Phase 4",
    milestone: "School workspaces",
    detail:
      "Departmental accounts, shared pack libraries, term planning and role-based access.",
    status: "planned",
    placeholder: true,
  },
  {
    phase: "Phase 5",
    milestone: "Cloud deployment and GPU-accelerated inference",
    detail:
      "Scale generation throughput for peak term-planning demand and cut pack turnaround time.",
    status: "planned",
    placeholder: true,
  },
  {
    phase: "Phase 6",
    milestone: "Expansion across additional curricula",
    detail:
      "Extend beyond the initial launch markets to further national and regional examination boards.",
    status: "planned",
    placeholder: true,
  },
];
