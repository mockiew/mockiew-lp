import type { Metadata } from "next";
import { Inter, Hanken_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClarityProvider from "@/components/ClarityProvider";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


/* ─── Font configuration ──────────────────────────────────────────────────── */

/**
 * Inter - body text, labels, UI copy.
 * Loaded via next/font for zero layout-shift and automatic font optimisation.
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

/**
 * Hanken Grotesk - display / headline typeface.
 * Sharp, contemporary, negative letter-spacing at large sizes.
 */
const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

/* ─── SEO Metadata ────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Mockiew AI - Practice Until Perfect",
  description:
    "Mockiew AI delivers realistic, AI-powered mock interviews tailored to your resume and target role. Get instant feedback on pacing, structure, and accuracy. Join the waitlist today.",
  keywords: [
    "AI mock interview",
    "interview practice",
    "job preparation",
    "Mockiew AI",
    "career coaching",
  ],
  openGraph: {
    title: "Mockiew AI - Practice Until Perfect",
    description:
      "Realistic AI-driven mock interviews tailored to your resume. Practice until perfect - join the waitlist for early access.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mockiew AI - Practice Until Perfect",
    description:
      "Realistic AI-driven mock interviews. Practice until perfect - join the waitlist.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Root Layout ─────────────────────────────────────────────────────────── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, hankenGrotesk.variable, "font-sans", geist.variable)}
    >
      <body
        /**
         * Flex column layout:
         *  ┌─────────────────────┐
         *  │       <Navbar />    │  ← sticky top
         *  │  <main>{children}  │  ← flex-1 grows to fill viewport
         *  │       <Footer />    │  ← pinned bottom
         *  └─────────────────────┘
         */
        className="flex min-h-full flex-col bg-[#faf8ff] text-[#131b2e]"
      >
        <ClarityProvider />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
