import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Creates a secure, server-side Supabase client for use in:
 *   - Server Components
 *   - Route Handlers
 *   - Server Actions
 *
 * The client reads and writes cookies via Next.js's `cookies()` API
 * so that Supabase Auth sessions (if used later) are properly managed.
 * For the waitlist use-case we only need the anon key for unauthenticated
 * INSERTs permitted by the RLS policy.
 */
export async function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error(
      "Missing Supabase environment variables. " +
      "Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in .env.local."
    );
  }

  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabasePublishableKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // The `setAll` method is called from a Server Component.
          // This can be safely ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
}
