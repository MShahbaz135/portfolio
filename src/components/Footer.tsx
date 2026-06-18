import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-base-border py-8">
      <div className="container-content flex flex-col items-center justify-between gap-3 text-sm text-ink-faint md:flex-row">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
}
