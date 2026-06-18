"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-base-border py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <div className="card-glow hero-glow relative overflow-hidden p-8 text-center md:p-14">
            <span className="section-label justify-center">
              <span className="h-px w-6 bg-accent-soft" /> Contact
            </span>
            <h2 className="section-title mx-auto max-w-2xl">
              Let&apos;s build something ambitious together
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ink-muted">
              I&apos;m open to full-stack and real-time projects, remote roles,
              and interesting collaborations. Reach out — I usually reply within
              a day.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <Mail size={16} /> Get in touch
              </a>
              <a href={profile.cvUrl} className="btn-ghost">
                Download CV
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-ink-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-accent" /> {profile.location}
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-ink"
              >
                <Github size={15} className="text-accent" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-ink"
              >
                <Linkedin size={15} className="text-accent" /> LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
