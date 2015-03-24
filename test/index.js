
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
 * Locals.
 */

var lib = path.resolve(__dirname, 'lib');
var sherlock = new Sherlock().use(integrations);

/**
 * Tests.
 */

before(function (done) {
  server.listen(8002, done);
});

after(function (done) {
  server.close(done);
});

describe('unit tests', function () {
  each(lib, function (slug, tests) {
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
    });
  });
});

// phantomjs freaks out if we run these tests mixed in with the unit tests...
// not really sure why
describe('integration tests', function () {
  this.slow('3s');
  this.timeout('10s');

  each(lib, function (slug, tests) {
    var service = require(path.join('../lib', slug));

    describe(service.name, function () {
      tests.integration.forEach(function (test) {
        it(test.fixture, function (done) {
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
