function countdown(callback) {
  setTimeout(function() {
      callback() } , 2000)
  }

function createMultiplier(multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
}

function multiplier(a, b) {
  return a * b
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(2, null); 
var triplerWithBind = multiplier.bind(3, null); 
