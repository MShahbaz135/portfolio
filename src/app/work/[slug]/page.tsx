import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Github } from "lucide-react";
import { projects, profile } from "@/data/content";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study — Muhammad Shahbaz" };
  return {
    title: `${project.name} — Case Study | Muhammad Shahbaz`,
    description: project.blurb,
    openGraph: {
      title: `${project.name} — Case Study`,
      description: project.blurb,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  return (
    <div className="min-h-screen bg-base text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-base-border bg-base/80 backdrop-blur-md">
        <nav className="container-content flex h-16 items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-sm text-ink-muted transition hover:text-ink"
          >
            <ArrowLeft size={16} /> Back to work
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className="pt-28 pb-16 md:pt-36">
        <article className="container-content max-w-3xl text-ink">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-base-border bg-base-card px-3 py-1.5 font-mono text-xs font-medium text-accent"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />
            Case Study
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">{project.blurb}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-6 flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition hover:text-accent-soft"
                >
                  Live demo <ArrowUpRight size={15} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition hover:text-ink"
                >
                  <Github size={15} /> Code
                </a>
              )}
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-base-border pt-5 text-sm">
            {[
              { href: "#overview", label: "Overview" },
              { href: "#problem", label: "The problem" },
              { href: "#role", label: "My role" },
              { href: "#learned", label: "What I learned" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-medium text-ink-muted transition hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {cs.results.map((r) => (
              <div key={r.label} className="card-glow bg-base-card p-5 text-center">
                <div className="text-3xl font-bold tracking-tight text-accent">
                  {r.metric}
                </div>
                <div className="mt-1 text-sm text-ink-muted">{r.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-12">
            <Section id="overview" title="Overview">
              <ul className="space-y-3">
                {cs.overview.split("\n\n").map((paragraph) => (
                  <li key={paragraph.slice(0, 48)} className="flex items-start gap-3">
                    <span>{paragraph}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="problem" title="The problem">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span>{cs.problem}</span>
                </li>
              </ul>
            </Section>

            <Section id="role" title="My role">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span>{cs.role}</span>
                </li>
              </ul>
            </Section>

            <Section id="approach" title="Approach & architecture">
              <ul className="space-y-3">
                {cs.approach.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="learned" title="What I learned">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span>{cs.lessons}</span>
                </li>
              </ul>
            </Section>
          </div>

          <div className="card-glow mt-14 flex flex-col items-center gap-4 bg-base-card p-8 text-center">
            <h2 className="text-xl font-semibold text-ink">
              Want to build something like this?
            </h2>
            <p className="max-w-md text-sm text-ink-muted">
              I&apos;m open to full-stack and real-time projects. Let&apos;s talk.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                Get in touch
              </a>
              <Link href="/#work" className="btn-ghost">
                View more work
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight text-ink">{title}</h2>
      <div className="mt-3 leading-relaxed text-ink">
        {children}
      </div>
    </section>
  );
}
