import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/sections/section";

/**
 * Guide §12. The sign-up anchor the hero points at - keep the `get-started`
 * id if this section ever moves.
 *
 * The form still POSTs `type: "waitlist"`, which is the stored lead type and a
 * database enum. Only the label a visitor reads changed; do not rename the
 * variant to match the button.
 */
export function FinalCta() {
  return (
    <Section id="get-started" tone="default">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="text-3xl leading-tight font-semibold text-balance text-primary-900 sm:text-4xl">
            Bring Sifa to your institution.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Get started with pilot access — we&rsquo;re onboarding institutions
            now.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-7">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <LeadForm variant="waitlist" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
