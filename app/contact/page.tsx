import type { Metadata } from "next";

import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/sections/section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a demo",
  description:
    "Tell us about your school and we'll set up a walkthrough of Sifa's lesson pack generation.",
};

/**
 * The destination for the site-wide primary CTA. The heading matches the
 * button that leads here, so the action keeps one name through the flow.
 */
export default function ContactPage() {
  return (
    <Section tone="default">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal trigger="mount" className="lg:col-span-5">
          <p className="mb-4 text-sm font-semibold tracking-wide text-accent-600 uppercase">
            Contact
          </p>
          <h1 className="text-4xl leading-tight font-semibold text-balance text-primary-900 lg:text-5xl">
            Request a demo.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Tell us about your school and we&rsquo;ll set up a walkthrough.
          </p>
          <p className="mt-8 text-sm text-slate-500">
            Prefer email? Reach us at{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="font-medium text-primary-700 underline-offset-4 hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </Reveal>

        <Reveal trigger="mount" delay={0.08} className="lg:col-span-7">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <LeadForm variant="contact" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
