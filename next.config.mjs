/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
      {
        source: "/admin/manager",
        destination: "/admin/manager/profile",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
