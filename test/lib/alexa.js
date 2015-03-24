
/**
 * Unit tests.
 */

exports.scripts = [
  '//d31qbv1cthcecs.cloudfront.net/atrk.js'
];

exports.settings = [
  {
    ctx: {
      window: {
        _atrk_opts: {
          atrk_acct: 'a',
          domain: 'b'
        }
      }
    },
    expected: {
      account: 'a',
      domain: 'b'
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'alexa/index.html',
    expected: {
      account: 'mWuej1aAkN00qu',
      domain: 'segment.io'
    }
  }
];
