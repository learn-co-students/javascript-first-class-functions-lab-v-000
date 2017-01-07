function countdown(callback){
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue){
  return function(value){
    return multiplierValue * value
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)


function multiplier(a, b){
  return a * b;
}

doublerWithBind = multiplier.bind(2)
triplerWithBind = multiplier.bind(3)