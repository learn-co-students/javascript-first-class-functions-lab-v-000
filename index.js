function countdown(callback) {
  window.setTimeout(callback, 2000);
}


function createMultiplier(multiplier) { // 2
   return function(n){ // 3
     return multiplier * n
   }
}
var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
// doubler(3) << 6



function multiplier(a, b) {
  return a * b;
}


var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
