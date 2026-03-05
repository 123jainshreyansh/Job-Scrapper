// ─── Landing Page Static Data — matches Figma exactly ─────────────────────────

export const NAV_LINKS = [
  { href: "#", label: "Home" },
  { href: "#jobs", label: "Jobs" },
  { href: "#features", label: "Features" },
  { href: "#dashboard", label: "Dashboard" },
];

export const TRUSTED_LOGOS = [
  { name: "Vercel", icon: "▲" },
  { name: "Stripe", icon: "◈" },
  { name: "OpenAI", icon: "○" },
  { name: "Notion", icon: "⬡" },
  { name: "Figma", icon: "⧉" },
];

export const FEATURES = [
  {
    title: "Real-Time Job Scraping",
    description:
      "Continuously stream new developer jobs from LinkedIn in the background, with every run visible in your activity log.",
    icon: "rss",
  },
  {
    title: "Clean Job Dashboard",
    description:
      "Scan roles by seniority, stack, and location in a minimal interface so you can focus on the jobs that matter.",
    icon: "grid",
  },
  {
    title: "Fresh Jobs Automatically",
    description:
      "Schedule scrapes or trigger them on-demand to keep your board full of relevant, up-to-date developer positions.",
    icon: "clock",
  },
];

export const PREVIEW_JOBS = [
  {
    title: "Senior React Engineer",
    company: "Vercel",
    location: "Remote",
    region: "Americas",
    salary: "$150k – $190k",
    postedAgo: "5 min ago",
  },
  {
    title: "Full Stack Engineer (Node + React)",
    company: "Stripe",
    location: "Hybrid",
    region: "Dublin",
    salary: "$160k – $210k",
    postedAgo: "12 min ago",
  },
  {
    title: "Backend Engineer (Python)",
    company: "OpenAI",
    location: "San Francisco, CA",
    region: "",
    salary: "$180k – $240k",
    postedAgo: "25 min ago",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "Step 1",
    title: "Scrape Jobs",
    description:
      "Trigger a scrape or schedule recurring runs. We'll fetch the latest developer jobs from LinkedIn that match your filters.",
  },
  {
    step: "Step 2",
    title: "Store in Database",
    description:
      "Every job is normalized, deduplicated, and stored so you get a clean view across companies, roles, and locations.",
  },
  {
    step: "Step 3",
    title: "Browse Instantly",
    description:
      "Open your dashboard to filter, sort, and apply to the best opportunities in just a few clicks.",
  },
];
