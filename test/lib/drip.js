
/**
 * Unit tests.
 */

exports.scripts = [
  'https://tag.getdrip.com/8838307.js'
];

exports.settings = [
  {
    ctx: {
      window: {
        _dcs: {
          account: 'a'
        }
      }
    },
    expected: {
      account: 'a'
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'drip/index.html',
    expected: {
      account: '2522147'
    }
  }
];
