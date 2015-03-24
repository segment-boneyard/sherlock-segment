
/**
 * Unit tests.
 */

exports.scripts = [
  'api.amplitude.com',
  'd24n15hnbwhuhn.cloudfront.net'
];

exports.settings = [
  {
    ctx: {
      window: {
        amplitude: {
          options: {
            apiKey: 'a'
          }
        }
      }
    },
    expected: {
      apiKey: 'a'
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'amplitude/index.html',
    expected: {
      apiKey: 'ad3c426eb736d7442a65da8174bc1b1b'
    }
  }
];
