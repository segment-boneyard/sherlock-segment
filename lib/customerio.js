
/**
 * Customer.io.
 */

exports.name = 'Customer.io';

exports.categories = ['Email'];

exports.script = /\.customer\.io/;

exports.settings = function () {
  var script = document.getElementById('cio-tracker');
  var siteId = script.getAttribute('data-site-id');
  if (!siteId) return false;

  return { siteId: siteId };
};
