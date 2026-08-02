import type { Metadata } from "next";

import {
  AboutCta,
  AboutIntro,
  AboutTraction,
  Approach,
  Market,
  Team,
} from "@/components/sections/about/about-sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we built Sifa, who is building it, the market we are building for, and where the product stands today.",
};

/**
 * Section ids (#team, #market, #traction) are deep-link targets, so a reviewer
 * can be pointed straight at a specific claim.
 */
export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <Approach />
      <Team />
      <Market />
      <AboutTraction />
      <AboutCta />
    </>
  );
}
