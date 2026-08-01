import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return <PageShell title="Pricing" />;
}
