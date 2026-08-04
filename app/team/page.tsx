import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/sections/section";
import { TeamSection } from "@/components/sections/team-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The people building Sifa — an AI lesson-pack platform for institutions of learning across Africa.",
};

/**
 * The page heading owns the h1 and the intro, so TeamSection renders its
 * members at h3 beneath its own h2 rather than competing for the top level.
 */
export default function TeamPage() {
  return (
    <>
      <Section tone="default" padBottom="none">
        <Reveal trigger="mount" className="max-w-prose">
          <p className="mb-4 text-sm font-semibold tracking-wide text-accent-600 uppercase">
            Team
          </p>
          <h1 className="text-4xl leading-tight font-semibold text-balance text-primary-900 lg:text-5xl">
            Two people, one product.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Sifa is built by a small founding team that works directly with the
            institutions running it — no layer between the people writing the
            product and the people teaching with it.
          </p>
        </Reveal>
      </Section>

      <TeamSection
        eyebrow="Founders"
        title="The founding team."
        lede="Product and engineering, split between two founders."
        headingLevel="h3"
      />

      <Section tone="muted">
        <Reveal className="mx-auto max-w-prose text-center">
          <h2 className="text-3xl leading-tight font-semibold text-balance text-primary-900 sm:text-4xl">
            Want to talk to us directly?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            We run every pilot conversation ourselves. Book a walkthrough and
            you are speaking to the people who build the product.
          </p>
          <Button
            asChild
            className="mt-8 h-12 w-full bg-accent-500 px-7 text-base text-white hover:bg-accent-600 sm:w-auto"
          >
            <Link href="/contact">Request a demo</Link>
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
