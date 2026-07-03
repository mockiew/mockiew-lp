import { PAIN_POINTS } from './data';

export function PainPoints() {
  return (
    <section className="w-full py-12" style={{ background: '#f2f3ff' }}>
      <div className="max-w-[80rem] mx-auto px-5 sm:px-8">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2
            className="w-full text-2xl sm:text-[1.875rem] font-bold leading-[1.35] tracking-tight"
            style={{
              fontFamily: 'var(--font-hanken)',
              color: '#131b2e',
              maxWidth: '38rem',
              margin: '0 auto',
            }}
          >
            Your perfect resume is useless if your{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #0040e0, #b60055)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              interview delivery
            </span>{' '}
            falls flat.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PAIN_POINTS.map((pt, i) => (
            <article
              key={i}
              className="rounded-xl p-6 bg-white relative overflow-hidden transition-shadow duration-200 hover:shadow-md"
              style={{
                border: `1px solid ${pt.color}1a`,
                boxShadow: `0 2px 12px ${pt.color}07`,
              }}
            >
              {/* Accent corner splash */}
              <div
                className="absolute top-0 right-0 w-20 h-20 rounded-bl-full pointer-events-none"
                style={{ background: pt.color, opacity: 0.06 }}
                aria-hidden="true"
              />
              {/* Icon badge */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5"
                style={{ background: pt.bg }}
                aria-hidden="true"
              >
                {pt.emoji}
              </div>
              <h3
                className="text-[1.0625rem] font-semibold mb-2 leading-tight"
                style={{ fontFamily: 'var(--font-hanken)', color: '#131b2e' }}
              >
                {pt.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)', color: '#434656' }}
              >
                {pt.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
