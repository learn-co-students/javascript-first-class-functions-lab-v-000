function countdown(callback){
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return function(lValue) {
    return multiplierValue * lValue
  }
}

var doubler = createMultiplier(2)

var tripler = createMultiplier(3)

function multiplier(multiplierValue, letterValue) {
  return multiplierValue * letterValue
}

var doublerWithBind = multiplier.bind(2, null)
var triplerWithBind = multiplier.bind(3, null)
