import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Github } from "lucide-react";
import { projects, profile } from "@/data/content";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
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

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  return (
    <>
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
        <article className="container-content max-w-3xl">
          {/* Hero */}
          <Reveal>
            <span
              className="inline-flex items-center gap-2 rounded-full border border-base-border bg-base-card/60 px-3 py-1.5 font-mono text-xs"
              style={{ color: project.accent }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: project.accent }}
              />
              Case Study
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 text-lg text-ink-muted">{project.blurb}</p>

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
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft transition hover:text-ink"
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
          </Reveal>

          {/* Results band */}
          <Reveal delay={0.05}>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {cs.results.map((r) => (
                <div key={r.label} className="card-glow p-5 text-center">
                  <div
                    className="text-3xl font-bold tracking-tight"
                    style={{ color: project.accent }}
                  >
                    {r.metric}
                  </div>
                  <div className="mt-1 text-sm text-ink-muted">{r.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Sections */}
          <div className="mt-12 space-y-10">
            <Section title="Overview">
              <p>{cs.overview}</p>
            </Section>

            <Section title="The problem">
              <p>{cs.problem}</p>
            </Section>

            <Section title="My role">
              <p>{cs.role}</p>
            </Section>

            <Section title="Approach & architecture">
              <ul className="space-y-3">
                {cs.approach.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0"
                      style={{ color: project.accent }}
                    />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="What I learned">
              <p>{cs.lessons}</p>
            </Section>
          </div>

          {/* CTA */}
          <Reveal delay={0.05}>
            <div className="card-glow mt-14 flex flex-col items-center gap-4 p-8 text-center">
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
          </Reveal>
        </article>
      </main>

      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section>
        <h2 className="section-label">
          <span className="h-px w-6 bg-accent-soft" /> {title}
        </h2>
        <div className="mt-2 leading-relaxed text-ink-muted [&_p]:text-base">
          {children}
        </div>
      </section>
    </Reveal>
  );
}
