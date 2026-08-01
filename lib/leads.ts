import { z } from "zod";

/**
 * Shared lead contract. Imported by both the client form and the API route, so
 * this file must stay free of server-only imports.
 */

export const LEAD_TYPES = ["waitlist", "contact"] as const;
export type LeadType = (typeof LEAD_TYPES)[number];

/** Roles a school-side buyer might hold. Values are stored verbatim. */
export const LEAD_ROLES = [
  "Teacher",
  "Head of Department",
  "Principal / Head Teacher",
  "School Owner / Proprietor",
  "Curriculum Lead",
  "Other",
] as const;

const trimmed = z.string().trim();

/**
 * A required text field that reports the SAME message whether the value is
 * missing, blank, or too short. Without the `error` on the type itself, an
 * absent field surfaces Zod's raw "expected string, received undefined".
 */
const required = (message: string, min = 2, max = 200) =>
  z.string({ error: message }).trim().min(min, message).max(max);

/** Fields common to both variants. */
const baseLeadSchema = z.object({
  name: required("Please enter your full name.", 2, 120),
  email: z
    .string({ error: "Please enter a valid email address." })
    .trim()
    .toLowerCase()
    .max(200)
    .pipe(z.email("Please enter a valid email address.")),
  /** Populated from the page the form was submitted on, for attribution. */
  source: trimmed.max(200).optional(),
  /**
   * Honeypot. Real users never see this field, so any value means a bot. The
   * API accepts the request and silently discards it.
   */
  company_website: trimmed.max(200).optional(),
});

export const waitlistLeadSchema = baseLeadSchema.extend({
  type: z.literal("waitlist"),
  school: required("Please enter your school name."),
  role: z.enum(LEAD_ROLES, { error: "Please select your role." }),
  message: trimmed.max(2000).optional(),
});

export const contactLeadSchema = baseLeadSchema.extend({
  type: z.literal("contact"),
  school: trimmed.max(200).optional(),
  role: z.enum(LEAD_ROLES).optional(),
  message: required("Please tell us a little more (10+ characters).", 10, 2000),
});

export const leadSchema = z.discriminatedUnion("type", [
  waitlistLeadSchema,
  contactLeadSchema,
]);

export type LeadInput = z.infer<typeof leadSchema>;
export type WaitlistLeadInput = z.infer<typeof waitlistLeadSchema>;
export type ContactLeadInput = z.infer<typeof contactLeadSchema>;

/** Shape returned by POST /api/lead, in both the success and failure cases. */
export type LeadResponse =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> };
