function countdown(callback) {
    window.setTimeout(callback)
}

function createMultiplier(n) {
    return function(value) {
        return n * value
    } 
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(n1, n2) {
    return n1 * n2
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)