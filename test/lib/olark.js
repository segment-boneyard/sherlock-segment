
/**
 * Unit tests.
 */

exports.scripts = [
  'http://static.olark.com/jsclient/loader0.js'
];

exports.settings = [
  {
    ctx: {
      window: {
        olark: {
          _: {
            siteId: '1232-123-12-112'
          }
        }
      }
    },
    expected: {
      siteId: '1232-123-12-112'
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'olark/index.html',
    expected: {
      siteId: '6185-174-10-1457'
    }
  }
];
