module.exports = {
  siteMetadata: {
    title: "ANCOL Website",
    description: "This is College WebSite",
    author: "@vaishnavi",
    siteUrl: "https://testing-strapi-gatsby-build.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        contentTypes: [
          `features`,
          `announcements`,
          `events`,
          `news`,
          `logos`,
          `academics`,
        ],
        singleTypes: [`about`],
      },
    },
  ],
}
