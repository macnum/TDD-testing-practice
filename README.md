# TDD Practice – JavaScript

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Tested with Jest](https://img.shields.io/badge/Tested%20With-Jest-red)
![Status](https://img.shields.io/badge/Project-Completed-green)

This project is part of my learning journey through **The Odin Project**.  
The goal of this exercise was to practice **Test Driven Development (TDD)** using **Jest**.

I wrote tests first and then implemented the functionality to make the tests pass.

---

# 📚 Features

This project implements and tests the following JavaScript functions:

- Capitalize
- Reverse String
- Calculator
- Caesar Cipher
- Analyze Array

---

# 🧠 Functions

## Capitalize

Returns a string with the **first letter capitalized**.

```javascript
capitalize('hello');
// "Hello"
```

---

## Reverse String

Returns the **reversed version** of a string.

```javascript
reverseString('hello');
// "olleh"
```

---

## Calculator

A calculator object that performs basic math operations.

Functions included:

- add
- subtract
- divide
- multiply

```javascript
calculator.multiply(4, 5);
// 20
```

---

## Caesar Cipher

Encrypts a string by shifting letters in the alphabet.

Features:

- Alphabet wrapping (`z → a`)
- Preserves letter casing
- Leaves punctuation unchanged

```javascript
caesarCipher('xyz', 3);
// "abc"
```

Example:

```javascript
caesarCipher('Hello, World!', 3);
// "Khoor, Zruog!"
```

---

## Analyze Array

Analyzes an array of numbers and returns an object containing:

- average
- min
- max
- length

```javascript
analyzeArray([1, 2, 3, 4, 5]);

// Output
{
  average: 3,
  min: 1,
  max: 5,
  length: 5
}
```

---

# 🧪 Running Tests

This project uses **Jest** for testing.

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

Example test:

```javascript
test('capitalize first letter', () => {
	expect(capitalize('hello')).toBe('Hello');
});
```

# 🎯 What I Learned

Through this project I learned:

- How **Test Driven Development (TDD)** works
- Writing **unit tests with Jest**
- Thinking about **edge cases**
- Structuring JavaScript functions for **testability**
- Breaking problems into smaller pieces

---

# 🚀 Future Improvements

- Increase test coverage
- Add more edge case testing
- Refactor helper functions
- Add CI testing

---

# 👨‍💻 Author

Part of my **#100DaysOfCode** and **The Odin Project JavaScript curriculum**.
