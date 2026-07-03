"use client";

import Link from "next/link";

/**
 * Navbar - fixed top navigation bar.
 *
 * Design:
 *  - Glassmorphism: backdrop-blur-md + bg-white/70 for a premium frosted feel.
 *  - Left:  Bold "Mockiew AI" logotype in the primary brand colour.
 *  - Right: Ghost "Join Waitlist" button - outlined, rounds on hover.
 *  - 1px bottom border in outline-variant colour for subtle visual separation.
 *  - z-50 ensures it layers correctly above all page content.
 */
export default function Navbar() {
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
        </nav>
      </div>
    </header>
  );
}
