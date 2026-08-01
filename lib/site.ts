/**
 * Single source of truth for site-wide chrome: nav, footer, and the strings
 * that appear in more than one place. Page content does NOT live here.
 */

export const siteConfig = {
  name: "Sifa",
  /** Used by metadata; override in production via NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
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
