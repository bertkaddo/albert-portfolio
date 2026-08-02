import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local files in /public only — no remote loaders needed.
    formats: ["image/webp"],
  },
};

export default nextConfig;
