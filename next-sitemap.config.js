/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // TODO: Make this more dynamic. For now, it's fine.
  // Under_Dev: Need to put the serve-url in storage some place.
  //  Is this use during run time or build time?
  siteUrl: "https://poems.theOpenSourceU.org", // Ok, so where can we store this? Where else might we need this?
  generateRobotsTxt: true,
  generateIndexSitemap: true,

  // ...other options
};
