function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return ((gv) => gv * multiplierValue);
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(one, two) {
  return one * two;
}

function doublerWithBind(dbl) {
  return multiplier(2).bind(null, dbl);
}

function triplerWithBind(dbl) {
  return multiplier(3).bind(null, dbl);
}
