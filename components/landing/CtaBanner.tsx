export function CtaBanner() {
  return (
    <section
      className="relative w-full px-5 sm:px-8 py-16 text-center overflow-hidden"
      style={{ background: 'linear-gradient(to right, #0040e0, #b60055)' }}
    >
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute top-0 right-0 w-72 h-72 rounded-full bg-white/10 blur-3xl translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full bg-black/10 blur-3xl -translate-x-1/3 translate-y-1/3" aria-hidden="true" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2
          className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-3"
          style={{ fontFamily: 'var(--font-hanken)' }}
        >
          Practice. Improve.
          <br />
          Get Hired.
        </h2>
        <p
          className="mb-9 text-sm sm:text-base"
          style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.75)' }}
        >
          Join thousands of professionals levelling up their interview game.
        </p>

        <a
          href="#waitlist"
          id="bottom-cta-btn"
          className="inline-flex items-center gap-2 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-[1.04] hover:shadow-2xl active:scale-[0.97]"
          style={{
            background: '#ffffff',
            color: '#0040e0',
            fontFamily: 'var(--font-inter)',
            padding: '1rem 2.25rem',
            boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M7 12V2M3 6l4-4 4 4"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Join the Waitlist
        </a>

        <p
          className="mt-4 text-xs"
          style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.55)' }}
        >
          Secure early access &amp; claim 3 free mock interviews.
        </p>
      </div>
    </section>
  );
}
