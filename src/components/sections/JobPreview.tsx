const jobs = [
  {
    title: 'Senior React Engineer',
    company: 'Vercel',
    location: 'Remote • Americas',
    postedAgo: '5 min ago',
    salary: '$150k – $190k',
  },
  {
    title: 'Full Stack Engineer (Node + React)',
    company: 'Stripe',
    location: 'Hybrid • Dublin',
    postedAgo: '12 min ago',
    salary: '$160k – $210k',
  },
  {
    title: 'Backend Engineer (Python)',
    company: 'OpenAI',
    location: 'San Francisco, CA',
    postedAgo: '25 min ago',
    salary: '$180k – $240k',
  },
];

export default function JobPreview() {
  return (
    <section style={{ width: '100%', background: '#fff', padding: '80px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>

        {/* Label */}
        <p style={{
          fontSize: '11px',
          fontWeight: '700',
          letterSpacing: '0.12em',
          color: '#6b7280',
          textTransform: 'uppercase',
          marginBottom: '14px',
        }}>
          Job Preview
        </p>

        {/* Heading */}
        <h2 style={{
          fontSize: '34px',
          fontWeight: '800',
          color: '#0d1f3c',
          marginBottom: '10px',
          lineHeight: '1.2',
        }}>
          Preview the jobs before you even sign in
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: '15px',
          color: '#6b7280',
          marginBottom: '40px',
          lineHeight: '1.6',
        }}>
          Here's a snapshot of the type of developer roles JobScraper pulls in for you.
        </p>

        {/* Job Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}>
          {jobs.map((job) => (
            <div
              key={job.title}
              style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '14px',
                padding: '24px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              {/* Top Row: Title + Time */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                <p style={{ fontWeight: '700', fontSize: '15px', color: '#0d1f3c', maxWidth: '200px', lineHeight: '1.4' }}>
                  {job.title}
                </p>
                <span style={{ fontSize: '12px', color: '#9ca3af', whiteSpace: 'nowrap', marginLeft: '8px' }}>
                  {job.postedAgo}
                </span>
              </div>

              {/* Company */}
              <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '4px' }}>
                {job.company}
              </p>

              {/* Location */}
              <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '20px' }}>
                {job.location}
              </p>

              {/* Bottom Row: Apply Button + Salary */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button style={{
                  background: '#0d1f3c',
                  color: '#fff',
                  padding: '8px 20px',
                  borderRadius: '999px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '13px',
                }}>
                  Apply
                </button>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#374151' }}>
                  {job.salary}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}