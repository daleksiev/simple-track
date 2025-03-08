import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other config options ...
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/actions": path.resolve(__dirname, "src/components/core/actions"),
      "@/data-display": path.resolve(
        __dirname,
        "src/components/core/data-display"
      ),
      "@/data-input": path.resolve(__dirname, "src/components/core/data-input"),
      "@/layout": path.resolve(__dirname, "src/components/core/layout"),
      "@/navigation": path.resolve(__dirname, "src/components/core/navigation"),
      "@/mockup": path.resolve(__dirname, "src/components/core/mockup"),
      "@/utils": path.resolve(__dirname, "src/components/core/utils"),
    };
    return config;
  },
};

module.exports = nextConfig;
