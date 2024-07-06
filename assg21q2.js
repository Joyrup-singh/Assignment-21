// Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
// that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
// the function with various patterns and strings.

function matchPattern(pattern, str) {
    const regex = new RegExp(pattern);
    return regex.test(str);
}

// Testing the function with various patterns and strings
const tests = [
    { pattern: 'hello', str: 'hello world', expected: true },
    { pattern: '^hello', str: 'hello world', expected: true },
    { pattern: 'world$', str: 'hello world', expected: true },
    { pattern: 'hello$', str: 'hello world', expected: false },
    { pattern: 'w.rld', str: 'hello world', expected: true },
    { pattern: '\\d+', str: 'There are 123 apples', expected: true },
    { pattern: '\\d+', str: 'There are apples', expected: false },
    { pattern: 'apple', str: 'There are 123 apples', expected: true },
    { pattern: 'apple', str: 'There are oranges', expected: false },
];

tests.forEach(test => {
    const result = matchPattern(test.pattern, test.str);
    console.log(`Pattern: ${test.pattern}, String: "${test.str}" => Match: ${result}, Expected: ${test.expected}`);
});