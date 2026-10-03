import type { Project, ProjectFeature } from "./types";

/**
 * DTO publik — HANYA field yang boleh dirender/dikirim ke client.
 * editorialNotes, features[needs-verification], dan field internal TIDAK masuk.
 */
export type PublicProject = {
  id: string;
  title: string;
  slug: string;
  category: Project["category"];
  categoryLabel: string;
  description: string;
  overview: string;
  challenge: string | null;
  solution: string | null;
  role: string | null;
  year: string | null;
  technologies: string[];
  features: { text: string }[];
  cover: Project["cover"];
  gallery: Project["gallery"];
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
};

function publicFeatures(features: ProjectFeature[]): { text: string }[] {
  return features
    .filter((f) => f.status === "documented" || f.status === "verified")
    .map((f) => ({ text: f.text }));
}

export function toPublicProject(project: Project): PublicProject {
  return {
    id: project.id,
    title: project.title,
    slug: project.slug,
    category: project.category,
    categoryLabel: project.categoryLabel,
    description: project.description,
    overview: project.overview,
    challenge: project.challenge,
    solution: project.solution,
    role: project.role,
    year: project.year,
    technologies: project.technologies,
    features: publicFeatures(project.features),
    cover: project.cover,
    gallery: project.gallery,
    liveUrl: project.liveUrl,
    githubUrl: project.githubUrl,
    featured: project.featured,
  };
}

export function getPublicProjects(all: Project[]): PublicProject[] {
  return all.filter((p) => p.published).map(toPublicProject);
}

export function getPublicProjectBySlug(
  all: Project[],
  slug: string
): PublicProject | null {
  const project = all.find((p) => p.slug === slug && p.published);
  return project ? toPublicProject(project) : null;
}