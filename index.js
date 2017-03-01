function countdown(callback) {
  setTimeout(function(){ 
    callback(); 
  }, 2000);
}

function createMultiplier(multiplierValue) { 
  return function(value) {
    return value * multiplierValue
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(x,y) {
  x*y 
}

var doublerWithBind = multiplier.bind(2, null)
var triplerWithBind = multiplier.bind(3, null)

