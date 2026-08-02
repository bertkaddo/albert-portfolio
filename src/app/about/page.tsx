import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navigation from "@/app/components/navigation";
import Footer from "@/app/components/footer";
import Reveal from "@/app/components/reveal";
import { profile, experience, coursework } from "@/data/profile";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
  description:
    "Background, education, and how Albert Addo approaches engineering problems.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 btn-secondary px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] mb-10"
          >
            <FaArrowLeft />
            <span>Back</span>
          </Link>

          <Reveal>
            <div className="rule-label mb-5">
              <span className="section-kicker">About</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-ink leading-[1.06]">
              The full story.
            </h1>
          </Reveal>

          <Reveal delay={70}>
            <div className="mt-10 space-y-6 text-[17px] leading-[1.75] text-[#3a4552]">
              <p>
                I studied mechanical engineering at Cornell and stayed for a
                master&apos;s in aerospace, finishing the B.S. in May 2025 and
                the M.Eng. that December. Along the way I was given the Sibley
                School&apos;s Outstanding Senior Award. I now work as a sales
                engineer at Embraer Executive Jets in Melbourne, Florida, doing
                aircraft performance analysis and building the internal Python
                tools that make that analysis usable by people who are not
                engineers.
              </p>

              <p>
                The thread through most of my work is the gap between what a
                model predicts and what an instrument reads. The first time that
                became concrete was the summer I spent in Cornell&apos;s Wind
                Tunnel Studio. Four tunnels had aged into producing invalid
                data, and I owned the piece of the rebuild that replaced a fixed
                pitot-static probe with a hot-wire traverse — designing it,
                machining the mounts myself, wiring the acquisition chain, and
                then surveying 154 points across the test section to prove the
                flow was uniform. That project taught me that a measurement is
                only as trustworthy as the hardware holding the sensor still.
              </p>

              <p>
                The same summer produced the other half of the lesson. The team
                ran a turbine campaign through the rebuilt tunnel and measured
                peak power roughly 22% below prediction. I wrote a blade load
                and deflection model from scratch to test whether blade flex
                explained it — blade element momentum theory closed as a
                constrained minimisation, section properties from a
                Green&apos;s-theorem boundary integral, a piecewise
                Euler–Bernoulli beam solver. The answer was no: tip deflection
                came out at about 1.9% of span, far too small to account for the
                shortfall. A model that rules out your favourite hypothesis is
                doing its job.
              </p>

              <p>
                My M.Eng. work with Professor Jane Wang pushed further in the
                analytical direction. I derived the nonlinear equations of
                motion for a flapping-wing flyer from Newton&apos;s second law
                and blade-element aerodynamics, built the simulation in Python,
                found a hovering-capable set of wing kinematics by parameter
                study, and then trained a PPO agent to search for them on its
                own. The agent improved substantially but did not reach
                sustained hover — and being able to say exactly why, and to
                point at the reward shaping rather than the physics, is the part
                of that project I am most confident about.
              </p>

              <p>
                I like problems where the answer is checkable. I like being able
                to say what a number is worth and what it is not worth. And I
                like building the thing that produces the number in the first
                place.
              </p>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="mt-14 pt-10 border-t border-[#d2d9e1]">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#153D63] mb-6">
                Education
              </p>
              <div className="space-y-6">
                {profile.education.map((item) => (
                  <div key={item.degree}>
                    <p className="font-mono text-[11px] text-[#6b7684]">
                      {item.period} · {item.location}
                    </p>
                    <p className="text-xl font-display font-bold text-ink mt-1.5">
                      {item.degree}
                    </p>
                    <p className="text-[#4b5763]">{item.school}</p>
                    <p className="text-sm text-[#6b7684] mt-1">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-12 pt-10 border-t border-[#d2d9e1]">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#153D63] mb-6">
                Experience
              </p>
              <div className="space-y-7">
                {experience.map((exp) => (
                  <div key={exp.org}>
                    <p className="font-mono text-[11px] text-[#6b7684]">
                      {exp.period} · {exp.location}
                    </p>
                    <p className="text-lg font-display font-bold text-ink mt-1.5">
                      {exp.role}
                    </p>
                    <p className="text-[#4b5763] text-sm">{exp.org}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={170}>
            <div className="mt-12 pt-10 border-t border-[#d2d9e1]">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#153D63] mb-5">
                Selected Coursework
              </p>
              <div className="grid sm:grid-cols-2 gap-x-8">
                {coursework.map((course) => (
                  <p
                    key={course}
                    className="font-mono text-[12px] text-[#4b5763] border-b border-[#d2d9e1] py-2"
                  >
                    {course}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-14 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2.5 btn-primary px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em]"
              >
                See the projects
                <FaArrowRight />
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2.5 btn-secondary px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em]"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
