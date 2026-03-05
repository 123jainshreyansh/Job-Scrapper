'use client';

import React from 'react';

export interface FiltersState {
  workspace: { remote: boolean; hybrid: boolean; onsite: boolean };
  experience: { junior: boolean; mid: boolean; senior: boolean; lead: boolean };
  techStack: { react: boolean; nodejs: boolean; typescript: boolean; python: boolean };
}

interface JobFiltersProps {
  filters: FiltersState;
  onChange: (filters: FiltersState) => void;
}

const CheckIcon = () => (
  <svg style={{ position: 'absolute', left: '3px', top: '3px', pointerEvents: 'none' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

interface CheckboxItemProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

function CheckboxItem({ label, checked, onChange }: CheckboxItemProps) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={onChange}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: '20px',
          height: '20px',
          border: checked ? 'none' : '2px solid #cbd5e1',
          borderRadius: '6px',
          backgroundColor: checked ? '#6366f1' : 'transparent',
          cursor: 'pointer',
          transition: 'all 0.2s',
          flexShrink: 0,
        }} />
        {checked && <CheckIcon />}
      </div>
      <span style={{ marginLeft: '12px', fontSize: '14px', fontWeight: '500', color: checked ? '#1e293b' : '#64748b', flex: 1, userSelect: 'none' }}>
        {label}
      </span>
    </label>
  );
}

export default function JobFilters({ filters, onChange }: JobFiltersProps) {
  const toggle = <K extends keyof FiltersState, F extends keyof FiltersState[K]>(section: K, field: F) => {
    onChange({
      ...filters,
      [section]: {
        ...filters[section],
        [field]: !filters[section][field],
      },
    });
  };

  const clearAll = () => {
    onChange({
      workspace: { remote: false, hybrid: false, onsite: false },
      experience: { junior: false, mid: false, senior: false, lead: false },
      techStack: { react: false, nodejs: false, typescript: false, python: false },
    });
  };

  const sectionStyle: React.CSSProperties = {
    background: '#fff',
    borderRadius: '16px',
    padding: '24px',
    border: '1px solid #f1f5f9',
    boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: '800',
    color: '#64748b',
    letterSpacing: '0.05em',
    marginBottom: '16px',
  };

  return (
    <aside style={{ width: '280px', flexShrink: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>Filters</h3>
        <button onClick={clearAll} style={{ background: 'none', border: 'none', color: '#6366f1', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
          Clear all
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Work Space */}
        <div style={sectionStyle}>
          <h4 style={sectionTitleStyle}>WORK SPACE</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <CheckboxItem label="Remote" checked={filters.workspace.remote} onChange={() => toggle('workspace', 'remote')} />
            <CheckboxItem label="Hybrid" checked={filters.workspace.hybrid} onChange={() => toggle('workspace', 'hybrid')} />
            <CheckboxItem label="On-site" checked={filters.workspace.onsite} onChange={() => toggle('workspace', 'onsite')} />
          </div>
        </div>

        {/* Experience Level */}
        <div style={sectionStyle}>
          <h4 style={sectionTitleStyle}>EXPERIENCE LEVEL</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <CheckboxItem label="Junior / Entry" checked={filters.experience.junior} onChange={() => toggle('experience', 'junior')} />
            <CheckboxItem label="Mid-Level" checked={filters.experience.mid} onChange={() => toggle('experience', 'mid')} />
            <CheckboxItem label="Senior" checked={filters.experience.senior} onChange={() => toggle('experience', 'senior')} />
            <CheckboxItem label="Lead / Manager" checked={filters.experience.lead} onChange={() => toggle('experience', 'lead')} />
          </div>
        </div>

        {/* Tech Stack */}
        <div style={sectionStyle}>
          <h4 style={sectionTitleStyle}>TECH STACK</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <CheckboxItem label="React" checked={filters.techStack.react} onChange={() => toggle('techStack', 'react')} />
            <CheckboxItem label="Node.js" checked={filters.techStack.nodejs} onChange={() => toggle('techStack', 'nodejs')} />
            <CheckboxItem label="TypeScript" checked={filters.techStack.typescript} onChange={() => toggle('techStack', 'typescript')} />
            <CheckboxItem label="Python" checked={filters.techStack.python} onChange={() => toggle('techStack', 'python')} />
          </div>
        </div>
      </div>
    </aside>
  );
}
