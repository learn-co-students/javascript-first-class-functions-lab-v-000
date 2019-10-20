function countdown(callback) {
   window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return function(value) {
    return value * multiplierValue
  }
}

function multiplier(a,b) {
  a * b
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

var doublerWithBind = createMultiplier.bind(2)
triplerWithBind = createMultiplier.bind(3)

