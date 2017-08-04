function countdown(callback){
  window.setTimeout(callback, 2000);
}

function createMultiplier(input){
  return function(value){
    return input * value;
  };
}

// function createMultiplierBonus(input){
//   return function(value){
//     return input * value;
//   };
// }


function multiplier(value1, value2){
  return value1 * value2;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
