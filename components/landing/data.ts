export const PAIN_POINTS = [
  {
    icon: 'X',
    emoji: '😰',
    color: '#b60055',
    bg: '#fff1f2',
    title: 'Stuttering under pressure',
    desc: 'Losing your train of thought when the stakes are highest.',
  },
  {
    icon: '!',
    emoji: '🤖',
    color: '#0040e0',
    bg: '#eff6ff',
    title: 'Generic answers',
    desc: 'Sounding like every other candidate instead of standing out.',
  },
  {
    icon: '?',
    emoji: '📉',
    color: '#131b2e',
    bg: '#f1f5f9',
    title: 'Lack of confidence',
    desc: 'Feeling unprepared and letting anxiety sabotage your performance.',
  },
];

export const FEATURES = [
  {
    layout: 'left' as const,
    tag: 'AI Coaching',
    tagColor: '#0040e0',
    title: 'Hyper-Realistic AI Interviews',
    desc: 'Practice with an AI that adapts to your resume and industry.',
    points: [
      'Tailored to your resume',
      'Industry-specific questions',
      'Real-time adaptability',
    ],
    icon: 'doc',
    accent: '#0040e0',
    bgFrom: '#e2e7ff',
    bgTo: '#ffffff',
  },
  {
    layout: 'right' as const,
    tag: 'Instant Feedback',
    tagColor: '#b60055',
    title: 'Actionable Insights',
    desc: 'Get immediate feedback on your answers, tone, and pacing.',
    points: [
      'Detailed performance breakdown',
      'Tone and pacing analysis',
      'Actionable improvement tips',
    ],
    icon: 'pulse',
    accent: '#b60055',
    bgFrom: '#ffe4e6',
    bgTo: '#ffffff',
  },
];
