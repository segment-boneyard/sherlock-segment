
/**
 * Mixpanel.
 */

exports.name = 'Mixpanel';

exports.script = /\.mxpnl\.com/;

exports.settings = function () {
  var config = window.mixpanel.config;
  if (!config) return false;

  return {
    token: config.token,
    people: config.people,
    trackAllPages: config.trackAllPages,
    trackCategorizedPages: config.trackCategorizedPages,
    trackNamedPages: config.trackNamedPages
  };
};
