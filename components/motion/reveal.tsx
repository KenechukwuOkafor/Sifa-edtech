"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

/**
 * Scroll-in wrapper. Subtle by design: a short fade plus a small translate,
 * played once. Anything showier reads as a template on a B2B site.
 *
 * Honours prefers-reduced-motion by rendering the final state immediately.
 */

type Direction = "up" | "left" | "right" | "none";

const OFFSET: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 16 },
  left: { x: -16 },
  right: { x: 16 },
  none: {},
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  as = "div",
  trigger = "scroll",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
  /**
   * "mount" plays immediately - correct for above-the-fold content, which must
   * never wait on an intersection that may not fire. "scroll" plays when the
   * element enters the viewport.
   */
  trigger?: "scroll" | "mount";
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  const target = { opacity: 1, x: 0, y: 0 };
  const transition = {
    duration: 0.5,
    delay,
    ease: [0.21, 0.47, 0.32, 0.98] as const,
  };

  if (trigger === "mount") {
    return (
      <Component
        initial={{ opacity: 0, ...OFFSET[direction] }}
        animate={target}
        transition={transition}
        className={className}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      initial={{ opacity: 0, ...OFFSET[direction] }}
      whileInView={target}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
      className={className}
    >
      {children}
    </Component>
  );
}

/**
 * Staggers direct children. Use for card grids and lists so items arrive in
 * sequence rather than all at once.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.07,
  as = "div",
  trigger = "scroll",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul" | "ol";
  trigger?: "scroll" | "mount";
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };

  const activate =
    trigger === "mount"
      ? { animate: "show" as const }
      : {
          whileInView: "show" as const,
          viewport: { once: true, margin: "-60px" },
        };

  return (
    <Component
      variants={container}
      initial="hidden"
      {...activate}
      className={className}
    >
      {children}
    </Component>
  );
}

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

/** A child of RevealGroup. */
export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component variants={item} className={cn(className)}>
      {children}
    </Component>
  );
}
