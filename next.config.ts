import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  basePath: '/landing',       // <-- ضيف السطر ده هنا
  assetPrefix: '/landing',    // <-- وضيف السطر ده هنا
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;