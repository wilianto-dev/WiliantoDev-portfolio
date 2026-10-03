import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import { projects as rawProjects } from "@/data/projects";
import { getPublicProjectBySlug, getPublicProjects } from "@/lib/dto";
import ProjectMedia from "@/components/ProjectMedia";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPublicProjects(rawProjects).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getPublicProjectBySlug(rawProjects, slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      siteName: "WiliantoDev",
      title: `${project.title} | WiliantoDev`,
      description: project.description,
      url: `https://wiliantodev.my.id/projects/${project.slug}`,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${project.title} — WiliantoDev`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | WiliantoDev`,
      description: project.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getPublicProjectBySlug(rawProjects, slug);

  if (!project) notFound();

  const hasMetadata =
    !!project.role || !!project.year || project.technologies.length > 0;
  const hasChallenge = !!project.challenge;
  const hasSolution = !!project.solution;
  const hasFeatures = project.features.length > 0;

  return (
    <div className="pt-32 pb-24">
      <div className="container-editorial">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary mb-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
        >
          <ArrowLeft size={16} aria-hidden="true" /> Kembali ke Proyek
        </Link>

        <div className="max-w-3xl mb-12">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            {project.categoryLabel}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Kunjungi Website <ExternalLink size={14} aria-hidden="true" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Source Code <Code2 size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <div className="mb-12">
          <ProjectMedia project={project} variant="detail" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-xl font-semibold mb-3">Overview</h2>
              <p className="text-text-secondary leading-relaxed">
                {project.overview}
              </p>
            </div>

            {(hasChallenge || hasSolution) && (
              <div className="grid md:grid-cols-2 gap-8">
                {hasChallenge && (
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Tantangan</h2>
                    <p className="text-text-secondary leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}
                {hasSolution && (
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Solusi</h2>
                    <p className="text-text-secondary leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {hasFeatures && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Fitur</h2>
                <ul className="space-y-2.5">
                  {project.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-text-secondary"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-1 text-accent flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{feat.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            {hasMetadata && (
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xs font-medium uppercase tracking-wider text-text-secondary mb-4">
                  Informasi
                </h3>
                <dl className="space-y-4 text-sm">
                  {project.role && (
                    <div>
                      <dt className="text-text-secondary mb-1">Peran</dt>
                      <dd className="text-text-primary">{project.role}</dd>
                    </div>
                  )}
                  {project.year && (
                    <div>
                      <dt className="text-text-secondary mb-1">Tahun</dt>
                      <dd className="text-text-primary">{project.year}</dd>
                    </div>
                  )}
                  {project.technologies.length > 0 && (
                    <div>
                      <dt className="text-text-secondary mb-2">Teknologi</dt>
                      <dd className="flex flex-wrap gap-2">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="bg-background px-2 py-1 rounded text-xs border border-border text-text-secondary"
                          >
                            {t}
                          </span>
                        ))}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            )}

            <Link
              href="/#contact"
              className="block rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <p className="text-sm text-text-secondary mb-1">
                Punya proyek serupa?
              </p>
              <p className="font-medium">Diskusikan dengan saya →</p>
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}