"use client";

import {
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileDownload,
} from "react-icons/fa";
import Reveal from "./reveal";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="rule-label">
              <span className="section-kicker">Contact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ink leading-tight">
              Let&apos;s talk about hard problems.
            </h2>
          </div>
          <p className="text-lg text-[#4b5763] max-w-xl">
            Open to early-career engineering roles in aerospace and defense —
            test, simulation, propulsion, structures, and design.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-6 items-start">
          <Reveal delay={70}>
            <div className="panel rounded-lg p-8 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded border border-[#153D63]/25 bg-white flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-[#153D63]" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#6b7684]">
                      Email
                    </p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-ink hover:text-[#1F5C93] transition-colors break-all"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded border border-[#153D63]/25 bg-white flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-[#153D63]" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#6b7684]">
                      Location
                    </p>
                    <p className="text-ink">{profile.locationNote}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 btn-secondary px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em]"
                >
                  <FaLinkedinIn />
                  LinkedIn
                </a>
                <a
                  href={profile.resumeFile}
                  download
                  className="flex items-center gap-2 btn-primary px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em]"
                >
                  <FaFileDownload />
                  Resume
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="panel rounded-lg p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#153D63]">
                What I&apos;m looking for
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Test engineering and instrumentation",
                  "Simulation, modeling, and analysis",
                  "Propulsion and thermal-fluid systems",
                  "Structures and mechanical design",
                  "GNC and flight dynamics",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[#4b5763]">
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#153D63] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
