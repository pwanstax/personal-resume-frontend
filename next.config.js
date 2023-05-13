const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "officesnapshots.com",
      "cdn10.agoda.net",
      "fastwork.co",
      "miro.medium.com",
      "user-images.githubusercontent.com",
      "camo.githubusercontent.com",
      "i.ytimg.com",
      "is3-ssl.mzstatic.com",
      "user-images.githubusercontent.com",
      "i.pinimg.com",
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://images.unsplash.com https://officesnapshots.com https://cdn10.agoda.net https://fastwork.co https://miro.medium.com https://user-images.githubusercontent.com https://camo.githubusercontent.com https://i.ytimg.com https://is3-ssl.mzstatic.com https://i.pinimg.com",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
