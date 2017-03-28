function countdown(callback){
	window.setTimeout(function(){callback()}, 2000);
}

function createMultiplier(num){
	return function multiplierValue(val){
		return val * num;
	};
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(arg1, arg2){
	arg1 * arg2
}

var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)