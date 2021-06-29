const countOddNumbers = require("../src/countOddNumbers.js");
const assertEqual = require("../src/test-framework.js");

let input,expectedOutput, actualOutput, result

// Setup 
input = [1,3,5,7,8];
expectedOutput = 4;
// Exercise 
actualOutput = countOddNumbers(input);
// Verify
console.log(assertEqual(expectedOutput,actualOutput)); 

// Setup 
input = [1,3,5,7,8,7,6];
expectedOutput = 5;
// Exercise 
actualOutput = countOddNumbers(input);
// Verify
console.log(assertEqual(expectedOutput,actualOutput)); 

// Setup 
input = [2,4,6,8];
expectedOutput = 0;
// Exercise 
actualOutput = countOddNumbers(input);
// Verify
console.log(assertEqual(expectedOutput,actualOutput)); 
