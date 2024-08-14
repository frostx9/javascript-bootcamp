const numer1 = "33"

// String to Number Conversion
console.log(Number(numer1));

/*
 Example =
 "33" => 33
 "33abc" => NaN
 true => 1
 false => 0
*/


// Boolean Conversion
const isAdmin = 1
const conversionInBoolean = Boolean(isAdmin)
console.log(conversionInBoolean) // true


// Empty String and Not Empty String Check with Boolean

const emptyString = ""
console.log(Boolean(emptyString)) // False. This have No Value. But If it has space then it will retrun true.
//Becaus Sapce instead a value

const notEmptyString = "Hello"
console.log(Boolean(notEmptyString)) // True. This Have Value

// Conversion

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32

/**
 * Because its follow the Ecamascript Guide from Rule ToPrimitive(input, [preferredType])
 *
 * ToPrimitive - Convert To Prefered Type. If there is String First. It Convert Everything To String
 * if Number First. First it all number will be evaluate then it attach to String
 *
 * ex : 1 + 2 + "2"
 *
 * Fist 1 + 2 = 3
 * Second 3 + "2" = 32
 */

// Prefix & Postfix 