function countdown(callback) {
  window.setTimeout(callback, 2000);
}

var createMultiplier = function(multiplierValue) {
  var multiplierValue = multiplierValue
  return function(num) {
    return (num * multiplierValue);
  }
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

var multiplier = function(num1, num2) {
  return (num1 * num2);
}

var doublerWithBind = multiplier.bind(2);
var triplerWithBind = multiplier.bind(3);
