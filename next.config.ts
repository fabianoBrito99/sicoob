const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development", 
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  experimental: {
    appDir: true, 
  },
  output: "standalone",
});

module.exports = nextConfig;
