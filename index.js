var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);

function countdown(callback) {
  setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return function(int) {
    return int * multiplierValue;
  };
}

function multiplier(int1, int2) {
  return int1 * int2;
}