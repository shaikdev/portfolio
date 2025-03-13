// next.config.mjs
const nextConfig = {
    output: 'export', // Enables static export
    basePath: '/myPortfolio', // Replace with your repo name
    assetPrefix: '/myPortfolio/',
    images: {
      unoptimized: true, // Required for GitHub Pages
    },
  };
  
  export default nextConfig;