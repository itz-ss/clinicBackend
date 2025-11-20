module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      origin: [
          "http://localhost:3000",
          "https://clinic-snowy-five.vercel.app",
          "https://clinicbackend-production-61e1.up.railway.app",
          /^https:\/\/clinic-snowy-five-.*\.vercel\.app$/,
        ],

      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      keepHeadersOnError: true,
    },
  },
  "strapi::security",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
