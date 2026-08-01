import { ph, type Placeholder } from "@/lib/content/placeholder";

/**
 * Guide §12: target users, launch countries, revenue model, growth plan.
 * Industry size ONLY if verified - so there is no TAM field here on purpose.
 * The guide names "$0B TAM" placeholders as a disqualifier.
 */

export type Audience = Placeholder & {
  id: string;
  title: string;
  detail: string;
};

/** Guide §6: name a specific user. Never "for everyone". */
export const audiences: Audience[] = [
  {
    id: "hods",
    title: "Heads of department",
    detail:
      "Responsible for scheme-of-work coverage across a subject and for the quality of what their teachers deliver.",
    placeholder: true,
  },
  {
    id: "teachers",
    title: "Subject teachers",
    detail:
      "Preparing plans, slides, assessments and marking guides for multiple classes every week.",
    placeholder: true,
  },
  {
    id: "school-leaders",
    title: "Principals and proprietors",
    detail:
      "Accountable for examination outcomes and for teaching consistency across a growing number of streams.",
    placeholder: true,
  },
];

export type LaunchMarket = Placeholder & {
  country: string;
  note: string;
};

/** Confirm these before they are published - they are a strategy decision. */
export const launchMarkets: LaunchMarket[] = [
  { country: ph("Nigeria"), note: ph("Primary launch market"), placeholder: true },
  { country: ph("Ghana"), note: ph("Secondary market"), placeholder: true },
  { country: ph("Kenya"), note: ph("Secondary market"), placeholder: true },
];

export type RevenueStream = Placeholder & {
  id: string;
  name: string;
  detail: string;
};

export const revenueModel: RevenueStream[] = [
  {
    id: "school-subscription",
    name: "Per-school subscription",
    detail: ph("Annual or termly licence, priced by number of teaching staff."),
    placeholder: true,
  },
  {
    id: "department-plan",
    name: "Departmental plans",
    detail: ph("Single-subject access for schools starting with one department."),
    placeholder: true,
  },
  {
    id: "enterprise",
    name: "School groups and enterprise",
    detail: ph("Multi-campus licensing, onboarding support and reporting."),
    placeholder: true,
  },
];

export const growthPlan: Placeholder & { text: string } = {
  text: ph(
    "How Sifa reaches schools: direct sales to school groups, partnerships with proprietor associations, teacher referral, examination-board relationships.",
  ),
  placeholder: true,
};

/**
 * Guide §12 permits industry size only when verified with a citable source.
 * Leave empty rather than estimating.
 */
export const verifiedMarketSize: { claim: string; source: string }[] = [];
