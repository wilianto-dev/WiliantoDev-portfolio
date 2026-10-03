"use client";
import { motion, useReducedMotion } from "framer-motion";

const labels: Record<string, string> = {
  all: "Semua",
  web: "Web",
  app: "Aplikasi",
  "landing-page": "Landing Page",
  "ui-ux": "UI/UX",
  other: "Lainnya",
};

export default function ProjectFilter({
  categories,
  selected,
  onSelect,
}: {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Filter proyek"
    >
      {categories.map((cat) => {
        const isSelected = selected === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelect(cat)}
            aria-pressed={isSelected}
            className={`relative rounded-lg px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              isSelected
                ? "text-white"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            {isSelected &&
              (shouldReduceMotion ? (
                <span className="absolute inset-0 rounded-lg bg-accent" />
              ) : (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-lg bg-accent"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              ))}
            <span className="relative z-10">{labels[cat] || cat}</span>
          </button>
        );
      })}
    </div>
  );
}