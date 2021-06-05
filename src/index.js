const {
  initializeAndTrackGoogleAnalytics,
  initializeAndTrackGoogleTagManager,
  initializeAndTrackFacebookPixel,
  initializeAndTrackLinkedIn
} = require('./services')

exports.initializeAndTrack = (location) => {
  console.log( window.gatsbyPluginGDPRCookiesOptions);
  const options = window.gatsbyPluginGDPRCookiesOptions

  if (location === undefined || location === null) {
    console.error('Please provide a reach router location to the initializeAndTrack function.')
  } else {
    initializeAndTrackGoogleAnalytics(options.googleAnalytics, location)
    initializeAndTrackGoogleTagManager(options.googleTagManager, location)
    initializeAndTrackFacebookPixel(options.facebookPixel)
    initializeAndTrackLinkedIn(options.linkedIn)
  }
}
