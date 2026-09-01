"use client";

import { Moon, Sun } from "lucide-react";
import { useIsDark } from "./useIsDark";

export default function ThemeToggle() {
  const isDark = useIsDark();

  const toggle = () => {
    const next = !isDark;
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
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
