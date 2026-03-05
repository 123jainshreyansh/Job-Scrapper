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

export default function JobCard({ job }: JobCardProps) {
  // Determine a placeholder logo color based on company name
  const getPlaceholderColor = (name: string) => {
    const colors = ['#4f46e5', '#10a37f', '#5e6ad2', '#db2777', '#f59e0b', '#06b6d4'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const displayLogo = job.logo || job.company.charAt(0).toUpperCase();
  const displayColor = job.color || getPlaceholderColor(job.company);
  const displayType = job.type || 'Remote';
  const displayCommitment = job.commitment || 'Full-time';
  const displaySalary = job.salary || 'Competitive';
  const displayTags = job.tags || ['Developer'];
  const displayDescription = job.description || 'No description available for this role. Click details to learn more on LinkedIn.';

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
        height: '100%'
      }}
    >
      {/* Top Section: Logo & Bookmark */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          width: '52px',
          height: '52px',
          borderRadius: '12px',
          background: displayColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          color: '#fff',
          fontWeight: 'bold'
        }}>
          {displayLogo}
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); console.log('Saved'); }}
          style={{
            background: '#f1f5f9',
            border: 'none',
            padding: '8px',
            borderRadius: '10px',
            cursor: 'pointer',
            color: '#64748b'
          }}
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

      {/* Badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <span style={{ background: '#f0fdf4', color: '#16a34a', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
          {displayType}
        </span>
        <span style={{ background: '#eff6ff', color: '#2563eb', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
          {displayCommitment}
        </span>
        <span style={{ background: '#fdf2f8', color: '#db2777', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
          {displaySalary}
        </span>
      </div>

      {/* Tech Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {displayTags.map(tag => (
          <span key={tag} style={{ border: '1px solid #e2e8f0', color: '#475569', padding: '2px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '500' }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {displayDescription}
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
        <button 
          onClick={(e) => { e.stopPropagation(); window.open(job.link, '_blank'); }}
          style={{
            flex: 1,
            background: '#0f172a',
            color: '#fff',
            padding: '10px',
            borderRadius: '10px',
            border: 'none',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Apply Now
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); window.open(job.link, '_blank'); }}
          style={{
            flex: 1,
            background: '#f8fafc',
            color: '#334155',
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #e2e8f0',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Details
        </button>
      </div>
    </div>
  );
}
