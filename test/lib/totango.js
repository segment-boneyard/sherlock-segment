
/**
 * Unit tests.
 */

exports.scripts = [
  'https://s3.amazonaws.com/totango-cdn/totango2.js'
];

exports.settings = [
  {
    ctx: {
      window: {
        totango_options: {
          service_id: 'a'
        }
      }
    },
    expected: {
      serviceId: 'a'
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'totango/index.html',
    expected: {
      serviceId: 'SP-0000-00'
    }
  }
];
