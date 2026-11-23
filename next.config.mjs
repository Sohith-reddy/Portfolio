/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "sohith-portfolio.vercel.app" }],
        destination: "https://www.sohithreddy.dev/:path*",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;