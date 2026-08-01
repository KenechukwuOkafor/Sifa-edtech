import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/**
 * Page section primitive. Owns vertical rhythm and the three background tones
 * the page alternates between, so individual sections never hand-roll padding.
 */

type Tone = "default" | "muted" | "dark";

const TONE: Record<Tone, string> = {
  default: "bg-white",
  muted: "bg-slate-50",
  dark: "bg-primary-950 text-slate-300",
};

export function Section({
  id,
  tone = "default",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-section lg:py-section-lg",
        TONE[tone],
        className,
      )}
    >
      <div className="mx-auto max-w-content px-gutter">{children}</div>
    </section>
  );
}

/**
 * Section heading block. `eyebrow` is the small label above the heading;
 * `lede` is the paragraph beneath it.
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "default",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  tone?: Tone;
  align?: "left" | "center";
  className?: string;
}) {
  const dark = tone === "dark";

  return (
    <Reveal
      className={cn(
        "max-w-prose",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-sm font-semibold tracking-wide uppercase",
            dark ? "text-accent-300" : "text-accent-600",
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={cn(
          "text-3xl leading-tight font-semibold sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-primary-900",
        )}
      >
        {title}
      </h2>

      {lede ? (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            dark ? "text-slate-300" : "text-slate-600",
          )}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
