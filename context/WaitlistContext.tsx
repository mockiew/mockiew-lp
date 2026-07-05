'use client';

import { createContext, useContext, useState, useCallback } from 'react';

/* ─── Types ─────────────────────────────────────────────────────────────────── */

interface WaitlistContextValue {
  /** True once the user has successfully joined the waitlist. */
  isSubmitted: boolean;
  /** Call this from HeroForm after a successful server action response. */
  markSubmitted: () => void;
}

/* ─── Context ───────────────────────────────────────────────────────────────── */

const WaitlistContext = createContext<WaitlistContextValue>({
  isSubmitted: false,
  markSubmitted: () => {},
});

/* ─── Provider ──────────────────────────────────────────────────────────────── */

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const markSubmitted = useCallback(() => setIsSubmitted(true), []);

  return (
    <WaitlistContext.Provider value={{ isSubmitted, markSubmitted }}>
      {children}
    </WaitlistContext.Provider>
  );
}

/* ─── Hook ──────────────────────────────────────────────────────────────────── */

export function useWaitlist(): WaitlistContextValue {
  return useContext(WaitlistContext);
}
