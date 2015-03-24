
/**
 * Unit tests.
 */

exports.scripts = [
  'http://d26b395fwzu5fz.cloudfront.net/abc123/keen.min.js',
  'https://d26b395fwzu5fz.cloudfront.net/def456/keen.min.js'
];

exports.settings = [
  {
    ctx: {
      window: {
        client: {
          projectId: function () {
            return 'a';
          },
          writeKey: function () {
            return 'b';
          }
        }
      }
    },
    expected: {
      projectId: 'a',
      writeKey: 'b'
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'keenio/index.html',
    expected: {
      projectId: '5408d3f4e875963a9a2e60f7',
      writeKey: 'd258e01d5bb452dcc244b1b458d26b891a72599edae9291d49de6fb365c2a916e35b740331ab1aa0b7a30845d34f0c09f3c560ba59a6f810e49fe13eeeb8dda98b9ee9deae8ca4bf3f6ecd3950ba455ccedd514e1327d2026eac5446168d60723aedcf5a8899c5888b4878527eaafd8c'
    }
  }
];
