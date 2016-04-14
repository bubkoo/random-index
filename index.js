'use strict';

var toLength = require('to-length');

module.exports = function (max) {

  max = max === undefined ? 4294967295 : toLength(max);

  return Math.round(Math.random() * max);
};
