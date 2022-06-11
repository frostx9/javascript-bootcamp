let Number = [1, 2, 3, 4, 5, 6]; // Create Array
let Number1 = [10, 11, 12, 13, 14, 15];
console.log(Number);

console.log(Number.length); // To find Length of the array

console.log(Number[1]); // Grab value in Array through index

Number[1] = 9; // Array Update
console.log(Number);

Number.pop(); // Reamvoe array from the last
console.log(Number);

Number.push(10); // Add array from the last
console.log(Number);

Number.shift();
console.log(Number); // Remove first from the array

Number.unshift(1);
console.log(Number); // Add first from the array

console.log(Number.concat(Number1)); // Add Toghter in Array

console.log(Number.includes(1)); // includes return boolean ... True or false

console.log(Number.indexOf(3)); // Return index value

console.log(Number.indexOf(" ")); // to find any space is presnt or not...if there is not any space or any value its return -1

console.log(Number.reverse()); // Reverse array

console.log(Number.join()); // Join Array make into a string

console.log(Number);
const new1 = Number.slice(0, 2); // return new array
console.log(new1);

console.log(Number);
const new2 = Number.splice(1, 1, 6); // Splice return on delete items in new array
console.log(Number);
console.log(new2);
