"use client";

import Reveal from "./reveal";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="rule-label">
              <span className="section-kicker">Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ink leading-tight">
              Where the hardware talked back.
            </h2>
          </div>
          <p className="text-lg text-[#4b5763] max-w-xl">
            An aircraft OEM, a graduate research group, four semesters of
            teaching, and two studios that maintain and run real test
            equipment.
          </p>
        </Reveal>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <Reveal key={exp.org} delay={index * 90}>
              <article className="panel panel-hover rounded-lg p-7 md:p-8">
                <div className="grid lg:grid-cols-[260px_1fr] gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-2xl font-semibold text-[#153D63]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-[#d2d9e1]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-ink leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-[#4b5763] mt-1 text-sm leading-snug">
                        {exp.org}
                      </p>
                    </div>
                    <div className="font-mono text-[11px] text-[#6b7684] space-y-0.5">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <ul className="space-y-3">
                      {exp.bullets.map((item) => (
                        <li key={item} className="flex gap-3 text-[#4b5763]">
                          <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#153D63] shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.courses && (
                      <div className="rounded border border-[#d2d9e1] bg-white/70 p-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#153D63]">
                          Courses taught
                        </p>
                        <div className="mt-3 grid sm:grid-cols-2 gap-x-8">
                          {exp.courses.map((course) => (
                            <p
                              key={course}
                              className="font-mono text-[12px] text-[#4b5763] border-b border-[#d2d9e1] py-1.5 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
                            >
                              {course}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
