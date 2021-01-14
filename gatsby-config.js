module.exports = {
  siteMetadata: {
    title: `Caspart package design ontwerp verpakkingen POS illustratie product design illustratie`,
    description: `Bent u op zoek naar een ontwerp voor verpakkingen, POS, product design of een illustratie? Onze jarenlange ervaring zal u zeker van pas komen!`,
    author: `@Caspart`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-2Y1B4V01EH",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Defers execution of google analytics script after page load
        defer: false,
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-aphrodite',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    {
          resolve: "gatsby-plugin-transition-link",
          options: {
              layout: require.resolve(`./src/components/layout.js`)
          }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/blauwe-engel.png`, // This path is relative to the root of the site.
      },
      
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
