'use client';

import React, { useState } from 'react';

interface JobSearchProps {
  onSearch: (query: string, location: string) => void;
}

export default function JobSearch({ onSearch }: JobSearchProps) {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onSearch(query.trim(), location.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div style={{
      background: '#fff',
      padding: '16px',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      maxWidth: '800px',
      margin: '0 auto 40px',
      border: '1px solid #f1f5f9'
    }}>
      {/* Search Input */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px', padding: '0 8px' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          placeholder="Search by job title, company, or keywords..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            border: 'none',
            outline: 'none',
            fontSize: '15px',
            width: '100%',
            color: '#1e293b',
            background: 'transparent',
          }}
        />
      </div>

      <div style={{ width: '1px', height: '24px', background: '#e2e8f0' }} />

      {/* Location Input */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px', padding: '0 8px' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
        <input
          type="text"
          placeholder='City, state, or "Remote"'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            border: 'none',
            outline: 'none',
            fontSize: '15px',
            width: '100%',
            color: '#1e293b',
            background: 'transparent',
          }}
        />
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        style={{
          background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
          color: '#fff',
          padding: '12px 28px',
          borderRadius: '10px',
          border: 'none',
          fontWeight: '600',
          fontSize: '15px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(79,70,229,0.25)',
          transition: 'transform 0.2s',
          whiteSpace: 'nowrap',
        }}
      >
        Find Jobs
      </button>
    </div>
  );
}
