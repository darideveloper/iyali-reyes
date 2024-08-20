/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/',
        permanent: true, // Set to false if you want it to be a temporary redirect
      },
    ];
  },
};

export default nextConfig;
