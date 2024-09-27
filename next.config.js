/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    basePath: "/silentSpeech-ITS.github.io",
    images: {
      unoptimized: true,
    },
    reactStrictMode: true,
  };
  
  module.exports = nextConfig;