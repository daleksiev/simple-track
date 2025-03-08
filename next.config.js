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
      "@/layout": path.resolve(__dirname, "src/components/core/layout"),
      "@/navigation": path.resolve(__dirname, "src/components/core/navigation"),
      "@/mockup": path.resolve(__dirname, "src/components/core/mockup"),
    };
    return config;
  },
};

module.exports = nextConfig;
