/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dx-web2.vercel.app'],
    unoptimized: true
  },
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './'),
    };
    return config;
  },
}

module.exports = nextConfig
