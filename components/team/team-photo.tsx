"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Large portrait for a team member.
 *
 * The photo files are not in the repo yet, so a missing file must degrade to
 * something presentable rather than a broken-image icon. `onError` is an event
 * handler, not an effect, so setting state here is fine under the strict
 * `react-hooks/set-state-in-effect` rule.
 *
 * `sizes` matches the two-column grid the section renders in: roughly half the
 * content width on desktop, full width on a phone.
 */
export function TeamPhoto({
  src,
  name,
  initials,
  className,
}: {
  src: string;
  name: string;
  initials: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-primary-800",
        className,
      )}
    >
      {failed ? (
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center font-display text-6xl font-semibold text-white/90 sm:text-7xl"
        >
          {initials}
        </span>
      ) : (
        <Image
          src={src}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
