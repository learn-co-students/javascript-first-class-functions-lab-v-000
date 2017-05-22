function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return (value) => {return value*multiplierValue};
}

function doubler(value) {
  return createMultiplier(2)(value);
}

function tripler(value) {
  return createMultiplier(3)(value);
}

function multiplier(val1, val2) {
  return createMultiplier(val1).bind(null, val2);
}

function doublerWithBind(value) {
  return multiplier(2,value)
}

function triplerWithBind(value) {
  return multiplier(3,value)
}
