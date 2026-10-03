import { Mail, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { profile } from "@/data/profile";

export default function Contact() {
  const email = profile.contact.email;
  const whatsapp = profile.contact.whatsapp;
  const hasEmail = !!email;
  const hasWhatsApp = !!whatsapp;
  const hasAnyContact = hasEmail || hasWhatsApp;

  // Format nomor WA untuk tampilan: 6285186660723 → +62 851-8666-0723
  const formatWhatsApp = (num: string) => {
    if (num.length < 10) return num;
    const cc = num.slice(0, 2); // 62
    const rest = num.slice(2); // 85186660723
    const groups = rest.match(/.{1,4}/g) ?? [rest];
    return `+${cc} ${groups.join("-")}`;
  };

  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="container-editorial">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeading title="Diskusikan Kebutuhan Proyek Anda" />
          <p className="text-text-secondary text-lg leading-relaxed -mt-6 mb-10">
            Untuk pengembangan website, aplikasi Android, atau kerja sama
            profesional, hubungi saya melalui email atau WhatsApp.
          </p>

          {hasAnyContact ? (
            <>
              <AnimatedSection className="flex flex-col sm:flex-row justify-center gap-4">
                {hasEmail && (
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Mail size={16} aria-hidden="true" /> Hubungi via Email
                  </a>
                )}
                {hasWhatsApp && (
                  <a
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <MessageCircle size={16} aria-hidden="true" /> Hubungi via WhatsApp
                  </a>
                )}
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="mt-8 space-y-1 text-sm text-text-secondary">
                  {hasEmail && (
                    <p>
                      <a
                        href={`mailto:${email}`}
                        className="hover:text-text-primary transition-colors"
                      >
                        {email}
                      </a>
                    </p>
                  )}
                  {hasWhatsApp && (
                    <p>
                      <a
                        href={`https://wa.me/${whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-text-primary transition-colors"
                      >
                        {formatWhatsApp(whatsapp)}
                      </a>
                    </p>
                  )}
                </div>
              </AnimatedSection>
            </>
          ) : (
            <AnimatedSection>
              <div className="rounded-xl border border-border bg-surface p-8 max-w-md mx-auto">
                <p className="text-text-secondary text-sm">
                  Informasi kontak akan ditambahkan.
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
}