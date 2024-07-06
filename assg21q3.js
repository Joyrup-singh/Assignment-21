// Write a JavaScript program that demonstrates the use of character classes in regular expressions.
// Create a function that searches for specific character classes in a given string and returns the matches. Test
// the function with patterns for digits, uppercase letters, lowercase letters, and special characters.


function findMatches(pattern, str) {
    const regex = new RegExp(pattern, 'g'); // 'g' flag for global search
    return str.match(regex) || [];
}

// Testing the function with various character classes
const testCases = [
    { pattern: '\\d', str: 'Hello123', description: 'Digits' },
    { pattern: '[A-Z]', str: 'Hello123', description: 'Uppercase letters' },
    { pattern: '[a-z]', str: 'Hello123', description: 'Lowercase letters' },
    { pattern: '[^a-zA-Z0-9]', str: 'Hello@123!', description: 'Special characters' },
];

testCases.forEach(test => {
    const matches = findMatches(test.pattern, test.str);
    console.log(`Pattern: ${test.pattern}, Description: ${test.description}, String: "${test.str}" => Matches: ${matches}`);
});