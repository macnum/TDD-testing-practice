import reverseString from './reverseString';

describe('Checks The length of the word when reversed', () => {
	test('length should be the same', () => {
		expect(reverseString('forty')).toHaveLength(5);
	});

	test('length should be the same', () => {
		expect(reverseString('Yours faithfully')).toHaveLength(16);
	});
	test('length should be the same even with pad spaces at each sides', () => {
		expect(reverseString(' Iron man ')).toHaveLength(8);
	});
});

describe(
	'reverses the string',
	() =>
		test('Expects "thinking" should be gniknihT', () => {
			expect(reverseString('Thinking')).toBe('gniknihT');
		}),

	test('Expects Pneumonoultramicroscopicsilicovolcanoconiosis should be sisoinoconaclovociliscipocsorcimartluonomuenP in reverse ', () => {
		expect(
			reverseString('Pneumonoultramicroscopicsilicovolcanoconiosis'),
		).toBe('sisoinoconaclovociliscipocsorcimartluonomuenP');
	}),
);
