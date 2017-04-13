function countdown(callback) {
  window.setTimeout(callback,2000)
}
function createMultiplier(multiplierValue){
  function multiplier(x) {
    return x*multiplierValue
  }
  return multiplier
}
var doubler=createMultiplier(2)
var tripler=createMultiplier(3)
function multiplier(value,multiplierValue){
  return value*multiplierValue
}
var doublerWithBind=multiplier.bind(2,null)
var triplerWithBind=multiplier.bind(3,null)
