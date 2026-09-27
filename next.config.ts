import type { NextConfig } from "next";

/**
 * Next.js configuration for the Zain Global manpower website.
 *
 * Remote images are allowed because the workforce photography is served from
 * Pexels. If you self-host the images in /public, you can delete `images`.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
};

export default nextConfig;
