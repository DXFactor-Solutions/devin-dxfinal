/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  images: {
    domains: ['dx-web2.vercel.app'],
    unoptimized: true
  },
  trailingSlash: false,
  // experimental: {
  //   optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  // },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };
    
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          default: {
            ...config.optimization.splitChunks?.cacheGroups?.default,
            enforce: true,
          },
        },
      },
    };
    
    return config;
  },
}

module.exports = nextConfig
