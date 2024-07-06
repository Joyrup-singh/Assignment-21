// Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not
// only checks if there is a match but also extracts specific parts of the matched text using groups. Test the
// function with patterns that include groups to capture different parts of a date (e.g., day, month, and year)
// from a given string.


function extractGroups(pattern, str) {
    const regex = new RegExp(pattern);
    const match = str.match(regex);
    
    if (match) {
        return match.groups || match.slice(1);
    } else {
        return null;
    }
}

// Testing the function with patterns that include groups
const testCases = [
    { pattern: '(\\d{2})-(\\d{2})-(\\d{4})', str: 'Today is 05-07-2024', description: 'Date in DD-MM-YYYY format' },
    { pattern: '(\\d{4})/(\\d{2})/(\\d{2})', str: 'The event is on 2024/07/05', description: 'Date in YYYY/MM/DD format' },
    { pattern: '(\\w+) (\\d{2}), (\\d{4})', str: 'Independence Day is July 04, 2024', description: 'Date in Month DD, YYYY format' },
];

testCases.forEach(test => {
    const result = extractGroups(test.pattern, test.str);
    console.log(`Pattern: ${test.pattern}, Description: ${test.description}, String: "${test.str}" => Groups: ${result}`);
});