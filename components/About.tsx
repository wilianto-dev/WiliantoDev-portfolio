import { GraduationCap, MapPin, Code2, Layers } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="container-editorial">
        <SectionHeading title="Tentang Saya" />

        <div className="grid gap-12 lg:grid-cols-3">
          <AnimatedSection className="lg:col-span-2 space-y-4 text-text-secondary text-lg leading-relaxed">
            <p>
              Saya adalah Full-Stack Developer dengan latar belakang S1 Teknik
              Informatika. Saya berfokus pada pengembangan aplikasi web
              menggunakan Laravel dan aplikasi Android menggunakan Flutter.
            </p>
            <p>
              Proyek yang saya kerjakan mencakup aplikasi kasir dan inventori
              serta portal berita. Saya memperhatikan kesesuaian fungsi dengan
              kebutuhan pengguna, konsistensi data, dan struktur kode yang mudah
              dipelihara.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-xl border border-border bg-surface p-6 space-y-5">
              <h3 className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                Profil
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Code2 size={16} className="mt-0.5 text-accent flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                      Nama
                    </p>
                    <p className="font-medium text-text-primary">
                      {profile.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Layers size={16} className="mt-0.5 text-accent flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                      Bidang
                    </p>
                    <p className="font-medium text-text-primary">
                      Full-Stack Development
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Code2 size={16} className="mt-0.5 text-accent flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                      Teknologi Utama
                    </p>
                    <p className="font-medium text-text-primary">
                      Laravel &amp; Flutter
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 text-accent flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                      Lokasi
                    </p>
                    <p className="font-medium text-text-primary">
                      {profile.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap size={16} className="mt-0.5 text-accent flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                      Pendidikan
                    </p>
                    <p className="font-medium text-text-primary">
                      {profile.education.degree} · {profile.education.graduationYear}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}