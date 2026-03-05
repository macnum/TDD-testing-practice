import { sum, subtract, divide, multiply } from './calculator';

describe(
	'Add two number',
	() => test('Adds two numbers', () => expect(sum(5, 4)).toEqual(9)),
	test('Adds two large numbers', () => expect(sum(10000, 4)).toEqual(10004)),
);

describe(
	'subtract two number',
	() => test('Works on two numbers', () => expect(subtract(7, 2)).toEqual(5)),
	test('Subtracts a large from a small number', () =>
		expect(subtract(2, 4)).toEqual(-2)),
);

describe(
	'multiply two number',
	() =>
		test('works on two numbers', () => expect(multiply(8, 2)).toEqual(16)),
	test('works on a large number', () =>
		expect(multiply(200, 8000)).toEqual(1600000)),
	test('works on numbers of mixed signs', () =>
		expect(multiply(2, -6)).toEqual(-12)),
);

describe(
	'Divide two number',
	() => test('Works on two numbers', () => expect(divide(8, 4)).toEqual(2)),
	test('Works on large numbers', () => expect(divide(4000, 100)).toEqual(40)),
	test('divides small number by a large one', () =>
		expect(divide(80, 1000)).toEqual(0.08)),
);
