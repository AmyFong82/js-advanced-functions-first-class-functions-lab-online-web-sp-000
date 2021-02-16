const returnFirstTwoDrivers = function(drivers){
	return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function(drivers){
	const length = drivers.length
	return [drivers[length-2], drivers[length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
	return function(fare){
		return fare * int
	}
}

const fareDoubler = function(fare){
	 return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
	return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, fn){
	return fn(drivers);
}
