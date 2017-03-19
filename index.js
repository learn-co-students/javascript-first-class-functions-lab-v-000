
function countdown(callback) {
  window.setTimeout(function(){callback()}, 2000)
}

function createMultiplier(multiplierValue) {
  return function(num) {
    return num * multiplierValue
  };
}

function multiplier(one, two) {
  return one * two
}

var doublerWithBind = createMultiplier.bind(null, 2);

var triplerWithBind = createMultiplier.bind(null, 3);

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)
