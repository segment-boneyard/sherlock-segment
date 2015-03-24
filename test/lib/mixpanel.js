
/**
 * Unit tests.
 */

exports.scripts = [
  '.mxpnl.com'
];

exports.settings = [
  {
    ctx: {
      mixpanel: {
        config: {
          token: 'a',
          people: true,
          trackAllPages: true,
          trackCategorizedPages: false,
          trackNamedPages: true
        }
      }
    },
    expected: {
      token: 'a',
      people: true,
      trackAllPages: true,
      trackCategorizedPages: false,
      trackNamedPages: true
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'mixpanel/index.html',
    expected: {
      token: 'YOUR TOKEN',
      people: false,
      trackAllPages: true,
      trackCategorizedPages: false,
      trackNamedPages: true
    }
  }
];
