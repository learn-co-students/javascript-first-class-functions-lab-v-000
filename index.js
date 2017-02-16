function countdown(callback) {
  setTimeout(function (){
    callback();
  }, 2000);
}

function createMultiplier(multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(multiplierValue, value) {
  return multiplierValue * value;
}

var doublerWithBind = multiplier.bind(2);
var triplerWithBind = multiplier.bind(3);
