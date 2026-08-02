import type { Metadata } from "next";

import {
  ForYourSchool,
  HowItWorksCta,
  HowItWorksFaq,
  HowItWorksIntro,
  Steps,
  WhatsInEveryPack,
} from "@/components/sections/how-it-works/how-it-works-sections";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From a topic to a full, class-ready lesson pack in three steps: enter the topic, Sifa generates the pack, then edit, download and teach.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksIntro />
      <Steps />
      <WhatsInEveryPack />
      <ForYourSchool />
      <HowItWorksFaq />
      <HowItWorksCta />
    </>
  );
}
