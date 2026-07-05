import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Mockiew AI',
  description:
    'Read the terms of service governing your early-access use of the Mockiew AI MVP sandbox.',
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main
      id="terms-of-service"
      style={{
        background: '#ffffff',
        color: '#131b2e',
        minHeight: '100vh',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <article
        style={{
          maxWidth: '52rem',
          margin: '0 auto',
          padding: 'clamp(2.5rem, 6vw, 5rem) 1.5rem',
          lineHeight: 1.8,
        }}
      >
        {/* ── Header ── */}
        <header style={{ marginBottom: '3rem', borderBottom: '1px solid #e2e4f0', paddingBottom: '2rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#747688', marginBottom: '0.75rem' }}>
            Legal
          </p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#131b2e', marginBottom: '1rem', lineHeight: 1.2 }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#747688' }}>
            <strong>Effective Date:</strong> July 6, 2026 &nbsp;·&nbsp; <strong>Entity:</strong> Mockiew AI (Pre-Release MVP)
          </p>
        </header>

        {/* ── Section helper styles applied inline for zero-dependency rendering ── */}
        <section aria-labelledby="acceptance">
          <h2 id="acceptance" style={h2}>1. Acceptance of Terms</h2>
          <p style={body}>
            By accessing or joining the waitlist for Mockiew AI (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) via <a href="https://mockiew-lp.vercel.app/" style={link}>mockiew-lp.vercel.app</a>, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our platform or join the early-access queue.
          </p>
        </section>

        <section aria-labelledby="beta-sandbox">
          <h2 id="beta-sandbox" style={h2}>2. Pre-Release Beta Sandbox Status</h2>
          <p style={body}>
            You acknowledge that Mockiew AI is currently operating as a pre-release beta sandbox. The platform, including the AI mock interview engine, is undergoing active development and testing. As such:
          </p>
          <ul style={ul}>
            <li style={li}>Features, interfaces, and underlying AI models may change rapidly without prior notice.</li>
            <li style={li}>The service may experience downtime, latency, or unexpected errors.</li>
            <li style={li}>We make no guarantees regarding the accuracy, reliability, or completeness of the AI-generated interview feedback. The feedback provided is for practice and educational purposes only and does not guarantee employment outcomes.</li>
          </ul>
        </section>

        <section aria-labelledby="service-delivery">
          <h2 id="service-delivery" style={h2}>3. &ldquo;As-Is&rdquo; Delivery and Disclaimer of Warranties</h2>
          <p style={body}>
            The Mockiew AI platform and its services are provided on an <strong>&ldquo;As-Is&rdquo; and &ldquo;As-Available&rdquo; basis</strong>, designed primarily for student prototyping and testing.
          </p>
          <p style={body}>
            To the maximum extent permitted by applicable law, we expressly disclaim all warranties, whether express, implied, statutory, or otherwise, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that the service will meet your requirements, be uninterrupted, timely, secure, or error-free.
          </p>
        </section>

        <section aria-labelledby="structural-testing">
          <h2 id="structural-testing" style={h2}>4. Structural Testing Permission</h2>
          <p style={body}>
            By enrolling in the MVP, you grant us permission to use your interactions with the platform (including uploaded resumes and interview audio/text inputs) for structural testing, bug identification, and AI model refinement. We commit to handling this data in accordance with our <a href="/privacy" style={link}>Privacy Policy</a>. We do not offer any explicit service level guarantees (SLAs) during this pre-commercial phase.
          </p>
        </section>

        <section aria-labelledby="user-conduct">
          <h2 id="user-conduct" style={h2}>5. User Conduct and Restrictions</h2>
          <p style={body}>When using the Mockiew AI sandbox, you agree not to:</p>
          <ul style={ul}>
            <li style={li}>Reverse engineer, decompile, or attempt to extract the source code or underlying AI models of the platform.</li>
            <li style={li}>Submit maliciously crafted prompts (prompt injection), illegal content, or any material that infringes on third-party intellectual property rights.</li>
            <li style={li}>Attempt to overwhelm our infrastructure via automated scripts, bots, or denial-of-service attacks.</li>
          </ul>
          <p style={body}>
            We reserve the right to suspend or terminate your early-access privileges at any time, at our sole discretion, if we suspect a violation of these restrictions.
          </p>
        </section>

        <section aria-labelledby="limitation-liability">
          <h2 id="limitation-liability" style={h2}>6. Limitation of Liability</h2>
          <p style={body}>
            To the fullest extent permitted by law, in no event shall Mockiew AI, its founders, or contributors be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the pre-release platform; (b) any conduct or content of any third party on the service; or (c) any unauthorised access, use, or alteration of your transmissions or content.
          </p>
        </section>

        <section aria-labelledby="modifications">
          <h2 id="modifications" style={h2}>7. Modifications to Terms</h2>
          <p style={body}>
            We reserve the right to modify or replace these Terms of Service at any time, especially as we transition from a pre-release sandbox to commercial layers. We will provide notice of significant changes by updating the &ldquo;Effective Date&rdquo; on this page or via email. Your continued use of the platform after any such changes constitutes your acceptance of the new Terms.
          </p>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact" style={h2}>8. Contact Information</h2>
          <p style={body}>
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <address style={{ fontStyle: 'normal', ...body, marginTop: '0.5rem' }}>
            <strong>Mockiew AI</strong><br />
            Email: <a href="mailto:mockiew.ai@gmail.com" style={link}>mockiew.ai@gmail.com</a><br />
            Discord: <a href="https://discord.gg/RddwEq4DUc" target="_blank" rel="noopener noreferrer" style={link}>discord.gg/RddwEq4DUc</a>
          </address>
        </section>

        <footer style={{ marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid #e2e4f0', fontSize: '0.8rem', color: '#747688' }}>
          <p>© {new Date().getFullYear()} Mockiew AI. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>
            <a href="/privacy" style={{ ...link, fontSize: '0.8rem' }}>Privacy Policy</a>
            {' '}·{' '}
            <a href="/" style={{ ...link, fontSize: '0.8rem' }}>Back to Home</a>
          </p>
        </footer>
      </article>
    </main>
  );
}

/* ── Shared inline style tokens ── */
const h2: React.CSSProperties = {
  fontSize: '1.2rem',
  fontWeight: 700,
  color: '#131b2e',
  marginTop: '2.5rem',
  marginBottom: '0.875rem',
  letterSpacing: '-0.015em',
};

const body: React.CSSProperties = {
  fontSize: '0.9375rem',
  color: '#434656',
  lineHeight: 1.8,
  marginBottom: '1rem',
};

const ul: React.CSSProperties = {
  paddingLeft: '1.375rem',
  marginBottom: '1rem',
};

const li: React.CSSProperties = {
  fontSize: '0.9375rem',
  color: '#434656',
  lineHeight: 1.8,
  marginBottom: '0.5rem',
};

const link: React.CSSProperties = {
  color: '#0040e0',
  textDecoration: 'underline',
  textDecorationColor: 'rgba(0,64,224,0.3)',
  textUnderlineOffset: '3px',
};
