function countdown(callback) {
  setTimeout(function(){ callback(); }, 2000);
}

function createMultiplier(multiplierValue) {
  return function (n) {
    return n * multiplierValue
  };
};

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);


function multiplier(multiplierValue, n) {
  return multiplierValue * n
}

var doublerWithBind = multiplier.bind(2, null)
var triplerWithBind = multiplier.bind(3, null)
