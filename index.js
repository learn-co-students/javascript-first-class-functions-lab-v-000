function countdown(callback){
  setTimeout(function(){callback();}, 2000);
}

function createMultiplier(multiplierValue){
  return function(value){
    return multiplierValue * value
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(a, b){
  console.log( a * b )

}


function doublerWithBind() { multiplier.bind(2)}
function triplerWithBind() { multiplier.bind(3)}

doublerWithBind(4)
triplerWithBind(4)
