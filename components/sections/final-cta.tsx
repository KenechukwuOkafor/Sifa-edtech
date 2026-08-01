import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/sections/section";

/**
 * Guide §12. The waitlist anchor the header CTA and hero both point at - keep
 * the `waitlist` id if this section ever moves.
 */
export function FinalCta() {
  return (
    <Section id="waitlist" tone="default">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="text-3xl leading-tight font-semibold text-balance text-primary-900 sm:text-4xl">
            Bring Sifa to your school.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Join the waitlist for pilot access — we&rsquo;re onboarding schools
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
