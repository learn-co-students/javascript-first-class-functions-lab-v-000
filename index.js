function countdown(callback){
	window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue){
	return (value) => {return value * multiplierValue};
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(multiplierValue, value){
	return value * multiplierValue
}

doublerWithBind = multiplier.bind(null, 2)

triplerWithBind = multiplier.bind(null, 3)
