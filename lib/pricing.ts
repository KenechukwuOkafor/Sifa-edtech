/**
 * Pricing data.
 *
 * Kept out of the component so the numbers can be asserted in tests - the
 * annual figure is not derived at render time, so nothing stops a future edit
 * from breaking the "pay for 10 months, get 12" rule silently.
 *
 * Amounts are USD. The page states USD explicitly and does not convert.
 */

/** Annual billing charges ten months and grants twelve. */
export const MONTHS_CHARGED_ANNUALLY = 10;

export type BillingPeriod = "monthly" | "annual";

export type PricingTier = {
  id: string;
  name: string;
  tagline: string;
  /** Null on the custom-priced tier. */
  price: { monthlyUsd: number; annualUsd: number } | null;
  /** Lead-in shown above the feature list on tiers that build on the previous. */
  inherits?: string;
  features: string[];
  cta: { label: string; href: string };
  popular?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For small schools getting started.",
    price: { monthlyUsd: 9, annualUsd: 90 },
    features: [
      "Up to 10 teachers",
      "Up to 150 lesson packs per month",
      "All 5 materials per pack (plan, slides, quiz, homework, marking guide)",
      "Alignment to WAEC, NECO, NERDC, BECE, IGCSE and Cambridge",
      "Email support",
    ],
    cta: { label: "Request a demo", href: "/contact" },
  },
  {
    id: "school",
    name: "School",
    tagline: "For established schools running at full pace.",
    price: { monthlyUsd: 24, annualUsd: 240 },
    inherits: "Everything in Starter, plus:",
    features: [
      "Up to 40 teachers",
      "Up to 600 lesson packs per month",
      "School admin dashboard",
      "Shared material library across teachers",
      "Priority support",
    ],
    cta: { label: "Request a demo", href: "/contact" },
    popular: true,
  },
  {
    id: "multi-school",
    name: "Multi-School",
    tagline: "For school groups and multiple campuses.",
    price: null,
    inherits: "Everything in School, plus:",
    features: [
      "Unlimited teachers",
      "Multiple campuses under one account",
      "Custom generation limits",
      "Guided onboarding",
      "Dedicated support",
    ],
    cta: { label: "Contact sales", href: "/contact" },
  },
];

/** Whole-dollar USD. No cents are used anywhere in the published pricing. */
export function formatUsd(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}

export function priceFor(
  tier: PricingTier,
  period: BillingPeriod,
): { amount: string; unit: string } | null {
  if (!tier.price) return null;
  return period === "annual"
    ? { amount: formatUsd(tier.price.annualUsd), unit: "year" }
    : { amount: formatUsd(tier.price.monthlyUsd), unit: "month" };
}
