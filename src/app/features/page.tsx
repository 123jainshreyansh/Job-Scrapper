'use client';
import { useState } from 'react';
import Navbar from '@/src/components/layout/Navbar';
import Footer from '@/src/components/layout/Footer';

/* ─── Data ─────────────────────────────────────────────────── */
const tabs = ['Automation', 'Dashboard', 'Filters', 'Notifications'];

const featureGroups: Record<string, {
  label: string;
  heading: string;
  description: string;
  image: string;
  items: { icon: React.ReactNode; title: string; body: string }[];
}> = {
  Automation: {
    label: 'Automation',
    heading: 'Set it. Forget it. Get jobs.',
    description:
      'JobScraper runs in the background, continuously pulling fresh developer roles from LinkedIn so your board is always up to date — without lifting a finger.',
    image: '/images/figma-dashboard.svg',
    items: [
      {
        icon: <ScrapeIcon />,
        title: 'Real-Time Job Scraping',
        body: 'Continuously stream new developer jobs from LinkedIn in the background, with every run visible in your activity log.',
      },
      {
        icon: <ScheduleIcon />,
        title: 'Scheduled Scrapes',
        body: 'Set a scraping schedule (hourly, daily, or weekly) so you never miss a hot new listing.',
      },
      {
        icon: <DedupeIcon />,
        title: 'Auto-Deduplication',
        body: 'Smart deduplication removes repeat listings so your board stays clean and noise-free.',
      },
    ],
  },
  Dashboard: {
    label: 'Dashboard',
    heading: 'Your command center for job hunting.',
    description:
      'A minimal, searchable interface that puts all your scraped roles in one place — sorted, filtered, and ready for you to act on.',
    image: '/images/figma-dashboard.svg',
    items: [
      {
        icon: <DashIcon />,
        title: 'Clean Job Dashboard',
        body: 'Scan roles by seniority, stack, and location in a minimal interface so you can focus on the jobs that matter.',
      },
      {
        icon: <SearchIcon />,
        title: 'Full-Text Search',
        body: 'Instantly find roles with keyword search across titles, companies, and descriptions.',
      },
      {
        icon: <ListIcon />,
        title: 'Activity Log',
        body: 'See every scrape run, how many jobs were fetched, and when the last update happened.',
      },
    ],
  },
  Filters: {
    label: 'Filters',
    heading: 'Find roles that actually fit.',
    description:
      'Narrow down thousands of listings to the ones that match your stack, seniority, and location — in seconds.',
    image: '/images/Scrape_Complete.svg',
    items: [
      {
        icon: <FilterIcon />,
        title: 'Stack Filters',
        body: 'Filter by tech stack (React, Node, Python, etc.) to surface only roles that match your skills.',
      },
      {
        icon: <SeniorityIcon />,
        title: 'Seniority Levels',
        body: 'Choose between junior, mid, and senior roles so you see jobs appropriate for your experience.',
      },
      {
        icon: <LocationIcon />,
        title: 'Location & Remote',
        body: 'Filter by city, country, or remote availability. Find roles wherever you want to work.',
      },
    ],
  },
  Notifications: {
    label: 'Notifications',
    heading: 'Be the first to know.',
    description:
      'Get notified the moment a new job matching your profile is scraped — so you can apply before the competition.',
    image: '/images/Scrape_Complete.svg',
    items: [
      {
        icon: <EmailIcon />,
        title: 'Email Alerts',
        body: 'Receive a daily digest or instant email the moment a matching job is scraped from LinkedIn.',
      },
      {
        icon: <WebhookIcon />,
        title: 'Webhook Pushes',
        body: 'Pipe new jobs straight into Slack, Discord, or any app via configurable webhooks.',
      },
      {
        icon: <BellIcon />,
        title: 'Custom Triggers',
        body: 'Define conditions (company name, keyword, salary range) and only get notified when they match.',
      },
    ],
  },
};

/* ─── Main Page ─────────────────────────────────────────────── */
export default function FeaturesPage() {
  const [active, setActive] = useState<string>('Automation');
  const group = featureGroups[active];

  return (
    <div style={{ background: '#f5f7ff', minHeight: '100vh' }}>
      <Navbar />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section style={{
        width: '100%',
        background: 'linear-gradient(160deg, #eef2ff 0%, #e0e7ff 45%, #dbeafe 100%)',
        padding: '96px 32px 80px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: '800',
            color: '#0d1f3c',
            lineHeight: '1.15',
            letterSpacing: '-0.5px',
            marginBottom: '20px',
          }}>
            Powerful features to<br />supercharge your job search
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#4b5563',
            lineHeight: '1.75',
            maxWidth: '540px',
            margin: '0 auto',
          }}>
            Everything you need to automate LinkedIn job scraping, filter out the noise, and
            find your next developer role faster than ever.
          </p>
        </div>
      </section>

      {/* ─── Tabs ─────────────────────────────────────────────── */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        padding: '32px 32px 0',
        flexWrap: 'wrap',
      }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              padding: '8px 20px',
              borderRadius: '999px',
              border: active === tab ? '1.5px solid #4f46e5' : '1.5px solid #e2e8f0',
              background: active === tab ? '#4f46e5' : '#fff',
              color: active === tab ? '#fff' : '#374151',
              fontWeight: active === tab ? '600' : '500',
              fontSize: '14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease',
            }}
          >
            {tab === 'Automation' && <ScrapeIconSmall active={active === tab} />}
            {tab === 'Dashboard' && <DashIconSmall active={active === tab} />}
            {tab === 'Filters' && <FilterIconSmall active={active === tab} />}
            {tab === 'Notifications' && <BellIconSmall active={active === tab} />}
            {tab}
          </button>
        ))}
      </div>

      {/* ─── Feature Detail ───────────────────────────────────── */}
      <section style={{
        maxWidth: '1280px',
        margin: '48px auto 80px',
        padding: '0 32px',
      }}>
        <div style={{
          background: '#fff',
          border: '1.5px solid #e2e8f0',
          borderRadius: '24px',
          overflow: 'hidden',
        }}>

          {/* Top Info Banner */}
          <div style={{
            padding: '48px 56px 40px',
            borderBottom: '1px solid #e5e7eb',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
          }}>
            <div>
              <span style={{
                display: 'inline-block',
                background: '#eef2ff',
                color: '#4f46e5',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '4px 12px',
                borderRadius: '999px',
                marginBottom: '16px',
              }}>
                {group.label}
              </span>
              <h2 style={{
                fontSize: '32px',
                fontWeight: '800',
                color: '#0d1f3c',
                lineHeight: '1.25',
                marginBottom: '14px',
              }}>
                {group.heading}
              </h2>
              <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.75' }}>
                {group.description}
              </p>
            </div>

            {/* Preview image */}
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 12px 40px rgba(79,70,229,0.12)',
              border: '1px solid #e2e8f0',
            }}>
              <img
                src={group.image}
                alt={group.label}
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            padding: '0',
          }}>
            {group.items.map((item, i) => (
              <div
                key={item.title}
                style={{
                  padding: '36px 40px',
                  borderRight: i < group.items.length - 1 ? '1px solid #e5e7eb' : 'none',
                }}
              >
                <div style={{
                  background: '#eef2ff',
                  borderRadius: '12px',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '15px',
                  fontWeight: '700',
                  color: '#0d1f3c',
                  marginBottom: '8px',
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.7' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ───────────────────────────────────────── */}
      <section style={{
        textAlign: 'center',
        padding: '64px 32px 96px',
        background: 'linear-gradient(160deg, #eef2ff 0%, #e0e7ff 100%)',
      }}>
        <h2 style={{
          fontSize: '34px',
          fontWeight: '800',
          color: '#0d1f3c',
          marginBottom: '16px',
        }}>
          Ready to automate your job search?
        </h2>
        <p style={{ color: '#6b7280', fontSize: '16px', marginBottom: '32px' }}>
          Start scraping LinkedIn jobs in seconds — no setup, no friction.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            background: '#4f46e5',
            color: '#fff',
            padding: '13px 28px',
            borderRadius: '10px',
            border: 'none',
            fontWeight: '600',
            fontSize: '15px',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(79,70,229,0.3)',
          }}>
            Start Scraping →
          </button>
          <button style={{
            background: '#fff',
            color: '#374151',
            padding: '13px 28px',
            borderRadius: '10px',
            border: '1.5px solid #e2e8f0',
            fontWeight: '500',
            fontSize: '15px',
            cursor: 'pointer',
          }}>
            Browse Jobs
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─── SVG Icon Components ────────────────────────────────────── */
function ScrapeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" />
    </svg>
  );
}
function ScheduleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function DedupeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function DashIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function ListIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}
function FilterIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
function SeniorityIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function WebhookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
    </svg>
  );
}
function BellIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

/* ─── Tiny icons for tab buttons ────────────────────────────── */
function ScrapeIconSmall({ active }: { active: boolean }) {
  const c = active ? '#fff' : '#6b7280';
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><circle cx="12" cy="20" r="1" />
    </svg>
  );
}
function DashIconSmall({ active }: { active: boolean }) {
  const c = active ? '#fff' : '#6b7280';
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}
function FilterIconSmall({ active }: { active: boolean }) {
  const c = active ? '#fff' : '#6b7280';
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
function BellIconSmall({ active }: { active: boolean }) {
  const c = active ? '#fff' : '#6b7280';
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}
