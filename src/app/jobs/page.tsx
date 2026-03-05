'use client';

import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import JobSearch from "@/src/components/jobs/JobSearch";
import JobFilters, { FiltersState } from "@/src/components/jobs/JobFilters";
import JobCard from "@/src/components/jobs/JobCard";
import { useEffect, useState, useMemo } from "react";

const INITIAL_FILTERS: FiltersState = {
  workspace: { remote: false, hybrid: false, onsite: false },
  experience: { junior: false, mid: false, senior: false, lead: false },
  techStack: { react: false, nodejs: false, typescript: false, python: false },
};

function matchesWorkspace(location: string, workspace: FiltersState['workspace']): boolean {
  const active = Object.values(workspace).some(Boolean);
  if (!active) return true; // no workspace filter active → show all
  const loc = location.toLowerCase();
  if (workspace.remote && loc.includes('remote')) return true;
  if (workspace.hybrid && loc.includes('hybrid')) return true;
  if (workspace.onsite && (loc.includes('on-site') || loc.includes('onsite') || loc.includes('in-person'))) return true;
  // If a workspace filter is active but none of the above matched, also allow non-matching
  // jobs that don't indicate workspace type (ambiguous) only if no remote/hybrid match
  return false;
}

function matchesExperience(title: string, experience: FiltersState['experience']): boolean {
  const active = Object.values(experience).some(Boolean);
  if (!active) return true;
  const t = title.toLowerCase();
  if (experience.junior && (t.includes('junior') || t.includes('entry') || t.includes('jr.'))) return true;
  if (experience.mid && (t.includes('mid') || t.includes('intermediate'))) return true;
  if (experience.senior && (t.includes('senior') || t.includes('sr.') || t.includes('sr '))) return true;
  if (experience.lead && (t.includes('lead') || t.includes('manager') || t.includes('director') || t.includes('principal') || t.includes('staff'))) return true;
  return false;
}

function matchesTechStack(title: string, description: string, techStack: FiltersState['techStack']): boolean {
  const active = Object.values(techStack).some(Boolean);
  if (!active) return true;
  const haystack = (title + ' ' + (description || '')).toLowerCase();
  if (techStack.react && haystack.includes('react')) return true;
  if (techStack.nodejs && (haystack.includes('node.js') || haystack.includes('nodejs') || haystack.includes('node js'))) return true;
  if (techStack.typescript && (haystack.includes('typescript') || haystack.includes(' ts '))) return true;
  if (techStack.python && haystack.includes('python')) return true;
  return false;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FiltersState>(INITIAL_FILTERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'oldest'>('recent');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('/api/jobs');
        const data = await res.json();
        if (data.success) {
          setJobs(data.jobs);
        } else {
          setError(data.message || 'Failed to fetch jobs');
        }
      } catch (err) {
        setError('An error occurred while fetching jobs');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    let result = [...jobs];

    // Search query filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(job =>
        job.title?.toLowerCase().includes(q) ||
        job.company?.toLowerCase().includes(q) ||
        job.description?.toLowerCase().includes(q)
      );
    }

    // Search location filter
    if (searchLocation) {
      const l = searchLocation.toLowerCase();
      result = result.filter(job => job.location?.toLowerCase().includes(l));
    }

    // Sidebar filters
    result = result.filter(job =>
      matchesWorkspace(job.location || '', filters.workspace) &&
      matchesExperience(job.title || '', filters.experience) &&
      matchesTechStack(job.title || '', job.description || '', filters.techStack)
    );

    // Sort
    result.sort((a, b) => {
      const dateA = new Date(a.createdAt || 0).getTime();
      const dateB = new Date(b.createdAt || 0).getTime();
      return sortBy === 'recent' ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [jobs, searchQuery, searchLocation, filters, sortBy]);

  const handleSearch = (query: string, location: string) => {
    setSearchQuery(query);
    setSearchLocation(location);
  };

  const anyFilterActive =
    Object.values(filters.workspace).some(Boolean) ||
    Object.values(filters.experience).some(Boolean) ||
    Object.values(filters.techStack).some(Boolean) ||
    !!searchQuery ||
    !!searchLocation;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 32px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '800', color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Browse Developer Jobs
          </h1>
          <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            Discover thousands of live roles continuously scraped from LinkedIn.
          </p>
        </div>

        {/* Search Bar */}
        <JobSearch onSearch={handleSearch} />

        {/* Content Grid */}
        <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-start' }}>
          {/* Sidebar */}
          <JobFilters filters={filters} onChange={setFilters} />

          {/* Job List Column */}
          <div style={{ flex: 1 }}>
            {/* List Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <p style={{ fontSize: '15px', color: '#64748b' }}>
                {loading ? (
                  'Loading...'
                ) : (
                  <>
                    Showing <strong style={{ color: '#0f172a' }}>{filteredJobs.length}</strong>
                    {anyFilterActive && jobs.length !== filteredJobs.length && (
                      <span> of <strong style={{ color: '#0f172a' }}>{jobs.length}</strong></span>
                    )} developer jobs
                  </>
                )}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px', color: '#64748b' }}>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'recent' | 'oldest')}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#0f172a',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <option value="recent">Most Recent</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>

            {/* Grid or Status States */}
            {loading ? (
              <div style={{ textAlign: 'center', padding: '100px 0' }}>
                <p style={{ fontSize: '18px', color: '#64748b' }}>Loading jobs...</p>
              </div>
            ) : error ? (
              <div style={{ textAlign: 'center', padding: '100px 0' }}>
                <p style={{ fontSize: '18px', color: '#ef4444' }}>{error}</p>
                <button onClick={() => window.location.reload()} style={{ marginTop: '16px', padding: '8px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', cursor: 'pointer' }}>
                  Retry
                </button>
              </div>
            ) : jobs.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '100px 0', background: '#fff', borderRadius: '24px', border: '1px solid #f1f5f9' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>No jobs found yet</h3>
                <p style={{ color: '#64748b', marginBottom: '24px' }}>Click the &quot;Scrape Jobs&quot; button in the navbar to pull the latest roles from LinkedIn.</p>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 0', background: '#fff', borderRadius: '24px', border: '1px solid #f1f5f9' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>No jobs match your filters</h3>
                <p style={{ color: '#64748b', marginBottom: '24px' }}>Try adjusting your search or clearing some filters.</p>
                <button
                  onClick={() => { setFilters(INITIAL_FILTERS); setSearchQuery(''); setSearchLocation(''); }}
                  style={{ padding: '10px 24px', borderRadius: '10px', border: 'none', background: '#6366f1', color: '#fff', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                {filteredJobs.map((job, i) => (
                  <JobCard key={job._id || i} job={job} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
