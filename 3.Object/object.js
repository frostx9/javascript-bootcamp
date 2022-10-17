// Object are collection of property. It is a key : value pair . Dont need order
// We acess object with key
// All keys are converted to string
// {...}  - this is object litterals

// Creating Object

const fitbitData = {
  totalSteps: 8456,
  totalMiles: 7.8,
};

const number = {
  100: "One Hendred",
  50: "Fifty",
};

console.log(fitbitData);

// Acess Data

console.log(fitbitData.totalSteps);
console.log(number[100]);

// Update Property
fitbitData.totalSteps = 9586;
console.log(fitbitData);

// Add Property
fitbitData.totalCal = 125; // New Property
console.log(fitbitData);


const person = {

}
person.name = "Saumya"

/*
it assigning

const person = {
name : "Saumya"
}

*/

// Object Freeze

Object.freeze() //This change any object muteable to im-muteable 