"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { navItems } from "@/data/navigation";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const skipRestore = useRef(false);

  useEffect(() => {
    if (isOpen) {
      previouslyFocused.current = document.activeElement as HTMLElement;
      requestAnimationFrame(() => {
        panelRef.current?.focus();
      });

      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen && previouslyFocused.current) {
      if (skipRestore.current) {
        skipRestore.current = false;
        return;
      }
      const t = setTimeout(() => {
        previouslyFocused.current?.focus?.();
      }, 0);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const mql = window.matchMedia("(min-width: 768px)");
    const handleChange = () => {
      if (mql.matches) onClose();
    };
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, [isOpen, onClose]);

  const handleNavigate = () => {
    // Saat menutup karena navigasi, jangan restore fokus ke trigger
    skipRestore.current = true;
    onClose();
  };

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: "easeOut" as const };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
          ref={panelRef}
          tabIndex={-1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md md:hidden overflow-y-auto focus:outline-none"
        >
          <nav
            className="container-editorial flex flex-col gap-2 pt-8 pb-12"
            aria-label="Navigasi mobile"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-[44px] items-center text-lg font-medium text-text-secondary hover:text-text-primary focus-visible:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                onClick={handleNavigate}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="mt-4 flex min-h-[44px] items-center justify-center rounded-lg bg-accent px-4 text-lg font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onClick={handleNavigate}
            >
              Diskusikan Proyek
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 self-start inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-2"
            >
              <X size={16} aria-hidden="true" /> Tutup menu
            </button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}