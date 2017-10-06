/* 
1. Declare a function named countdown
2. Function accepts parameter named callback, whose value is callback.
3. Wait two seconds before calling the callback function that was passed into the countdown() function.
*/
function countdown(callback) {
  window.setTimeout(callback, 2000);
}

/* 
1. Declare a function named createMultiplier()
2. Function accepts parameter named multiplierValue, whose value is number.
3. When call function, return a function that multiplies a given value by the multiplierValue
*/
function createMultiplier(multiplierValue) {
  return function(value) {
    return value * multiplierValue;
  }
}

/* 
1. Declare variable named doubler using createMultiplier() that doubles any given number.
2. Declare variable named tripler using createMultiplier() that triples any given number.
*/
var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

/* 
1. Declare a function named multiplier()
2. Function accepts 2 parameters named multiplierValue, value, whose values are number.
3. When call function, return product of value multiplied by the multiplierValue.
*/
function multiplier(multiplierValue, value) {
  return multiplierValue * value;
}
//Create a doublerWithBind variable that partially applies the multiplier() function by passing in 2 as its first argument.
var doublerWithBind = multiplier.bind(null, 2);
//Create a triplerWithBind variable that partially applies the multiplier() function by passing in 3 as its first argument.
var triplerWithBind = multiplier.bind(null, 3);
