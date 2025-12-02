module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: ['*'],
      origin: [
        'http://localhost:3000',
        'http://localhost:3001', // Added for doctorPortfolio development
        'https://clinic-snowy-five.vercel.app',   // frontend
        'https://clinicbackend-1.onrender.com', // backend itself
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH'], // Added more methods
      keepHeaderOnError: true,
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
