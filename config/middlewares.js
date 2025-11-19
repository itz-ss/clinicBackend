module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'x-api-secret'],
      origin: [
        "http://localhost:3000",
        "https://clinic-snowy-five.vercel.app",
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      credentials: false,
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
