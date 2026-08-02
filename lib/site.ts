/**
 * Single source of truth for site-wide chrome: nav, footer, and the strings
 * that appear in more than one place. Page content does NOT live here.
 */

/**
 * Absolute origin for metadata and Open Graph URLs, resolved in priority order:
 *
 * 1. NEXT_PUBLIC_SITE_URL - an explicit override, always wins.
 * 2. Vercel's own build-time production domain. This means a deployment gets
 *    correct link previews with no dashboard configuration, and follows a
 *    custom domain automatically once one is attached to the project.
 * 3. localhost, for development.
 *
 * Only read in app/layout.tsx, which is a server component, so the unprefixed
 * Vercel variable is available. Do not read `url` from a client component.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelHost) return `https://${vercelHost}`;

  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Sifa",
  /** Absolute origin, no trailing slash. See resolveSiteUrl above. */
  url: resolveSiteUrl(),
  contactEmail: "info@getsifa.site",
  company: "Sifa Technologies Ltd.",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/** Primary navigation, rendered in the header and mirrored in the footer. */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Tech", href: "/tech" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

/** Placeholder handles - swap the hrefs when the accounts exist. */
export const socialNav: NavItem[] = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
];
