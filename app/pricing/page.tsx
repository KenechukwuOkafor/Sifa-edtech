import type { Metadata } from "next";

import {
  FounderPricing,
  PricingCta,
  PricingFaq,
  PricingIntro,
} from "@/components/sections/pricing/pricing-sections";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One subscription for your whole school. Starter, School, and Multi-School plans, all including the full five-material lesson pack and curriculum alignment. Prices in USD.",
};

export default function PricingPage() {
  return (
    <>
      <PricingIntro />
      <FounderPricing />
      <PricingFaq />
      <PricingCta />
    </>
  );
}
