import { ph, type Placeholder } from "@/lib/content/placeholder";

/**
 * Guide §10: show progress even when early. Guide §7 and §12: never publish an
 * unproven number without labelling it, and never invent one at all.
 *
 * `stage` is a claim about status, so it must be literally true before launch.
 * Everything with a number attached stays bracketed until verified.
 */

export type ProductStage =
  | "Concept"
  | "MVP in development"
  | "Private beta"
  | "Public beta"
  | "Generally available";

/** The single status line the guide wants answerable at a glance. */
export const productStage: { value: ProductStage; blurb: string } & Placeholder = {
  value: "MVP in development",
  blurb: "Beta access opening to selected schools.",
  placeholder: true,
};

export type TractionItem = Placeholder & {
  id: string;
  /** Short metric or status, e.g. "12 pilot schools". Bracketed until real. */
  value: string;
  label: string;
  /** Guide §7: mark anything not yet achieved as a target, not an outcome. */
  qualifier?: "target" | "beta goal";
};

export const traction: TractionItem[] = [
  {
    id: "waitlist",
    value: ph("N"),
    label: "Schools on the waitlist",
    placeholder: true,
  },
  {
    id: "pilot-schools",
    value: ph("N"),
    label: "Pilot schools onboarding",
    placeholder: true,
  },
  {
    id: "packs-generated",
    value: ph("N"),
    label: "Lesson packs generated in testing",
    placeholder: true,
  },
  {
    id: "prep-time",
    value: ph("N"),
    label: "Reduction in lesson prep time",
    qualifier: "beta goal",
    placeholder: true,
  },
];

/**
 * Free-text progress notes. The guide accepts qualitative traction ("currently
 * onboarding pilot users across Abuja and Lagos") when it is true.
 */
export const tractionNotes: (Placeholder & { id: string; text: string })[] = [
  {
    id: "pilot-geography",
    text: ph("Currently onboarding pilot schools across [cities/states]."),
    placeholder: true,
  },
  {
    id: "validation",
    text: ph(
      "Describe any validation so far: teacher interviews conducted, schools consulted, letters of interest.",
    ),
    placeholder: true,
  },
];

/** Guide §16 explicitly lists testimonials as a fake-stat risk. Empty until real. */
export type Testimonial = Placeholder & {
  id: string;
  quote: string;
  attribution: string;
  school: string;
};

export const testimonials: Testimonial[] = [];
