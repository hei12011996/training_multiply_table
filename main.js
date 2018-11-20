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
	let total = 0;
	let outputMax = 0;
	let multiplyTable = "";
	let indentTable = [];

	// ---Initialize indentTable to align
	while (total < multiplyStrings.length) {
		for (let i = 0; i <= outputMax; i++);
		outputMax++;
		total += outputMax;
	}
	for(let i = multiplyStrings.length - 1; i >= multiplyStrings.length - outputMax; i--){
		indentTable.push(multiplyStrings[i].length + 2);
	}
	// --- Reverse the indentTable as it is construct backward
	indentTable.reverse();

	total = 0;
	outputMax = 0;
	// ---construct Multiply Table String
	while (total < multiplyStrings.length) {
		for (let i = 0; i <= outputMax; i++) {
			let multiplyString = multiplyStrings[total + i];
			if (i == outputMax) {
				multiplyTable += multiplyString + "\n";
			} else {
				multiplyTable += multiplyString + " ".repeat(indentTable[i] - multiplyString.length);
			}
		}
		outputMax++;
		total += outputMax;
	}

	return multiplyTable;
}

module.exports = {
	getMultiplyTable,
	isStartEndNumberValid,
	getMultiplyStringOfNumber,
	constructMultiplyTable
};