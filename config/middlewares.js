module.exports = [
  'strapi::logger',
  'strapi::errors',
  // {
  //   name: 'strapi::cors',
  //   config: {
  //     enabled: false,
  //     headers: ['*'],
  //     origin: [
  //       'http://localhost:3000',
  //       'https://clinic-snowy-five.vercel.app',   // frontend
  //       'https://clinicbackend-production-61e1.up.railway.app', // backend itself
  //     ],
  //     methods: ['GET', 'HEAD'], // frontend only views data
  //     keepHeaderOnError: true,
  //   },
  // },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
