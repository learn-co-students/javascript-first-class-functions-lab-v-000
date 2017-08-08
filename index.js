function countdown(callback) {
  return window.setTimeout(() => { callback(); }, 2000);
}

function multiplierValue(num) {
  return function (value) {
    return num * value;
  }
}

function createMultiplier(a) {
  return function (b) {
    return a * b;
  }
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(a, b) {
  return a * b;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
