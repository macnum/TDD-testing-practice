import capitalize from './capitalize';

describe('The letter should start with a capitalized word and the rest lowercase', () => {
	test('First letter should be a capital letter', () =>
		expect(capitalize('your name is john!')).toBe('Your name is john!'));
});
describe('The first letter should be an uppercase and the rest lowercase', () => {
	test('All letters, apart form the first should be lowerCase', () =>
		expect(capitalize('your Name iS JOHn!')).toBe('Your name is john!'));
});
describe('If no word is defined an empty string should be the output', () => {
	test('Should be an empty string', () => expect(capitalize('')).toBe(''));
});
