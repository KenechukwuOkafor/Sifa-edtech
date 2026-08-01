import Link from "next/link";
import { ArrowRight, Cloud, Cpu, Network } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/sections/section";

const LAYERS = [
  { icon: Cloud, label: "Scalable cloud infrastructure" },
  { icon: Cpu, label: "LLM inference layer" },
  { icon: Network, label: "Built for school networks" },
];

export function TechTeaser() {
  return (
    <Section tone="default">
      <Reveal className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-wide text-accent-600 uppercase">
              Technology
            </p>
            <h2 className="text-3xl leading-tight font-semibold text-balance text-primary-900 sm:text-4xl">
              Built to scale with your school network.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Sifa runs on scalable cloud infrastructure with an LLM inference
              layer, engineered to grow from a single school to a network
              without losing speed or reliability.
            </p>
            <Link
              href="/tech"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-800 underline-offset-4 transition-colors hover:text-accent-600 hover:underline"
            >
              See our tech stack
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <ul className="space-y-3">
            {LAYERS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                  <Icon className="size-5" />
                </span>
                <span className="font-medium text-primary-900">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
