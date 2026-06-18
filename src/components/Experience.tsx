"use client";

import { experience } from "@/data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-base-border py-20 md:py-28"
    >
      <div className="container-content">
        <Reveal>
          <span className="section-label">
            <span className="h-px w-6 bg-accent-soft" /> Experience
          </span>
          <h2 className="section-title">Where I&apos;ve made an impact</h2>
        </Reveal>

        <div className="relative mt-12 pl-6 md:pl-8">
          <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-accent via-base-border to-transparent md:left-1" />

          <div className="flex flex-col gap-10">
            {experience.map((job, i) => (
              <Reveal key={`${job.company}-${i}`} delay={i * 0.05}>
                <div className="relative">
                  <span className="absolute -left-[26px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-base md:-left-[34px]" />
                  <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                    <h3 className="text-lg font-semibold text-ink">
                      {job.role}{" "}
                      <span className="text-accent-soft">· {job.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-ink-faint">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-ink-muted">{job.meta}</p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {job.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2.5 text-sm text-ink-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
