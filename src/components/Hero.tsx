"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-glow relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />

      <div className="container-content relative max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-base-border bg-base-card/60 px-3 py-1.5 font-mono text-xs text-ink-muted">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
            {profile.availableForWork
              ? "Available for new opportunities"
              : profile.role}
          </span>
          <span className="inline-flex items-center rounded-full border border-base-border bg-base-card/60 px-3 py-1.5 font-mono text-xs text-ink-muted">
            {profile.yearsExperience} years experience
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-3 bg-gradient-to-r from-accent-soft to-cyan-glow bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-4 max-w-2xl text-xl font-medium tracking-tight text-ink md:text-2xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-6 max-w-2xl leading-relaxed text-ink-muted md:text-lg"
        >
          {profile.blurb}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a href="#work" className="btn-primary">
            View Work <ArrowRight size={16} />
          </a>
          <a href={profile.cvUrl} className="btn-ghost">
            <Download size={16} /> Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
