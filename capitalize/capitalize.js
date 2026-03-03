export default function capitalize(word) {
	if (word.length < 1) return '';
	const firstLetter = word.split('').at(0).toUpperCase();
	const remainingLetters = word.slice(1).toLowerCase();
	return firstLetter + remainingLetters;
}
