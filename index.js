function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier() {
  return function multiplierValue (score) {
    return score * 2;
  }
}

function createMultiplierBonus() {
  return function multiplierValue (score) {
    return score * 3;
  }
}

var doubler = createMultiplier();
var tripler = createMultiplierBonus();

function multiplier(num1, num2){
  return num1 * num2;
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
