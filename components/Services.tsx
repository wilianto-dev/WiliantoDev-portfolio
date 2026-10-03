import {
  Globe,
  Layout,
  Code,
  Smartphone,
  Server,
  Wrench,
  Circle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { services, type ServiceIconKey } from "@/data/services";

const iconMap: Record<ServiceIconKey, LucideIcon> = {
  globe: Globe,
  layout: Layout,
  code: Code,
  smartphone: Smartphone,
  server: Server,
  wrench: Wrench,
};

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-border">
      <div className="container-editorial">
        <SectionHeading
          title="Layanan Pengembangan"
          subtitle="Pengembangan dan pemeliharaan website serta aplikasi sesuai kebutuhan proyek."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Circle;
            return (
              <AnimatedSection
                key={service.id}
                delay={index * 0.05}
                className="group p-6 rounded-xl border border-border bg-surface transition-colors hover:border-accent/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="text-accent" size={24} aria-hidden="true" />
                  <span className="text-xs font-mono text-text-secondary">
                    {service.id}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}