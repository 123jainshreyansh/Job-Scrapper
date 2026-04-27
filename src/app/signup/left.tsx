// No "use client" — this panel has no interactivity.
import React from "react";
import { SearchIcon, LayoutIcon } from "./icons";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// ── Data ───────────────────────────────────────────────────────────────────────
const FEATURES: Feature[] = [
  {
    icon: <SearchIcon />,
    title: "Fresh Job Discovery",
    description:
      "Automatically scrape newly posted developer roles without manually searching every day.",
  },
  {
    icon: <LayoutIcon />,
    title: "Organized Dashboard",
    description:
      "Review job title, company, location, and application links in one focused workspace.",
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────
const FeatureCard = ({ icon, title, description }: Feature) => (
  <div className="flex flex-col gap-2 flex-1">
    <div className="w-10 h-10 bg-white/70 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm border border-white/50 text-indigo-600">
      {icon}
    </div>
    <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
    <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const NewBadge = () => (
  <span className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-indigo-200 rounded-full px-4 py-1.5 text-sm">
    <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-0.5 rounded-full tracking-wide">
      NEW
    </span>
    <span className="text-gray-600 font-medium">
      Create your account in under a minute
    </span>
  </span>
);

// ── Left Panel ─────────────────────────────────────────────────────────────────
export const Left = () => (
  <div className="flex-1 flex flex-col justify-center">
    <div className="mb-6">
      <NewBadge />
    </div>

    <h1 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
      Start tracking
      <br />
      developer jobs
      <br />
      faster
    </h1>

    <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-sm">
      Sign up to scrape fresh LinkedIn roles, organize job listings in one clean
      dashboard, and stay updated with new openings automatically.
    </p>

    <div className="flex gap-8">
      {FEATURES.map((f) => (
        <FeatureCard key={f.title} {...f} />
      ))}
    </div>
  </div>
);
