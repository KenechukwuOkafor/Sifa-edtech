import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Standard wrapper for interior pages: constrains width, applies the section
 * rhythm, and renders the page heading. Page bodies compose sections inside it.
 */
export function PageShell({
  title,
  lede,
  children,
  className,
}: {
  title: string;
  lede?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-content px-gutter py-section", className)}>
      <header className="max-w-prose">
        <h1 className="text-4xl font-semibold text-primary-900 lg:text-5xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{lede}</p>
        ) : null}
      </header>
      {children ? <div className="mt-12">{children}</div> : null}
    </div>
  );
}
