function countdown(callback) {
  setTimeout(function() {
    callback()
  }, 2000);
}

function createMultiplier(multiplierValue) {
  return function(value) {
    return multiplierValue * value;
  };
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(x, y) {
  return x * y;
}

var triplerWithBind = multiplier.bind(null, 2)
var doublerWithBind = multiplier.bind(null, 3)