function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return (num) => { return multiplierValue * num }
}

function multiplier(num1, num2) {
  return num1 * num2
}

var doublerWithBind = multiplier.bind(null, 2);

var triplerWithBind = multiplier.bind(null, 3);

var doubler = doublerWithBind
var tripler = triplerWithBind

function createMultiplierBonus(num) {
  if (num === 2) {
    return doubler
  } else if (num === 3) {
    return tripler
  }
}