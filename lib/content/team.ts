import { ph, type Placeholder } from "@/lib/content/placeholder";

/**
 * Guide §13: every site needs a team section, with at least one visible
 * developer and real LinkedIn links.
 *
 * These entries are deliberately bracketed and role-shaped rather than
 * invented people - fabricating plausible names with plausible LinkedIn URLs
 * risks pointing at real strangers. Replace the text, add the real URL, and
 * drop the `placeholder` flag.
 */

export type TeamMember = Placeholder & {
  /** Stable key; safe to keep when the display name is filled in. */
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  /** Path under /public. Falls back to initials when absent. */
  photo?: string;
  /** Marks the technical team the guide requires to be visible. */
  technical?: boolean;
};

export const team: TeamMember[] = [
  {
    id: "founder",
    name: ph("Founder name"),
    role: "Founder & CEO",
    bio: ph(
      "One or two sentences: background, why this problem, prior experience in education or software.",
    ),
    linkedin: undefined,
    placeholder: true,
  },
  {
    id: "tech-lead",
    name: ph("Technical lead name"),
    role: "Technical Lead",
    bio: ph(
      "Engineering background, systems built previously, responsibility for the AI pipeline and platform.",
    ),
    linkedin: undefined,
    technical: true,
    placeholder: true,
  },
  {
    id: "ai-engineer",
    name: ph("AI engineer name"),
    role: "AI Engineer",
    bio: ph(
      "Experience with retrieval, evaluation, and structured generation; owns curriculum alignment quality.",
    ),
    linkedin: undefined,
    technical: true,
    placeholder: true,
  },
  {
    id: "curriculum-lead",
    name: ph("Curriculum lead name"),
    role: "Curriculum & Product",
    bio: ph(
      "Classroom or curriculum-design experience; validates packs against WAEC, NECO and NERDC requirements.",
    ),
    linkedin: undefined,
    placeholder: true,
  },
];

/** Guide §13 requires visible technical staff - checked by the content audit. */
export const hasVisibleDeveloper = team.some((member) => member.technical);

export type Advisor = Placeholder & {
  id: string;
  name: string;
  role: string;
  linkedin?: string;
};

/** Optional per the guide ("advisors, if any"). Empty until real. */
export const advisors: Advisor[] = [];
