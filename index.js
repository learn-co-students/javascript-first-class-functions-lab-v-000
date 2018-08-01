var countdown = (callback) => {
  window.setTimeout(callback, 2000)
} 

// Let's say we're trying to recreate Scrabble in JavaScript. Some board tiles can give us double or triple letter score.
// Let's create a helper function that takes a number (let's call it the `multiplierValue`). This function then **returns a
// function** that multiplies a given value by the `multiplierValue`. In your code, do the following:

// 1. Create a `createMultiplier()` function. Make sure it returns the right thing!
// 2. Create a `doubler` variable that uses the `createMultiplier()` function to create a function that doubles any given number.
// 2. Create a `tripler` variable that does the same thing as the `doubler`, but it triples the value instead.

// ## Exercise 3 — It's part(y)(ial) time
// Instead of a function returning another function (like we did in the previous exercise), we can also write a function
// that takes two values right away: the `multiplierValue` and the `value`. However, we can't create the `doubler` and
// `tripler` functions by just calling this new function with two arguments! The trick is to _partially apply_ the function.
// We can do this using [`.bind()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind).
// Quick hint: you can forget about `.bind()`'s first argument (the `this` context) for now — you can use `null` as its value.

// To pass all tests, do the following:

// 1. Create a `multiplier()` function that takes two arguments and multiplies them together.
// 2. Create a `doublerWithBind` variable that partially applies the `multiplier()` function by passing in `2` as its first
// argument.
// 3. Create a `triplerWithBind` variable that partially applies the `multiplier()` function by passing in `3` as its first
// argument.



// var multiplier = (multiplierValue, value) => {
//   return multiplierValue * value; 
// }

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