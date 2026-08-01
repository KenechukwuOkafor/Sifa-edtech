import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import { getSupabaseEnv } from "@/lib/env";

/**
 * Service-role Supabase client. This key bypasses row level security, so it
 * must never reach the browser - every import path into this module is
 * server-only, enforced by the `server-only` package above.
 */
let client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (client) return client;

  const { url, serviceRoleKey } = getSupabaseEnv();
  client = createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}

export const LEADS_TABLE = "leads";
