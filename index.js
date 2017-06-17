'use strict';

module.exports = function(options) {
  var app = (this && this.app) || {};
  var opts = Object.assign({cwd: app.cwd}, options);
  var hash = '';

  if (opts.hash) {
    opts = Object.assign({}, opts, opts.hash);
  }

  var cmd = opts.short
    ? 'git rev-parse --short HEAD'
    : 'git rev-parse HEAD';

  try {
    hash = require('child_process')
      .execSync(cmd, {cwd: opts.cwd})
      .toString().trim();

  } catch (err) {
    if (app && typeof app.emit === 'function') {
      app.emit('error', err);
    }
  }

  return hash;
};

