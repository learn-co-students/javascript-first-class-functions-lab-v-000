function countdown(callback) {
  window.setTimeout(callback);
}

function createMultiplier(multiplierValue) {
  return function(integer) {
    return multiplierValue * integer;
  };
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

var multiplier = function(arg1, arg2) {
  return arg1 * arg2;
};

var doublerWithBind = multiplier.bind(null,2);
var triplerWithBind = multiplier.bind(null,3);
