import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/sections/section";

/**
 * Guide §3: the problem must read as serious and money-related. Set as a
 * two-column statement so the heading carries weight and the body reads as
 * evidence rather than marketing.
 */
export function Problem() {
  return (
    <Section tone="default">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="text-3xl leading-tight font-semibold text-balance text-primary-900 sm:text-4xl">
            Lesson prep is quietly draining your teachers.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-slate-600">
            Teachers spend hours every week planning lessons, writing notes,
            setting quizzes, and marking — usually after school, often for
            classes of 40 or more. Quality swings from one teacher to the next,
            scheme-of-work coverage is inconsistent, and the workload burns
            people out.
          </p>
          <p className="mt-6 border-l-2 border-accent-400 pl-5 text-lg leading-relaxed font-medium text-primary-900">
            For a school, that&rsquo;s lost teaching time, uneven standards, and
            staff you keep having to re-train.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
