"use client";

import Link from "next/link";
import Reveal from "./reveal";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
          <Reveal className="space-y-7" delay={50}>
            <div className="rule-label">
              <span className="section-kicker">About</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-ink leading-tight">
              Bridging the gap between theory and practice.
            </h2>

            <p className="text-lg text-[#4b5763]">
              I&apos;m a mechanical and aerospace engineer who works at the seam
              between hardware and analysis. That has meant machining a traverse
              on a manual mill and writing the CFD that justified its shape;
              deriving flapping-wing equations of motion in SymPy and then
              training an agent against them; running an engine on a test stand
              and reducing the pressure traces afterward.
            </p>

            <p className="text-lg text-[#4b5763]">
              What ties it together is a preference for closing the loop. A
              measurement without a model is a number; a model without a
              measurement is a hypothesis. The projects here are mostly cases
              where I got to hold both ends — and a few where the two disagreed,
              which is usually where the real work starts.
            </p>

            <div className="panel rounded-lg p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#153D63]">
                Focus Areas
              </p>
              <ul className="mt-4 space-y-2.5">
                {profile.focusAreas.map((area) => (
                  <li key={area} className="flex gap-3 text-[#4b5763]">
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#153D63] shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#153D63] border-b border-[#153D63]/40 pb-1 font-mono text-[10px] uppercase tracking-[0.24em] transition-colors duration-200 hover:border-[#153D63]"
            >
              <span>Read the full story</span>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </Reveal>

          <Reveal className="space-y-5" delay={130}>
            <div className="panel rounded-lg p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#153D63]">
                Education
              </p>
              <div className="mt-5 space-y-5">
                {profile.education.map((item) => (
                  <div
                    key={item.degree}
                    className="border-b border-[#d2d9e1] pb-5 last:border-b-0 last:pb-0"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6b7684]">
                      {item.period}
                    </p>
                    <p className="text-lg font-display font-bold text-ink mt-2">
                      {item.degree}
                    </p>
                    <p className="text-[#4b5763]">{item.school}</p>
                    <p className="text-sm text-[#6b7684] mt-1">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel rounded-lg p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#153D63]">
                Availability
              </p>
              <p className="text-ink font-display font-semibold text-lg mt-3">
                {profile.availability}
              </p>
              <p className="text-sm text-[#6b7684] mt-1">
                {profile.locationNote}
              </p>
              <p className="text-sm text-[#6b7684] mt-3">
                U.S. citizen — no sponsorship required.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
