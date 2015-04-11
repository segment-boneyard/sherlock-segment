
/**
 * Lytics.
 */

exports.name = 'Lytics';

exports.script = /api\.lytics\.io/;

exports.settings = function () {
  var config = window.jstag.config;
  if (!config) return false;

  return {
    cid: config.cid,
    tagid: config.tagid,
    straem: config.stream
  };
};
