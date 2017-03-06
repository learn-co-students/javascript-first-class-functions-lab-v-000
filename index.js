'use strict';

function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return function(val) {
    return val * multiplierValue;
  }
}

function multiplier(val1, val2) {
  return val1 * val2;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
