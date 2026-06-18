"use client";

import { skills } from "@/data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-base-border py-20 md:py-28">
      <div className="container-content grid gap-12 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <span className="section-label">
            <span className="h-px w-6 bg-accent-soft" /> About
          </span>
          <h2 className="section-title">
            Engineer focused on real-time, data-heavy products
          </h2>
          <div className="mt-5 space-y-4 text-ink-muted">
            <p>
              I&apos;m a Full Stack Engineer with 5+ years building and scaling
              web applications for enterprise, government, and international
              clients. I specialize in turning complex problems into reliable,
              high-performance products.
            </p>
            <p>
              My work spans real-time logistics and fleet tracking, financial
              forecasting engines, secure role-based government platforms, and
              data-rich dashboards. I care about clean architecture, performance,
              and shipping production-grade software in Agile teams.
            </p>
            <p>
              Currently focused on real-time systems, data visualization, and
              expanding into AI/LLM-powered features.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div id="skills" className="scroll-mt-24">
            <span className="section-label">
              <span className="h-px w-6 bg-accent-soft" /> Tech Stack
            </span>
            <div className="mt-2 grid gap-5 sm:grid-cols-2">
              {skills.map((group) => (
                <div
                  key={group.group}
                  className="card-glow p-5 transition hover:border-accent/40"
                >
                  <h3 className="font-mono text-xs uppercase tracking-widest text-accent-soft">
                    {group.group}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
