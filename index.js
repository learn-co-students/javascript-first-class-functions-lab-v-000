function countdown(callback) {
  setTimeout(callback, 2000);
}


function createMultiplier(multiplierValue) {
  var multplier = function() {
    return multiplierValue * 10
  }
  return multplier();
}

function doubler() {
  return createMultiplier(2)
}
