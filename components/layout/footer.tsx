import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { legalNav, mainNav, siteConfig, socialNav } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-primary-950 text-slate-300">
      <div className="mx-auto max-w-content px-gutter py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          <div className="max-w-prose">
            <Logo tone="light" />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Complete, curriculum-aligned lesson packs for African primary and
              secondary schools.
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-6 inline-block text-sm font-medium text-accent-300 underline-offset-4 transition-colors hover:text-accent-200 hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
          </div>

          <FooterColumn title="Company" items={mainNav} />

          <div className="flex flex-col gap-8">
            <FooterColumn title="Legal" items={legalNav} />
            <FooterColumn title="Follow" items={socialNav} external />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.company} All rights reserved.
          </p>
          <p>Built for schools across Africa.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
  external = false,
}: {
  title: string;
  items: readonly { label: string; href: string }[];
  external?: boolean;
}) {
  return (
    <div>
      <h2 className="font-display text-sm font-semibold tracking-wide text-white uppercase">
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            {external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={item.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
