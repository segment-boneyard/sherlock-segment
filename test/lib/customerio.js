
/**
 * Unit tests.
 */

exports.scripts = [
  '.customer.io'
];

exports.settings = [
  {
    ctx: {
      document: {
        getElementById: function () {
          return {
            getAttribute: function () {
              return 'a';
            }
          };
        }
      }
    },
    expected: {
      siteId: 'a'
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'customerio/index.html',
    expected: {
      siteId: 'YOUR SITE ID HERE'
    }
  }
];
