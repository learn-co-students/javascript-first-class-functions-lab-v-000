function countdown(callback){
  setTimeout(callback, 2000);
}

function createMultiplier(multiply_by){
  return function (value){
    return multiply_by * value;
  };
}

function multiplier(value1, value2){
  return value1 * value2;
}

var doubler = createMultiplier(2);
var tripler = createMultipler(3);

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
