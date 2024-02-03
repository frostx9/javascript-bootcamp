let example = 10.55;
let example1 = new Number(-10.250) // This will Asure it wil be Number
let example2 = new Number(100000000)

// To Fixed Precession value
console.log(example1.toFixed(1));

// To make any number to round
console.log(Math.round(example)); // Ans = 11.

// To Make a number postive
console.log(Math.abs(example1)); // Ans = 10.25

// To make floor number. Delete decimal number. Take Lower Number
console.log("Floor", Math.floor(example)); // Ans =10

//  Take Higher Number
console.log("Ceil", Math.ceil(example)); // Ans =10

// Power any numer
console.log(Math.pow(2, 2)); // Ans = 4

//Random Number
console.log(Math.random()); // Return random number between 0 and 1

// Create Random Bewwenn 1 to 10
let raondomNumber = Math.floor(Math.random() * 10) + 1;
console.log(raondomNumber);

// Create Random Bewwenn Any Range
const min = 10
const max = 20

const raondomNumber1 = Math.floor(Math.random() * (max - min + 1) + min)
console.log("Any Range", raondomNumber1);

// String to Number
parseInt(); // String to Number
parseFloat(); // String to Float Number

// To Format The Long Value
console.log(example2.toLocaleString("en-IN"));