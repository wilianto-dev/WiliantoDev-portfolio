export type ProjectCategory = "web" | "app" | "landing-page" | "ui-ux" | "other";

export type ProjectFeature = {
  text: string;
  status: "documented" | "verified" | "needs-verification";
};

export type ProjectImage = {
  src: string;
  alt: string;
  kind: "screenshot" | "editorial-cover" | "placeholder";
  width: number;
  height: number;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  overview: string;
  challenge: string | null;
  solution: string | null;
  role: string | null;
  year: string | null;
  technologies: string[];
  features: ProjectFeature[];
  cover: ProjectImage | null;
  gallery: ProjectImage[];
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
  published: boolean;
  editorialNotes: string[];
};