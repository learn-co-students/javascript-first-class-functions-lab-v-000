function countdown(callback){
setTimeout(callback, 2000);

}

function doubler(number){
  return number * 2
}

function tripler(number){
  return number * 3
}

function createMultiplier(multiplier){

  if (multiplier === 2){
    return doubler
    }
  if (multiplier === 3){
    return tripler
    }
  }

function doublerWithBind(){


}


function triplerWithBind(){


}
function multiplier(multiplierValue, value){
  var multiplier_function = createMultiplier.bind(null, multiplier);
  return multiplier_function;
}
