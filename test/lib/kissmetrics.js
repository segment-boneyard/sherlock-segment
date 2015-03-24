
/**
 * Unit tests.
 */

exports.scripts = [
  'doug1izaerwt3.cloudfront.net',
  'd1n7kk4vfnecsc.cloudfront.net',
  'd1991e1bwxgrnr.cloudfront.net'
];

exports.settings = [
  {
    ctx: {
      window: {
        _kmk: 'a'
      }
    },
    expected: {
      apiKey: 'a'
    }
  },
  {
    ctx: {
      window: {
        KM_KEY: 'b'
      }
    },
    expected: {
      apiKey: 'b'
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'kissmetrics/index.html',
    expected: {
      apiKey: '57a0897d0c675651f450229d65ccf4a605112804'
    }
  }
];
