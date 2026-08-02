"use client";

import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { SimpleTypewriter } from "./typewriter";
import Reveal from "./reveal";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-28 pb-16"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-16 items-center w-full">
        <Reveal className="space-y-7" delay={80}>
          <div className="rule-label">
            <span className="section-kicker">
              Cornell B.S. ME · M.Eng. Aero
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-ink leading-[1.02]">
            <SimpleTypewriter text={profile.name} speed={95} />
          </h1>

          <p className="text-2xl md:text-3xl text-ink font-display font-semibold max-w-2xl leading-snug">
            {profile.heroLead}
          </p>

          <p className="text-lg text-[#4b5763] max-w-2xl">{profile.heroBody}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {profile.quickFacts.map((fact) => (
              <span key={fact} className="chip">
                {fact}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-1">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-11 w-11 rounded border border-[#153D63]/25 bg-white/80 flex items-center justify-center text-[#153D63] transition-all duration-200 hover:-translate-y-1 hover:border-[#153D63]"
            >
              <FaLinkedinIn className="text-lg" />
            </a>
            <a
              href="#projects"
              className="btn-secondary px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em]"
            >
              See the work
            </a>
          </div>
        </Reveal>

        <Reveal className="flex justify-center lg:justify-end" delay={190}>
          <div className="w-full max-w-[26rem] space-y-5">
            {/* Portrait leads the page. Replace /public/img/albert.jpg —
                this is the first thing anyone sees. */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-[#d2d9e1] bg-[#e2eaf3] shadow-[0_26px_64px_rgba(14,20,27,0.18)]">
              <Image
                src={profile.headshot}
                alt={profile.name}
                width={840}
                height={1050}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            <div className="panel rounded-lg p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#153D63]">
                Currently
              </p>
              <div className="mt-3 space-y-1.5 text-sm text-[#4b5763]">
                {profile.currentFocus.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <p className="mt-4 pt-4 border-t border-[#d2d9e1] font-mono text-[11px] text-[#6b7684]">
                {profile.locationNote}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
