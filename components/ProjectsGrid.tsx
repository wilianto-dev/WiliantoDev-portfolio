"use client";

import { useState } from "react";
import type { PublicProject } from "@/lib/dto";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({
  projects,
}: {
  projects: PublicProject[];
}) {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];
  const showFilter = categories.length > 2;

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h3 className="text-xl font-semibold">Proyek Lainnya</h3>
        {showFilter && (
          <ProjectFilter
            categories={categories}
            selected={filter}
            onSelect={setFilter}
          />
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="text-text-secondary py-12 text-center">
          Tidak ada proyek dengan filter ini.
        </p>
      ) : (
        <div
          className={`grid gap-6 ${
            filtered.length === 2
              ? "md:grid-cols-2"
              : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}