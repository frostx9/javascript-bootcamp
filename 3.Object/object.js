// Object are collection of property. It is a key : value pair . Dont need order
// We acess object with key
// All keys are converted to string
// {...}  - this is object litterals

// Creating Object - Object Litteral

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

// Object With Symbol

const mySym = Symbol("key1")

const symObj = {
  [mySym]: "myKey1"
}

console.log(symObj[mySym]);


// Object Create - singleton
const myNewObj = new Object()

// Combine Multipale Object
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

const obj3 = Object.assign({}, obj1, obj2) // Ans = { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

/**
 * Object.assign(target, Source)
 * {} => marge all source to this target
 */


// Anothe Way  With Spread Operator
const obj4 = { ...obj1, ...obj2 }

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

console.log(obj1.hasOwnProperty("1")) // true
console.log(obj1.hasOwnProperty("4")) // false

// Object Destructure

const obj5 = {
  fullName: "Apex Legend"
}

const { fullName: name } = obj5  // We Can give also name of the property

console.log(name) // Apex Legend

// To Check Object is Empty or Not

const emptObj = {}

if (Object.keys(emptObj).length === 0) {
  console.log("Empty Object");
}