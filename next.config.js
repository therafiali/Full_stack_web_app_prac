/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "full-stack-ecommerce-clothing-web.vercel.app",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.pngitem.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
