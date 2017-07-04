function countdown(callback) {
    window.setTimeout(callback, 2);
}

function createMultiplier(multipierValue) {
    return function (value) {
        return multipierValue * value;
    };
}

function multiplier(x, y) {
    return x * y;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);