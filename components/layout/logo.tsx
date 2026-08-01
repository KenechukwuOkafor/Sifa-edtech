import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Wordmark placeholder. Swap the <span> for an SVG mark when brand assets land;
 * keep the Link wrapper and sizing so header/footer spacing does not shift.
 */
export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "font-display text-2xl font-bold tracking-tight transition-opacity hover:opacity-80",
        tone === "dark" ? "text-primary-800" : "text-white",
        className,
      )}
    >
      {siteConfig.name}
    </Link>
  );
}
