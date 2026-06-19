"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Github } from "lucide-react";
import { projects } from "@/data/content";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="work" className="border-t border-base-border py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <span className="section-label">
            <span className="h-px w-6 bg-accent-soft" /> Selected Work
          </span>
          <h2 className="section-title">Case studies, not just screenshots</h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            Real systems built for enterprise, government, and international
            clients — focused on scale, performance, and reliability.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <article className="card-glow group relative overflow-hidden p-6 transition duration-300 hover:border-accent/50 md:p-8">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: p.accent }}
                />
                <div className="relative grid gap-6 md:grid-cols-[1.4fr_1fr]">
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: p.accent }}
                      />
                      <h3 className="text-xl font-semibold text-ink md:text-2xl">
                        {p.name}
                      </h3>
                    </div>
                    <p className="mt-3 text-ink-muted">{p.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-5">
                      <Link
                        href={`/work/${p.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition hover:gap-2.5"
                        style={{ color: p.accent }}
                      >
                        Read case study <ArrowRight size={15} />
                      </Link>
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft transition hover:text-ink"
                        >
                          Live demo <ArrowUpRight size={15} />
                        </a>
                      )}
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition hover:text-ink"
                        >
                          <Github size={15} /> Code
                        </a>
                      )}
                    </div>
                  </div>

                  <ul className="flex flex-col justify-center gap-3 rounded-xl border border-base-border bg-base-surface/50 p-5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-ink">
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0"
                          style={{ color: p.accent }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
