import { AiTechnology } from "@/components/sections/ai-technology";
import { Features } from "@/components/sections/features";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorksTeaser } from "@/components/sections/how-it-works-teaser";
import { Problem } from "@/components/sections/problem";
import { RoadmapSection } from "@/components/sections/roadmap-section";
import { Solution } from "@/components/sections/solution";
import { TechTeaser } from "@/components/sections/tech-teaser";
import { Traction } from "@/components/sections/traction";
import { WhyNow } from "@/components/sections/why-now";

/**
 * Section order follows docs/site-development-guide.md so a reviewer can answer
 * its ten questions without leaving the page.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <AiTechnology />
      <Features />
      <HowItWorksTeaser />
      <TechTeaser />
      <Traction />
      <RoadmapSection />
      <WhyNow />
      <FinalCta />
    </>
  );
}
