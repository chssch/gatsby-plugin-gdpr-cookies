export const defaultOptions = {
  environments: [`production`],
  googleAnalytics: {
    cookieName: `gatsby-gdpr-google-analytics`,
    anonymize: true,
    allowAdFeatures: false
  },
  googleTagManager: {
    cookieName: `gatsby-gdpr-google-tagmanager`,
    dataLayerName: `dataLayer`,
    routeChangeEvent: `gatsbyRouteChange`
  },
  facebookPixel: {
    cookieName: `gatsby-gdpr-facebook-pixel`
  },
  linkedIn: {
    cookieName: `gatsby-gdpr-linkedin`
  }
}
