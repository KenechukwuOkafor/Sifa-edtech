import { cn } from "@/lib/utils";

/**
 * Renders a value Kene still has to supply, styled so it cannot be mistaken
 * for finished copy. Keeps the guide's no-invented-numbers rule visible on the
 * page itself rather than only in the content audit.
 */
export function PlaceholderValue({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      title="Placeholder — replace with the real value"
      className={cn(
        "inline-block rounded-md border border-dashed border-amber-500/70 bg-amber-50 px-2 py-0.5 text-amber-800",
        className,
      )}
    >
      {children}
    </span>
  );
}
