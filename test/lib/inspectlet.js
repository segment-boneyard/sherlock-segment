
/**
 * Unit tests.
 */

exports.scripts = [
  'https://cdn.inspectlet.com/inspectlet.js'
];

exports.settings = [
  {
    ctx: {
      window: {
        __insp: {
          wid: 21923940
        }
      }
    },
    expected: {
      wid: 21923940
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'inspectlet/index.html',
    expected: {
      wid: 3456789878
    }
  }
];
