/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    // declare here all your variables
    BACKEND_URL: process.env.BACKEND_URL,
    SOCKET_URL: process.env.SOCKET_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/drwtxza2l/image/upload/**/**",
      },
      {
        protocol: "https",
        hostname: "s.gravatar.com",
        port: "",
        pathname: "/avatar/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/random/300/?user",
      },
    ],
  },
};

module.exports = nextConfig;
