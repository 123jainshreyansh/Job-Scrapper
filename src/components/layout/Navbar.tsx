'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Features', href: '/features' },
  { label: 'Dashboard', href: '/dashboard' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScraping, setIsScraping] = useState(false);

  const handleScrape = async () => {
    if (isScraping) return;
    
    setIsScraping(true);
    try {
      const res = await fetch('/api/scrape');
      const data = await res.json();
      alert(`Scraped ${data.totalScraped} jobs!`);
      // Optionally refresh the page if we are on the jobs page
      if (pathname === '/jobs') {
        window.location.reload();
      }
    } catch (error) {
      console.error("Scrape failed:", error);
      alert("Failed to scrape jobs. Check the console for details.");
    } finally {
      setIsScraping(false);
    }
  };

  return (
    <nav style={{ width: '100%', borderBottom: '1px solid #e2e8f0', background: '#fff', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '12px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '18px', color: '#0d1f3c', textDecoration: 'none' }}>
          <Image src="/images/logo.svg" alt="JobScraper logo" width={28} height={28} />
          JobScraper
        </Link>

        {/* Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                style={{
                  textDecoration: 'none',
                  color: isActive ? '#4f46e5' : '#4b5563',
                  fontWeight: isActive ? '700' : '500',
                  fontSize: '15px',
                  borderBottom: isActive ? '2px solid #4f46e5' : '2px solid transparent',
                  paddingBottom: '2px',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Right Side Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button style={{ color: '#4b5563', background: 'none', border: 'none', cursor: 'pointer', fontSize: '15px', fontWeight: '500' }}>
            Sign in
          </button>
          <button 
            onClick={handleScrape}
            disabled={isScraping}
            style={{ 
              background: isScraping ? '#94a3b8' : '#4f46e5', 
              color: '#fff', 
              padding: '8px 18px', 
              borderRadius: '8px', 
              border: 'none', 
              cursor: isScraping ? 'not-allowed' : 'pointer', 
              fontWeight: '600', 
              fontSize: '15px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px',
              transition: 'all 0.2s'
            }}
          >
            {isScraping ? 'Scraping...' : 'Scrape Jobs'} <span style={{ fontSize: '13px' }}>{isScraping ? '⌛' : '›'}</span>
          </button>
        </div>

      </div>
    </nav>
  );
}
