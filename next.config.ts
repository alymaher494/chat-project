import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  basePath: '/landing',
  assetPrefix: '/landing',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;