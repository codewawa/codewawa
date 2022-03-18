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
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Vampiro One`,
    //         subsets: [`latin-ext`],
    //       },
    //       {
    //         family: `Montserrat`,
    //         variants: [`400`, `700`]
    //       }
    //     ],
    //   },
    // },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ],
}
