function countdown(callback){
  window.setTimeout(callback(),2000);
};
function callback(){console.log("done");}

function createMultiplier(multiplierValue){
  return function (){this * multiplierValue;};
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);