function countdown(callback) {
    setTimeout(function () {
      callback();
    }, 2000);
}


function createMultiplier(val) {
  return function (value) {
    return val * value;
  };
}

function multiplier(x, y) {
  return x * y;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
