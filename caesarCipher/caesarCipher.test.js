import caesarCipher from './caesarCipher';

describe('Check for a string and a shift factor and returns a string with each character shifted', () => {
	test('Check for shift factor', () =>
		expect(caesarCipher('abc', 3)).toEqual('def'));

	test('Check for shift factor', () =>
		expect(caesarCipher('xyz', 3)).toEqual('abc'));

	test('Check for negative shift factor', () =>
		expect(caesarCipher('abc', -3)).toEqual('xyz'));

	test('Check for Punctuation, spaces, and other non-alphabetical characters ', () =>
		expect(caesarCipher('hello, world!', 3)).toEqual('khoor, zruog!'));

	test('Check for case preservation', () =>
		expect(caesarCipher('HeLLo', 3)).toEqual('KhOOr'));

	test('Check for Punctuation, spaces, and other non-alphabetical characters  and case preservation ', () =>
		expect(caesarCipher('Hello, World!', 3)).toEqual('Khoor, Zruog!'));
});
