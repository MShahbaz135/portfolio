import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-base-border py-8">
      <div className="container-content text-center text-sm text-ink-faint">
        <p className="font-mono">© 2026 {profile.name}</p>
      </div>
    </footer>
  );
}
