
/**
 * Inspectlet.
 */

exports.name = 'Inspectlet';

exports.categories = ['User Testing'];

exports.script = /cdn.inspectlet.com/;

exports.settings = function () {
  var wid = window.__insp.wid;
  if (!wid) return false;

  return { wid: wid };
};
