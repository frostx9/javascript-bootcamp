let Number = [1, 2, 3, 4, 5, 6]; // Create Array
console.log(Number);
let Number1 = [10, 11, 12, 13, 14, 15];
console.log(Number1);

console.log(Number.length); //To find Length of the array. Ans will be 6

console.log(Number.length - 1); // To find highest index number in any array

console.log(Number[1]); // Grab value in Array through index Ans will be 2. Array index start from 0

Number[1] = 9; // Array Update in index postion 1 . Ans will be [ 1, 9, 3, 4, 5, 6 ]
console.log(Number);

Number[Number.length] = 11; // Always add last postion in any unknown length array ... Not Ideal..Use Push insted

Number.pop(); // Reamvoe element from last postion of array. Ans will be [ 1, 9, 3, 4, 5 ]. Removed  6 from last postion
console.log(Number);

Number.push(10); // Add ellemt from the last postion of array. Ans will be [ 1, 9, 3, 4, 5, 10 ]. Added 10 in last postion
console.log(Number);

Number.shift();
console.log(Number); // Remove first element from the array.Ans will be [ 9, 3, 4, 5, 10 ] . Removed 1 from fast postion of Number Array

Number.unshift(1);
console.log(Number); // Add first element from the array.Ans will be [ 9, 3, 4, 5, 10 ] . Removed 1 from fast postion of Number Array

console.log(Number.concat(Number1)); // Add Toghter in Array...Ans will be  [1,9,3,4,5,6,10,10,11,12,13,14,15]

console.log(Number.includes(1)); // includes return boolean ... True or false

console.log(Number.indexOf(3)); // Return index value of any element of array..Ans will be 2

console.log(Number.indexOf(" ")); // to find any space is presnt or not...if there is not any space or any value its return -1

console.log(Number.reverse()); // Reverse array

console.log(Number.join("-")); // Join Array make into a string

console.log(Number);
const new1 = Number.slice(0, 2); // Return new array.. Slice also use to create copy of array.. 0 is included and 2 is excluded
console.log(new1);

console.log(Number);
const new2 = Number.splice(1, 1); // Splice basically return empty array...but if u delete something , delete item retuen new array
// first argument is starting index number, 2nd arguemnt is How many want item delete after starting index number
const new3 = Number.splice(5, 0, 16)
// Here it says that start from index 5 , delete nothing , add 16 after index 5 item .... [10, 11, 12, 13, 14, 15, 16]
console.log(Number);
console.log(new2);

// Slice Dont manuplualte Original Array, but Splide Manipualte Orignal Array

// Another Method For Concat Using Spread Operator
console.log([...Number, ...Number1])

// Array Flat
const anotherArray = [1, 2, [3, 4, [5, 6]], 7]
console.log(anotherArray.flat(Infinity)) // Infinity mean most deap part of the array

// To Check Array or not
console.log(Array.isArray(anotherArray));

// Create Array Set Of Elements
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

Array.from() // It will convert to array
