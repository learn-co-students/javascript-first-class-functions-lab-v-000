function countdown(callback) {
  window.setTimeOut(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return num => num * multiplierValue;
}

const doubler = createMultiplier(2);
const tripler = createMultiplier(3);

function multiplier(multiplierValue, value) {
  return () => multiplierValue * value;
}

const doublerWithBind = multiplier.bind(null, 2)
const doublerWithBind = multiplier.bind(null, 3)
