/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // The combined GovTech case study was split into PLRA and KPK pages.
      {
        source: "/work/govtech-revenue-property",
        destination: "/work/plra-land-records",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
