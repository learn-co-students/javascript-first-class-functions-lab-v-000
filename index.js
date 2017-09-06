function countdown(callback){
  var timeout= setTimeout(callback, 2000);
}

function callback(){
  alert("It's the final countdown!");
}

function createMultiplier(multiplierValue){

return function(value){
  return multiplierValue * value;
  };
}



var doubler= createMultiplier(2)
var tripler= createMultiplier(3)


function multiplier(a, b){
  return a*b
}

var doublerWithBind= multiplier.bind(null, 2)
var triplerWithBind= multiplier.bind(null, 3)
