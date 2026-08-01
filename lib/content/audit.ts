import { company, compliance } from "@/lib/content/company";
import { audiences, growthPlan, launchMarkets, revenueModel } from "@/lib/content/market";
import {
  collectPlaceholders,
  containsPlaceholderText,
  type ContentAuditEntry,
} from "@/lib/content/placeholder";
import { roadmap } from "@/lib/content/roadmap";
import { advisors, hasVisibleDeveloper, team } from "@/lib/content/team";
import {
  productStage,
  testimonials,
  traction,
  tractionNotes,
} from "@/lib/content/traction";

/**
 * Enumerates every content item still standing in for a real fact.
 * Surfaced by `npm run audit:content` so placeholders cannot ship unnoticed.
 */
export function auditContent(): ContentAuditEntry[] {
  const entries: ContentAuditEntry[] = [
    ...collectPlaceholders("team", team, (m) => `${m.role}`, (m) => m.name),
    ...collectPlaceholders("advisors", advisors, (a) => a.role, (a) => a.name),
    ...collectPlaceholders("traction", traction, (t) => t.label, (t) => t.value),
    ...collectPlaceholders("traction", tractionNotes, (n) => n.id, (n) => n.text),
    ...collectPlaceholders("roadmap", roadmap, (p) => `${p.phase} — ${p.milestone}`),
    ...collectPlaceholders("market", audiences, (a) => a.title),
    ...collectPlaceholders("market", launchMarkets, (m) => m.country),
    ...collectPlaceholders("market", revenueModel, (r) => r.name),
  ];

  if (productStage.placeholder) {
    entries.push({
      group: "traction",
      label: "Product stage",
      note: `${productStage.value} — ${productStage.blurb}`,
    });
  }
  if (growthPlan.placeholder) {
    entries.push({ group: "market", label: "Growth plan" });
  }
  if (company.placeholder) {
    entries.push({
      group: "company",
      label: "Registration and domain",
      note: `${company.legalName} · ${company.domain}`,
    });
  }
  if (compliance.placeholder) {
    entries.push({ group: "company", label: "Data protection and security" });
  }

  return entries;
}

/** Blocking problems, as opposed to unfinished placeholders. */
export function auditBlockers(): string[] {
  const blockers: string[] = [];

  // Guide §13 requires visible technical staff.
  if (!hasVisibleDeveloper) {
    blockers.push("No team member is marked `technical` (guide §13).");
  }

  // Guide §16 lists fake testimonials as a disqualifier.
  if (testimonials.some((t) => containsPlaceholderText(t.quote))) {
    blockers.push("A testimonial contains placeholder text (guide §16).");
  }

  // Guide §16 rules out a free GitHub domain for serious applications.
  if (/github\.io/i.test(company.domain)) {
    blockers.push("Production domain is a github.io address (guide §16).");
  }

  return blockers;
}
