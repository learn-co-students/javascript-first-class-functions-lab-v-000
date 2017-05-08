function countdown(callback) {
  setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return function(valueToMultiply) {
    return valueToMultiply * multiplierValue;
  };
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(value1, value2) {
  return value1 * value2;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
