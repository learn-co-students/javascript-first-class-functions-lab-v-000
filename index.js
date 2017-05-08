function countdown(callback) {
  setTimeout(function () {
    callback();
  }, 2000);
}

function callback() {
  console.log("Time's up.")
}

function createMultiplier(multipleValue) {
  return function(value) {
    return multipleValue * value;
  }
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(a, b) {
  a * b
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
