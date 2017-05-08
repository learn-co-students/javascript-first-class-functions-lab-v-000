function countdown(callback) {
  window.setTimeout(function(){ callback() }, 2000);
}

// function countdown(callback) {
//     setTimeout(function(){ callback() }, 2000);
// }

function createMultiplier(multiplierValue) {
  if (multiplierValue === 2) {
    return function (value) {
      return value *= 2
    }
  } else if (multiplierValue === 3) {
    return function (value) {
      return value *= 3
    }
  }
}

function multiplier(multiplierValue, value) {


  // function multiplied() { return x * x; }
  // return multiplied.bind(multiplierValue)

  function multiplied(multiplierValue, value) {
    return mult = multiplierValue * value
  }

  if (multiplierValue === 2) {
    var doublerWithBind = multiplied.bind(2)
    return doublerWithBind

  } else if (multiplierValue === 3) {
    var triplerWithBind = multiplied.bind(3)
    return triplerWithBind
  }

  // return multiplied()

}

function multiplier(multiplierValue, value) {
  return (multiplierValue * value)
}



var doublerWithBind = multiplier.bind(null, 2)

var triplerWithBind = multiplier.bind(null, 3)

function createMultiplierBonus(multiplierValue) {
  return function(value) {
    return multiplierValue * value
  }
}

var doubler = createMultiplierBonus(2)
var tripler = createMultiplierBonus(3)