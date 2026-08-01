import { LeadForm } from "@/components/lead-form";
import { PageShell } from "@/components/layout/page-shell";

export default function HomePage() {
  return (
    <PageShell title="Product">
      {/* Sections get composed here. The waitlist anchor is referenced by the
          header CTA, so keep the `waitlist` id wherever this block moves to. */}
      <section id="waitlist" className="max-w-prose scroll-mt-24">
        <LeadForm variant="waitlist" />
      </section>
    </PageShell>
  );
}
