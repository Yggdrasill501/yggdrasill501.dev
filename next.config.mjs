/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/cv",
        destination: "/experience",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
