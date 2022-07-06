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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
      __key: 'images',
    },
  ],
};
