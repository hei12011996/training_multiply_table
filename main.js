function getMultiplyTable(startNumber, endNumber) {
}

function isStartEndNumberValid(startNumber, endNumber) {
	if (startNumber === null || endNumber === null) {
		return false;
	} else if (!(startNumber >= 1 && startNumber <= 1000)) {
		return false;
	} else if (!(endNumber >= 1 && endNumber <= 1000)) {
		return false;
	}
	return true;
}

function getMultiplyStringOfNumber(startNumber, endNumber) {
	return startNumber + "*" + endNumber + "=" + startNumber * endNumber;
}

function constructMultiplyTable(multiplyStrings) {
}

module.exports = {
	getMultiplyTable,
	isStartEndNumberValid,
	getMultiplyStringOfNumber,
	constructMultiplyTable
};