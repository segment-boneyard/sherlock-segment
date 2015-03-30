
/**
 * Drip.
 */

exports.name = 'Drip';

exports.categories = ['Email'];

exports.script = /tag.getdrip.com/;

exports.settings = function () {
  var account = window._dcs.account;
  if (!account) return false;

  return { account: account };
};
