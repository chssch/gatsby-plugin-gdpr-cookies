const {
  validGTMTrackingId,
  getCookie
} = require('../helper')

// TODO: https://github.com/floriangaechter/gatsby-plugin-linkedin-insight/blob/master/src/gatsby-ssr.js

exports.addLinkedIn = ({ trackingId, dataLayerName }, environmentParamStr) => {
  return new Promise((resolve, reject) => {
    if (window.gatsbyPluginGDPRCookiesGoogleTagManagerAdded) return resolve(true)

    /* eslint-disable */
    if (process.env.NODE_ENV === `production` || includeInDevelopment) {
    setPostBodyComponents([
      <React.Fragment key="gatsby-plugin-linkedin-insight">
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: stripIndent`
                _linkedin_partner_id = "${trackingId}";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);`
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: stripIndent`
                (function () {
                    var s = document.getElementsByTagName("script")[0];
                    var b = document.createElement("script");
                    b.type = "text/javascript";
                    b.async = true;
                    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                    s.parentNode.insertBefore(b, s);
                })();`
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: `none` }}
            alt=""
            src={`https://dc.ads.linkedin.com/collect/?pid=${trackingId}&fmt=gif`}
          />
        </noscript>
      </React.Fragment>
    ]);
  }
   /* eslint-enable */



    window.gatsbyPluginGDPRCookiesGoogleTagManagerAdded = true

    resolve(true)
  });
}

exports.initializeGoogleTagManager = (options) => {
  // console.log('initing tag manager');
  // if (
  //   !window.gatsbyPluginGDPRCookiesGoogleTagManagerInitialized &&
  //   getCookie(options.cookieName) === `true` &&
  //   validGTMTrackingId(options)
  // ) {
  //   window.dataLayer = window.dataLayer || [];
  //   window.gtag = function(){window.dataLayer.push(arguments);}
  //   window.gtag('js', new Date())
  //
  //   let gaAnonymize = options.anonymize
  //   let gaAllowAdFeatures = options.allowAdFeatures
  //   gaAnonymize = gaAnonymize !== undefined ? gaAnonymize : true
  //   gaAllowAdFeatures = gaAllowAdFeatures !== undefined ? gaAllowAdFeatures : true
  //
  //   window.gtag('config', options.trackingId, {
  //     'anonymize_ip': gaAnonymize,
  //     'allow_google_signals': gaAllowAdFeatures
  //   })
  // }
}

exports.trackGoogleTagManager = (options, location) => {
  // console.log('tracking tag manager');
  // if (
  //   getCookie(options.cookieName) === `true` &&
  //   validGTMTrackingId(options) &&
  //   typeof window.gtag === "function"
  // ) {
  //   const pagePath = location ? location.pathname + location.search + location.hash : undefined
  //   window.gtag(`event`, `page_view`, { page_path: pagePath })
  // }

  // setTimeout(() => {
  //   const data = options.dataLayerName
  //     ? window[options.dataLayerName]
  //     : window.dataLayer
  //
  //   if (typeof data === `object`) {
  //     const eventName = options.routeChangeEvent || `gatsbyRouteChange`
  //     data.push({ event: eventName })
  //   }
  // }, 50)
}
