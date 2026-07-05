"use client";

import Link from "next/link";
import { useWaitlist } from "@/context/WaitlistContext";

/**
 * Navbar - fixed top navigation bar.
 *
 * Design:
 *  - Glassmorphism: backdrop-blur-md + bg-white/70 for a premium frosted feel.
 *  - Left:  Bold "Mockiew AI" logotype in the primary brand colour.
 *  - Right: Ghost "Join Waitlist" button — transitions to a disabled success
 *           indicator ("✓ Added to Waitlist") once the user submits the form.
 *  - 1px bottom border in outline-variant colour for subtle visual separation.
 *  - z-50 ensures it layers correctly above all page content.
 */
export default function Navbar() {
  const { isSubmitted } = useWaitlist();

  return (
    <header
      id="site-navbar"
      className="
        sticky top-0 z-50
        w-full
        border-b border-[#c4c5d9]/40
        bg-white/70
        backdrop-blur-md
        [-webkit-backdrop-filter:blur(12px)]
      "
    >
      <div
        className="
          mx-auto flex max-w-[80rem] items-center
          justify-between
          px-6 py-4
        "
      >
        {/* ── Logo ─────────────────────────────────────────────────────── */}
        <Link
          href="/"
          id="navbar-logo"
          aria-label="Mockiew AI - go to homepage"
          className="
            font-[family-name:var(--font-hanken)]
            text-xl font-black
            tracking-[-0.03em]
            text-[#131b2e]
            transition-opacity duration-200
            hover:opacity-80
            select-none
          "
        >
          {/* "Mockiew" in near-black, "AI" tinted with brand gradient */}
          Mockiew{" "}
          <span
            className="
              bg-gradient-to-r from-[#0040e0] to-[#b60055]
              bg-clip-text
              [-webkit-background-clip:text]
              [-webkit-text-fill-color:transparent]
            "
          >
            AI
          </span>
        </Link>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <nav aria-label="Primary navigation">
          {isSubmitted ? (
            /* ── Submitted state: premium disabled success badge ── */
            <span
              id="navbar-cta"
              aria-label="You are already on the waitlist"
              className="
                inline-flex items-center justify-center gap-2
                rounded-xl
                border border-[#16a34a]/40
                bg-[#f0fdf4]
                px-5 py-2
                font-[family-name:var(--font-inter)]
                text-sm font-semibold
                text-[#16a34a]
                cursor-default
                select-none
                transition-all duration-300
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                style={{ width: '1.25rem', height: '1.25rem', flexShrink: 0 }}
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              Added to Waitlist
            </span>
          ) : (
            /* ── Default state: ghost CTA link ── */
            <Link
              href="#waitlist"
              id="navbar-cta"
              className="
                inline-flex items-center justify-center
                rounded-xl
                border border-[#0040e0]
                px-5 py-2
                font-[family-name:var(--font-inter)]
                text-sm font-semibold
                text-[#0040e0]
                transition-all duration-200
                hover:bg-[#0040e0]/6
                hover:shadow-[0_0_0_3px_rgba(0,64,224,0.12)]
                hover:scale-[1.02]
                active:scale-[0.98]
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#0040e0]
              "
            >
              Join Waitlist
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
