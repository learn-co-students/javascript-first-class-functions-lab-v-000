function countdown(func){
  window.setTimeout(func, 2000);
}

function createMultiplier(multiplier){
  return function(value){
    return multiplier * value;
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(arg1, arg2){
  return arg1 * arg2;
}

var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)