function countdown(callback) {
  setTimeout(() => { 
    callback(); 
  }, 2000);
}

function createMultiplier(multiplierValue) {
  return (value) => {
    return multiplierValue * value;
  }
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(value, multiplierValue) {
  return value * multiplierValue;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);