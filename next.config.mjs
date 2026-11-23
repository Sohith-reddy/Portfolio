/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirect the default Vercel URL to the custom domain
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
