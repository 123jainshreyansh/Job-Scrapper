export default function CtaBanner() {
  return (
    <section style={{ width: '100%', background: '#fff', padding: '0 0 80px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          background: '#0d1f3c',
          borderRadius: '20px',
          padding: '56px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
        }}>

          {/* Left Text */}
          <div>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '800',
              color: '#fff',
              marginBottom: '10px',
              lineHeight: '1.3',
            }}>
              Start finding developer jobs today
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#94a3b8',
              lineHeight: '1.7',
              maxWidth: '480px',
            }}>
              Open your dashboard, start a scrape, and see live developer roles from LinkedIn in under a minute.
            </p>
          </div>

          {/* CTA Button */}
          <button style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontWeight: '700',
            fontSize: '15px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            Open Dashboard →
          </button>

        </div>
      </div>
    </section>
  );
}