"use strict";
const cloudinary = require("cloudinary").v2;

module.exports = {
  async afterUpdate(event) {
    const achievementId = event.result.id;

    // Fetch full entry with photos relation
    const achievement = await strapi.entityService.findOne(
      "api::achievement.achievement",
      achievementId,
      { populate: ["photos"] }
    );

    const achievementName = achievement.Name?.trim();
    const pdfFiles = achievement.photos;

    if (!achievementName || !pdfFiles?.length) {
      console.log("⏳ No PDF found — skipping");
      return;
    }

    const processed = [];

    for (const file of pdfFiles) {
      if (file.mime !== "application/pdf") continue;

      const pdfName = file.name.replace(".pdf", "").trim();
      const publicId = file.provider_metadata.public_id;

      // Get number of pages
      const details = await cloudinary.api.resource(publicId, {
        pages: true,
      });
      const totalPages = details.pages;

      const pages = [];

      for (let i = 1; i <= totalPages; i++) {
        const url = cloudinary.url(publicId, {
          page: i,
          format: "jpg",
          quality: "auto",
          folder: `pdf_pages/${achievementName}/${pdfName}`,
        });
        pages.push({ page: i, url });
      }

      processed.push({ pdfName, pages });
    }

    // Save results
    await strapi.db.query("api::achievement.achievement").update({
      where: { id: achievementId },
      data: { processed_pages: processed },
    });
// console.log("📌 Lifecycle triggered");
// console.log("📌 Achievement Name:", achievementName);
// console.log("📌 PDF Files:", pdfFiles);

    // console.log(`✅ PDF pages generated for Achievement: ${achievementName}`);
  },
};
