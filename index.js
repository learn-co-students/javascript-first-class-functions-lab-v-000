var countdown = (callback) => {
  window.setTimeout(callback, 2000)
} 

var createMultiplier = (multiplierValue) => {
  return function(val) {
    return multiplierValue * val;
  }
}

var   multiplier = (val) => {
  return multiplierValue * val;
}

  
var doubler = createMultiplier(2);

var tripler = createMultiplier(3);

var doublerWithBind = multiplier.bind(null,doubler);

var triplerWithBind = multiplier.bind(null,tripler);