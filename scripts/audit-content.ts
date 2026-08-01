/**
 * Lists every piece of content still standing in for a real fact.
 *
 *   npm run audit:content
 *
 * Exits 1 when a guide-level blocker is present, so it can gate a deploy.
 * Outstanding placeholders alone are reported but do not fail - they are
 * expected while the site is being built.
 */
import { auditBlockers, auditContent } from "../lib/content/audit";

const entries = auditContent();
const blockers = auditBlockers();

if (entries.length === 0) {
  console.log("No placeholder content remaining.");
} else {
  const groups = [...new Set(entries.map((entry) => entry.group))];
  console.log(`${entries.length} placeholder item(s) awaiting real values:\n`);

  for (const group of groups) {
    console.log(`  ${group}`);
    for (const entry of entries.filter((e) => e.group === group)) {
      const note = entry.note ? `  ${entry.note}` : "";
      console.log(`    - ${entry.label}${note}`);
    }
    console.log();
  }
  console.log("Edit the files in lib/content/, then remove `placeholder: true`.");
}

if (blockers.length > 0) {
  console.error("\nBlockers (guide violations):");
  for (const blocker of blockers) console.error(`  ✗ ${blocker}`);
  process.exit(1);
}
