function countdown (callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier (multiplierValue) {
  function multiply (x) {
    return x * multiplierValue
  }
  return multiply
}
var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier (multiplierValue, value) {
  return multiplierValue * value
}
var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
