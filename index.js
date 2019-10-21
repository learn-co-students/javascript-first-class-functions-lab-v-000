var countdown = (callback) => {
  setTimeout(callback, 2000); 
}

var createMultiplier = (value) => {
  return function(input) {
    return value * input;  
  }
}

var doubler = createMultiplier(2); 
var tripler = createMultiplier(3);

var multiplier = (arg1, arg2) => {
  return arg1 * arg2; 
}

var doublerWithBind = () => {
  return multiplier.bind(null, 2);   
}

var triplerWithBind = () => {
  return multiplier.bind(null, 3);   
}
