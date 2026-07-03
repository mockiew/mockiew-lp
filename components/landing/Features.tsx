import { FEATURES } from './data';

function Illustration({
  icon,
  accent,
  bgFrom,
  bgTo,
}: {
  icon: string;
  accent: string;
  bgFrom: string;
  bgTo: string;
}) {
  const svgs: Record<string, React.ReactNode> = {
    shield: (
      <svg viewBox="0 0 96 96" fill="none" width="96" height="96" aria-hidden="true">
        <path d="M48 10L14 24v24c0 20 14 38 34 44 20-6 34-24 34-44V24L48 10z" fill={accent} fillOpacity="0.14" stroke={accent} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M33 48l10 10 20-20" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    doc: (
      <svg viewBox="0 0 96 96" fill="none" width="96" height="96" aria-hidden="true">
        <rect x="18" y="8" width="60" height="80" rx="6" fill={accent} fillOpacity="0.10" stroke={accent} strokeWidth="2.5" />
        <line x1="30" y1="32" x2="66" y2="32" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="30" y1="44" x2="66" y2="44" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="30" y1="56" x2="50" y2="56" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="68" cy="68" r="12" fill={accent} fillOpacity="0.18" stroke={accent} strokeWidth="2.5" />
        <path d="M63 68l4 4 6-6" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    pulse: (
      <svg viewBox="0 0 96 96" fill="none" width="96" height="96" aria-hidden="true">
        <path d="M8 48h16l10-26 14 52 10-34 8 10h22" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="82" cy="48" r="5" fill={accent} />
        <circle cx="82" cy="48" r="10" stroke={accent} strokeWidth="1.5" strokeOpacity="0.3" />
      </svg>
    ),
    cycle: (
      <svg viewBox="0 0 96 96" fill="none" width="96" height="96" aria-hidden="true">
        <circle cx="48" cy="48" r="30" stroke={accent} strokeWidth="2" strokeDasharray="10 6" strokeOpacity="0.4" />
        <path d="M78 48A30 30 0 1 0 48 78" stroke={accent} strokeWidth="3" strokeLinecap="round" />
        <path d="M56 72l-8 6 1-10" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="48" cy="48" r="8" fill={accent} fillOpacity="0.18" stroke={accent} strokeWidth="2.5" />
        <circle cx="48" cy="48" r="3" fill={accent} />
      </svg>
    ),
    target: (
      <svg viewBox="0 0 96 96" fill="none" width="96" height="96" aria-hidden="true">
        <circle cx="48" cy="48" r="36" stroke={accent} strokeWidth="1.5" strokeOpacity="0.25" />
        <circle cx="48" cy="48" r="24" stroke={accent} strokeWidth="1.5" strokeOpacity="0.45" />
        <circle cx="48" cy="48" r="12" stroke={accent} strokeWidth="2.5" />
        <circle cx="48" cy="48" r="5" fill={accent} />
        <line x1="48" y1="8" x2="48" y2="20" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" />
        <line x1="48" y1="76" x2="48" y2="88" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" />
        <line x1="8" y1="48" x2="20" y2="48" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" />
        <line x1="76" y1="48" x2="88" y2="48" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" />
      </svg>
    ),
  };

  return (
    <div
      className="w-full rounded-2xl overflow-hidden relative flex items-center justify-center"
      style={{
        aspectRatio: '4/3',
        background: `linear-gradient(135deg, ${bgFrom} 0%, ${bgTo} 100%)`,
        border: `1px solid ${accent}20`,
        boxShadow: `0 16px 40px ${accent}0f`,
      }}
    >
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl pointer-events-none" style={{ background: accent, opacity: 0.1 }} />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full blur-2xl pointer-events-none" style={{ background: accent, opacity: 0.07 }} />
      <div className="relative z-10">{svgs[icon]}</div>
    </div>
  );
}

export function Features() {
  return (
    <section className="w-full max-w-[80rem] mx-auto px-5 sm:px-8 py-12">
      <div className="flex flex-col gap-16 sm:gap-20">
        {FEATURES.map((feat, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center"
            >
              {/*
                On mobile: text always renders first (order-1), illustration second (order-2).
                On desktop even rows: text left (md:order-1), illustration right (md:order-2).
                On desktop odd rows:  illustration left (md:order-1), text right (md:order-2).
              */}
              <div
                className={`flex flex-col order-1 ${isEven ? 'md:order-1' : 'md:order-2 md:text-right'
                  }`}
              >
                <span
                  className="inline-flex self-start items-center px-3 py-1 rounded-full text-[0.65rem] font-semibold tracking-widest uppercase mb-4"
                  style={{
                    background: `${feat.accent}12`,
                    color: feat.accent,
                    fontFamily: 'var(--font-inter)',
                    alignSelf: isEven ? 'flex-start' : undefined,
                  }}
                >
                  {feat.tag}
                </span>
                <h3
                  className="text-[1.625rem] sm:text-[1.875rem] font-bold leading-tight tracking-tight mb-3"
                  style={{ fontFamily: 'var(--font-hanken)', color: '#131b2e' }}
                >
                  {feat.title}
                </h3>
                <p
                  className="text-[0.9375rem] leading-[1.8] text-left"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    color: '#434656',
                    maxWidth: '28rem',
                    marginLeft: isEven ? undefined : 'auto',
                    textAlign: isEven ? 'left' : undefined,
                  }}
                >
                  {feat.desc}
                </p>
              </div>

              <div
                className={`order-2 ${isEven ? 'md:order-2' : 'md:order-1'
                  }`}
              >
                <Illustration
                  icon={feat.icon}
                  accent={feat.accent}
                  bgFrom={feat.bgFrom}
                  bgTo={feat.bgTo}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
