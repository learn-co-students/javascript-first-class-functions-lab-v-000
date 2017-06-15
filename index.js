function countdown(callback) {
  window.setTimeout(function callback(), 2000);
});

function createMultiplier(multiplierValue){
  var doubler(() => multiplierValue * 2)
  var tripler(() => muliiplierValue * 3)
  return doubler()
};



function multiplier(multiplierValue, value){
  var doublerWithBind = multiplier(value);
  var triplerWithBind = multiplier(value);
};
