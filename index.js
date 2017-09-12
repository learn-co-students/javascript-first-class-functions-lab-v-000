function countdown(callback) {
  this.setTimeout(function() {
    callback()}, 2000
  )
}

function createMultiplier(multipliervalue) {
  if (multipliervalue === 2) {
    return doubler
  }
  if (multipliervalue === 3) {
    return tripler
  }
}

function doubler(value) {
  return value * 2
}

function tripler(value) {
  return value * 3
}

function multiplier(multipliervalue, value) {
  return multipliervalue * value
};

var doublerWithBind = multiplier.bind(null, 2)

var triplerWithBind = multiplier.bind(null, 3)