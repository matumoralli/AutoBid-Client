/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/drwtxza2l/image/upload/**/**",
      },
    ],
  },
};

module.exports = nextConfig;
