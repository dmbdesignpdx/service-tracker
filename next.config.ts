import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: false,
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
