
/**
 * Unit tests.
 */

exports.scripts = [
  '.heapanalytics.com/js/heap-123.js'
];

exports.settings = [
  {
    ctx: {
      window: {
        heap: {
          appid: 'a'
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
    fixture: 'heap/index.html',
    expected: {
      appId: '1535634150'
    }
  }
];
