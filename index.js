function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(n) {
  return function(x) {
    return parseInt(n * x)
  }
}

var doubler = createMultiplier(2);
// doubler(5); => 10
var tripler = createMultiplier(3);
// tripler(3); => 9

function multiplier(a, b) {
  return a * b
}

var doublerWithBind = multiplier.bind(null, 2)
// doublerWithBind(4); => 8
var triplerWithBind = multiplier.bind(null, 3)
// triplerWithBind(5); => 15
