import type { Metadata } from "next";

import { LeadForm } from "@/components/lead-form";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PageShell title="Contact">
      <div className="max-w-prose">
        <LeadForm variant="contact" />
      </div>
    </PageShell>
  );
}
