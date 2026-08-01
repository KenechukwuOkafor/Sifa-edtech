import "server-only";

import { Resend } from "resend";

import { getResendEnv } from "@/lib/env";
import type { LeadInput } from "@/lib/leads";

let client: Resend | null = null;

function getResend(): Resend {
  if (!client) client = new Resend(getResendEnv().apiKey);
  return client;
}

/**
 * Notify the team about a new lead.
 *
 * Callers should treat a rejection as non-fatal - the lead row is already
 * persisted by the time this runs, and losing an email is better than losing
 * the signup.
 */
export async function sendLeadNotification(lead: LeadInput): Promise<void> {
  const { from, to } = getResendEnv();
  const label = lead.type === "waitlist" ? "waitlist signup" : "contact enquiry";

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["School", lead.school || "—"],
    ["Role", lead.role || "—"],
    ["Type", lead.type],
    ["Source", lead.source || "—"],
  ];

  const { error } = await getResend().emails.send({
    from,
    to,
    replyTo: lead.email,
    subject: `New ${label}: ${lead.name}`,
    text: [
      ...rows.map(([key, value]) => `${key}: ${value}`),
      "",
      "Message:",
      lead.message || "—",
    ].join("\n"),
  });

  if (error) {
    throw new Error(`Resend rejected the notification: ${error.message}`);
  }
}
