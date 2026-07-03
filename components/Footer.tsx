"use client";

import Link from "next/link";

/**
 * Footer - elegant, minimal site footer.
 *
 * Design:
 *  - Soft charcoal (on-surface-variant) typography, never pure black.
 *  - Thin top border (outline-variant) for separation without heavy shadows.
 *  - Three-column flex row on desktop; stacks vertically on mobile.
 *  - Dynamic JS year counter so the copyright is always current.
 *  - Muted link hover transitions to the secondary brand colour.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="
        w-full
        border-t border-[#c4c5d9]/30
        bg-[#f2f3ff]
      "
    >
      <div
        className="
          mx-auto flex max-w-[80rem] flex-col items-center
          gap-5 px-6 py-8
          md:flex-row md:justify-between
        "
      >
        {/* ── Brand mark ───────────────────────────────────────────────── */}
        <p
          className="
            font-[family-name:var(--font-hanken)]
            text-base font-bold
            tracking-[-0.02em]
            text-[#131b2e]
            select-none
          "
        >
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
        </p>

        {/* ── Legal links ───────────────────────────────────────────────── */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap justify-center gap-6"
        >
          <Link
            href="/privacy"
            id="footer-privacy"
            className="
              font-[family-name:var(--font-inter)]
              text-sm font-medium
              text-[#434656]
              transition-colors duration-150
              hover:text-[#b60055]
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#0040e0]
            "
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            id="footer-terms"
            className="
              font-[family-name:var(--font-inter)]
              text-sm font-medium
              text-[#434656]
              transition-colors duration-150
              hover:text-[#b60055]
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#0040e0]
            "
          >
            Terms of Service
          </Link>
        </nav>

        {/* ── Copyright ────────────────────────────────────────────────── */}
        <p
          id="footer-copyright"
          className="
            font-[family-name:var(--font-inter)]
            text-sm
            text-[#747688]
          "
        >
          &copy; {currentYear} Mockiew AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
