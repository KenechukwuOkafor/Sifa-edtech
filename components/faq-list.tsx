import { ChevronDown } from "lucide-react";

import { PlaceholderValue } from "@/components/placeholder-value";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/**
 * Shared FAQ accordion, used by /pricing and /how-it-works.
 *
 * Built on <details> so it stays keyboard accessible and works with no JS -
 * the reveal animation is the only part that needs it.
 */

export type FaqItem = {
  question: string;
  answer: string;
  /** Renders the answer as an unmistakable placeholder rather than as copy. */
  placeholder?: boolean;
  /** Extra guidance shown under a placeholder answer. */
  note?: string;
};

/**
 * Emits FAQPage structured data so search engines can read the questions.
 *
 * Placeholder items are excluded deliberately - marking unwritten copy up as a
 * real answer would publish a claim we have not made. The `<` escape guards
 * against a future answer containing `</script>`.
 */
function FaqStructuredData({ items }: { items: readonly FaqItem[] }) {
  const answered = items.filter((faq) => !faq.placeholder);
  if (answered.length === 0) return null;

  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: answered.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      // Content is static, author-written copy - never user input.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

export function FaqList({
  items,
  className,
}: {
  items: readonly FaqItem[];
  className?: string;
}) {
  return (
    <>
      <FaqStructuredData items={items} />
      <RevealGroup
        as="ul"
        className={cn("max-w-3xl space-y-3", className)}
        stagger={0.05}
      >
        {items.map((faq) => (
          <RevealItem as="li" key={faq.question}>
            <details className="group rounded-xl border border-slate-200 bg-white open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-medium text-primary-900 [&::-webkit-details-marker]:hidden">
                <span className="flex flex-wrap items-center gap-3">
                  {faq.question}
                  {faq.placeholder ? (
                    <span className="rounded-full border border-dashed border-amber-500/70 bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-800">
                      Needs your input
                    </span>
                  ) : null}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="size-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-5">
                {faq.placeholder ? (
                  <>
                    <PlaceholderValue className="text-sm leading-relaxed">
                      {faq.answer}
                    </PlaceholderValue>
                    {faq.note ? (
                      <p className="mt-3 text-sm text-slate-500">{faq.note}</p>
                    ) : null}
                  </>
                ) : (
                  <p className="leading-relaxed text-slate-600">{faq.answer}</p>
                )}
              </div>
            </details>
          </RevealItem>
        ))}
      </RevealGroup>
    </>
  );
}
