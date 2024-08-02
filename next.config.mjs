/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
