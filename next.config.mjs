// next.config.mjs
const nextConfig = {
    output: 'export', // Enables static export
    basePath: '/portfolio', // Replace with your repo name
    assetPrefix: '/portfolio/',
    images: {
      unoptimized: true, // Required for GitHub Pages
    },
  };
  
  export default nextConfig;