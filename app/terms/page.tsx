import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return <PageShell title="Terms of Service" />;
}
