function countdown(callback){
  window.setTimeout(callback, 2000);
}

function createMultiplier(m){
  return function(num){
    return num*m;
  }
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(n1, n2){
  return n1*n2;
}

function doublerWithBind(){
  return multiplier.bind(null, 2);
}

function triplerWithBind(){
  return multiplier.bind(null, 3);
}
