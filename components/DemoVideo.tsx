/* ─── DemoVideo.tsx ───────────────────────────────────────────────────────── */

export default function DemoVideo() {
  return (
    <video
      className="w-full h-full object-cover"
      src="/demo.mp4"
      controls
      preload="none"
      playsInline
    >
      <p className="p-6 text-sm" style={{ color: '#434656', fontFamily: 'var(--font-inter)' }}>
        Your browser doesn&apos;t support HTML5 video.{' '}
        <a href="/demo.mp4" style={{ color: '#0040e0', textDecoration: 'underline' }}>
          Download the demo
        </a>{' '}
        instead.
      </p>
    </video>
  );
}
