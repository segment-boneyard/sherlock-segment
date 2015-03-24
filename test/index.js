
/**
 * Module dependencies.
 */

var assert = require('assert');
var clone = require('clone');
var each = require('each-module');
var integrations = require('..');
var path = require('path');
var server = require('./server/index.js');
var Sherlock = require('s-sherlock');
var url = require('url');
var vm = require('vm');

/**
 * Initialize Sherlock.
 */

var sherlock = new Sherlock().use(integrations);

describe.only('sherlock-segment', function () {
  before(function (done) {
    server.listen(8002, done);
  });

  after(function (done) {
    server.close(done);
  });

  each(path.resolve(__dirname, 'lib'), function (slug, tests) {
    var service = require(path.join('../lib', slug));

    describe(service.name, function () {
      it('should match all our test urls', function () {
        tests.scripts.forEach(function (url) {
          assert(service.script.test(url), 'expected ' + url + ' to be matched');
        });
      });

      it('should extract settings under our test conditions', function () {
        tests.settings.forEach(function (settings) {
          var ctx = clone(settings.ctx);
          var fn = 'result = (' + service.settings.toString() + ')()';
          vm.runInNewContext(fn, ctx);
          assert.deepEqual(ctx.result, settings.expected);
        });
      });

      tests.integration.forEach(function (test) {
        it('should pass the integration test using ' + test.fixture, function (done) {
          this.slow('3s');
          this.timeout('10s');

          var url = fixture(test.fixture);
          sherlock.analyze(url, function (err, results) {
            if (err) return done(err);
            assert.deepEqual(results[service.name], test.expected);
            done();
          });
        });
      });
    });
  });
});

function fixture(name) {
  return url.resolve('http://localhost:8002/', name);
}
