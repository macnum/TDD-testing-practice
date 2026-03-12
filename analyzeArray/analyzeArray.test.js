import analyzeArray from './analyzeArray';

describe('Returns average, min ,max ,length', () => {
	test('Expect the average number of the array', () => {
		expect(analyzeArray([2, 3, 4, 1, 5, 7, 3, 7])).toMatchObject({
			average: 4,
		});
	});

	test('Expect minimum number of the array', () => {
		expect(analyzeArray([2, 3, 4, 1, 5, 7, 3, 7])).toMatchObject({
			min: 1,
		});
	});

	test('Expect maximum number of the array', () => {
		expect(analyzeArray([2, 3, 4, 1, 5, 7, 3, 7])).toMatchObject({
			max: 7,
		});
	});

	test('Expect the length of the array', () => {
		expect(analyzeArray([9, 3, 5, 3, 5, 2, 3, 7])).toMatchObject({
			length: 8,
		});
	});

	test('Expect the average of the array, min number of array, max number of array , length', () => {
		expect(analyzeArray([5, 6, 7])).toEqual({
			average: 6,
			min: 5,
			max: 7,
			length: 3,
		});
	});
});
