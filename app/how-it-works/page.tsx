import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = { title: "How It Works" };

export default function HowItWorksPage() {
  return <PageShell title="How It Works" />;
}
