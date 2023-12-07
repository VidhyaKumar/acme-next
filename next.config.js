/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "raw.githubusercontent.com" }],
  },
  experimental: {
    ppr: true,
  },
};

module.exports = nextConfig;
