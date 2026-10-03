"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function CustomCursor() {
  const shouldReduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Hanya aktif di desktop dengan pointer halus
    const isFine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFine);
  }, []);

  useEffect(() => {
    if (!enabled || shouldReduceMotion) return;

    let rafId: number;

    const update = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x - 16}px, ${
          pos.current.y - 16
        }px)`;
      }
      rafId = requestAnimationFrame(update);
    };

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, [enabled, shouldReduceMotion]);

  if (!enabled || shouldReduceMotion) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-8 w-8 rounded-full border border-accent/40 bg-accent/5 transition-opacity duration-300"
      aria-hidden="true"
    />
  );
}