import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PublicProject } from "@/lib/dto";
import ProjectMedia from "./ProjectMedia";

export default function ProjectCard({ project }: { project: PublicProject }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <ProjectMedia project={project} variant="card" />

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-accent">
            {project.categoryLabel}
          </span>
          {project.year && (
            <span className="text-xs text-text-secondary">{project.year}</span>
          )}
        </div>

        <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-text-secondary line-clamp-2">
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-[10px] uppercase tracking-wider text-text-secondary bg-background px-2 py-0.5 rounded border border-border"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-text-secondary transition-colors group-hover:text-accent">
          Detail Proyek
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}