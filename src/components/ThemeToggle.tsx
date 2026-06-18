"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-base-border bg-base-card/50 text-ink-muted transition hover:border-accent/50 hover:text-accent"
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch */}
      {mounted && !isDark ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
