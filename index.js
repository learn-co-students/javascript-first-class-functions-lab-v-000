function countdown(callback) {
  window.setTimeout(function () {
    callback()
  }, 2000)
}

function createMultiplier(num) {
  return function(value){
    return num * value
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(a, b) {
  return a * b
}

doublerWithBind = multiplier.bind(null, 2)
triplerWithBind = multiplier.bind(null, 3)