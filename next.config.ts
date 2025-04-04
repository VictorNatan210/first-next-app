import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL('https://avatars.githubusercontent.com')],
  },
};

export default nextConfig;
