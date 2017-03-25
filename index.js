function countdown(callback){
  setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue){
  return function(num) {
    return num * multiplierValue
  }
}

function multiplier(x, y){
  x * y
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)
var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
