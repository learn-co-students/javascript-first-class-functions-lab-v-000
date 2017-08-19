function countdown(callback){
  window.setTimeout(callback, 2000);
}



function createMultiplier(multiplierValue){
  return function multiply(num){
    return num * multiplierValue
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(a,b){
  return a * b
}

var doublerWithBind = multiplier.bind(2,null)
var triplerWithBind = multiplier.bind(3, null)


// function createMultiplier(multiplyValue) {
//   return function (value) {
//     return multiplyValue * value;
//   };
// }
//
// function multiplier(a, b) {
//   return a * b;
// }





// function countdown(callback){
//   window.setTimeout(callback, 2000)
// }
//
// // function alert(){
// //   console.log("waited two seconds")
// // }
//
// // countdown(alert)
//
// function createMultiplier(multiplierValue){
//
//
//   return function(e){
//     return e * multiplierValue
//   }
// }
//
// var doubler = createMultiplier(2)
// var tripler = createMultiplier(3)


//
// function multiplier(arg1, arg2){
//   return arg1 * arg2
// }
//
// var doublerWithBind = multiplier.bind(2,null)
// var triplerWithBind = multiplier.bind(3, null)
