
/**
 * Unit tests.
 */

exports.scripts = [
  'cdn.optimizely.com'
];

exports.settings = [
  {
    ctx: {
      window: {
        optimizely: {
          getProjectId: function () {
            return 'a';
          },
          getAccountId: function () {
            return 'b';
          }
        }
      }
    },
    expected: {
      projectId: 'a',
      accountId: 'b'
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'optimizely/index.html',
    expected: {
      projectId: '170430035',
      accountId: '170430035'
    }
  }
];
