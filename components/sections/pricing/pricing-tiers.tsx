"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import {
  pricingTiers,
  priceFor,
  type BillingPeriod,
  type PricingTier,
} from "@/lib/pricing";
import { cn } from "@/lib/utils";

/**
 * Pricing tiers with a monthly/annual toggle.
 *
 * Annual is "pay for 10 months, get 12", so every annual figure is exactly ten
 * times the monthly one. Both are stated explicitly rather than derived at
 * render time - no per-month-billed-annually figure is shown, because that
 * number was not supplied.
 */

const PERIODS: { value: BillingPeriod; label: string }[] = [
  { value: "monthly", label: "Monthly" },
  { value: "annual", label: "Annual" },
];

export function PricingTiers() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  return (
    <>
      <BillingToggle value={billing} onChange={setBilling} />

      <RevealGroup
        as="ul"
        className="mt-12 grid items-start gap-6 lg:grid-cols-3 lg:gap-5"
      >
        {pricingTiers.map((tier) => (
          <RevealItem as="li" key={tier.id}>
            <TierCard tier={tier} billing={billing} />
          </RevealItem>
        ))}
      </RevealGroup>
    </>
  );
}

function BillingToggle({
  value,
  onChange,
}: {
  value: BillingPeriod;
  onChange: (next: BillingPeriod) => void;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Native radios keep arrow-key navigation and screen-reader semantics;
          the segmented look is styling only. */}
      <fieldset>
        <legend className="sr-only">Billing period</legend>
        <div className="inline-flex rounded-full border border-slate-200 bg-white p-1">
          {PERIODS.map((period) => (
            <label key={period.value} className="relative">
              <input
                type="radio"
                name="billing"
                value={period.value}
                checked={value === period.value}
                onChange={() => onChange(period.value)}
                className="peer sr-only"
              />
              <span
                className={cn(
                  "block cursor-pointer rounded-full px-6 py-2 text-sm font-medium transition-colors",
                  "text-slate-600 hover:text-primary-800",
                  "peer-checked:bg-primary-800 peer-checked:text-white",
                  "peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2",
                )}
              >
                {period.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <p
        className={cn(
          "text-sm font-medium transition-opacity",
          value === "annual" ? "text-accent-700 opacity-100" : "opacity-0",
        )}
        aria-hidden={value !== "annual"}
      >
        Pay for 10 months, get 12.
      </p>
    </div>
  );
}

function TierCard({
  tier,
  billing,
}: {
  tier: PricingTier;
  billing: BillingPeriod;
}) {
  const reduceMotion = useReducedMotion();
  const popular = Boolean(tier.popular);
  const annual = billing === "annual";
  const price = priceFor(tier, billing);

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border bg-white p-7 lg:p-8",
        popular
          ? "border-primary-800 shadow-lg ring-1 ring-primary-800"
          : "border-slate-200",
      )}
    >
      {popular ? (
        <span className="absolute -top-3 left-7 rounded-full bg-primary-800 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase lg:left-8">
          Most popular
        </span>
      ) : null}

      <h3 className="font-display text-lg font-semibold text-primary-900">
        {tier.name}
      </h3>
      {/* Reserved height so a two-line tagline does not push this card's price
          and button out of line with its neighbours. */}
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600 lg:min-h-12">
        {tier.tagline}
      </p>

      <div className="mt-6 min-h-[4.5rem]">
        {price ? (
          <motion.div
            // Remounts on toggle so the figure crossfades rather than snapping.
            key={billing}
            initial={reduceMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-4xl font-semibold text-primary-900">
                {price.amount}
              </span>
              <span className="text-slate-500">/ {price.unit}</span>
            </div>
            {annual ? (
              <span className="mt-2 inline-block rounded-full bg-accent-50 px-2.5 py-1 text-xs font-semibold text-accent-700">
                2 months free
              </span>
            ) : null}
          </motion.div>
        ) : (
          <div className="flex items-baseline">
            <span className="font-display text-4xl font-semibold text-primary-900">
              Custom
            </span>
          </div>
        )}
      </div>

      <Button
        asChild
        className={cn(
          "mt-2 h-11 w-full text-base",
          popular
            ? "bg-accent-500 text-white hover:bg-accent-600"
            : "bg-primary-800 text-white hover:bg-primary-700",
        )}
      >
        <Link href={tier.cta.href}>{tier.cta.label}</Link>
      </Button>

      {tier.inherits ? (
        <p className="mt-7 text-sm font-semibold text-primary-900">
          {tier.inherits}
        </p>
      ) : null}

      <ul className={cn("space-y-3", tier.inherits ? "mt-4" : "mt-7")}>
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <Check
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-accent-600"
            />
            <span className="text-sm leading-relaxed text-slate-600">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
