const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; font-src 'self' https://fonts.gstatic.com",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
