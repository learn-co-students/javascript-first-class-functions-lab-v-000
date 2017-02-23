function countdown(callback) {
  window.setTimeout(callback)
}

function createMultiplier(multiplierValue) {
  return function(value) {
    return value * multiplierValue 
  };
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);




function multiplier(value1, value2) {
  value1 * value2
}

var doublerWithBind = multiplier.bind(null, 2); 
var triplerWithBind = multiplier.bind(null, 3);
