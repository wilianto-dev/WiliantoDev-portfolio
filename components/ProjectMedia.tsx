import Image from "next/image";
import type { PublicProject } from "@/lib/dto";

type Variant = "card" | "featured" | "detail";

const sizes: Record<Variant, string> = {
  card: "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
  featured: "(min-width: 1024px) 60vw, 100vw",
  detail: "(min-width: 1024px) 900px, 100vw",
};

export default function ProjectMedia({
  project,
  variant = "card",
}: {
  project: PublicProject;
  variant?: Variant;
}) {
  if (project.cover) {
    return (
      <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-border bg-background-secondary">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes={sizes[variant]}
          className="object-cover"
          priority={variant === "featured"}
        />
      </div>
    );
  }

  const isDetail = variant === "detail";
  const titleSize = isDetail ? "text-2xl md:text-4xl" : "text-xl md:text-3xl";

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-border bg-gradient-to-br from-surface to-background flex flex-col items-center justify-center p-6">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,#ffffff03_50%,transparent_75%)] bg-[length:24px_24px]"
      />
      <span className="relative z-10 text-[10px] uppercase tracking-widest text-accent mb-2 text-center">
        {project.categoryLabel}
      </span>
      <span className={`relative z-10 ${titleSize} font-bold text-center`}>
        {project.title}
      </span>
      <span className="relative z-10 text-[10px] text-text-secondary mt-4">
        Cover proyek
      </span>
    </div>
  );
}