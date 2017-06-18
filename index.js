function countdown(callback) {
  setTimeout(function () {
    callback();
  }, 2000);
  }


function createMultiplier(multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
}

function multiplier ( a, b) {
  a * b
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)
var doublerWithBind = createMultiplier.bind(null, 2)
var triplerWithBind = createMultiplier.bind(null, 2)
