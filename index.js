function countdown(callback) {
  window.setTimeout( function() {
    callback()}, 2000
  );
}


function createMultiplier(multiplierValue) {
  function multiplier(n) {
    return n * multiplierValue;
  }
  return multiplier;
}

function doubler(n) {
  multiplier = createMultiplier(2);
  return multiplier(n);
}

function tripler(n) {
  multiplier = createMultiplier(3);
  return multiplier(n);
}

function multiplier(multiplierValue, value) {
  multiplierValue * value
}

var doublerWithBind = multiplier.bind(2, null)

var triplerWithBind = multiplier.bind(3, null)
