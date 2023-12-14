/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.BASE_URL || "https://poems.theOpenSourceU.org",
  generateRobotsTxt: true,
  generateIndexSitemap: true,

  // ...other options
};
