function countdown(callback) {
  window.setTimeout(function(){ callback(); }, 2000);
}

function createMultiplier(multiplier) {
  return function(a) {
    return a * multiplier;
  }
}

function multiplier(a, b) {
  return a * b;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind();
var triplerWithBind = multiplier.bind();
