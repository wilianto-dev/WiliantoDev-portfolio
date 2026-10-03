"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { navItems } from "@/data/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? "bg-background/75 backdrop-blur-xl border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container-editorial flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            aria-label="WiliantoDev — beranda"
          >
            <span className="text-accent" aria-hidden="true">
              &lt;
            </span>
            WiliantoDev
            <span className="text-accent" aria-hidden="true">
              {" "}
              /&gt;
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Navigasi utama"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary focus-visible:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Diskusikan Proyek
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center -mr-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setIsMobileOpen(true)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label="Buka menu navigasi"
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}