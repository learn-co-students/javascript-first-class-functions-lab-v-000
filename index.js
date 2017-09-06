function countdown(callback) {
  window.setTimeout(() => callback(), 2000);
}

function createMultiplier(n) {
  return function(number) {
    return n * number
  }
}

function multiplier(multiplierValue, value){
  return value*multiplierValue
}

var doubler = createMultiplier(2)

var tripler = createMultiplier(3)

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)