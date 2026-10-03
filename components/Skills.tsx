import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="container-editorial">
        <SectionHeading
          title="Kompetensi Teknis"
          subtitle="Teknologi dan perangkat yang saya gunakan dalam pengembangan, integrasi, dan deployment aplikasi."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <AnimatedSection
              key={cat.title}
              delay={i * 0.08}
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <h3 className="text-xs font-medium uppercase tracking-wider text-text-secondary mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-text-primary"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}