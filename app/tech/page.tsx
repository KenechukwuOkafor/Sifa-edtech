import type { Metadata } from "next";

import {
  AiEngine,
  BuiltToScale,
  CloudInfrastructure,
  Security,
  StackAtAGlance,
  TechCta,
  TechIntro,
} from "@/components/sections/tech/tech-sections";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "How Sifa generates curriculum-aligned lesson packs: the AI engine, the cloud infrastructure behind it, and the path to scaling across school networks.",
};

export default function TechPage() {
  return (
    <>
      <TechIntro />
      <AiEngine />
      <CloudInfrastructure />
      <BuiltToScale />
      <Security />
      <StackAtAGlance />
      <TechCta />
    </>
  );
}
