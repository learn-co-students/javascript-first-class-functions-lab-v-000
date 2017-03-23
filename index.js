function countdown(callback){
  setTimeout(function(){
    callback();
  }, 2000)
}

function createMultiplier(multiplierValue){
  return function(n){
    return n * multiplierValue
  }
}

function multiplier(n, m){
  return n * m
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
