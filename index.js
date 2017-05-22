function countdown(callback) {
  window.setTimeout(callback, 2000)
};

function createMultiplier(multiplierValue) {
  return function (n) {
    return n * multiplierValue
  };
};

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(arg1, arg2) {
  arg1 * arg2
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)