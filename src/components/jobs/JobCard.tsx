'use client';

import React from 'react';

interface JobCardProps {
  job: {
    title: string;
    company: string;
    location: string;
    link: string;
    type?: string;
    commitment?: string;
    salary?: string;
    tags?: string[];
    logo?: string;
    description?: string;
    color?: string;
    createdAt?: string | Date;
  }
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function getPlaceholderColor(name: string): string {
  const colors = ['#4f46e5', '#10a37f', '#5e6ad2', '#db2777', '#f59e0b', '#06b6d4'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

/**
 * Derives workspace type from location + title text since the Job model
 * does not store a separate "type" field.
 * Returns null if no keyword found → no badge shown (no fake fallback).
 */
function detectWorkspaceType(location: string, title: string): string | null {
  const text = (location + ' ' + title).toLowerCase();
  if (text.includes('remote')) return 'Remote';
  if (text.includes('hybrid')) return 'Hybrid';
  if (text.includes('on-site') || text.includes('onsite')) return 'On-site';
  return null;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function JobCard({ job }: JobCardProps) {
  const displayLogo  = job.logo || job.company.charAt(0).toUpperCase();
  const displayColor = job.color || getPlaceholderColor(job.company);

  // Only shown when real data is present — zero hardcoded fallbacks
  const workspaceType = job.type || detectWorkspaceType(job.location, job.title);
  const commitment    = job.commitment || null;
  const salary        = job.salary || null;
  const tags          = (job.tags && job.tags.length > 0) ? job.tags : null;

  return (
    <div
      onClick={() => window.open(job.link, '_blank')}
      style={{
        background: '#fff',
        borderRadius: '20px',
        padding: '24px',
        border: '1px solid #f1f5f9',
        boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        height: '100%',
      }}
    >
      {/* Top Section: Logo & Bookmark */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          width: '52px', height: '52px', borderRadius: '12px',
          background: displayColor, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '24px', color: '#fff', fontWeight: 'bold',
        }}>
          {displayLogo}
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); console.log('Saved'); }}
          style={{ background: '#f1f5f9', border: 'none', padding: '8px', borderRadius: '10px', cursor: 'pointer', color: '#64748b' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>

      {/* Title & Company */}
      <div>
        <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#0f172a', marginBottom: '4px', lineHeight: '1.4' }}>
          {job.title}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#4f46e5' }}>{job.company}</span>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <span style={{ fontSize: '14px', color: '#64748b' }}>{job.location}</span>
        </div>
      </div>

      {/* Badges — only render when real data exists */}
      {(workspaceType || commitment || salary) && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {workspaceType && (
            <span style={{ background: '#f0fdf4', color: '#16a34a', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
              {workspaceType}
            </span>
          )}
          {commitment && (
            <span style={{ background: '#eff6ff', color: '#2563eb', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
              {commitment}
            </span>
          )}
          {salary && (
            <span style={{ background: '#fdf2f8', color: '#db2777', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
              {salary}
            </span>
          )}
        </div>
      )}

      {/* Tech Tags — only render when tags array exists */}
      {tags && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {tags.map(tag => (
            <span key={tag} style={{ border: '1px solid #e2e8f0', color: '#475569', padding: '2px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '500' }}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      {job.description && (
        <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {job.description}
        </p>
      )}

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
        <button
          onClick={(e) => { e.stopPropagation(); window.open(job.link, '_blank'); }}
          style={{ flex: 1, background: '#0f172a', color: '#fff', padding: '10px', borderRadius: '10px', border: 'none', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}
        >
          Apply Now
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); window.open(job.link, '_blank'); }}
          style={{ flex: 1, background: '#f8fafc', color: '#334155', padding: '10px', borderRadius: '10px', border: '1px solid #e2e8f0', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}
        >
          Details
        </button>
      </div>
    </div>
  );
}
