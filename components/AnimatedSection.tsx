"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: Props) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ y: 12 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}