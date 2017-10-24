var doublerWithBind = multiplier(2);
var triplerWithBind = multiplier(3);
  
function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  if (multiplierValue === 2){  
  return doubler.bind(multiplierValue);
 }
  if (multiplierValue === 3){  
  return tripler.bind(multiplierValue);
 }
}
 
function doubler(givenValue) {
  return givenValue * 2;
}

function tripler(givenValue) {
  return givenValue * 3;
}

function multiplier(arg1, arg2){
  return doubler.bind(arg2);
}