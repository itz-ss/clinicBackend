/**
 * Custom middleware — updated for PUBLIC READ-ONLY API
 * No secret header, no authentication required for API routes.
 */

module.exports = async (ctx, next) => {
  // Always allow access (API is public read-only)
  await next();
};


/**
 * ────────────────────────────────────────────────────────────────
 * OLD SECRET-HEADER SECURITY (NO LONGER USED — COMMENTED, NOT REMOVED)
 * ────────────────────────────────────────────────────────────────
 */

// module.exports = (config, { strapi }) => {
//   return async (ctx, next) => {

//     // Allow Admin Panel and file serving
//     if (
//       ctx.request.url.startsWith("/admin") ||
//       ctx.request.url.startsWith("/uploads")
//     ) {
//       return next();
//     }

//     const secret = ctx.request.header["x-api-secret"];

//     console.log("Header received:", ctx.request.header["x-api-secret"]);
//     console.log("Backend secret:", process.env.API_SECRET);

//     if (secret !== process.env.API_SECRET) {
//       return ctx.unauthorized("Access blocked: Invalid API Secret");
//     }

//     await next();
//   };
// };
