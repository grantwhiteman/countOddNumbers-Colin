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
