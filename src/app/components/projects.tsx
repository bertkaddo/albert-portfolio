"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Reveal from "./reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="rule-label">
              <span className="section-kicker">Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ink leading-tight">
              Built, instrumented, and tested — then written up.
            </h2>
          </div>
          <p className="text-lg text-[#4b5763] max-w-xl">
            Leading with the hardware I designed, instrumented, and put on a
            test stand. Each opens into the full write-up: the trade study, the
            governing equations, the figures, and what the data actually
            supported.
          </p>
        </Reveal>

        <div className="space-y-8">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 100}>
              <article className="group panel panel-hover rounded-lg overflow-hidden">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                  <div className="relative bg-white flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#d2d9e1] min-h-[16rem]">
                    <Image
                      src={project.cardImage}
                      alt={project.title}
                      width={800}
                      height={640}
                      className={`w-full ${
                        project.cardImageContain
                          ? "h-64 lg:h-full object-contain p-5"
                          : "h-64 lg:h-full object-cover"
                      }`}
                    />
                    <div className="absolute top-5 left-5">
                      <span className="pill font-mono text-[10px] uppercase tracking-[0.2em] text-ink px-3 py-1.5">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 md:p-8 flex flex-col gap-6">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#6b7684] mb-3">
                        {project.context}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-ink mb-3 leading-tight">
                        {project.shortTitle}
                      </h3>
                      <p className="text-[#4b5763] leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Datasheet stat strip — the signature element */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {project.stats.slice(0, 4).map((stat) => (
                        <div key={stat.label} className="stat">
                          <div className="stat-value">{stat.value}</div>
                          <div className="stat-label">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 6).map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-1">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2.5 btn-primary px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em]"
                      >
                        <span>Read the case study</span>
                        <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#153D63] border-b border-[#153D63]/40 pb-1 font-mono text-[10px] uppercase tracking-[0.24em] transition-colors duration-200 hover:border-[#153D63]"
          >
            <span>All {projects.length} projects</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}
