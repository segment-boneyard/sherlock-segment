
/**
 * Unit tests.
 */

exports.scripts = [
  'api.lytics.io'
];

exports.settings = [
  {
    ctx: {
      window: {
        jstag: {
          config: {
            cid: 'a'
          }
        }
      }
    },
    expected: {
      cid: 'a'
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'lytics/index.html',
    expected: {
      cid: ['1eeb83463b589689932f5ca5dc44d2bb']
    }
  }
];
