'use server';

import { createClient } from '@/utils/supabase/server';

/* ─── Types ───────────────────────────────────────────────────────────────── */

export type WaitlistState =
  | { success: true; name: string }
  | { success: false; error: string }
  | null;

/* ─── Email regex (RFC-5321 pragmatic subset) ─────────────────────────────── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* ─── Server Action ───────────────────────────────────────────────────────── */

/**
 * submitWaitlist
 *
 * Compatible with React 19's `useActionState` hook signature:
 *   (prevState, formData) => Promise<WaitlistState>
 */
export async function submitWaitlist(
  _prevState: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  /* ── 1. Parse raw form values ─────────────────────────────────────────── */
  const rawName = formData.get('name');
  const rawEmail = formData.get('email');
  const rawProfession = formData.get('profession');

  const name = typeof rawName === 'string' ? rawName.trim() : '';
  const email = typeof rawEmail === 'string' ? rawEmail.trim().toLowerCase() : '';
  const profession = typeof rawProfession === 'string' ? rawProfession.trim() : '';

  /* ── 2. Server-side validation ────────────────────────────────────────── */
  if (!name) {
    return {
      success: false,
      error: 'Please enter your full name.',
    };
  }

  if (!email || !EMAIL_RE.test(email)) {
    return {
      success: false,
      error: 'Please enter a valid email address.',
    };
  }

  if (!profession) {
    return {
      success: false,
      error: 'Please enter your profession.',
    };
  }

  if (profession.length > 120) {
    return {
      success: false,
      error: 'Profession must be under 120 characters.',
    };
  }

  /* ── 3. Insert into Supabase ──────────────────────────────────────────── */
  try {
    const supabase = await createClient();

    const { error: dbError } = await supabase
      .from('waitlist')
      .insert({ name, email, profession });

    if (dbError) {
      // PostgreSQL unique-violation → duplicate email
      if (dbError.code === '23505') {
        return {
          success: false,
          error:
            "You're already on the waitlist! We'll reach out to you very soon.",
        };
      }

      // Log internally but never leak raw DB error messages to the client
      console.error('[submitWaitlist] Supabase insert error:', dbError);
      return {
        success: false,
        error: 'Something went wrong on our end. Please try again in a moment.',
      };
    }

    return { success: true, name };
  } catch (err) {
    console.error('[submitWaitlist] Unexpected error:', err);
    return {
      success: false,
      error:
        'Unable to reach the server. Please check your connection and try again.',
    };
  }
}
