const steps = [
  {
    step: 'Step 1',
    title: 'Scrape Jobs',
    description:
      'Trigger a scrape or schedule recurring runs. We\'ll fetch the latest developer jobs from LinkedIn that match your filters.',
  },
  {
    step: 'Step 2',
    title: 'Store in Database',
    description:
      'Every job is normalized, deduplicated, and stored so you get a clean view across companies, roles, and locations.',
  },
  {
    step: 'Step 3',
    title: 'Browse Instantly',
    description:
      'Open your dashboard to filter, sort, and apply to the best opportunities in just a few clicks.',
  },
];

export default function HowItWorks() {
  return (
    <section style={{ width: '100%', background: '#fff', padding: '80px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>

        {/* Label */}
        <p style={{
          fontSize: '11px',
          fontWeight: '700',
          letterSpacing: '0.12em',
          color: '#6b7280',
          textTransform: 'uppercase',
          marginBottom: '14px',
        }}>
          How It Works
        </p>

        {/* Heading */}
        <h2 style={{
          fontSize: '34px',
          fontWeight: '800',
          color: '#0d1f3c',
          marginBottom: '12px',
          lineHeight: '1.2',
        }}>
          From LinkedIn to your dashboard in three steps
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: '15px',
          color: '#6b7280',
          marginBottom: '48px',
          lineHeight: '1.7',
          maxWidth: '480px',
        }}>
          JobScraper connects to LinkedIn, scrapes developer roles, and pipes them
          straight into your personal job board — with no extra setup.
        </p>

        {/* Step Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}>
          {steps.map((s) => (
            <div
              key={s.step}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '14px',
                padding: '28px 24px',
                background: '#fff',
              }}
            >
              <p style={{
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                marginBottom: '10px',
              }}>
                {s.step}
              </p>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#0d1f3c',
                marginBottom: '10px',
              }}>
                {s.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.7',
              }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}