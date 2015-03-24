
/**
 * Unit tests.
 */

exports.scripts = [
  'api.intercom.io/api/js/library.js',
  'https://widget.intercom.io/widget/'
];

exports.settings = [
  {
    ctx: {
      window: {
        intercomSettings: {
          app_id: 'a'
        }
      }
    },
    expected: {
      appId: 'a'
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'intercom/index.html',
    expected: {
      appId: '<APP_ID>'
    }
  }
];
