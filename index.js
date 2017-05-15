function countdown(callback) {
  window.setTimeout(function() {
    callback();
  }, 2000);
}

function createMultiplier(multiplierValue) {
  return function(given_value) {
    return given_value * multiplierValue
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)


function multiplier(multiplierValue,value) {
  return multiplierValue * value
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
