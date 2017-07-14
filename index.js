function countdown(callback) {
  setTimeout(function() {
    callback();
  }, 2000);
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function createMultiplier(multiplierValue) {
  return function(multiplyValue) {
    return multiplyValue * multiplierValue;
  };
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);

function multiplier(multiplierValue, value) {
  return multiplierValue * value
}
