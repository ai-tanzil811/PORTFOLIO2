import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/PORTFOLIO2",
  assetPrefix: "/PORTFOLIO2/",
  images: { unoptimized: true },
};

export default nextConfig;
