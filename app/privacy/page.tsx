import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Mockiew AI',
  description:
    'Learn how Mockiew AI collects, uses, and protects your personal information during our early-access MVP phase.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main
      id="privacy-policy"
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
            Privacy Policy
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#747688' }}>
            <strong>Effective Date:</strong> July 6, 2026 &nbsp;·&nbsp; <strong>Entity:</strong> Mockiew AI (Pre-Release MVP)
          </p>
        </header>

        {/* ── Section helper styles applied inline for zero-dependency rendering ── */}
        <section aria-labelledby="overview">
          <h2 id="overview" style={h2}>1. Overview</h2>
          <p style={body}>
            Mockiew AI (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates an AI-powered mock interview platform currently in a pre-release, early-access phase. This Privacy Policy explains how we collect, use, store, and protect the personal information you provide when you join our waitlist at{' '}
            <a href="https://mockiew-lp.vercel.app/" style={link}>mockiew-lp.vercel.app</a>. By submitting the waitlist registration form, you acknowledge and agree to the practices described in this document.
          </p>
          <p style={body}>
            We are committed to handling your data responsibly, transparently, and in strict alignment with applicable data protection principles. If you have any questions, contact us at{' '}
            <a href="mailto:mockiew.ai@gmail.com" style={link}>mockiew.ai@gmail.com</a>.
          </p>
        </section>

        <section aria-labelledby="data-collected">
          <h2 id="data-collected" style={h2}>2. Information We Collect</h2>
          <p style={body}>
            We collect only the minimum personal data necessary to manage early-access queue enrollment and to personalise your onboarding experience when the Mockiew AI MVP launches. The specific data points collected via our waitlist registration form are:
          </p>
          <ul style={ul}>
            <li style={li}><strong>Full Name</strong> — Used exclusively to personalise communications and to address you correctly in outreach emails. Your first name is also displayed in the on-screen registration confirmation.</li>
            <li style={li}><strong>Email Address</strong> — Used as the primary communication channel to notify you when MVP access is granted, and to send you infrequent product updates directly related to Mockiew AI. We do not send unsolicited promotional email from third-party advertisers.</li>
            <li style={li}><strong>Professional Role / Occupation</strong> — A brief description of your current role (e.g., Student, Software Engineer, HR Manager). This is used internally to understand our early adopter demographics and to calibrate interview scenario libraries for our launch cohorts. It is never sold or shared externally.</li>
          </ul>
          <p style={body}>
            We do not collect sensitive personal data including but not limited to payment card details, government identification numbers, biometric identifiers, health records, or any data revealing racial or ethnic origin, political opinions, or religious beliefs.
          </p>
        </section>

        <section aria-labelledby="data-use">
          <h2 id="data-use" style={h2}>3. How We Use Your Information</h2>
          <p style={body}>Your data is used solely for the following purposes:</p>
          <ul style={ul}>
            <li style={li}><strong>Waitlist Management:</strong> Storing your registration in our secure early-access queue and determining your cohort position for phased MVP rollout.</li>
            <li style={li}><strong>Product Communications:</strong> Sending you an email notification the moment your free 3-session MVP access is activated, along with essential onboarding instructions. We may also send infrequent pre-launch milestone updates (no more than once per two weeks).</li>
            <li style={li}><strong>Product Research:</strong> Aggregating non-identifiable, anonymised demographic signals (role distribution, geographic spread) to inform our interview scenario design and feature prioritisation roadmap.</li>
            <li style={li}><strong>Platform Analytics:</strong> Tracking anonymous user engagement signals on our landing pages via Microsoft Clarity, a behavioural analytics tool operated by Microsoft Corporation. Clarity captures session replays and heatmaps to help us improve page usability. Clarity data is anonymised and cannot be used to identify individual users. Microsoft&rsquo;s privacy practices are governed by the{' '}
              <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" style={link}>Microsoft Privacy Statement</a>.
            </li>
          </ul>
          <p style={body}>
            We do not use your information for automated decision-making or profiling that produces legal or similarly significant effects on you.
          </p>
        </section>

        <section aria-labelledby="data-storage">
          <h2 id="data-storage" style={h2}>4. Data Storage and Infrastructure</h2>
          <p style={body}>
            All waitlist registration data is stored within <strong>Supabase</strong>, an open-source backend-as-a-service platform that provides PostgreSQL database infrastructure with enterprise-grade encryption at rest (AES-256) and in transit (TLS 1.3). Supabase infrastructure is hosted on globally distributed cloud providers with SOC 2 Type II compliance. You can review Supabase&rsquo;s data handling practices at{' '}
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" style={link}>supabase.com/privacy</a>.
          </p>
          <p style={body}>
            We apply row-level security (RLS) policies to our database tables to ensure that waitlist data is only accessible to authorised internal systems. No third-party service has read access to the raw contents of our waitlist table.
          </p>
          <p style={body}>
            Your data is retained for the duration of the Mockiew AI pre-release and early commercial phases. Upon your written request, we will delete all personally identifiable information from our systems within 30 calendar days.
          </p>
        </section>

        <section aria-labelledby="data-sharing">
          <h2 id="data-sharing" style={h2}>5. Data Sharing and Third Parties</h2>
          <p style={body}>
            <strong>We do not rent, sell, trade, license, or otherwise distribute your personal data to any external organisations, advertisers, data brokers, or third-party marketing platforms.</strong> Your name, email address, and professional role are strictly internal to Mockiew AI and our core infrastructure providers (Supabase, Microsoft Clarity) as described in this policy.
          </p>
          <p style={body}>
            We may disclose your information only in the following exceptional circumstances:
          </p>
          <ul style={ul}>
            <li style={li}><strong>Legal Compliance:</strong> If required to do so by applicable law, regulation, court order, or governmental authority.</li>
            <li style={li}><strong>Protection of Rights:</strong> To protect the rights, property, or safety of Mockiew AI, our users, or the public, where disclosure is necessary and proportionate.</li>
            <li style={li}><strong>Business Succession:</strong> In the event of a merger, acquisition, or sale of substantially all assets, where the successor entity is bound by this Privacy Policy or a substantially equivalent one.</li>
          </ul>
        </section>

        <section aria-labelledby="your-rights">
          <h2 id="your-rights" style={h2}>6. Your Rights</h2>
          <p style={body}>Regardless of your jurisdiction, we recognise the following rights with respect to your personal data:</p>
          <ul style={ul}>
            <li style={li}><strong>Access:</strong> You may request a copy of the personal data we hold about you.</li>
            <li style={li}><strong>Correction:</strong> You may request that we correct inaccurate or incomplete information.</li>
            <li style={li}><strong>Erasure:</strong> You may request that we permanently delete your data from our systems.</li>
            <li style={li}><strong>Objection:</strong> You may object to any processing of your data, including analytics.</li>
            <li style={li}><strong>Portability:</strong> You may request your data in a portable, machine-readable format.</li>
          </ul>
          <p style={body}>
            To exercise any of the above rights, send an email to{' '}
            <a href="mailto:mockiew.ai@gmail.com" style={link}>mockiew.ai@gmail.com</a>. We will respond within 30 calendar days.
          </p>
        </section>

        <section aria-labelledby="cookies">
          <h2 id="cookies" style={h2}>7. Cookies and Tracking Technologies</h2>
          <p style={body}>
            Our landing page uses a minimal set of browser cookies and storage mechanisms. Microsoft Clarity may set first-party cookies to support session continuity in its behavioural analytics. These cookies do not contain personally identifiable information and are used solely for platform performance analysis. You may disable cookies in your browser settings at any time; however, this may affect some page functionality.
          </p>
          <p style={body}>
            We do not use third-party advertising cookies, cross-site tracking pixels, or social media tracking scripts.
          </p>
        </section>

        <section aria-labelledby="children">
          <h2 id="children" style={h2}>8. Children&rsquo;s Privacy</h2>
          <p style={body}>
            Mockiew AI is not directed at individuals under the age of 13. We do not knowingly collect personal information from children. If you believe a child has submitted data through our platform, please contact us immediately at{' '}
            <a href="mailto:mockiew.ai@gmail.com" style={link}>mockiew.ai@gmail.com</a> and we will promptly delete the relevant records.
          </p>
        </section>

        <section aria-labelledby="changes">
          <h2 id="changes" style={h2}>9. Changes to This Policy</h2>
          <p style={body}>
            We may update this Privacy Policy from time to time as our product evolves. When we make material changes, we will update the &ldquo;Effective Date&rdquo; at the top of this page and, where feasible, notify registered waitlist members via email. We encourage you to review this policy periodically.
          </p>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact" style={h2}>10. Contact Us</h2>
          <p style={body}>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please reach out:
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
            <a href="/terms" style={{ ...link, fontSize: '0.8rem' }}>Terms of Service</a>
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
