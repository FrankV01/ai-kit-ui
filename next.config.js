const hashArray = ["'sha256-Q+8tPsjVtiDsjF/Cv8FMOpg2Yg91oKFKDAJat1PPb2g='"];
//
// const styleSource = [
//   "",
//   " ",
//   // "'sha256-Q+8tPsjVtiDsjF/Cv8FMOpg2Yg91oKFKDAJat1PPb2g='",
//   // "'sha256-WBc5yYsTY9j6NBbhtTB+cssjYFFZIaK52GGi2jDFAZs='",
//   // // "'sha256-WBc5yYsTY9j6NBbhtTB+cssjYFFZIaK52GGi2jDFAZs='",
//   // // "'sha256-WBc5yYsTY9j6NBbhtTB+cssjYFFZIaK52GGi2jDFAZs='",
//   //
//   // "'sha256-YoiTZbP35ftJSuqcXHIQKR0GkOgvwuSrIESq73qEh+4='",
//   // "'sha256-kkGuidKZmpfLHMnUk9YsbohrzgU0jeTSFi89bS2wj9A='",
//   // "'sha256-cx9IcP4FLgfcIWC6umasM7vJD+AVUJIn6EQVeZMO84U='",
// ].join(" ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // TLDR: This is needed for better security but it blocks things on me.
          //  We have a lot of things inline right now. We can either get this working or move those to a file.
          //
          // {
          //   key: "Content-Security-Policy",
          //   value: `default-src 'self' https://www.googletagmanager.com; img-src 'self' https://mirrors.creativecommons.org; media-src 'self' https://mirrors.creativecommons.org; script-src 'self' https://mirrors.creativecommons.org unsafe-inline unsafe-eval; style-src 'self' unsafe-inline;`,
          // },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mirrors.creativecommons.org",
        port: "",
        pathname: "/presskit/icons/**",
      },
    ],
  },
};

module.exports = nextConfig;
