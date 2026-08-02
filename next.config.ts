import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // Modern formats first; Next falls back to the original for older browsers.
    formats: ["image/avif", "image/webp"],
    // Matches the Tailwind breakpoints so `sizes` hints resolve to real widths.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Add remote CMS/storage hosts here when illustrations move off /public.
    remotePatterns: [],
    // The product mockups in /public/mockups are SVG. This flag only matters
    // for images Next actually serves, and `remotePatterns` is empty, so the
    // only SVGs reachable here are the ones committed to this repo. The CSP
    // below neuters scripting inside them regardless.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
