module.exports = {
  siteMetadata: {
    title: `A sample site using gatsby-source-wordpress`,
    subtitle: `Data fetched from a site hosted on wordpress.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `dev-gatbsyjswp.pantheonsite.io`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
