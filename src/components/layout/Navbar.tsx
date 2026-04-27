'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Features', href: '/features' },
  { label: 'Dashboard', href: '/dashboard' },
];

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const [isScraping, setIsScraping] = useState(false);

  // `useSession` reads the JWT cookie set by NextAuth.
  // status === "authenticated"  → user is signed in
  // status === "unauthenticated" → user is signed out / first-time visitor
  // status === "loading"         → still checking (show nothing / spinner)
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";

  // ── Scrape handler ─────────────────────────────────────────────────────────
  // Only reachable when signed in (button is hidden otherwise).
  const handleScrape = async () => {
    if (isScraping) return;
    setIsScraping(true);
    try {
      const res = await fetch('/api/scrape');
      const data = await res.json();
      alert(`Scraped ${data.totalScraped} jobs!`);
      if (pathname === '/jobs') window.location.reload();
    } catch (error) {
      console.error("Scrape failed:", error);
      alert("Failed to scrape jobs. Check the console for details.");
    } finally {
      setIsScraping(false);
    }
  };

  return (
    <nav 
      className={className}
      style={{ width: '100%', borderBottom: '1px solid #e2e8f0', background: '#fff', position: 'sticky', top: 0, zIndex: 100 }}
    >
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

        {/* ── Right side — changes based on auth state ──────────────────────── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

          {/* SIGNED OUT: show Sign in + Get Started */}
          {!isLoggedIn && (
            <>
              <Link
                href="/login"
                style={{ color: '#4b5563', fontSize: '15px', fontWeight: '500', textDecoration: 'none' }}
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                style={{
                  background: '#4f46e5',
                  color: '#fff',
                  padding: '8px 18px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '15px',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
              >
                Get Started
              </Link>
            </>
          )}

          {/* SIGNED IN: show Scrape Jobs button + user name + Sign Out */}
          {isLoggedIn && (
            <>
              {/* Scrape Jobs — only visible when authenticated */}
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
                  transition: 'all 0.2s',
                }}
              >
                {isScraping ? 'Scraping...' : 'Scrape Jobs'}
                <span style={{ fontSize: '13px' }}>{isScraping ? '⌛' : '›'}</span>
              </button>

              {/* User greeting */}
              <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>
                Hi, {session?.user?.name?.split(' ')[0] ?? 'User'}
              </span>

              {/* Sign Out */}
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                style={{
                  color: '#ef4444',
                  background: 'none',
                  border: '1px solid #fecaca',
                  borderRadius: '8px',
                  padding: '6px 14px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.2s',
                }}
              >
                Sign Out
              </button>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}
