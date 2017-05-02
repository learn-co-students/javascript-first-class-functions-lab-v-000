function countdown(callback) {
  window.setTimeout(callback, 2000);
}
function createMultiplier(multiplierValue) {
  return function(value) {
    return multiplierValue * value;
  };
}
doubler = createMultiplier(2);
tripler = createMultiplier(3);

function multiplier(a, b) {
  return a * b;
}
doublerWithBind = multiplier.bind(null, 2)
triplerWithBind = multiplier.bind(null, 3)
