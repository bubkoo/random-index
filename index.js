'use strict';

var toLength       = require('to-length');
var randomNatural  = require('random-natural');
var MAX_ARR_LENGTH = require('max-array-length');

module.exports = function (max) {

  max = max === undefined ? MAX_ARR_LENGTH : toLength(max);

  return randomNatural(0, max);
};
