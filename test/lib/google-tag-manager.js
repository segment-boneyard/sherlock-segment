
/**
 * Unit tests.
 */

exports.scripts = [
  '.googletagmanager.com'
];

exports.settings = [
  {
    ctx: {
      window: {
        google_tag_manager: {
          a: true,
          b: true
        }
      }
    },
    expected: {
      containerId: 'b'
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'google-tag-manager/index.html',
    expected: {
      containerId: 'GTM-KF7RSC'
    }
  }
];
