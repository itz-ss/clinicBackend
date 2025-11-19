module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          folder: (ctx) => {
            try {
              // Auto-folder by content type — Events, Podcasts, Testimonials etc.
              const contentType = ctx?.info?.related?.model || "general";
              return `spine-care/${contentType}`;
            } catch {
              return "spine-care/general";
            }
          },
        },
        delete: {},
      },
    },
  },
});
