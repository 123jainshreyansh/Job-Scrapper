export default function Features() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <circle cx="12" cy="20" r="1" />
        </svg>
      ),
      title: 'Real-Time Job Scraping',
      description: 'Continuously stream new developer jobs from LinkedIn in the background, with every run visible in your activity log.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      ),
      title: 'Clean Job Dashboard',
      description: 'Scan roles by seniority, stack, and location in a minimal interface so you can focus on the jobs that matter.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: 'Fresh Jobs Automatically',
      description: 'Schedule scrapes or trigger them on-demand to keep your board full of relevant, up-to-date developer positions.',
    },
  ];

  return (
    <section style={{ width: '100%', background: '#fff', padding: '80px 0' }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 32px',
        border: '1.5px solid #bfdbfe',
        borderRadius: '20px',
      }}>

        {/* Top Label */}
        <p style={{
          fontSize: '11px',
          fontWeight: '700',
          letterSpacing: '0.12em',
          color: '#6b7280',
          textTransform: 'uppercase',
          marginTop: '40px',
          marginBottom: '16px',
        }}>
          Features
        </p>

        {/* Heading */}
        <h2 style={{
          fontSize: '36px',
          fontWeight: '800',
          color: '#0d1f3c',
          lineHeight: '1.2',
          maxWidth: '520px',
          marginBottom: '12px',
        }}>
          A modern pipeline for developer job discovery
        </h2>

        {/* Subheading */}
        <p style={{
          fontSize: '15px',
          color: '#4b5563',
          maxWidth: '500px',
          lineHeight: '1.7',
          marginBottom: '48px',
        }}>
          JobScraper continuously pulls fresh developer roles from LinkedIn and surfaces
          them in a dashboard designed to help you filter, prioritize, and apply in minutes.
        </p>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #e5e7eb', marginBottom: '40px' }} />

        {/* Feature Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0',
          paddingBottom: '40px',
        }}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              style={{
                padding: '0 32px 0 0',
                borderRight: index < features.length - 1 ? '1px solid #e5e7eb' : 'none',
                marginRight: index < features.length - 1 ? '32px' : '0',
              }}
            >
              {/* Icon */}
              <div style={{ marginBottom: '16px' }}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '15px',
                fontWeight: '700',
                color: '#0d1f3c',
                marginBottom: '8px',
              }}>
                {feature.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.7',
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}