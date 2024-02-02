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