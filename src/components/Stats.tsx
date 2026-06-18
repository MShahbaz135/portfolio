"use client";

import { useEffect, useRef, useState } from "react";
import { Boxes, MapPin, TrendingUp, Award } from "lucide-react";
import { stats } from "@/data/content";

const icons = [Boxes, MapPin, TrendingUp, Award];

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
}

function StatItem({
  index,
  display,
  label,
  run,
}: {
  index: number;
  display: string;
  label: string;
  run: boolean;
}) {
  const Icon = icons[index % icons.length];
  // Parse leading number for animation, keep suffix static.
  const match = display.match(/^([\d.]+)(.*)$/);
  const numTarget = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const animated = useCountUp(numTarget, run);
  const shown = match
    ? `${Number.isInteger(numTarget) ? Math.round(animated) : animated.toFixed(0)}${suffix}`
    : display;

  return (
    <div className="group relative flex flex-col items-center px-4 py-2 text-center">
      <Icon size={20} className="mb-3 text-accent" />
      <span className="bg-gradient-to-b from-ink to-ink-muted bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
        {shown}
      </span>
      <span className="mt-2 text-sm text-ink-muted">{label}</span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="container-content -mt-2 pb-8">
      <div
        ref={ref}
        className="card-glow grid grid-cols-2 divide-base-border py-8 md:grid-cols-4 md:divide-x"
      >
        {stats.map((s, i) => (
          <StatItem
            key={s.label}
            index={i}
            display={s.display}
            label={s.label}
            run={run}
          />
        ))}
      </div>
    </section>
  );
}
