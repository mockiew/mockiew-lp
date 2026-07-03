/* ─── SneakPeek.tsx ───────────────────────────────────────────────────────── */

import DemoPhoto from '@/components/DemoPhoto';
import DemoVideo from '@/components/DemoVideo';

export function SneakPeek() {
  return (
    <section className="w-full max-w-[80rem] mx-auto px-5 sm:px-8 py-10">

      {/* Section heading */}
      <div className="text-center mb-7">
        <h2
          className="text-2xl sm:text-[1.875rem] font-bold tracking-tight"
          style={{ fontFamily: 'var(--font-hanken)', color: '#131b2e' }}
        >
          See Mockiew AI in Action
        </h2>
      </div>

      {/* Outer display frame */}
      <div
        className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden"
        style={{
          border: '1px solid #c4c5d9',
          boxShadow: '0 20px 48px rgba(0,64,224,0.11), 0 4px 12px rgba(0,64,224,0.05)',
        }}
      >
        {/* Ambient glow halo */}
        <div
          className="pointer-events-none absolute -inset-1 -z-10 rounded-2xl blur-2xl opacity-20 bg-gradient-to-r from-[#0040e0] to-[#b60055]"
          aria-hidden="true"
        />

        {/* 16:9 widescreen envelope */}
        <div className="relative w-full bg-[#eaedff]" style={{ aspectRatio: '16/9' }}>

          {/* ── PRODUCTION: Photo slideshow (active) ── */}
          <DemoPhoto />

          {/* ── SWITCH TO VIDEO: Replace line above with <DemoVideo /> once /demo.mp4 is uploaded ── */}

        </div>
      </div>
    </section>
  );
}
