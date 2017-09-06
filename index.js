
function countdown(callback) {
  setTimeout(function () {
    callback();
  }, 2000);
}

function createMultiplier(multiplierValue) {
  return function(value){
    return value * multipliervalue;
  };
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier (mult1, mult2){
  return mult1 * mult2;
}

var doublerWithBind = multiplier.bind(null,2);
var triplerWithBind = multiplier.bind(null,3);

