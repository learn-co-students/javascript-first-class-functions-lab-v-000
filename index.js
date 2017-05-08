// function countdown(callback) {
//   window.setTimeout(function() {
//     callback()
//   }, 2000);
// }

function countdown(callback) {
  setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return function(value) {
    return value * multiplierValue
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multipler(a, b) {
  return a * b
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
