
/**
 * Heap.
 */

exports.name = 'Heap';

exports.categories = ['Analytics'];

exports.script = /\.heapanalytics\.com\/(js\/heap-\d+\.js)/;

exports.settings = function () {
  var appId = window.heap.appid;
  if (!appId) return false;

  return { appId: appId };
};
