function countdown(callback) {
    window.setTimeout(callback, 2000)
}

function createMultiplier(num) {
    if (num === 2){
        return doubler;
    } else if (num === 3) {
        return tripler;
    }
}

function doubler(num) {
    return num * 2;
}

function tripler(num) {
    return num * 3;
}

function multiplier(multiplierValue, value) {
    multiplierValue * value
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)

// function doublerWithBind() {
    
// }

// function tripler() {
    
// }