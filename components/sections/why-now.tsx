import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/sections/section";

/** Guide §9. Kept to a single statement - urgency reads better undecorated. */
export function WhyNow() {
  return (
    <Section tone="dark">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <h2 className="text-3xl leading-tight font-semibold text-white sm:text-4xl">
            Why now.
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-8">
          <p className="text-lg leading-relaxed text-slate-300 lg:text-xl">
            African schools are digitising fast, but teachers still plan every
            lesson by hand across disconnected tools. As class sizes grow and
            exam standards tighten, schools need AI that cuts prep time without
            lowering quality.{" "}
            <span className="text-white">
              Sifa brings that to the classroom today.
            </span>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
