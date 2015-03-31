
/**
 * Alexa.
 */

exports.name = 'Alexa';

exports.categories = ['Analytics'];

exports.script = /\/\/d31qbv1cthcecs\.cloudfront\.net\/atrk\.js/;

exports.settings = function () {
  var account = window._atrk_opts.atrk_acct;
  var domain = window._atrk_opts.domain;
  if (!account || !domain) return false;

  return {
    account: account,
    domain: domain
  };
};
