import type { Metadata } from "next";

/* Fonts are self-hosted through @fontsource rather than fetched from
   Google at build time. This keeps `npm run build` working offline and
   removes a third-party request from every page load. */
import "@fontsource-variable/sora";
import "@fontsource-variable/inter";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";

import "./globals.css";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.name} — Mechanical & Aerospace Engineer`,
  description:
    "Portfolio of Albert Addo, a Cornell-trained mechanical and aerospace engineer working across test hardware, physics-based simulation, and structural analysis.",
  keywords:
    "Albert Addo, Aerospace Engineer, Mechanical Engineer, Cornell University, Test Engineering, ANSYS, MATLAB, Python, Wind Tunnel, Propulsion, Finite Element Analysis",
  openGraph: {
    title: `${profile.name} — Mechanical & Aerospace Engineer`,
    description:
      "Test hardware, physics-based simulation, and structural analysis — selected engineering case studies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}
