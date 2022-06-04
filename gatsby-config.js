module.exports = {
  siteMetadata: {
    title: `William Dai's Website`,
    siteUrl: `https://www.williamdai.me`
  },
  plugins: [
            "gatsby-plugin-styled-components",
            { resolve: 'gatsby-plugin-manifest',
              options: {
                icon: 'src/images/favicon.png',
              },
            },
          ],
};