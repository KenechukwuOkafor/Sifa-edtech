/**
 * Placeholder tracking.
 *
 * The site development guide (docs/site-development-guide.md §12, §16) treats
 * fabricated facts as a disqualifier. Everything standing in for a real fact -
 * team members, traction, company registration, screenshots - is therefore
 * flagged here rather than quietly written into copy.
 *
 * Rules:
 *   1. Any content item standing in for an unverified fact sets `placeholder`.
 *   2. Placeholder text is wrapped in [square brackets] so it is visibly wrong
 *      if it ever reaches a page unedited.
 *   3. `npm run audit:content` lists everything still outstanding.
 *
 * To promote an item: replace the text with the real value and delete the
 * `placeholder: true` line.
 */

export type Placeholder = {
  /** Present and true while this item still stands in for an unverified fact. */
  placeholder?: true;
};

/** Wraps stand-in text so it reads as obviously unfinished on a page. */
export function ph(text: string): string {
  return `[${text}]`;
}

/** True when any value in the tree is still bracketed stand-in text. */
export function containsPlaceholderText(value: unknown): boolean {
  if (typeof value === "string") return /\[[^\]]+\]/.test(value);
  if (Array.isArray(value)) return value.some(containsPlaceholderText);
  if (value && typeof value === "object") {
    return Object.values(value).some(containsPlaceholderText);
  }
  return false;
}

export type ContentAuditEntry = {
  group: string;
  label: string;
  note?: string;
};

/** Collects flagged items from a content collection for the audit script. */
export function collectPlaceholders<T extends Placeholder>(
  group: string,
  items: readonly T[],
  label: (item: T) => string,
  note?: (item: T) => string | undefined,
): ContentAuditEntry[] {
  return items
    .filter((item) => item.placeholder)
    .map((item) => ({ group, label: label(item), note: note?.(item) }));
}
