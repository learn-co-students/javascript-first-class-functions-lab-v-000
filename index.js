function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return ((value) => { return value*multiplierValue })
}

var doubler = createMultiplier(2)

var tripler = createMultiplier(3)

function multiplier(value) {
  return ((times) => { return times*value })
}

var doublerWithBind = multiplier.bind(2);
var triplerWithBind = multiplier.bind(3);
