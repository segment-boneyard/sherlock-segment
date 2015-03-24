
/**
 * Unit tests.
 */

exports.scripts = [
  'google-analytics.com/analytics.js',
  'google-analytics.com/urchin.js',
  'google-analytics.com/ga_exp.js',
  'google-analytics.com/ga.js',
  'google-analytics.com/u/ga_debug.js',
  'google-analytics.com/u/ga_beta.js',
  'google-analytics.com/u/ga.js',
  'google-analytics.com/cx/api.js',
  'google-analytics.com/collect'
];

exports.settings = [
  // universal script
  {
    ctx: {
      window: {
        ga: {
          getAll: function () {
            return [
              {
                get: function () {
                  return 'UA-XXXXX-XX';
                }
              }
            ];
          }
        }
      }
    },
    expected: {
      trackingId: 'UA-XXXXX-XX'
    }
  },

  // classic script
  {
    ctx: {
      window: {
        _gat: {
          _getTrackerByName: function () {
            return {
              _getAccount: function () {
                return 'UA-XXXXX-XX';
              }
            };
          }
        }
      }
    },
    expected: {
      trackingId: 'UA-XXXXX-XX'
    }
  }
];

/**
 * Integration tests.
 */

exports.integration = [
  // universal script
  {
    fixture: 'google-analytics/classic.html',
    expected: {
      trackingId: 'UA-XXXXX-X'
    }
  },

  // classic script
  {
    fixture: 'google-analytics/universal.html',
    expected: {
      trackingId: 'UA-XXXX-Y'
    }
  }
];
