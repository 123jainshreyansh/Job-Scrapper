export default function TrustedBy() {
  const companies = [
    {
      name: 'Vercel',
      icon: (
        <svg width="18" height="18" viewBox="0 0 512 512" fill="currentColor">
          <path d="M256 48L496 464H16L256 48z" />
        </svg>
      ),
    },
    {
      name: 'Stripe',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      ),
    },
    {
      name: 'OpenAI',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
    {
      name: 'Notion',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 22 8 22 16 12 22 2 16 2 8 12 2" />
        </svg>
      ),
    },
    {
      name: 'Figma',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section style={{ width: '100%', background: '#fff', padding: '48px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>

        {/* Label */}
        <p style={{
          fontSize: '11px',
          fontWeight: '700',
          letterSpacing: '0.12em',
          color: '#6b7280',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}>
          Trusted by developers at top tech companies
        </p>

        {/* Logos Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '48px',
          flexWrap: 'wrap',
        }}>
          {companies.map((company) => (
            <div
              key={company.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#374151',
                fontWeight: '700',
                fontSize: '16px',
              }}
            >
              <span style={{ color: '#6b7280' }}>{company.icon}</span>
              {company.name}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}