function countdown(callbackFunc){
  setTimeout(callbackFunc, 2000)
}

function createMultiplier(multi){
  let newFunc = function(int) {
    return multi * int
  }
  return newFunc
}

function doubler(int){
  debugger
  const func = createMultiplier(2)
  return func(int)
}

function tripler(int) {
  debugger
  const func = createMultiplier(3)
  return func(int)
}

function multiplier(a, b){
  return a * b
}

function doublerWithBind(int){
  return multiplier.bind(null, 2, int)
}

function triplerWithBind(int){
  return multiplier.bind(null, 3, int``)
}