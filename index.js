function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return function (number) {
    return number * multiplierValue
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(num1, num2) {
  return num1 * num2
}

function doublerWithBind(n) {
  return multiplier.bind(2, n)
}

function triplerWithBind(n) {
  return multiplier.bind(3, n)
}
