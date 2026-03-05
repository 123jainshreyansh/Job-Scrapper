'use client';
import { useState, useEffect } from 'react';

const rotatingTexts = ['Developer Jobs', 'FullStack Jobs', 'Devops Jobs', 'Software Engineer Jobs'];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingTexts.length);
        setVisible(true);
      }, 400);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      width: '100%',
      background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 40%, #dbeafe 100%)',
      padding: '96px 0 120px',
      borderRadius: '0 0 56px 56px',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 32px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center',
      }}>

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: '#fff',
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            padding: '4px 12px',
            borderRadius: '999px',
            fontSize: '13px',
            color: '#374151',
            marginBottom: '24px',
          }}>
            <span style={{
              background: '#4f46e5',
              color: '#fff',
              fontSize: '11px',
              padding: '2px 8px',
              borderRadius: '4px',
              marginRight: '8px',
              fontWeight: '600',
            }}>
              New
            </span>
            Scrape developer jobs from LinkedIn in real-time
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: '56px',
            fontWeight: '800',
            lineHeight: '1.15',
            color: '#0d1f3c',
            letterSpacing: '-0.5px',
          }}>
            Find the Latest <br />
            <span style={{
              background: 'linear-gradient(90deg, #4f46e5, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(-12px)',
            }}>
              {rotatingTexts[index]}
            </span>
            <br />
            Instantly
          </h1>

          {/* Description */}
          <p style={{
            color: '#4b5563',
            marginTop: '20px',
            maxWidth: '460px',
            fontSize: '16px',
            lineHeight: '1.7',
          }}>
            Automatically scrape and store the latest developer roles from
            LinkedIn into a clean, searchable dashboard. Never miss your next
            opportunity.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '32px' }}>
            <button style={{
              background: '#1e293b',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '15px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}>
              Browse Jobs →
            </button>

            <button style={{
              background: 'none',
              border: 'none',
              color: '#374151',
              fontWeight: '500',
              fontSize: '15px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              Start Scraping ▶
            </button>
          </div>

        </div>

        {/* RIGHT SIDE — Dashboard Image + Floating Card */}
        <div style={{ position: 'relative' }}>

          {/* Dashboard Image */}
          <img
            src="/images/figma-dashboard.svg"
            alt="LinkedIn Job Dashboard Preview"
            style={{
              borderRadius: '16px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              width: '100%',
            }}
          />

          {/* Floating Scrape Complete Card */}
          <div style={{
            position: 'absolute',
            bottom: '-40px',
            left: '-40px',
          }}>
            <img
              src="/images/Scrape_Complete.svg"
              alt="Scrape Complete"
              style={{ width: '192px' }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}