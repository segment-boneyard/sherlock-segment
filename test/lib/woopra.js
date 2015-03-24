
/**
 * Unit tests.
 */

exports.scripts = [
  'http://static.woopra.com/js/w.js'
];

exports.settings = [
  {
    ctx: {
      window: {
        woopraTracker: {
          config: function () {
            return {
              domain: 'test.com',
              cookie_name: 'hello',
              cookie_path: '/',
              ping: true,
              ping_interval: 12000,
              idle_timeout: 300000,
              download_tracking: true,
              outgoing_tracking: false,
              outgoing_ignore_subdomain: true,
              download_pause: 200,
              outgoing_pause: 400,
              ignore_query_url: false,
              hide_campaign: true
            };
          }
        }
      }
    },
    expected: {
      domain: 'test.com',
      cookieName: 'hello',
      cookiePath: '/',
      ping: true,
      pingInterval: 12000,
      idleTimeout: 300000,
      downloadTracking: true,
      outgoingTracking: false,
      outgoingIgnoreSubdomains: true,
      downloadPause: 200,
      outgoingPause: 400,
      ignoreQueryUrl: false,
      hideCampaign: true
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'woopra/index.html',
    expected: {
      domain: 'test.com',
      cookieName: 'hello',
      cookiePath: '/',
      ping: true,
      pingInterval: 12000,
      idleTimeout: 300000,
      downloadTracking: true,
      outgoingTracking: false,
      outgoingIgnoreSubdomains: true,
      downloadPause: 200,
      outgoingPause: 400,
      ignoreQueryUrl: false,
      hideCampaign: true
    }
  }
];
