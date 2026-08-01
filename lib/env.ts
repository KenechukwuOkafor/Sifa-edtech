import "server-only";

/**
 * Server-side environment access.
 *
 * Read lazily rather than validating at module load: the marketing pages must
 * build and render on a machine with no Supabase or Resend credentials. Only
 * the /api/lead route needs these, and it fails loudly when they are absent.
 */

class MissingEnvError extends Error {
  constructor(keys: string[]) {
    super(
      `Missing required environment variable(s): ${keys.join(", ")}. ` +
        `Copy .env.example to .env.local and fill them in.`,
    );
    this.name = "MissingEnvError";
  }
}

function read(keys: string[]): string[] {
  const missing = keys.filter((key) => !process.env[key]?.trim());
  if (missing.length > 0) throw new MissingEnvError(missing);
  return keys.map((key) => process.env[key]!.trim());
}

export function getSupabaseEnv() {
  const [url, serviceRoleKey] = read([
    "NEXT_PUBLIC_SUPABASE_URL",
    "SUPABASE_SERVICE_ROLE_KEY",
  ]);
  return { url, serviceRoleKey };
}

export function getResendEnv() {
  const [apiKey, from, to] = read([
    "RESEND_API_KEY",
    "RESEND_FROM_EMAIL",
    "RESEND_TO_EMAIL",
  ]);
  return { apiKey, from, to };
}

export { MissingEnvError };
