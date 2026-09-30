import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      // Old Squarespace URLs and duplicates
      { source: "/home", destination: "/", permanent: true },
      { source: "/home-1", destination: "/", permanent: true },
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/studio-services-1", destination: "/studio-services", permanent: true },
      { source: "/free-ai-audit", destination: "/free-ai-seo-audit", permanent: true },
      { source: "/ai-audit", destination: "/free-ai-seo-audit", permanent: true },
      { source: "/store", destination: "/order-ai-audit", permanent: true },
      { source: "/store/p/ai-readiness-audit", destination: "/order-ai-audit", permanent: true },
      { source: "/cart", destination: "/order-ai-audit", permanent: true },
      // Old blog posts, categories and tags land on the guide until posts are migrated
      { source: "/digital-guide/:path+", destination: "/digital-guide", permanent: true },
    ];
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
