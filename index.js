function countdown(callback) {
  window.setTimeout(callback, 2);
}

function createMultiplier(multiplierValue) {
  return (y) => y * multiplierValue;
 }

var doubler = createMultiplier(2);

var tripler = createMultiplier(3);

function multiplier(multiplierValue, value) {
  return multiplierValue * value;
}

var doublerWithBind = multiplier.bind(null, 2);

var triplerWithBind = multiplier.bind(null, 3);

console.log(triplerWithBind(3));
