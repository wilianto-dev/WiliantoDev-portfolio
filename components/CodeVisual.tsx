"use client";
import { motion } from "framer-motion";

export default function CodeVisual() {
  return (
    <div className="relative rounded-xl border border-border bg-surface p-6 shadow-2xl">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
        <div className="h-3 w-3 rounded-full bg-red-500/80" aria-hidden="true" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" aria-hidden="true" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" aria-hidden="true" />
        <span className="ml-2 text-xs text-text-secondary font-mono">
          developer.ts
        </span>
      </div>

      <div className="font-mono text-sm leading-relaxed">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">developer</span>{" "}
            <span className="text-text-secondary">=</span>{" "}
            <span className="text-yellow-400">{"{"}</span>
          </motion.div>

          <motion.div
            className="pl-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-text-secondary">name:</span>{" "}
            <span className="text-green-400">&quot;Wilianto&quot;</span>
            <span className="text-text-secondary">,</span>
          </motion.div>

          <motion.div
            className="pl-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-text-secondary">focus:</span>{" "}
            <span className="text-yellow-400">[</span>
            <span className="text-green-400">&quot;Laravel&quot;</span>
            <span className="text-text-secondary">, </span>
            <span className="text-green-400">&quot;Flutter&quot;</span>
            <span className="text-yellow-400">]</span>
            <span className="text-text-secondary">,</span>
          </motion.div>

          <motion.div
            className="pl-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-text-secondary">builds:</span>{" "}
            <span className="text-yellow-400">[</span>
            <span className="text-green-400">&quot;Web&quot;</span>
            <span className="text-text-secondary">, </span>
            <span className="text-green-400">&quot;Android&quot;</span>
            <span className="text-text-secondary">, </span>
            <span className="text-green-400">&quot;API&quot;</span>
            <span className="text-yellow-400">]</span>
            <span className="text-text-secondary">,</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-yellow-400">{"}"}</span>
            <span className="text-text-secondary">;</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute -z-10 -inset-4 rounded-2xl bg-gradient-to-r from-accent/20 to-accent-secondary/20 blur-2xl opacity-50" />
    </div>
  );
}