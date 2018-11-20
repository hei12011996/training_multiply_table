const main = require('../main');
const getMultiplyTable = main.getMultiplyTable;
const isStartEndNumberValid = main.isStartEndNumberValid;
const getMultiplyStringOfNumber = main.getMultiplyStringOfNumber;
const constructMultiplyTable = main.constructMultiplyTable;

describe('isStartEndNumberValid', () => {
	it ('Given start number as 2 and end number as 1000 when pass to isStartEndNumberValid(), then return true.', () => {
		expect(isStartEndNumberValid(2, 1000)).toBe(true);
	});

	it ('Given start number as 2 and end number as 2 when pass to isStartEndNumberValid(), then return true.', () => {
		expect(isStartEndNumberValid(2, 2)).toBe(true);
	});

	it ('Given start number as 2 and end number as 1001 when pass to isStartEndNumberValid(), then return false.', () => {
		expect(isStartEndNumberValid(2, 1001)).toBe(false);
	});

	it ('Given start number as 1000 and end number as 5 when pass to isStartEndNumberValid(), then return false.', () => {
		expect(isStartEndNumberValid(1000, 5)).toBe(false);
	});

	it ('Given start number as null and end number as valid number when pass to isStartEndNumberValid(), then return false.', () => {
		expect(isStartEndNumberValid(null, 5)).toBe(false);
	});

	it ('Given start number as valid number and end number as null when pass to isStartEndNumberValid(), then return false.', () => {
		expect(isStartEndNumberValid(2, null)).toBe(false);
	});

	it ('Given start number as null and end number as null when pass to isStartEndNumberValid(), then return false.', () => {
		expect(isStartEndNumberValid(null, null)).toBe(false);
	});
});

describe('getMultiplyStringOfNumber', () => {
	it ('Given start number as 2 and end number as 3 when pass to isStartEndNumberValid(), then return string "2*3=6"', () => {
		expect(getMultiplyStringOfNumber(2, 3)).toBe("2*3=6");
	});
});

describe('constructMultiplyTable', () => {
	const input1 = ["2*2=4", "2*3=6", "3*3=9", "2*4=8", "3*4=12", "4*4=16"];
	const input2 = ["1*1=1", "1*2=2", "2*2=4", "1*3=3", "2*3=6", "3*3=9", "1*4=4", "2*4=8", "3*4=12", "4*4=16", "1*5=5", "2*5=10", "3*5=15", "4*5=20", "5*5=25"];
	const expected_output_1 = "2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12  4*4=16\n";
	const expected_output_2 = "1*1=1\n1*2=2  2*2=4\n1*3=3  2*3=6   3*3=9\n1*4=4  2*4=8   3*4=12  4*4=16\n1*5=5  2*5=10  3*5=15  4*5=20  5*5=25\n";

	it ('Given input array of string as ["2*2=4", "2*3=6", "3*3=9", "2*4=8", "3*4=12", "4*4=16"] when pass to constructMultiplyTable(), then return string "2*2=4\\n2*3=6  3*3=9\\n2*4=8  3*4=12  4*4=16\\n"', () => {
		expect(constructMultiplyTable(input1)).toBe(expected_output_1);
	});

	it ('Given input array of string as ["1*1=1", "1*2=2", "1*3=3", "2*3=6", "3*3=9", "1*4=4", "2*4=8", "3*4=12", "4*4=16", "1*5=5", "2*5=10", "3*5=15", "4*5=20", "5*5=25"] when pass to constructMultiplyTable(), then return string "1*1=1\\n1*2=2  2*2=4\\n1*3=3  2*3=6   3*3=9\\n1*4=4  2*4=8   3*4=12  4*4=16\\n1*5=5  2*5=10  3*5=15  4*5=20  5*5=25\\n"', () => {
		expect(constructMultiplyTable(input2)).toBe(expected_output_2);
	});

});

describe('getMultiplyTable', () => {
	const expected_output_1 = "2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12  4*4=16\n";
	const expected_output_2 = "1*1=1\n1*2=2  2*2=4\n1*3=3  2*3=6   3*3=9\n1*4=4  2*4=8   3*4=12  4*4=16\n1*5=5  2*5=10  3*5=15  4*5=20  5*5=25\n";

	it ('Given start number as 2 and end number as 4 when pass to getMultiplyTable(), then return string "2*2=4\\n2*3=6  3*3=9\\n2*4=8  3*4=12  4*4=16\\n"', () => {
		expect(getMultiplyTable(2, 4)).toBe(expected_output_1);
	});

	it ('Given start number as 1 and end number as 5 when pass to getMultiplyTable(), then return string "1*1=1\\n1*2=2  2*2=4\\n1*3=3  2*3=6   3*3=9\\n1*4=4  2*4=8  3*4=12  4*4=16\\n1*5=5  2*5=10  3*5=15  4*5=20  5*5=25\\n"', () => {
		expect(getMultiplyTable(1, 5)).toBe(expected_output_2);
	});

	it ('Given start number as 5 and end number as 2 number when pass to getMultiplyTable(), then return null', () => {
		expect(getMultiplyTable(5, 2)).toBe(null);
	});

	it ('Given start number as null and end number as valid number when pass to getMultiplyTable(), then return null', () => {
		expect(getMultiplyTable(null, 5)).toBe(null);
	});

	it ('Given start number as valid number and end number as null when pass to getMultiplyTable(), then return null', () => {
		expect(getMultiplyTable(3, null)).toBe(null);
	});

	it ('Given start number as null and end number as null when pass to getMultiplyTable(), then return null', () => {
		expect(getMultiplyTable(null, null)).toBe(null);
	});
});