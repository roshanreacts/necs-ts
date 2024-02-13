/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    urlImports: ["https://cdn.jsdelivr.net/gh/"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
};

module.exports = nextConfig;
