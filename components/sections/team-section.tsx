import type { ReactElement } from "react";

import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/sections/section";
import { FacebookIcon, LinkedInIcon, XIcon } from "@/components/social-icons";
import { TeamPhoto } from "@/components/team/team-photo";
import { team, type SocialLinks, type TeamMember } from "@/lib/content/team";

/**
 * The team block, shared by /team and the bottom of the home page. Guide §13
 * wants a visible team with a visible technical member, hence the marker on
 * the CTO — a reviewer looks for it, so do not remove it.
 *
 * Two members in a two-column grid rather than three or four: wide portraits
 * at this size read as a deliberate choice, where two narrow cards in a
 * four-column track would read as a team page missing half its people.
 */
export function TeamSection({
  tone = "default",
  eyebrow = "Team",
  title = "Who is building Sifa.",
  lede = "A small team, working directly with the institutions using the product.",
  headingLevel = "h2",
}: {
  tone?: "default" | "muted";
  eyebrow?: string;
  title?: string;
  lede?: string;
  /** `h3` when the page heading above already owns the h2 level. */
  headingLevel?: "h2" | "h3";
}) {
  return (
    <Section id="team" tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} lede={lede} />

      <RevealGroup
        as="ul"
        className="mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-2 sm:gap-8 lg:gap-12"
      >
        {team.map((member) => (
          <TeamCard key={member.id} member={member} headingLevel={headingLevel} />
        ))}
      </RevealGroup>
    </Section>
  );
}

function TeamCard({
  member,
  headingLevel: Heading,
}: {
  member: TeamMember;
  headingLevel: "h2" | "h3";
}) {
  const { name, role, initials, bio, photo, socials, technical } = member;

  return (
    <RevealItem as="li">
      <TeamPhoto src={photo} name={name} initials={initials} />

      <Heading className="mt-6 text-xl font-semibold text-primary-900">
        {name}
      </Heading>

      <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-slate-600">
        {role}
        {technical ? (
          <span className="rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap text-accent-700">
            Technical
          </span>
        ) : null}
      </p>

      <p className="mt-4 leading-relaxed text-slate-600">{bio}</p>

      <SocialRow name={name} socials={socials} />
    </RevealItem>
  );
}

/**
 * Accessible names carry the person, not just the network — a screen reader
 * user hitting four identical "LinkedIn" links on one page learns nothing.
 */
const NETWORKS: {
  key: keyof SocialLinks;
  label: string;
  Icon: (props: { className?: string }) => ReactElement;
}[] = [
  { key: "facebook", label: "Facebook", Icon: FacebookIcon },
  { key: "linkedin", label: "LinkedIn", Icon: LinkedInIcon },
  { key: "x", label: "X (Twitter)", Icon: XIcon },
];

function SocialRow({ name, socials }: { name: string; socials: SocialLinks }) {
  const links = NETWORKS.filter(({ key }) => socials[key]);
  if (!links.length) return null;

  return (
    <ul className="mt-5 flex items-center gap-2">
      {links.map(({ key, label, Icon }) => (
        <li key={key}>
          <a
            href={socials[key]}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${name} on ${label}`}
            className="inline-flex size-10 items-center justify-center rounded-full text-slate-500 ring-1 ring-slate-200 transition-colors hover:bg-primary-50 hover:text-primary-800 hover:ring-primary-200"
          >
            <Icon className="size-4.5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
