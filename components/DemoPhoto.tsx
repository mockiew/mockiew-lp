'use client';

/* ─── DemoPhoto.tsx ───────────────────────────────────────────────────────── */

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES: string[] = ['/demo/images/demo-1.png', '/demo/images/demo-2.png', '/demo/images/demo-3.png', '/demo/images/demo-4.png', '/demo/images/demo-5.png'];

const NAV_BTN =
  'absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center ' +
  'w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm ' +
  'transition-all duration-200 text-neutral-800 shadow-sm';

export default function DemoPhoto() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  /* Auto-advance every 5 seconds — clears on unmount */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrentIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrentIndex((i) => (i + 1) % SLIDES.length);

  return (
    <div className="relative w-full h-full">
      {/* Slide image */}
      <Image
        key={currentIndex}
        src={SLIDES[currentIndex]}
        alt={`Mockiew AI demo screenshot ${currentIndex + 1}`}
        fill
        priority={currentIndex === 0}
        className="w-full h-full aspect-video object-cover transition-all duration-500"
      />

      {/* Left chevron */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className={`${NAV_BTN} left-3`}
      >
        <ChevronLeft size={20} strokeWidth={2.5} />
      </button>

      {/* Right chevron */}
      <button
        onClick={next}
        aria-label="Next slide"
        className={`${NAV_BTN} right-3`}
      >
        <ChevronRight size={20} strokeWidth={2.5} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
              background: i === currentIndex ? '#0040e0' : 'rgba(255,255,255,0.5)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
