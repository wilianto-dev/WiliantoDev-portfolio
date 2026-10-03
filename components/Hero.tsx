import { ArrowDown } from "lucide-react";
import CodeVisual from "./CodeVisual";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 md:pt-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px] opacity-50"
        aria-hidden="true"
      />

      <div className="container-editorial relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <AnimatedSection className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-text-secondary">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            FULL-STACK DEVELOPER · LARAVEL & FLUTTER
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Wilianto.
            <br />
            Pengembangan Web &amp; Aplikasi Android.
          </h1>

          <p className="mt-6 max-w-lg text-lg text-text-secondary leading-relaxed">
            Saya mengembangkan website, aplikasi Android, dan backend API untuk
            kebutuhan bisnis dan pengelolaan informasi. Fokus pengembangan saya
            adalah Laravel dan Flutter.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Lihat Portfolio
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Hubungi Saya
            </a>
          </div>

          <div className="mt-12 flex items-center gap-2 text-xs text-text-secondary">
            <ArrowDown size={14} className="animate-bounce" aria-hidden="true" />
            <span>Jelajahi Portfolio</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="hidden lg:block">
          <CodeVisual />
        </AnimatedSection>
      </div>
    </section>
  );
}