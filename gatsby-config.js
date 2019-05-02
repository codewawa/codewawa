module.exports = {
  siteMetadata: {
    title: `Codewawa`,
    author: `Pracownia Projektowania Stron Internetowych w Pałacu Młodzieży w Warszawie`,
    description: `Projekt Pracowni Projektowania Stron Internetowych w Pałacu Młodzieży w Warszawie`,
    siteUrl: `https://codewawa.pl`
  },
  plugins: [
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Vampiro One`,
            subsets: [`latin-ext`],
          }
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ],
}
