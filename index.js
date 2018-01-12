
function callback() {
  console.log("This is the final countdown!")
}

function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplier) {
  return function(number) {
    return multiplier * number
  }
}

function multiplier(multiplier, number) {
    return multiplier*number
}





  var doublerWithBind = multiplier.bind(null, 2)
  var doubler = createMultiplier(2)

  var triplerWithBind = multiplier.bind(null, 3)
  var tripler = createMultiplier(3)
