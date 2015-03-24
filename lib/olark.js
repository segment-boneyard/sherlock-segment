
/**
 * Olark.
 */

exports.name = 'Olark';

exports.script = /static.olark.com/;

exports.settings = function () {
  var siteId = window.olark._.siteId;
  if (!siteId) return false;

  return { siteId: siteId };
};
