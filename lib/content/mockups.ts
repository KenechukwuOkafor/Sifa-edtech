import type { Placeholder } from "@/lib/content/placeholder";

/**
 * Guide §8: a text-only site is weaker - it wants dashboard, mobile view, and
 * an AI output sample.
 *
 * These are wireframe SVGs in the brand palette, each carrying a visible
 * "PLACEHOLDER MOCKUP" badge. They are honest stand-ins, not screenshots of
 * something that does not exist. Replace with real captures before submission
 * and delete the badge from the SVG.
 */

export type Mockup = Placeholder & {
  id: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const mockups: Mockup[] = [
  {
    id: "dashboard",
    src: "/mockups/dashboard.svg",
    alt: "Sifa dashboard showing generated lesson packs by subject and class",
    caption: "Lesson pack library",
    width: 960,
    height: 600,
    placeholder: true,
  },
  {
    id: "lesson-pack",
    src: "/mockups/lesson-pack.svg",
    alt: "A generated lesson pack: plan, slides, quiz, homework and marking guide, with the curriculum objectives it covers",
    caption: "AI output sample — one topic, five artefacts",
    width: 960,
    height: 600,
    placeholder: true,
  },
  {
    id: "mobile",
    src: "/mockups/mobile.svg",
    alt: "Sifa on a mobile device",
    caption: "Mobile view",
    width: 400,
    height: 720,
    placeholder: true,
  },
];
