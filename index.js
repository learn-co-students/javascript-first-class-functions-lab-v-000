function countdown (callback) {
  setTimeout(callback, 2000);
}

function createMultiplier (m) {
  return n => n * m;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier (m, n) {
  return m * n;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
