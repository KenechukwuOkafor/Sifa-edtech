import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = { title: "Tech" };

export default function TechPage() {
  return <PageShell title="Tech" />;
}
