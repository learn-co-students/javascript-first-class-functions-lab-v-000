// function countdown(callback()) {
//   window.setTimeout(2)
// }


function countdown(callback){
  window.setTimeout(callback)
}



function createMultiplier(multiplierValue) {
  return function(givenValue) {
    return multiplierValue * givenValue
  }
}

var doubler = createMultiplier(2)

doubler(3);

var tripler = createMultiplier(3)

tripler(3);




function multiplier(multiplierValue, value) {
  multiplierValue * value
}

var doublerWithBind = multiplier.bind(null, 2);

var triplerWithBind = multiplier.bind(null, 3);


multiplier.bind(null, 2);
multiplier.bind(null, 3);
