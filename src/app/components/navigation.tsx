"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { profile } from "@/data/profile";

const sectionItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const pageHeight = document.body.scrollHeight - window.innerHeight;
      const progress = pageHeight > 0 ? window.scrollY / pageHeight : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));

      if (!isHome) return;
      const current = sectionItems.find((item) => {
        const el = document.getElementById(item.id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      if (current) setActiveSection(current.id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const goToSection = useCallback(
    (sectionId: string) => {
      setIsMenuOpen(false);
      if (!isHome) {
        window.location.href = `/#${sectionId}`;
        return;
      }
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    },
    [isHome],
  );

  return (
    <>
      {/* Scroll progress — reads as a linear position readout */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-white/50">
        <div
          className="h-full origin-left bg-[#153D63] transition-transform duration-150"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[rgba(244,246,248,0.94)] backdrop-blur-md border-b border-black/10 shadow-[0_8px_28px_rgba(14,20,27,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 gap-4">
            <Link href="/" className="text-left group shrink-0">
              <div className="text-lg md:text-xl font-display font-bold text-ink">
                {profile.name}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#4b5763] group-hover:text-[#153D63] transition-colors duration-200">
                {profile.navTagline}
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1 pill px-2 py-1.5">
              {sectionItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goToSection(item.id)}
                  className={`font-mono text-[10px] uppercase tracking-[0.22em] font-semibold px-3 py-2 rounded-full transition-all duration-200 ${
                    isHome && activeSection === item.id
                      ? "text-white bg-[#153D63]"
                      : "text-[#4b5763] hover:text-[#153D63] hover:bg-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="lg:hidden btn-secondary px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em]"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                Menu
              </button>
              <a
                href={profile.resumeFile}
                download
                className="btn-primary px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em]"
              >
                Resume
              </a>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden pb-5">
              <div className="panel rounded-lg p-3 grid grid-cols-2 gap-2">
                {sectionItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => goToSection(item.id)}
                    className={`font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-3 rounded font-semibold transition-all duration-200 ${
                      isHome && activeSection === item.id
                        ? "bg-[#153D63] text-white"
                        : "text-[#4b5763] hover:bg-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
