'use strict';

require('mocha');
var assert = require('assert');
var helper = require('..');
var last = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString().trim();

describe('helper-git-rev', function() {
  describe('helper', function() {
    it('should work as a function', function() {
      assert.equal(helper(), last);
    });
  });
});
