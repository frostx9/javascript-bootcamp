// Operator Preference

const leftToRight = " !-> && -> !!";
// from left is high priority

// Switch Statement

const day = 2;

switch (day) {   // Number
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Thursday");
    break;
  default:
    console.log("Default match");
}

switch (day) {   // String
  case "mon":
    console.log("Monday");
    break;
  case "tue":
    console.log("Tuesday");
    break;
  case "thu":
    console.log("Thursday");
    break;
  default:
    console.log("Default match");
}

// Ternary Operator
("? :"); // ?..mean is if .... and  : mean is else
// Condtion ? true : false

const num = 2;
num === 7 ? console.log("Lucky") : console.log("Bad");

const chat = "offline";
chat === "offline" ? console.log("red") : console.log("Green");

// Truthy And Falsy Value

const value = "abc@gmail.com"

if (value) {  // We Asume value is truthy /  Have Value
  console.log(value);
} else {
  console.log("Mo Value");
}

/**
 * Falsey Value = 0, -0, "", null, undefined, null, BigInt 0n
 * 
 * Truthy Value = [], {}, function() / Empty Fucntion, 
 */

// Empty Object Check
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
  console.log("Empty Object");
}

// Nullish Coalescing Operator (??) -> Work only on null or undefined
let val1
val1 = null ?? 10  // If Data is will null and val will be print 10.
// It wrok as a default value