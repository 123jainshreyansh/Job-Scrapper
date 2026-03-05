import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: '#f9fafb',
      borderTop: '1px solid #e5e7eb',
      padding: '48px 0 24px',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 32px',
      }}>

        {/* Top Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '40px',
          flexWrap: 'wrap',
          gap: '32px',
        }}>

          {/* Brand */}
          <div style={{ maxWidth: '360px' }}>
            <p style={{
              fontWeight: '800',
              fontSize: '18px',
              color: '#0d1f3c',
              marginBottom: '8px',
            }}>
              JobScraper
            </p>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              lineHeight: '1.6',
            }}>
              Automatically scrape the latest developer jobs from LinkedIn and view them in a clean dashboard.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>

            {/* Product */}
            <div>
              <p style={{ fontWeight: '700', fontSize: '13px', color: '#0d1f3c', marginBottom: '14px' }}>
                Product
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Home', 'Features', 'Dashboard'].map((item) => (
                  <Link key={item} href="/" style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none' }}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <p style={{ fontWeight: '700', fontSize: '13px', color: '#0d1f3c', marginBottom: '14px' }}>
                Resources
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Docs', 'Changelog'].map((item) => (
                  <Link key={item} href="/" style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none' }}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <p style={{ fontWeight: '700', fontSize: '13px', color: '#0d1f3c', marginBottom: '14px' }}>
                Connect
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['GitHub', 'Contact'].map((item) => (
                  <Link key={item} href="/" style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'none' }}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Row */}
        <div style={{
          borderTop: '1px solid #e5e7eb',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          <p style={{ fontSize: '13px', color: '#9ca3af' }}>
            © 2025 JobScraper. All rights reserved.
          </p>
          <p style={{ fontSize: '13px', color: '#9ca3af' }}>
            Made by  ❤️ with FreelanceFlow.
          </p>
        </div>

      </div>
    </footer> 
  );
}