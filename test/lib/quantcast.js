
/**
 * Unit tests.
 */

exports.scripts = [
  'http://edge.quantserve.com/quant.js'
];

exports.settings = [
  {
    ctx: {
      window: {
        __qc: {
          qopts: {
            qacct: 'p-23423sd'
          }
        }
      }
    },
    expected: {
      pCode: 'p-23423sd'
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'quantcast/index.html',
    expected: {
      pCode: 'p-test123'
    }
  }
];
