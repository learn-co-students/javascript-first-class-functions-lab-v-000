function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplyValue) {
  return function(value) {
    return multiplyValue * value;
  };
}

function multiplier(index_1, index_2) {
  return index_1 * index_2;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(2);
var triplerWithBind = multiplier.bind(null, 3);
