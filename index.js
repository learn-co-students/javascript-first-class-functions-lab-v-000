function countdown(callback){
	window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue){
	return function(number){
		return number * multiplierValue
	}
}

var doubler = createMultiplier(2)

var tripler = createMultiplier(3)

function multiplier(number, multiplier){
	return number * multiplier
}

var doublerWithBind = multiplier.bind(null, 2)

var triplerWithBind = multiplier.bind(null, 3)