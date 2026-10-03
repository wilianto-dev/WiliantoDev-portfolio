import { projects as rawProjects } from "@/data/projects";
import { getPublicProjects } from "@/lib/dto";
import FeaturedProject from "./FeaturedProject";
import ProjectsGrid from "./ProjectsGrid";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const all = getPublicProjects(rawProjects);
  const featured = all.find((p) => p.featured) ?? null;
  const regular = all.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="container-editorial">
        <SectionHeading
          title="Portfolio"
          subtitle="Pilihan proyek pengembangan aplikasi dan website."
        />

        {featured && (
          <div className="mb-20">
            <div className="mb-6">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                Proyek Unggulan
              </span>
            </div>
            <FeaturedProject project={featured} />
          </div>
        )}

        {regular.length > 0 && <ProjectsGrid projects={regular} />}
      </div>
    </section>
  );
}