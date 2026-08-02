"use client";

import Reveal from "./reveal";
import { skillGroups, coursework } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="rule-label">
              <span className="section-kicker">Skills</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ink leading-tight">
              Tools I have actually shipped something with.
            </h2>
          </div>
          <p className="text-lg text-[#4b5763] max-w-xl">
            Everything listed here appears in a project on this site — nothing
            is on the list because I read about it.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <div className="panel panel-hover rounded-lg p-6 flex flex-col gap-5 h-full">
                <div>
                  <h3 className="text-lg font-display font-bold text-ink">
                    {group.title}
                  </h3>
                  <p className="text-sm text-[#6b7684] mt-1.5">
                    {group.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="panel rounded-lg p-6 mt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#153D63]">
              Selected Coursework
            </p>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
              {coursework.map((course) => (
                <p
                  key={course}
                  className="font-mono text-[12px] text-[#4b5763] border-b border-[#d2d9e1] py-1.5"
                >
                  {course}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
