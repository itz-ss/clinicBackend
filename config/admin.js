module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    options: {
      expiresIn: '30d',   // keep admin login valid for 30 days
    },
  },

  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },

  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },

  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },

  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },

  /**
   * 🚀 IMPORTANT PART
   * Do NOT serve or build admin panel in production (Railway too low RAM)
   * Only serve admin locally for development
   */
  serveAdminPanel: env('NODE_ENV') === 'development',
});
