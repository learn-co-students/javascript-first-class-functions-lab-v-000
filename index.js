function countdown(callback) {
  setTimeout(function() { callback(); }, 2000);
}

function createMultiplier(multiplierValue) {
  return function (givenValue) {
    return multiplierValue * givenValue;
  };
}

function multiplier(a, b) {
  return a * b;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(doubler);
var triplerWithBind = multiplier.bind(tripler);
