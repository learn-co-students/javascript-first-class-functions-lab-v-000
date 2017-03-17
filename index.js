function countdown(callback) {
  setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return function(num) {
    return num * multiplierValue
  }
}

function doubler(num) {
  return num * 2
}

function tripler(num) {
  return num * 3
}

function multiplier(multiplierValue, value) {
  return value * multiplierValue
}

var doublerWithBind = multiplier.bind(null, 2)

var triplerWithBind = multiplier.bind(null, 3)
