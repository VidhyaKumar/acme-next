/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [{ hostname: "raw.githubusercontent.com" }],
  },
}

module.exports = nextConfig
