import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "1207866.us16.myftpupload.com",
      },
      {
        protocol: "https",
        hostname: "*.myftpupload.com",
      },
      {
        protocol: "http",
        hostname: "*.myftpupload.com",
      },
    ],
  },
};

export default nextConfig;
