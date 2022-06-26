module.exports = {
  siteMetadata: {
    title: `sora-dashboard`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/svgs\/.*\.svg/, // See below to configure properly
        },
      },
    },
  ],
};
