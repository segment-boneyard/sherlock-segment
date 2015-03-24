
/**
 * Unit tests.
 */

exports.scripts = [
  'https://www.fullstory.com/s/fs.js'
];

exports.settings = [
  {
    ctx: {
      window: {
        _fs_org: 'a'
      }
    },
    expected: {
      org: 'a'
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'fullstory/index.html',
    expected: {
      org: '<FS_ORG>'
    }
  }
];
