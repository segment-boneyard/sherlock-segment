
/**
 * Dependencies.
 */

var each = require('each-module');
var path = require('path');

/**
 * A little automation.
 */

var integrations = [];

each(path.resolve(__dirname, 'lib'), function (name, mod) {
  integrations.push(mod);
});

/**
 * Single export.
 */

module.exports = integrations;
