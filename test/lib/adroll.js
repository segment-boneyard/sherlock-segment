
/**
 * Unit tests.
 */

exports.scripts = [
  'http://s.adroll.com/j/roundtrip.js',
  'https://s.adroll.com/j/roundtrip.js'
];

exports.settings = [
  {
    ctx: {
      window: {
        adroll_adv_id: 'a',
        adroll_pix_id: 'b'
      }
    },
    expected: {
      advId: 'a',
      pixId: 'b'
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  {
    fixture: 'adroll/index.html',
    expected: {
      advId: 'FSQJWMMZ2NEAZH6XWKVCNO',
      pixId: 'N6HGWT4ALRDRXCAO5PLTB6'
    }
  }
];
