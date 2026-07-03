'use client';

import { useActionState, useEffect } from 'react';
import { submitWaitlist } from '@/app/actions';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

/* ─── Styles ─────────────────────────────────────────────────────────────── */
const LABEL: React.CSSProperties = {
  display: 'block',
  fontSize: '0.6875rem',
  fontWeight: 600,
  marginBottom: '0.375rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#434656',
  fontFamily: 'Inter, sans-serif',
};

function inputStyle(): React.CSSProperties {
  return {
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    border: `1.5px solid #c4c5d9`,
    background: '#ffffff',
    color: '#131b2e',
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',           /* 16 px stops iOS/Android auto-zoom */
    borderRadius: '0.75rem',
    padding: '0.8125rem 1rem',
    outline: 'none',
    WebkitAppearance: 'none',
    lineHeight: '1.5',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
  };
}

/* ─── Component ──────────────────────────────────────────────────────────── */
export function HeroForm() {
  const [state, formAction, isPending] = useActionState(submitWaitlist, null);

  /* Confetti & Toasts — only run if JS successfully hydrates */
  useEffect(() => {
    if (state?.success) {
      import('canvas-confetti').then(({ default: confetti }) =>
        confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 }, colors: ['#0040e0', '#b60055', '#e2e7ff'] })
      );
    } else if (state?.success === false) {
      toast.error(state.error);
    }
  }, [state]);

  /* Focus glow via CSS class — works on all mobile browsers */
  const focusCss = `
    html { scroll-behavior: smooth; }
    input, button, a, label { -webkit-tap-highlight-color: transparent; }
    .wl-input:focus {
      border-color: #0040e0 !important;
      box-shadow: 0 0 0 3px rgba(0,64,224,0.15) !important;
      outline: none !important;
    }
    @keyframes slideUpFade {
      from { opacity: 0; transform: translateY(10px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    .success-container {
      animation: slideUpFade 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `;

  return (
    <>
      <style>{focusCss}</style>

      {/* Toaster — hidden on mobile just in case, but active on desktop */}
      <div className="desktop-only-toast" style={{ pointerEvents: 'none' }}>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8125rem',
              borderRadius: '0.875rem',
              maxWidth: '22rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              pointerEvents: 'auto',
            },
            error: {
              style: { background: '#fff1f2', border: '1px solid #fecdd3', color: '#ba1a1a' },
              iconTheme: { primary: '#ba1a1a', secondary: '#fff1f2' },
            },
          }}
          containerStyle={{ pointerEvents: 'none' }}
        />
      </div>

      <section
        id="waitlist"
        style={{ width: '100%', maxWidth: '80rem', margin: '0 auto', padding: '3.5rem 1.25rem 3rem', textAlign: 'center', position: 'relative', zIndex: 1 }}
      >
        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.6875rem', fontWeight: 600, marginBottom: '1.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', background: '#e2e7ff', color: '#0040e0', fontFamily: 'Inter, sans-serif' }}>
          ✦&nbsp;AI-Powered Interview Coach
        </div>

        {/* H1 */}
        <h1 style={{ fontFamily: 'Inter, sans-serif', color: '#131b2e', fontSize: 'clamp(1.75rem, 5vw, 3.125rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.025em', maxWidth: '52rem', margin: '0 auto 1.25rem' }}>
          Nervous About Your Face-to-Face Interview?{' '}
          <span style={{ background: 'linear-gradient(to right, #0040e0, #b60055)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Practice Until You Are Perfect.
          </span>
        </h1>

        {/* Sub-headline */}
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#434656', fontSize: '1rem', lineHeight: 1.75, maxWidth: '34rem', margin: '0 auto 2.25rem', padding: '0 0.5rem' }}>
          Upload your resume and immediately start a realistic mock interview.
          No human judgment, just real-time practice that guarantees you walk into the room ready to get hired.
        </p>

        {/* Form container */}
        <div style={{ width: '100%', maxWidth: '26rem', margin: '0 auto', textAlign: 'left', position: 'relative', zIndex: 10 }}>
          <AnimatePresence mode="wait">
            {state?.success ? (
              /* ── Success ── */
              <div
                key="success"
                className="success-container"
                role="status"
                aria-live="polite"
                style={{ borderRadius: '1rem', padding: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, #f2f3ff 0%, #ffffff 100%)', border: '1px solid #c4c5d9', boxShadow: '0 20px 48px rgba(0,64,224,0.09)' }}
              >
                <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', background: '#e2e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 1.25rem' }} aria-hidden="true">🎉</div>
                <h2 style={{ fontFamily: 'Inter, sans-serif', color: '#131b2e', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>You're on the list!</h2>
                <p style={{ fontFamily: 'Inter, sans-serif', color: '#434656', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  We're rolling out our MVP features soon. Look out for an email asking what features you want most so we can tailor your{' '}
                  <strong style={{ color: '#0040e0' }}>3 free 1-minute mock interview sessions!</strong>
                </p>
              </div>
            ) : (
              /* ── Form — using action prevents JS-reliance ── */
              <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                {/* Full Name */}
                <div>
                  <label htmlFor="wl-name" style={LABEL}>Full Name</label>
                  <input
                    id="wl-name" name="name" type="text" autoComplete="name" required
                    placeholder="John Doe"
                    className="wl-input"
                    style={inputStyle()}
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label htmlFor="wl-email" style={LABEL}>Work Email</label>
                  <input
                    id="wl-email" name="email" type="email" inputMode="email" autoComplete="email" required
                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                    placeholder="you@company.com"
                    className="wl-input"
                    style={inputStyle()}
                  />
                </div>

                {/* Your Role */}
                <div>
                  <label htmlFor="wl-profession" style={LABEL}>Your Role</label>
                  <input
                    id="wl-profession" name="profession" type="text" autoComplete="organization-title" required
                    placeholder="e.g. Student, Professor, Project Manager"
                    className="wl-input"
                    style={inputStyle()}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  id="waitlist-submit-btn"
                  type="submit"
                  disabled={isPending}
                  style={{
                    width: '100%', borderRadius: '0.75rem', fontWeight: 600,
                    color: '#ffffff', border: 'none',
                    background: 'linear-gradient(to right, #0040e0, #b60055)',
                    boxShadow: '0 8px 24px rgba(0,64,224,0.28)',
                    fontFamily: 'Inter, sans-serif',
                    padding: '0.9375rem 1rem', fontSize: '1rem',
                    cursor: isPending ? 'not-allowed' : 'pointer',
                    opacity: isPending ? 0.65 : 1,
                    transition: 'opacity 0.15s ease',
                    WebkitTapHighlightColor: 'transparent',
                    position: 'relative', // Lift the button up in stacking context
                    zIndex: 50,           // Guarantee nothing overlaps it
                    touchAction: 'manipulation' // Disable 300ms double-tap zoom delay on mobile
                  }}
                >
                  {isPending ? 'Confirming...' : 'Confirm My Interest'}
                </motion.button>

                {state?.success === false && (
                  <div style={{ color: '#ba1a1a', fontSize: '0.875rem', fontFamily: 'Inter, sans-serif', textAlign: 'center', fontWeight: 500, marginTop: '0.25rem' }}>
                    {state.error}
                  </div>
                )}

                {/* Microcopy */}
                <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#747688', fontFamily: 'Inter, sans-serif', marginTop: '-0.25rem' }}>
                  Secure early access &amp; claim 3 free mock interviews.
                </p>
              </form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
