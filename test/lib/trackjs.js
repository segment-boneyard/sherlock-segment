
/**
 * Unit tests.
 */

exports.scripts = [
  'dl1d2m8ri9v3j.cloudfront.net',
  'd2zah9y47r7bi2.cloudfront.net',
  'usage.trackjs.com'
];

exports.settings = [
  {
    ctx: {
      window: {
        _trackJs: {
          token: 'a'
        }
      }
    },
    expected: {
      token: 'a'
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'trackjs/index.html',
    expected: {
      token: 'YOUR_TOKEN'
    }
  }
];
