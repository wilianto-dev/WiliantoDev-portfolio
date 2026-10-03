import { socialLinks } from "@/data/social";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const validSocials = socialLinks.filter((s) => s.url);

  return (
    <footer className="border-t border-border py-12">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-left">
            <p className="font-bold text-lg">
              <span className="text-accent" aria-hidden="true">
                &lt;
              </span>
              WiliantoDev
              <span className="text-accent" aria-hidden="true">
                {" "}
                /&gt;
              </span>
            </p>
            <p className="text-sm text-text-secondary mt-1">
              Pengembangan Web · Aplikasi Android · Backend API
            </p>
          </div>

          {validSocials.length > 0 && (
            <div className="flex gap-4">
              {validSocials.map((social) => (
                <a
                  key={social.name}
                  href={social.url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
                >
                  {social.name}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
          <p>&copy; {currentYear} WiliantoDev. Seluruh hak dilindungi.</p>
          <p>Dibangun dengan Next.js</p>
        </div>
      </div>
    </footer>
  );
}