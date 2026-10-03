import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import type { PublicProject } from "@/lib/dto";
import ProjectMedia from "./ProjectMedia";

export default function FeaturedProject({
  project,
}: {
  project: PublicProject;
}) {
  return (
    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
      <div className="lg:col-span-3">
        <ProjectMedia project={project} variant="featured" />
      </div>

      <div className="lg:col-span-2 space-y-4">
        <span className="text-xs font-medium uppercase tracking-wider text-accent">
          {project.categoryLabel}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
        <p className="text-text-secondary leading-relaxed">
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <div className="pt-2">
            <p className="text-xs font-medium uppercase tracking-wider text-text-secondary mb-2">
              Teknologi
            </p>
            <p className="text-sm text-text-secondary">
              {project.technologies.join(" · ")}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-3 pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Detail Proyek <ArrowRight size={16} aria-hidden="true" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Kunjungi Website <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}