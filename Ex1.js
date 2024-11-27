// פהמי והבי + מאור דוד

'use strict'

const number = 123;

// Check if the number is divisible by 2
let two = number % 2 == 0;
// Check if the number is divisible by 3
let three = number % 3 == 0;
// Check if the number is divisible by 5
let five = number % 5 == 0;

// Convert the boolean values to 1 or 0 using Number(), and sum them
// If the number is divisible by 2, 3, or 5, it adds 1 to the sum; otherwise, it adds 0
console.log(Number(two) + Number(three) + Number(five));
