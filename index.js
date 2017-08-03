function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplier){
  return function(value){
    return multiplier * value;
  }
}
var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(mValue, value){
  return mValue * value;
}

var doublerWithBind = multiplier.bind(this, 2);
var triplerWithBind = multiplier.bind(this, 3);
