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

/**
 * Vertical padding is a prop rather than something callers override through
 * `className`.
 *
 * The section scale (`--spacing-section`) is a custom theme value, so
 * tailwind-merge cannot classify `py-section-lg` and therefore cannot resolve
 * it against a `pt-0` passed in `className` - `padding-block` simply wins and
 * the override silently does nothing. Emitting exactly one class per property
 * removes the conflict entirely.
 */
type Pad = "default" | "tight" | "none";

const PAD_TOP: Record<Pad, string> = {
  default: "pt-section lg:pt-section-lg",
  tight: "pt-12 lg:pt-16",
  none: "pt-0",
};

const PAD_BOTTOM: Record<Pad, string> = {
  default: "pb-section lg:pb-section-lg",
  tight: "pb-12 lg:pb-16",
  none: "pb-0",
};

export function Section({
  id,
  tone = "default",
  padTop = "default",
  padBottom = "default",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  padTop?: Pad;
  padBottom?: Pad;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20",
        PAD_TOP[padTop],
        PAD_BOTTOM[padBottom],
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
