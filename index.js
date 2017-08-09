function countdown(callback) {
    window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return function(value) {
    return multiplierValue * value;
  }
}

var doubler = createMultiplier(2)

var tripler = createMultiplier(3)

function multiplier(a, b) {
  a * b
}

var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)
