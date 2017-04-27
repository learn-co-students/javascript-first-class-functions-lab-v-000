function countdown (callback) {
  window.setTimeout(function() {
    callback();},
    2000);
}


function multiplier(multiplierValue) {
     x * y
}

function createMultiplier(val) {
  return function (num) {
   return val * num;
 };
}

var doubler = createMultiplier(2);

var tripler = createMultiplier(3);

var doublerWithBind = multiplier.bind(null, 2);

var triplerWithBind = multiplier.bind(null, 3);
