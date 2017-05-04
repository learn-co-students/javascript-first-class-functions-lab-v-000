function countdown(callback) {
  window.setTimeout(callback, 2000)

}


function createMultiplier(n) {
  return (number) => number * n
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)


function multiplier(value1, value2) {
  return value1 * value2
}

var doublerWithBind = multiplier.bind(null, 2)

var triplerWithBind = multiplier.bind(null, 3)
