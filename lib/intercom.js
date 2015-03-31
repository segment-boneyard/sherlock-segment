
/**
 * Intercom.
 */

exports.name = 'Intercom';

exports.categories = ['Email', 'Helpdesks', 'Customer Success'];

exports.script = /widget.intercom.io\/widget\/|api\.intercom\.io\/api\/js\/library\.js/;

exports.settings = function () {
  var appId;

  if (window.intercomSettings) appId = window.intercomSettings.app_id;
  if (window.analytics) appId = window.analytics._integrations.Intercom.options.appId;
  if (!appId) return false;

  return { appId: appId };
};
