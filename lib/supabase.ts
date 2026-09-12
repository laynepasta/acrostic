import { createClient } from '@supabase/supabase-js';

// Server-only client. Uses the service role key, so this file must never be
// imported into a client component ('use client').
export function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error('Supabase environment variables are not set.');
  }

  return createClient(url, key);
}
