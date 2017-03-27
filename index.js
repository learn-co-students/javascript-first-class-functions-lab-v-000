function countdown(callback) {
  setTimeout(callback, 2000);
}

function createMultiplier(x) {
  return function multiplierValue(value) {
    return value * x;
  };
}

function multiplier(one, two) {
  return one*two
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(2);
var triplerWithBind = multiplier.bind(3);