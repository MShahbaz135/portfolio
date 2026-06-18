"use client";

import { useEffect, useRef, useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useIsDark } from "./useIsDark";

type Point = { t: string; v: number };

function seed(): Point[] {
  const now = Date.now();
  let v = 18000;
  const out: Point[] = [];
  for (let i = 29; i >= 0; i--) {
    v += (Math.random() - 0.45) * 1800;
    v = Math.max(8000, Math.min(34000, v));
    const d = new Date(now - i * 4000);
    out.push({
      t: d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      v: Math.round(v),
    });
  }
  return out;
}

export default function LiveChart() {
  const [data, setData] = useState<Point[]>(seed);
  const [live, setLive] = useState(true);
  const liveRef = useRef(live);
  liveRef.current = live;
  const isDark = useIsDark();

  const chartColor = isDark ? "#22D3EE" : "#0891B2";
  const tickColor = isDark ? "#5B6573" : "#94A3B8";
  const tooltipBg = isDark ? "#0F141C" : "#FFFFFF";
  const tooltipBorder = isDark ? "#1E2733" : "#E2E8F0";
  const tooltipLabel = isDark ? "#8B949E" : "#475569";

  useEffect(() => {
    const id = setInterval(() => {
      if (!liveRef.current) return;
      setData((prev) => {
        const last = prev[prev.length - 1].v;
        let next = last + (Math.random() - 0.42) * 2200;
        next = Math.max(8000, Math.min(34000, next));
        const d = new Date();
        const point = {
          t: d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          v: Math.round(next),
        };
        return [...prev.slice(1), point];
      });
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const current = data[data.length - 1].v;
  const prev = data[data.length - 6]?.v ?? current;
  const delta = (((current - prev) / prev) * 100).toFixed(1);
  const positive = current >= prev;

  return (
    <div className="card-glow relative w-full overflow-hidden p-5 shadow-[0_0_40px_-12px_rgba(59,130,246,0.35)]">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
            Live System Throughput
          </p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-ink">
              {current.toLocaleString()}
            </span>
            <span className="text-xs text-ink-faint">req/min</span>
            <span
              className={`text-xs font-semibold ${
                positive ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {positive ? "▲" : "▼"} {Math.abs(Number(delta))}%
            </span>
          </div>
        </div>
        <button
          onClick={() => setLive((v) => !v)}
          className="flex items-center gap-1.5 rounded-full border border-base-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-muted transition hover:text-ink"
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              live ? "animate-pulse-dot bg-emerald-400" : "bg-ink-faint"
            }`}
          />
          {live ? "Live" : "Paused"}
        </button>
      </div>

      <div className="h-[180px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
            <defs>
              <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={chartColor} stopOpacity={0.4} />
                <stop offset="100%" stopColor={chartColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="t"
              tick={{ fill: tickColor, fontSize: 10 }}
              tickLine={false}
              axisLine={false}
              interval={6}
            />
            <YAxis
              tick={{ fill: tickColor, fontSize: 10 }}
              tickLine={false}
              axisLine={false}
              width={48}
              tickFormatter={(v) => `${Math.round(v / 1000)}K`}
            />
            <Tooltip
              contentStyle={{
                background: tooltipBg,
                border: `1px solid ${tooltipBorder}`,
                borderRadius: 12,
                fontSize: 12,
              }}
              labelStyle={{ color: tooltipLabel }}
              itemStyle={{ color: chartColor }}
              formatter={(v: number) => [v.toLocaleString(), "req/min"]}
            />
            <Area
              type="monotone"
              dataKey="v"
              stroke={chartColor}
              strokeWidth={2}
              fill="url(#fill)"
              isAnimationActive={false}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-base-border pt-4">
        {[
          { k: "P95 Latency", v: "128 ms", c: "text-accent-soft" },
          { k: "Error Rate", v: "0.18%", c: "text-emerald-400" },
          { k: "Uptime", v: "99.9%", c: "text-cyan-glow" },
        ].map((m) => (
          <div key={m.k}>
            <p className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
              {m.k}
            </p>
            <p className={`mt-0.5 text-sm font-semibold ${m.c}`}>{m.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
