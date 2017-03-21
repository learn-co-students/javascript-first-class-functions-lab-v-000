'use strict';

var countdown = (callback) => {
  window.setTimeout(() => callback(), 2000)
}

var createMultiplier = (multiplierValue) => {
  return (number) => number * multiplierValue
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

var multiplier = (numOne, numTwo) => numOne * numTwo

var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)
