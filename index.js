function countdown(callback) {
  window.setTimeout(callback, 2000);
};

function createMultiplier(multiplierValue) {
  return function(int) {
    return int * multiplierValue;
  }
};


var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(int1, int2) {
  return int1 * int2;
};


var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)