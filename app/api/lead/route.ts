import { NextResponse } from "next/server";
import { z } from "zod";

import { MissingEnvError } from "@/lib/env";
import { leadSchema, type LeadResponse } from "@/lib/leads";
import { sendLeadNotification } from "@/lib/resend";
import { LEADS_TABLE, getSupabaseAdmin } from "@/lib/supabase";

/** Postgres unique_violation - the email is already on the list. */
const UNIQUE_VIOLATION = "23505";

export async function POST(request: Request): Promise<NextResponse<LeadResponse>> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Malformed request body." },
      { status: 400 },
    );
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please check the highlighted fields.",
        fieldErrors: z.flattenError(parsed.error).fieldErrors as Record<string, string[]>,
      },
      { status: 400 },
    );
  }

  const lead = parsed.data;

  // Honeypot: accept so the bot sees success, but persist nothing.
  if (lead.company_website) {
    return NextResponse.json({ ok: true });
  }

  try {
    const { error } = await getSupabaseAdmin()
      .from(LEADS_TABLE)
      .insert({
        type: lead.type,
        name: lead.name,
        email: lead.email,
        school: lead.school ?? null,
        role: lead.role ?? null,
        message: lead.message ?? null,
        source: lead.source ?? null,
      });

    if (error) {
      // Re-submitting the same email is a no-op, not an error the user should see.
      if (error.code === UNIQUE_VIOLATION) {
        return NextResponse.json({ ok: true });
      }
      throw new Error(`Supabase insert failed: ${error.message}`);
    }
  } catch (cause) {
    if (cause instanceof MissingEnvError) {
      console.error("[lead] configuration error:", cause.message);
      return NextResponse.json(
        { ok: false, error: "The form is not configured yet. Please email us directly." },
        { status: 503 },
      );
    }

    console.error("[lead] failed to store lead:", cause);
    return NextResponse.json(
      { ok: false, error: "Something went wrong on our end. Please try again." },
      { status: 500 },
    );
  }

  // The lead is safe at this point. A failed notification must not turn a
  // successful signup into an error for the user.
  try {
    await sendLeadNotification(lead);
  } catch (cause) {
    console.error("[lead] stored but notification failed:", cause);
  }

  return NextResponse.json({ ok: true });
}
