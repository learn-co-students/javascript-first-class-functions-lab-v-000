// exercise 1


// The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
// Tip: 1000 ms = 1 second.
// Tip: The function is only executed once. If you need to repeat execution, use the setInterval() method.
// Tip: Use the clearTimeout() method to prevent the function from running.

function countdown(callback) {
  setTimeout(function() {
    callback();
  },
     2000);
};

// exercise 2

function createMultiplier(multiplierValue) {
  return function(value) {
    return value * multiplierValue;
  };
};

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

// exercise 3

// the bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
// return value is a copy of the given function witht eh specified this value and inital arguments

function multiplier(a, b) {
  return a*b;
};


var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
