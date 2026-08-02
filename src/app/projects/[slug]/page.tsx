import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import Navigation from "@/app/components/navigation";
import Footer from "@/app/components/footer";
import ProjectBody from "@/app/components/projectbody";
import { projects, getProject, getAdjacent } from "@/data/projects";
import { profile } from "@/data/profile";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.shortTitle} — ${profile.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacent(slug);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-28 pb-16">
        {/* ---------- Masthead ---------- */}
        <header className="px-6">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 btn-secondary px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] mb-10"
            >
              <FaArrowLeft />
              <span>All projects</span>
            </Link>

            <div className="rule-label mb-6">
              <span className="section-kicker">{project.context}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-ink leading-[1.08] max-w-4xl">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-[#4b5763] mt-5 max-w-3xl leading-snug">
              {project.subtitle}
            </p>

            <dl className="grid sm:grid-cols-2 gap-6 mt-10 pt-8 border-t border-[#d2d9e1] max-w-4xl">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#6b7684]">
                  Role
                </dt>
                <dd className="text-ink mt-1.5">{project.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#6b7684]">
                  Status
                </dt>
                <dd className="text-ink mt-1.5">{project.status}</dd>
              </div>
            </dl>
          </div>
        </header>

        {/* ---------- Lead image + headline results ---------- */}
        <div className="px-6 mt-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-6 items-start">
            <div className="figure-frame">
              <div className="bg-white p-4">
                <Image
                  src={project.cardImage}
                  alt={project.title}
                  width={1400}
                  height={1000}
                  className={
                    project.cardImageContain
                      ? "w-full h-auto max-h-[26rem] object-contain"
                      : "w-full h-auto max-h-[26rem] object-cover"
                  }
                  priority
                />
              </div>
            </div>

            <div className="panel rounded-lg p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#153D63]">
                Headline results
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-6">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="stat">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Embedded video ---------- */}
        {project.videos && project.videos.length > 0 && (
          <div className="px-6 mt-14">
            <div className="max-w-6xl mx-auto">
              <div className="rule-label mb-6">
                <span className="section-kicker">Watch</span>
              </div>
              <div
                className={`grid gap-6 ${
                  project.videos.length > 1 ? "lg:grid-cols-2" : ""
                }`}
              >
                {project.videos.map((video) => (
                  <figure key={video.id} className="figure-frame">
                    <div className="relative w-full aspect-video bg-black">
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                        title={video.title}
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    <figcaption className="figure-caption">
                      <span className="font-semibold text-ink">
                        {video.title}
                      </span>
                      {video.blurb ? ` — ${video.blurb}` : ""}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ---------- Body + contents rail ---------- */}
        <div className="px-6 mt-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[220px_1fr] gap-12">
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#6b7684] mb-3">
                    Contents
                  </p>
                  <nav className="space-y-1.5">
                    {project.sections.map((s) => (
                      <a
                        key={s.n}
                        href={`#section-${s.n}`}
                        className="flex gap-2.5 text-[13px] text-[#4b5763] hover:text-[#153D63] transition-colors leading-snug py-1"
                      >
                        <span className="font-mono text-[11px] text-[#153D63] shrink-0 tabular-nums pt-0.5">
                          {s.n}
                        </span>
                        <span>{s.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="pt-5 border-t border-[#d2d9e1]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#6b7684] mb-3">
                    Tools
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="pt-5 border-t border-[#d2d9e1]">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#6b7684] mb-3">
                      Links
                    </p>
                    <div className="space-y-2">
                      {project.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[13px] text-[#153D63] hover:underline"
                        >
                          <FaExternalLinkAlt className="text-[10px] shrink-0" />
                          <span>{l.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>

            <div>
              {/* Mobile-only tools + links */}
              <div className="lg:hidden mb-12 space-y-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-2.5">
                    {project.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 btn-secondary px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em]"
                      >
                        <FaExternalLinkAlt />
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <ProjectBody sections={project.sections} />
            </div>
          </div>
        </div>

        {/* ---------- Prev / next ---------- */}
        <nav className="px-6 mt-20">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-5 pt-10 border-t border-[#d2d9e1]">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="panel panel-hover rounded-lg p-6 group"
              >
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-[#6b7684]">
                  <FaArrowLeft className="transition-transform duration-200 group-hover:-translate-x-1" />
                  Previous
                </span>
                <p className="text-lg font-display font-bold text-ink mt-2.5">
                  {prev.shortTitle}
                </p>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                href={`/projects/${next.slug}`}
                className="panel panel-hover rounded-lg p-6 group sm:text-right"
              >
                <span className="flex items-center gap-2 sm:justify-end font-mono text-[10px] uppercase tracking-[0.24em] text-[#6b7684]">
                  Next
                  <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
                <p className="text-lg font-display font-bold text-ink mt-2.5">
                  {next.shortTitle}
                </p>
              </Link>
            )}
          </div>
        </nav>
      </main>

      <Footer />
    </div>
  );
}
