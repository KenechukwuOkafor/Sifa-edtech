import { type Placeholder } from "@/lib/content/placeholder";

/**
 * Guide §13: every site needs a visible team, with at least one technical
 * member and real links.
 *
 * Single source of truth. The /team page, the home page team section and the
 * /about team block all read from here, so a name, photo or handle changes in
 * exactly one place.
 *
 * Discipline that must survive edits: the `scope` and `bio` lines describe
 * responsibility only. No employer, tenure, qualification or credential
 * appears here because none has been supplied, and the guide treats an
 * invented one as a disqualifier. Add real detail when it exists.
 */

export type SocialLinks = {
  linkedin?: string;
  facebook?: string;
  /** X, formerly Twitter. */
  x?: string;
};

export type TeamMember = Placeholder & {
  /** Stable key; safe to keep when display details are filled in. */
  id: string;
  name: string;
  role: string;
  /** Fallback avatar when the photo file is absent. */
  initials: string;
  /** One line, used in the compact /about listing. */
  scope: string;
  /** Longer form, used on the /team page beneath the large photo. */
  bio: string;
  /** Path under /public. Falls back to initials when the file is missing. */
  photo: string;
  socials: SocialLinks;
  /** Marks the technical team the guide requires to be visible. */
  technical?: boolean;
};

/**
 * Social hrefs are "#" until the real accounts are supplied — the same
 * convention `socialNav` in lib/site.ts uses. `hasRealSocials` below reports
 * on it so the content audit can flag them rather than letting dead links ship
 * unnoticed.
 */
export const team: TeamMember[] = [
  {
    id: "ceo",
    name: "Gabriel Okafor",
    role: "Chief Executive Officer",
    initials: "GO",
    scope: "Product direction, and the institutions Sifa works with.",
    bio: "Sets product direction and owns the relationships with the institutions running Sifa — which schools pilot it, what they need from it, and what ships next as a result.",
    photo: "/team/gabriel-okafor.jpg",
    socials: { linkedin: "#", facebook: "#", x: "#" },
    placeholder: true,
  },
  {
    id: "cto",
    name: "David Brown",
    role: "Chief Technology Officer",
    initials: "DB",
    scope: "The generation engine, and the infrastructure it runs on.",
    bio: "Owns the generation engine and the infrastructure behind it — curriculum retrieval, the model pipeline that turns a topic into a full lesson pack, and the platform it all runs on.",
    photo: "/team/david-brown.jpg",
    socials: { linkedin: "#", facebook: "#", x: "#" },
    technical: true,
    placeholder: true,
  },
];

/** Guide §13 requires visible technical staff - checked by the content audit. */
export const hasVisibleDeveloper = team.some((member) => member.technical);

/** False while any social href is still the "#" stand-in. */
export const hasRealSocials = team.every((member) =>
  Object.values(member.socials).every((href) => href && href !== "#"),
);

export type Advisor = Placeholder & {
  id: string;
  name: string;
  role: string;
  linkedin?: string;
};

/** Optional per the guide ("advisors, if any"). Empty until real. */
export const advisors: Advisor[] = [];
