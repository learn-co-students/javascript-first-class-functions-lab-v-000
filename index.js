function countdown(callback){
  setTimeout(function(){callback();}, 2000);
}

function createMultiplier(multiple){
  return function(value){
    return multiple * value;
  };
}

var doubler = createMultiplier(2);

var tripler = createMultiplier(3);

function multiplier(value, multiple){
  return value * multiple;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);