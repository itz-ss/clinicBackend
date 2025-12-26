const fs = require('fs');
const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: {
        ca: fs.readFileSync(
          path.resolve(process.cwd(), 'prod-ca-2021.crt'),
          'utf8'
        ),
        rejectUnauthorized: true,
      },
    },
    pool: { min: 2, max: 10 },
  },
});
