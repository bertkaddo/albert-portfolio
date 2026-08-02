import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[#d2d9e1] mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p className="font-mono text-[11px] text-[#6b7684]">
          {profile.name} · {profile.role} · {profile.location}
        </p>
        <div className="flex gap-6 font-mono text-[11px] text-[#6b7684]">
          <Link href="/" className="hover:text-[#153D63] transition-colors">
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-[#153D63] transition-colors"
          >
            Projects
          </Link>
          <Link href="/about" className="hover:text-[#153D63] transition-colors">
            About
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-[#153D63] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
