import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navigation from "@/app/components/navigation";
import Footer from "@/app/components/footer";
import Reveal from "@/app/components/reveal";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description:
    "Engineering case studies across test hardware, simulation, propulsion, structures, and design.",
};

export default function ProjectsIndex() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 btn-secondary px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] mb-10"
          >
            <FaArrowLeft />
            <span>Back</span>
          </Link>

          <Reveal className="max-w-3xl mb-14">
            <div className="rule-label mb-5">
              <span className="section-kicker">Projects</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-ink leading-[1.06]">
              Every project, with the analysis attached.
            </h1>
            <p className="text-lg text-[#4b5763] mt-5">
              {projects.length} case studies spanning test hardware and
              instrumentation, physics-based simulation, structural
              optimization, propulsion, and mechanical design. Each opens into
              the full write-up.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 2) * 80}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group panel panel-hover rounded-lg overflow-hidden flex flex-col h-full"
                >
                  <div className="relative bg-white border-b border-[#d2d9e1] h-56 flex items-center justify-center">
                    <Image
                      src={project.cardImage}
                      alt={project.title}
                      width={800}
                      height={560}
                      className={
                        project.cardImageContain
                          ? "w-full h-56 object-contain p-4"
                          : "w-full h-56 object-cover"
                      }
                    />
                    <div className="absolute top-4 left-4">
                      <span className="pill font-mono text-[10px] uppercase tracking-[0.18em] text-ink px-3 py-1.5">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6b7684] mb-2.5">
                        {project.context}
                      </p>
                      <h2 className="text-xl font-display font-bold text-ink leading-snug">
                        {project.shortTitle}
                      </h2>
                      <p className="text-[15px] text-[#4b5763] mt-2.5 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-1">
                      {project.stats.slice(0, 2).map((stat) => (
                        <div key={stat.label} className="stat">
                          <div className="stat-value text-[1.35rem]">
                            {stat.value}
                          </div>
                          <div className="stat-label text-[0.72rem]">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="mt-auto inline-flex items-center gap-2 pt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#153D63]">
                      Read the case study
                      <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
