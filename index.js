function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  if (multiplierValue === 2) {
    return function (numberToMultiply) {
      return numberToMultiply * 2
    }
  } else if (multiplierValue === 3) {
    return function (numberToMultiply) {
      return numberToMultiply * 3
    }
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(multiplierValue, value) {
  return multiplierValue * value
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
