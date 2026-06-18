"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/content";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-base-border bg-base/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-ink transition hover:text-accent"
        >
          <span className="text-accent">{"<"}</span>
          {profile.name.split(" ")[0]}
          <span className="text-accent">{" />"}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a href={profile.cvUrl} className="btn-primary px-4 py-2 text-xs">
            Download CV
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-base-border bg-base/95 backdrop-blur-md md:hidden">
          <div className="container-content flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-ink-muted transition hover:bg-base-card hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.cvUrl}
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
