function countdown(callback) {
  setTimeout(callback, [2])
}

function createMultiplier(value) {
  return function(valueTwo) {
    return valueTwo * value
  }
}

function multiplier(argOne, argTwo) {
  return argOne * argTwo
}

 var doubler = createMultiplier(2)
 var tripler = createMultiplier(3)

 var doublerWithBind = multiplier.bind(null, 2)
 var triplerWithBind = multiplier.bind(null, 3)
