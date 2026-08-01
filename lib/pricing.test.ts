import { describe, expect, it } from "vitest";

import {
  MONTHS_CHARGED_ANNUALLY,
  formatUsd,
  priceFor,
  pricingTiers,
} from "@/lib/pricing";

describe("tier structure", () => {
  it("publishes exactly three tiers", () => {
    expect(pricingTiers.map((tier) => tier.name)).toEqual([
      "Starter",
      "School",
      "Multi-School",
    ]);
  });

  it("highlights exactly one tier as most popular", () => {
    expect(pricingTiers.filter((tier) => tier.popular)).toHaveLength(1);
  });

  it("highlights School, not one of the others", () => {
    expect(pricingTiers.find((tier) => tier.popular)?.id).toBe("school");
  });

  it("points every call to action at /contact", () => {
    for (const tier of pricingTiers) {
      expect(tier.cta.href).toBe("/contact");
    }
  });

  it("prices Multi-School as custom rather than a figure", () => {
    expect(pricingTiers.find((t) => t.id === "multi-school")?.price).toBeNull();
  });
});

describe("annual billing is pay for 10 months, get 12", () => {
  it.each(
    pricingTiers.filter((tier) => tier.price).map((tier) => [tier.name, tier]),
  )("holds for %s", (_name, tier) => {
    const price = (tier as (typeof pricingTiers)[number]).price!;
    expect(price.annualUsd).toBe(price.monthlyUsd * MONTHS_CHARGED_ANNUALLY);
  });

  it("saves exactly two months against paying monthly", () => {
    for (const tier of pricingTiers) {
      if (!tier.price) continue;
      const twelveMonthly = tier.price.monthlyUsd * 12;
      expect(twelveMonthly - tier.price.annualUsd).toBe(
        tier.price.monthlyUsd * 2,
      );
    }
  });
});

describe("published figures", () => {
  it("charges the supplied monthly prices", () => {
    expect(pricingTiers[0].price).toEqual({ monthlyUsd: 9, annualUsd: 90 });
    expect(pricingTiers[1].price).toEqual({ monthlyUsd: 24, annualUsd: 240 });
  });

  it("formats whole dollars with no cents", () => {
    expect(formatUsd(9)).toBe("$9");
    expect(formatUsd(240)).toBe("$240");
  });
});

describe("priceFor", () => {
  const starter = pricingTiers[0];
  const custom = pricingTiers[2];

  it("returns the monthly figure and unit", () => {
    expect(priceFor(starter, "monthly")).toEqual({
      amount: "$9",
      unit: "month",
    });
  });

  it("returns the annual figure and unit", () => {
    expect(priceFor(starter, "annual")).toEqual({
      amount: "$90",
      unit: "year",
    });
  });

  it("switches every priced tier when the period changes", () => {
    const monthly = pricingTiers.map((t) => priceFor(t, "monthly")?.amount);
    const annual = pricingTiers.map((t) => priceFor(t, "annual")?.amount);
    expect(monthly).toEqual(["$9", "$24", undefined]);
    expect(annual).toEqual(["$90", "$240", undefined]);
  });

  it("returns null for the custom tier in both periods", () => {
    expect(priceFor(custom, "monthly")).toBeNull();
    expect(priceFor(custom, "annual")).toBeNull();
  });
});
