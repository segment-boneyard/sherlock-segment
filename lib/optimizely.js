
/**
 * Optimizely.
 */

exports.name = 'Optimizely';

exports.categories = ['A/B Testing', 'Personalization'];

exports.script = /cdn.optimizely.com/;

exports.settings = function () {
  var projectId = window.optimizely.getProjectId();
  var accountId = window.optimizely.getAccountId();
  if (!projectId || !accountId) return false;

  return {
    projectId: projectId,
    accountId: accountId
  };
};
