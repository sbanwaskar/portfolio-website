// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // Required for static export with <img> tags
    },
  }
  
  module.exports = nextConfig
  